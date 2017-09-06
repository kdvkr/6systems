module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'src/css/bootstrap.css': 'src/sass/bootstrap.scss',
                    'src/css/style.css': 'src/sass/style.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'dist/css/bootstrap.min.css': 'src/css/bootstrap.css',
                    'dist/css/style.min.css': 'src/css/style.css'
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'node_modules/jquery/dist/',
                src: 'jquery.min.js',
                dest: 'dist/libs'
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            build: {
                src: 'src/js/main.js',
                dest: 'dist/js/main.min.js'
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default tasks
    grunt.registerTask('default', ['copy', 'uglify', 'sass', 'cssmin']);

};
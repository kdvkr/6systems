$(window).load(function() {
    var currentIndex = 0,
        slides = $('.slider-slide'),
        slidesAmount = slides.length,
        controlPrev = $('#controlLeft'),
        controlNext = $('#controlRight');

    slides.first().show();

    controlPrev.on('click', function() {
        currentIndex -= 1;

        if(currentIndex < 0) {
            currentIndex = (slidesAmount - 1);
        }

        changeSlide();
    });

    controlNext.on('click', function() {
        currentIndex += 1;

        if(currentIndex > (slidesAmount - 1)) {
            currentIndex = 0;
        }

        changeSlide();
    });

    /**
     * Change slide
     */
    function changeSlide() {
        var activeSlide = slides.eq(currentIndex);

        slides.fadeOut();

        setTimeout(function() {
            activeSlide.fadeIn();
        }, 400);
    }
});
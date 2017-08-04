/**
 * Created by mariosallat on 03.08.17.
 */
jQuery(document).ready(function($) {
    // $('.bxslider').bxSlider({
    //     video: true,
    //     useCSS: false
    // });

    var $slider = $('.bxslider').bxSlider({
        // pager: false,
        auto: true,
        video: true,
        // useCSS: false,
        autoControls: false,
        mode: 'horizontal',
        pager: false,
        speed: 1500,
        pause: 5000,
        preventDefaultSwipeY: false,
        easing: 'ease-out',
        infiniteLoop: true
    });

    $('.bx-prev, .bx-next').click(function () {
        $slider.stopAuto();
        // slider.startAuto();
    });


});
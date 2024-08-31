jQuery(document).ready(function() {

    if (jQuery('#instagallery-enable').length && jQuery('#instagallery-slider').length) {
        var htInstaEnable = jQuery('#instagallery-enable').html();
        var htInstaSliderEnable = jQuery('#instagallery-slider').html();
        if (htInstaEnable == 1 && htInstaSliderEnable == 1) {
            var htInstaDots = jQuery('#instagallery-dots').html();
            var htInstaNavBtns = jQuery('#instagallery-navbtns').html();
            var htInstaAutoplay = jQuery('#instagallery-autoplay').html();

            if (htInstaDots == 1) {
                htInstaDots = true;
            } else {
                htInstaDots = false;
            }
            if (htInstaNavBtns == 1) {
                htInstaNavBtns = true;
            } else {
                htInstaNavBtns = false;
            }
            if (htInstaAutoplay == 1) {
                htInstaAutoplay = true;
            } else {
                htInstaAutoplay = false;
            }
            jQuery("#insta-gallery").owlCarousel({
                items: 6,
                itemsDesktop: [1199, 6],
                itemsDesktopSmall: [991, 5],
                itemsTablet: [767, 4],
                itemsTabletSmall: [639, 3],
                itemsMobile: [479, 2],
                pagination: htInstaDots,
                navigationText: ["<div class='prev-arrow'><i class='material-icons'>chevron_left</i></div>", "<div class='next-arrow'><i class='material-icons'>chevron_right</i></div>"],
                navigation: htInstaNavBtns,
                autoPlay: htInstaAutoplay,
            });
            jQuery("#insta-gallery .item").show();
        }
    }
});
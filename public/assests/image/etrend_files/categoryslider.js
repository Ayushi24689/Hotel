jQuery(document).ready(function() {
    if (jQuery('#catslider-enable').length && jQuery('#catslider-slider').length) {
        var htInstaEnable = jQuery('#catslider-enable').html();
        var htInstaSliderEnable = jQuery('#catslider-slider').html();
        if (htInstaEnable == 1 && htInstaSliderEnable == 1) {
            var htInstaDots = jQuery('#catslider-dots').html();
            var htInstaNavBtns = jQuery('#catslider-navbtns').html();
            var htInstaAutoplay = jQuery('#catslider-autoplay').html();

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
            jQuery("#ht-category-slider-one").owlCarousel({
                items: 6,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [991, 4],
                itemsTablet: [767, 3],
                itemsTabletSmall: [639, 3],
                itemsMobile: [479, 2],
                pagination: htInstaDots,
                navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></i></div>"],
                navigation: htInstaNavBtns,
                autoPlay: htInstaAutoplay,
            });
            jQuery("#ht-category-slider-one .item").show();
            jQuery("#ht-category-slider-two").owlCarousel({
                items: 6,
                itemsDesktop: [1199, 5],
                itemsDesktopSmall: [991, 4],
                itemsTablet: [767, 3],
                itemsTabletSmall: [639, 3],
                itemsMobile: [479, 2],
                pagination: htInstaDots,
                navigationText: ["<div class='prev-arrow'><i class='fa fa-angle-left'></i></div>", "<div class='next-arrow'><i class='fa fa-angle-right'></i></div>"],
                navigation: htInstaNavBtns,
                autoPlay: htInstaAutoplay,
            });
            jQuery("#ht-category-slider-two .item").show();
        }
    }
});
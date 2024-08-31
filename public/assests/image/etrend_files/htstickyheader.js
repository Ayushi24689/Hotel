jQuery(document).ready(function() {
    if (jQuery('body#checkout').length == 0) {
        var win_width = jQuery(window).width();
        if (win_width > 767) {
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 250) {
                    jQuery('#header').addClass("ht-menu-sticy");
                    jQuery('html body').addClass("nav-sticy");
                } else {
                    jQuery('#header').removeClass("ht-menu-sticy");
                    jQuery('html body').removeClass("nav-sticy");
                }
            });
        }
    }
});
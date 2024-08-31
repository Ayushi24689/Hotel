jQuery(document).ready(function() {
    if (jQuery('#ht-sticky-enable').length) {

        var screenmove = false;
        jQuery(window).scroll(function() {
            if (450 < jQuery(window).scrollTop() && !screenmove) {
                screenmove = true;
                jQuery(".sticky-wrapper").removeClass("remove");
            }
            if (450 >= jQuery(window).scrollTop() && screenmove) {
                screenmove = false;
                jQuery(".sticky-wrapper").addClass("remove");
            }
        });

        jQuery("#ht-stickycart-btn").click(function() {
            jQuery(".btn-primary.add-to-cart").trigger("click");
        });

        if (jQuery('#ht-sticky-countdown-enddate').length) {
            var timerFormat = '<div class="timer-wrapper"><div class="time">%D</div><span class="text">Days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">Hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Sec</span></div>';
            var countdownEndDate = jQuery('#ht-sticky-countdown-enddate').html();
            var myDate = new Date(countdownEndDate.replace(/-/g, '/'));
            jQuery("#ht-countdown-sticky-timer").countdown(myDate, function(event) {
                jQuery(this).html(
                        event.strftime(
                                timerFormat
                                )
                        );
            });
        }
    }
});
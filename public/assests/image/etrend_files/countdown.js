jQuery(document).ready(function() {
    if (jQuery('#ht-countdown-enddate').length) {
        var timerFormat = '<div class="timer-wrapper"><div class="time">%D</div><span class="text">Days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">Hrs</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">Mins</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">Sec</span></div>';
        var countdownEndDate = jQuery('#ht-countdown-enddate').html();
        var myDate = new Date(countdownEndDate.replace(/-/g, '/'));
        jQuery("#ht-countdown-timer").countdown(myDate, function(event) {
            jQuery(this).html(
                    event.strftime(
                            timerFormat
                            )
                    );
        });
    }
});
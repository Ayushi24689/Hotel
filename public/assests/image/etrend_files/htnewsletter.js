jQuery(document).ready(function () {
    var htnsenabled = jQuery('#ht-newsletter-popup-enable').length;
    if (htnsenabled > 0) {
        var htnewsletterval = jQuery('#ht-newsletter-popup-enable').html();
        if (htnewsletterval == '1') {
            var check_cookie = getCookie('newsletter_popup');
            if (check_cookie == null || check_cookie == 'shown') {
                setTimeout(function () {
                    popupNewsletter();
                }, NEWSPOPUP_DELAY);
            }
            jQuery('#newsletter-popup .newsletter-bottom input').on('click', function () {
                if (jQuery(this).parent().find('input:checked').length) {
                    var check_cookie = getCookie('newsletter_popup');
                    if (check_cookie == null || check_cookie == 'shown') {
                        document.cookie = "newsletter_popup=dontshowitagain";
                    } else
                    {
                        document.cookie = "newsletter_popup=shown";
                        popupNewsletter();
                    }
                } else {
                    document.cookie = "newsletter_popup=shown";
                }
            });
            jQuery('.ht_newsletter_errors').hide();
            jQuery('.ht_newsletter_success').hide();

            jQuery('.htnewsletter_form').on('submit', function () {
                jQuery('.ht_newsletter_errors').hide();
                jQuery('.ht_newsletter_success').hide();
                jQuery('.ht_newsletter_errors').empty();
                jQuery('.ht_newsletter_success').empty();
                jQuery('.ht_newsletter_email').removeClass('act');
                jQuery.ajax({
                    type: 'POST',
                    url: ht_newsletter_url + '?ajax=1&rand=' + new Date().getTime(),
                    async: true,
                    cache: false,
                    dataType: "json",
                    data: jQuery(this).serialize(),
                    success: function (data) {
                        if (data['success'] == 1) {
                            jQuery('.ht_newsletter_success').hide();
                            jQuery('.ht_newsletter_errors').show();
                            jQuery('.ht_newsletter_errors').append(data.error);
                            jQuery('.ht_newsletter_email').addClass('act');
                        }

                        if (data['success'] == 0) {
                            jQuery('.ht_newsletter_errors').hide();
                            jQuery('.ht_newsletter_email').removeClass('act');
                            jQuery('.ht_newsletter_success').show();
                            jQuery('.ht_newsletter_success').append(data.error);
                        }

                        if (data['success'] == 3) {
                            jQuery('.ht_newsletter_email').addClass('act');
                            jQuery('.ht_newsletter_success').hide();
                            jQuery('.ht_newsletter_errors').show();
                            jQuery('.ht_newsletter_errors').append(data.error);
                        }
                    }
                });

                return false;
            });
        }
    }
});
function popupNewsletter() {
    jQuery.fancybox({
        padding: 0,
        'href': '#newsletter-popup'
    });
    jQuery('#newsletter-popup').trigger('click');
    jQuery('#newsletter-popup').parents('#fancybox-wrap').addClass('popup-fancy');
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) {
        return parts.pop().split(";").shift();
    }
}
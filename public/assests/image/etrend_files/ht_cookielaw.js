jQuery(document).ready(function() {
    jQuery("#ht_cookielaw").addClass('active');
    jQuery("#ht_cookielaw_confirm").click(function(event) {
        event.preventDefault();
        jQuery("#ht_cookielaw").removeClass('active');
        setCustomCookie();
    });
});

function setCustomCookie() {
    var name = 'ht_cookielaw_cookie';
    var value = '1';
    var expire = new Date();
    expire.setMonth(expire.getMonth() + 12);
    document.cookie = name + "=" + escape(value) + ";path=/;" + ((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
}

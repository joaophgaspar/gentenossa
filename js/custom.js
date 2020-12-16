$(document).ready(function() {
    $('.current_year').html(new Date().getFullYear())

    // mobile
    var mobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true
    }

    if (mobile) {
        $("h1").css("font-size", "1.2rem");
        $(".social_mobile").show();
    }
});
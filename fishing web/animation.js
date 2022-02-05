//autowrite
var typed = new Typed(".auto-input", {
        strings: ["in the best gamers store"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    })
    //navbar
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('nav').addClass('affix');
        console.log("OK");
    } else {
        $('nav').removeClass('affix');
    }
});
//back to top
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(this).scrollTop() > 40) {
            $("#back-to-top").fadeIn();
        } else {
            $("#back-to-top").fadeOut();
        }
    });

    $("#back-to-top").click(function() {
        $('html ,body').animate({ scrollTop: 0 }, 300);
    });
});
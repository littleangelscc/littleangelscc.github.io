$("#contact_button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#more_button").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#nav-home").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#home").offset().top - 60
    }, 1000);
});

$("#nav-about").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#about").offset().top - 60
    }, 1000);
});

$("#nav-cert").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#certificates").offset().top - 60
    }, 1000);
});

$("#nav-pic").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#pictures").offset().top - 60
    }, 1000);
});

$("#nav-contact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact").offset().top - 60
    }, 1000);
});
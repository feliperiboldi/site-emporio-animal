let $doc = $('html, body');
$('.nav-link').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

if($(window).width() > 991) {
	$('.img-banner').height($(window).height() - 56);
    $(window).resize(function () {
        $('.img-banner').height($(window).height() - 56);
    });
    } else {
    $('.img-banner').height($(window).height() - 56);
    $(window).resize(function () {
        $('.img-banner').height($(window).height() - 56);
    });
}

new WOW().init();

if($(window).width() < 992) {
    $('.wow').removeClass('wow');
}

if($(window).width() > 991) {
    $('.erro-404').height($(window).height());
    $(window).resize(function () {
        $('.erro-404').height($(window).height());
    });
    } else {
    $('.erro-404').height($(window).height());
    $(window).resize(function () {
        $('.erro-404').height($(window).height());
    });
}
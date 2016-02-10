// var exceptions = $('.login__container');

// exceptions.click(function(e){
//     e.preventDefault();
//     return false;
// });
$('.deliverable .deliverable__tag').each(function() {
    var filter = $(this).text().toLowerCase();
    $(this).parent().parent().parent().addClass(filter);
});

$('.deliverable__bucket').each(function() {
    var bucketClass = $(this).find('span').text().toLowerCase();
    var bucketClassUC = $(this).find('span').text().toUpperCase();
    $(this).addClass(bucketClass).parent().parent().parent().addClass(bucketClassUC);
});

$('.bucket').click(function() {
    var title = $(this).find('.bucket__name').text();
    var bucket = $(this).attr('class').replace('bucket ', '');

    if ($(this).hasClass('is-active')) {}

    else {
        $('.tag').hide();
        $('.tag.' + bucket).show();
        $('.tag a').parent().removeClass('is-active');
        $('.deliverable').removeClass('is-active').hide();
        $('.deliverable.' + bucket).show().addClass('is-active');
        $('.hero').removeClass().addClass('hero ' + title);
    }
    
    $('.bucket').removeClass('is-active');
    $(this).addClass('is-active');
    $('body').removeClass('nav-show').addClass('nav-hide');

});
$('.bucket.all').click(function() {
    $('.deliverable').addClass('is-active');
    $('.tag, .deliverable').show();
    $('.tag a').parent().removeClass('is-active');
});   

$('.tag a').click(function() {
    var tag = $(this).attr('class');
    if ($(this).parent().hasClass('is-active')) {
        $(this).parent().removeClass('is-active');
        $('.deliverable.is-active').show();
    }
    else {
        $('.tag a').parent().removeClass('is-active');
        $(this).parent().addClass('is-active');
        $('.deliverable').hide();
        $('.deliverable.is-active.' + tag).show();
    }
    $('body').removeClass('nav-show').addClass('nav-hide');
});

$('.burger').click(function() {
    if ($('body').hasClass('nav-hide')) {
        $('body').removeClass('nav-hide').addClass('nav-show');
    }
    else {
        $('body').removeClass('nav-show').addClass('nav-hide');
    }
});


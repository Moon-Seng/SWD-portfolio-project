let screenSize = screen.width;

// console.log(screenSize);
if(screenSize < 476){
    $('#slick').addClass('one-slick')
}else if(screenSize < 1000){
    // console.log('it is smaller than 1000')
    $('#slick').addClass('two-slick')
}else if(screenSize < 8000){
    // console.log('it is smaller than 1900')
    $('#slick').addClass('three-slick')
}

$('.three-slick').slick({
    infinite: true,
    dots :true,
    slidesToShow: 3,
    slidesToScroll: 3,
    mobileFirst:true,
    arrows:false,
});

$('.one-slick').slick({
    infinite: true,
    dots :true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst:true,
    arrows:false,
});

$('.two-slick').slick({
    infinite: true,
    dots :true,
    slidesToShow: 2,
    slidesToScroll: 2,
    mobileFirst:true,
    arrows:false,
});


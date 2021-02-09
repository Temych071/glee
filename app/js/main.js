$(function(){

  $('.slider-main').slick({
    arrows: false,
    dots: true,
  });

  $('.slider-partners').slick({
    arrows: false,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var products_mixer = mixitup('.products__content', {
    selectors: {
      control: '.filter-1',
    }
  });

  var design_mixer = mixitup('.design__content', {
    selectors: {
      control: '.filter-2',
    }
  });
  
});
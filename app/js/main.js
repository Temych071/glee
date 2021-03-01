$(function(){

  $('.slider-main').slick({
    arrows: false,
    dots: true,
  });

  let slides = 5;
  if(window.innerWidth < 1170 && window.innerWidth > 776) {
    slides = 4;
    window.reload;
  }
  else if (window.innerWidth < 776 && window.innerWidth > 556){
    slides = 3;
    window.reload;
  }
  else if (window.innerWidth < 556){
    slides = 1;
    window.reload;
  }
  console.log(window);
  console.log(window.innerWidth);
  console.log(slides);

  $('.slider-partners').slick({
    arrows: false,
    dots: false,
    slidesToShow: slides,
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
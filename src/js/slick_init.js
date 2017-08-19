$(document).ready(function(){
  $('.wrapper__top__slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: '<div class="prev"><span></span><span></span></div>',
	  nextArrow: '<div class="next"><span></span><span></span></div>',
	  asNavFor: '.wrapper__top__img-slider',
	  responsive: [
	    {
	      breakpoint: 1255,
	      settings: {
	      	arrows: false
	      }
	    }
      ]
	});
  $('.wrapper__top__img-slider').slick({
  	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  fade: true,
	  arrows: false,
	  asNavFor: '.wrapper__top__slider'
	});
	$('.wrapper__replies__inner__slider').slick({
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  dots: false,
	  arrows: false,
	  adaptiveHeight: true,
	  infinite: true,
	  responsive: [
	    {
	      breakpoint: 989,
	      settings: {
	      	slidesToShow: 1,
	      	slidesToScroll: 1
	      }
	    }
      ]
	});
});
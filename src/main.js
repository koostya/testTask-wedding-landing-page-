require('./css/style.scss');
require('./js/slick/slick.scss');
require('./js/slick/slick-theme.scss');
require('./js/slick_init.js');

var burger_but = document.querySelector('.header__burger'),
	burger_lines = document.querySelectorAll('.header__burger > span'),
	check = 3;

var mob_menu = document.querySelector('.header__mobile-menu');

burger_but.addEventListener('click', () => {
	check++;
	if(check%2 == 0){
		mob_menu.style.left = '0';
		burger_lines[0].style.transform = 'rotate(315deg)';
		burger_lines[0].style.top = '50%';
		burger_lines[1].style.width = '0';
		burger_lines[2].style.transform = 'rotate(-315deg)';
		burger_lines[2].style.top = '50%';
		burger_lines[0].style.backgroundColor = 'white';
		burger_lines[1].style.backgroundColor = 'white';
		burger_lines[2].style.backgroundColor = 'white';
	}else{
		mob_menu.style.left = '-100%';
		burger_lines[0].style.transform = 'rotate(0)';
		burger_lines[0].style.top = '0%';
		burger_lines[1].style.width = '100%';
		burger_lines[2].style.transform = 'rotate(0) translateY(-100%)';
		burger_lines[2].style.bottom = '0%';
		burger_lines[2].style.top = '100%';
		burger_lines[0].style.backgroundColor = '#85334a';
		burger_lines[1].style.backgroundColor = '#85334a';
		burger_lines[2].style.backgroundColor = '#85334a';
	}
});

$('.header__inner__menu').on('click', 'a', function(event){
	event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
});
$('.header__mobile-menu').on('click', 'a', function(event){
	event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    mob_menu.style.left = '-100%';
	burger_lines[0].style.transform = 'rotate(0)';
	burger_lines[0].style.top = '0%';
	burger_lines[1].style.width = '100%';
	burger_lines[2].style.transform = 'rotate(0) translateY(-100%)';
	burger_lines[2].style.bottom = '0%';
	burger_lines[2].style.top = '100%';
	burger_lines[0].style.backgroundColor = '#85334a';
	burger_lines[1].style.backgroundColor = '#85334a';
	burger_lines[2].style.backgroundColor = '#85334a';
	check++;
});


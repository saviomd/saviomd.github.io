/* eslint-disable no-use-before-define */
const saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.header = (function () {
	/*
	Toggle nav menu
	====================
	*/
	$('.js-btn-nav').on('click', function (e) {
		e.preventDefault();
		$(this).siblings('ul').toggleClass('active');
	});

	/*
	Animacao p/ scroll
	====================
	*/
	$('.header__nav-link').smoothScroll();
})();

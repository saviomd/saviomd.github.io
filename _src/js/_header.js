/* eslint-disable no-use-before-define */
var saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.header = (function () {
	/*
	toggle nav menu
	====================
	*/
	$('.js-btn-nav').on('click', function (e) {
		e.preventDefault();
		$(this).siblings('ul').toggleClass('active');
	});

	/*
	animacao p/ scroll
	====================
	*/
	$('.header__nav-link').smoothScroll();
})();

/* eslint-disable-next-line no-use-before-define */
const saviomd = saviomd || {};

saviomd.header = (() => {
	/*
	Toggle nav menu
	====================
	*/
	$('.js-btn-nav').on('click', (e) => {
		e.preventDefault();
		$(this).siblings('ul').toggleClass('active');
	});

	/*
	Animacao p/ scroll
	====================
	*/
	$('.header__nav-link').smoothScroll();
})();

/* eslint-disable-next-line no-use-before-define */
const saviomd = saviomd || {};

saviomd.header = (() => {
	/*
	Toggle nav menu
	====================
	*/
	$('.js-btn-nav').on('click', (e) => {
		e.preventDefault();
		$('.header__nav').toggleClass('active');
	});

	/*
	Animacao p/ scroll
	====================
	*/
	$('.header__nav-link').smoothScroll();
})();

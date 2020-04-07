const saviomd = saviomd || {};

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

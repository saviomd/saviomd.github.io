/* global ga */

var saviomd = saviomd || {};

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
	animacao p/ scroll e track de evento
	====================
	*/
	$('.header__nav-link').smoothScroll().on('click', function (e) {
		e.preventDefault();
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Cabeçalho', $(this).text());
		}
	});
})();

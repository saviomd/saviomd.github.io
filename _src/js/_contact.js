/* global ga */

var saviomd = saviomd || {};

saviomd.contact = (function () {
	/*
	exibir contato
	====================
	*/
	$('.js-link-contact').on('click', function (e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$('.js-close-contact').trigger('click');
		} else {
			$('.header').animate({marginTop: $('.contact').height()});
			$(this).addClass('active');
		}
	});

	/*
	fechar contato
	====================
	*/
	$('.js-close-contact').on('click', function (e) {
		e.preventDefault();
		$('.header').animate({marginTop: 0});
		$('.js-link-contact').removeClass('active');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Contato', 'Fechar');
		}
	});

	if (typeof ga !== 'undefined') {
		$('.contact__link').on('click', function () {
			ga('send', 'event', 'saviomd.com', 'Contato', 'Enviar email');
		});
	}
})();

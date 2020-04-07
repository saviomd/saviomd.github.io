const saviomd = saviomd || {};

saviomd.contact = (function () {
	/*
	Exibir contato
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
	Fechar contato
	====================
	*/
	$('.js-close-contact').on('click', e => {
		e.preventDefault();
		$('.header').animate({marginTop: 0});
		$('.js-link-contact').removeClass('active');
	});
})();

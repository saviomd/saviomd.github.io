/* global ga */

var saviomd = saviomd || {};

saviomd.footer = (function () {
	if (typeof ga !== 'undefined') {
		$('.js-link-html5').on('click', function () {
			ga('send', 'event', 'saviomd.com', 'Rodapé', 'W3C HTML5');
		});
	}
})();

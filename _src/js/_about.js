/* global ga */

var saviomd = saviomd || {};

saviomd.about = (function () {
	if (typeof ga !== 'undefined') {
		$('.link-social').on('click', function () {
			ga('send', 'event', 'saviomd.com', 'Sobre', $(this).attr('title'));
		});
	}
})();

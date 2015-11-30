/* global ga */

var saviomd = saviomd || {};

saviomd.work = (function () {
	if (typeof ga !== 'undefined') {
		$('.js-btn-work').on('click', function () {
			ga('send', 'event', 'saviomd.com', 'Trabalhos', $(this).closest('.work__item').find('.title').text());
		});
	}
})();

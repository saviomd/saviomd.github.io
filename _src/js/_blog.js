/* global ga */

/* eslint-disable no-use-before-define */
const saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.blog = (function () {
	const template = '<li class="animated fadeInRight col-12 col-sm-6 col-md-4 mb-3">' +
			'<a href="{{link}}" class="post" rel="noopener" target="_blank" ga-on="click" ga-event-category="saviomd.com" ga-event-action="{{feed}}" ga-event-label="{{title}}">' +
				'<div class="post__title" title="{{title}}">{{title}}</div>' +
				'<div class="post__date">{{date}}</div>' +
			'</a>' +
		'</li>';

	const $blog = $('.js-blog');
	$blog.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType: 'xml',
		type: 'GET',
		url: 'https://saviomd.com/blog/atom.xml'
	}).done(response => {
		const itens = $(response).find('entry').slice(0, 6);
		let html = '';
		for (const item of itens) {
			let htmlItem = template;
			const link = $(item).find('link').attr('href');
			const title = $(item).find('title').text();
			const updated = $(item).find('updated').text().split('T')[0].split('-');
			const date = updated[2] + '/' + updated[1] + '/' + updated[0];
			htmlItem = htmlItem.replace(/{{feed}}/g, 'Blog')
				.replace(/{{link}}/g, link)
				.replace(/{{title}}/g, title)
				.replace(/{{date}}/g, date);
			html += htmlItem;
		}
		$blog.html(html);
	}).fail(() => {
		$blog.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Blog', 'Erro - Ajax fail');
		}
	});
})();

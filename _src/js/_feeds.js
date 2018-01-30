/* global ga */

/* eslint-disable no-use-before-define */
const saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.feeds = (function () {
	const templatePost = '<li class="animated fadeInRight col-12 col-sm-6 col-md-4 mb-3">' +
			'<a href="{{link}}" class="post" rel="noopener" target="_blank" ga-on="click" ga-event-category="saviomd.com" ga-event-action="{{feed}}" ga-event-label="{{titulo}}">' +
				'<div class="post__title" title="{{titulo}}">{{titulo}}</div>' +
				'<div class="post__body">{{corpo}}</div>' +
			'</a>' +
		'</li>';

	/*
	Posts do blog
	====================
	*/
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
			let htmlItem = templatePost;
			const link = $(item).find('link').attr('href');
			const title = $(item).find('title').text();
			const updated = $(item).find('updated').text().split('T')[0].split('-');
			const date = updated[2] + '/' + updated[1] + '/' + updated[0];
			htmlItem = htmlItem.replace(/{{feed}}/g, 'Blog')
				.replace(/{{link}}/g, link)
				.replace(/{{titulo}}/g, title)
				.replace(/{{corpo}}/g, date);
			html += htmlItem;
		}
		$blog.html(html);
	}).fail(() => {
		$blog.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Blog', 'Erro - Ajax fail');
		}
	});

	/*
	Github starred
	====================
	*/
	const $githubStarred = $('.js-github-starred');
	$githubStarred.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType: 'jsonp',
		type: 'GET',
		url: 'https://api.github.com/users/saviomd/starred?per_page=6'
	}).done(response => {
		if (response.meta.status === 200) {
			const itens = response.data;
			let html = '';
			for (const item of itens) {
				let htmlItem = templatePost;
				const link = item.html_url;
				const name = item.full_name;
				const description = item.description;
				htmlItem = htmlItem.replace(/{{feed}}/g, 'GitHub Starred')
					.replace(/{{link}}/g, link)
					.replace(/{{titulo}}/g, name)
					.replace(/{{corpo}}/g, description);
				html += htmlItem;
			}
			$githubStarred.html(html);
		} else {
			$githubStarred.html('<li class="animated fadeInRight col-12 text-center">Limite da API atingido</li>');
			if (typeof ga !== 'undefined') {
				ga('send', 'event', 'saviomd.com', 'GitHub Starred', 'Erro - Status: ' + response.meta.status + ', RateLimit Remaining:' + response.meta['X-RateLimit-Remaining']);
			}
		}
	}).fail(() => {
		$githubStarred.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'GitHub Starred', 'Erro - Ajax fail');
		}
	});

	/*
	Pins
	====================
	*/
	const templatePin = '<li class="animated fadeInRight col-6 col-sm-4 col-md-2 mb-3">' +
			'<div class="pin-wrapper embed-responsive embed-responsive-1by1">' +
				'<a class="pin embed-responsive-item" href="https://www.pinterest.com/pin/{{id}}/" style="background-color: {{dominantColor}}; background-image: url({{imageUrl}})" rel="noopener" target="_blank" ga-on="click" ga-event-category="saviomd.com" ga-event-action="Pinterest" ga-event-label="https://www.pinterest.com/pin/{{id}}/"></a>' +
			'</div>' +
		'</li>';

	const $pinterest = $('.js-pinterest');
	$pinterest.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType: 'jsonp',
		type: 'GET',
		url: 'https://widgets.pinterest.com/v3/pidgets/users/saviomd/pins'
	}).done(response => {
		if (response.status === 'success') {
			const items = response.data.pins.slice(0, 6);
			let html = '';
			for (const item of items) {
				let htmlItem = templatePin;
				const dominantColor = item.dominant_color;
				const imageUrl = item.images['237x'].url;
				const id = item.id;
				htmlItem = htmlItem.replace(/{{dominantColor}}/g, dominantColor)
					.replace(/{{imageUrl}}/g, imageUrl)
					.replace(/{{id}}/g, id);
				html += htmlItem;
			}
			$pinterest.html(html);
		} else {
			$pinterest.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
			if (typeof ga !== 'undefined') {
				ga('send', 'event', 'saviomd.com', 'Pinterest', 'Erro - Status: ' + response.status + ', Message: ' + response.message);
			}
		}
	}).fail(() => {
		$pinterest.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Pinterest', 'Erro - Ajax fail');
		}
	});
})();

/* global ga */

/* eslint-disable no-use-before-define */
var saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.feeds = (function () {
	var templatePost = '<li class="animated fadeInRight col-12 col-sm-6 col-md-4 mb-3">' +
			'<a href="{{link}}" class="post" rel="noopener" target="_blank" ga-on="click" ga-event-category="saviomd.com" ga-event-action="{{feed}}" ga-event-label="{{titulo}}">' +
				'<div class="post__title" title="{{titulo}}">{{titulo}}</div>' +
				'<div class="post__body">{{corpo}}</div>' +
			'</a>' +
		'</li>';

	/*
	posts do blog
	====================
	*/
	var $blog = $('.js-blog');
	$blog.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType: 'xml',
		type: 'GET',
		url: 'https://saviomd.com/blog/atom.xml'
	}).done(function (response) {
		var itens = $(response).find('entry').slice(0, 6);
		var html = '';
		for (var i = 0, len = itens.length; i < len; i++) {
			var item = templatePost;
			var link = $(itens[i]).find('link').attr('href');
			var title = $(itens[i]).find('title').text();
			var updated = $(itens[i]).find('updated').text().split('T')[0].split('-');
			var date = updated[2] + '/' + updated[1] + '/' + updated[0];
			item = item.replace(/{{feed}}/g, 'Blog')
				.replace(/{{link}}/g, link)
				.replace(/{{titulo}}/g, title)
				.replace(/{{corpo}}/g, date);
			html += item;
		}
		$blog.html(html);
	}).fail(function () {
		$blog.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Blog', 'Erro - Ajax fail');
		}
	});

	/*
	github starred
	====================
	*/
	var $githubStarred = $('.js-github-starred');
	$githubStarred.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType: 'jsonp',
		type: 'GET',
		url: 'https://api.github.com/users/saviomd/starred?per_page=6'
	}).done(function (response) {
		if (response.meta.status === 200) {
			var itens = response.data;
			var html = '';
			for (var i = 0, len = itens.length; i < len; i++) {
				var item = templatePost;
				var link = itens[i].html_url;
				var name = itens[i].full_name;
				var description = itens[i].description;
				item = item.replace(/{{feed}}/g, 'GitHub Starred')
					.replace(/{{link}}/g, link)
					.replace(/{{titulo}}/g, name)
					.replace(/{{corpo}}/g, description);
				html += item;
			}
			$githubStarred.html(html);
		} else {
			$githubStarred.html('<li class="animated fadeInRight col-12 text-center">Limite da API atingido</li>');
			if (typeof ga !== 'undefined') {
				ga('send', 'event', 'saviomd.com', 'GitHub Starred', 'Erro - Status: ' + response.meta.status + ', RateLimit Remaining:' + response.meta['X-RateLimit-Remaining']);
			}
		}
	}).fail(function () {
		$githubStarred.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'GitHub Starred', 'Erro - Ajax fail');
		}
	});

	/*
	pins
	====================
	*/
	var templatePin = '<li class="animated fadeInRight col-6 col-sm-4 col-md-2 mb-3">' +
			'<div class="pin-wrapper embed-responsive embed-responsive-1by1">' +
				'<a class="pin embed-responsive-item" href="https://www.pinterest.com/pin/{{id}}/" style="background-color: {{dominantColor}}; background-image: url({{imageUrl}})" rel="noopener" target="_blank" ga-on="click" ga-event-category="saviomd.com" ga-event-action="Pinterest" ga-event-label="https://www.pinterest.com/pin/{{id}}/"></a>' +
			'</div>' +
		'</li>';

	var $pinterest = $('.js-pinterest');
	$pinterest.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType: 'jsonp',
		type: 'GET',
		url: 'https://widgets.pinterest.com/v3/pidgets/users/saviomd/pins'
	}).done(function (response) {
		if (response.status === 'success') {
			var pins = response.data.pins;
			var html = '';
			for (var i = 0; i < 6; i++) {
				var item = templatePin;
				var dominantColor = pins[i].dominant_color;
				var imageUrl = pins[i].images['237x'].url;
				var id = pins[i].id;
				item = item.replace(/{{dominantColor}}/g, dominantColor)
					.replace(/{{imageUrl}}/g, imageUrl)
					.replace(/{{id}}/g, id);
				html += item;
			}
			$pinterest.html(html);
		} else {
			$pinterest.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
			if (typeof ga !== 'undefined') {
				ga('send', 'event', 'saviomd.com', 'Pinterest', 'Erro - Status: ' + response.status + ', Message: ' + response.message);
			}
		}
	}).fail(function () {
		$pinterest.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Pinterest', 'Erro - Ajax fail');
		}
	});
})();

/* global ga */

var saviomd = saviomd || {};

saviomd.feeds = (function () {
	/*
	posts do blog
	====================
	*/
	var $blog = $('.js-blog');
	$blog.html('<li class="loading col-xs-12"></li>');
	$.ajax({
		dataType: 'xml',
		type: 'GET',
		url: 'http://saviomd.com/blog/atom.xml'
	}).done(function (response) {
		var itens = $(response).find('entry').slice(0, 9);
		var html = '';
		var template = saviomd.templates.getPost();
		for (var i = 0, len = itens.length; i < len; i++) {
			var item = template;
			var link = $(itens[i]).find('link').attr('href');
			var title = $(itens[i]).find('title').text();
			var updated = $(itens[i]).find('updated').text().split('T')[0].split('-');
			var date = updated[2] + '/' + updated[1] + '/' + updated[0];
			item = item.replace(/{{link}}/g, link)
				.replace(/{{titulo}}/g, title)
				.replace(/{{corpo}}/g, date);
			html += item;
		}
		$blog.html(html);
	}).fail(function () {
		$blog.html('<li class="animated fadeInRight col-xs-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
	});

	if (typeof ga !== 'undefined') {
		$(document).on('click', '.js-blog .post', function () {
			ga('send', 'event', 'saviomd.com', 'Blog', $(this).find('.post__title').text());
		});

		$('.js-link-more-blog').on('click', function () {
			ga('send', 'event', 'saviomd.com', 'Blog', 'Veja mais');
		});
	}

	/*
	github starred
	====================
	*/
	var $githubStarred = $('.js-github-starred');
	$githubStarred.html('<li class="loading col-xs-12"></li>');
	$.ajax({
		dataType: 'jsonp',
		type: 'GET',
		url: 'https://api.github.com/users/saviomd/starred?per_page=6'
	}).done(function (response) {
		if (response.meta.status === 200) {
			var itens = response.data;
			var html = '';
			var template = saviomd.templates.getPost();
			for (var i = 0, len = itens.length; i < len; i++) {
				var item = template;
				var link = itens[i].html_url;
				var name = itens[i].full_name;
				var description = itens[i].description;
				item = item.replace(/{{link}}/g, link)
					.replace(/{{titulo}}/g, name)
					.replace(/{{corpo}}/g, description);
				html += item;
			}
			$githubStarred.html(html);
		} else if (response.meta.status === 403) {
			$githubStarred.html('<li class="animated fadeInRight col-xs-12 text-center">Limite da API atingido</li>');
		}
	}).fail(function () {
		$githubStarred.html('<li class="animated fadeInRight col-xs-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
	});

	if (typeof ga !== 'undefined') {
		$(document).on('click', '.js-github-starred .post', function () {
			ga('send', 'event', 'saviomd.com', 'GitHub starred', $(this).find('.post__title').text());
		});

		$('.js-link-more-github-starred').on('click', function () {
			ga('send', 'event', 'saviomd.com', 'GitHub starred', 'Veja mais');
		});
	}

	/*
	pins
	====================
	*/
	var $pinterest = $('.js-pinterest');
	$pinterest.html('<li class="loading col-xs-12"></li>');
	$.ajax({
		dataType: 'jsonp',
		type: 'GET',
		url: 'https://widgets.pinterest.com/v3/pidgets/users/saviomd/pins'
	}).done(function (response) {
		var pins = response.data.pins;
		var html = '';
		var template = saviomd.templates.getPin();
		for (var i = 0; i < 8; i++) {
			var item = template;
			var description = pins[i].description;
			var dominantColor = pins[i].dominant_color;
			var imageUrl = pins[i].images['237x'].url;
			var id = pins[i].id;
			item = item.replace(/{{description}}/g, description)
				.replace(/{{dominantColor}}/g, dominantColor)
				.replace(/{{imageUrl}}/g, imageUrl)
				.replace(/{{id}}/g, id);
			html += item;
		}
		$pinterest.html(html);
	}).fail(function () {
		$pinterest.html('<li class="animated fadeInRight col-xs-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
	});

	if (typeof ga !== 'undefined') {
		$(document).on('click', '.pin', function () {
			ga('send', 'event', 'saviomd.com', 'Pinterest', $(this).attr('href'));
		});

		$('.js-link-more-pinterest').on('click', function () {
			ga('send', 'event', 'saviomd.com', 'Pinterest', 'Veja mais');
		});
	}
})();

"use strict";

/* global WOW */

/* eslint-disable no-use-before-define */
var saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.animations = function () {
	/*
 Animacoes no scroll
 ====================
 */
	new WOW().init();
}();
'use strict';

/* eslint-disable no-use-before-define */
var saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.contact = function () {
	/*
 Exibir contato
 ====================
 */
	$('.js-link-contact').on('click', function (e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$('.js-close-contact').trigger('click');
		} else {
			$('.header').animate({ marginTop: $('.contact').height() });
			$(this).addClass('active');
		}
	});

	/*
 Fechar contato
 ====================
 */
	$('.js-close-contact').on('click', function (e) {
		e.preventDefault();
		$('.header').animate({ marginTop: 0 });
		$('.js-link-contact').removeClass('active');
	});
}();
'use strict';

/* global ga */

/* eslint-disable no-use-before-define */
var saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.feeds = function () {
	var templatePost = '<li class="animated fadeInRight col-12 col-sm-6 col-md-4 mb-3">' + '<a href="{{link}}" class="post" rel="noopener" target="_blank" ga-on="click" ga-event-category="saviomd.com" ga-event-action="{{feed}}" ga-event-label="{{titulo}}">' + '<div class="post__title" title="{{titulo}}">{{titulo}}</div>' + '<div class="post__body">{{corpo}}</div>' + '</a>' + '</li>';

	/*
 Posts do blog
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
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = itens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				var htmlItem = templatePost;
				var link = $(item).find('link').attr('href');
				var title = $(item).find('title').text();
				var updated = $(item).find('updated').text().split('T')[0].split('-');
				var date = updated[2] + '/' + updated[1] + '/' + updated[0];
				htmlItem = htmlItem.replace(/{{feed}}/g, 'Blog').replace(/{{link}}/g, link).replace(/{{titulo}}/g, title).replace(/{{corpo}}/g, date);
				html += htmlItem;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		$blog.html(html);
	}).fail(function () {
		$blog.html('<li class="animated fadeInRight col-12 text-center">N&atilde;o foi poss&iacute;vel carregar</li>');
		if (typeof ga !== 'undefined') {
			ga('send', 'event', 'saviomd.com', 'Blog', 'Erro - Ajax fail');
		}
	});

	/*
 Github starred
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
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = itens[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var item = _step2.value;

					var htmlItem = templatePost;
					var link = item.html_url;
					var name = item.full_name;
					var description = item.description;
					htmlItem = htmlItem.replace(/{{feed}}/g, 'GitHub Starred').replace(/{{link}}/g, link).replace(/{{titulo}}/g, name).replace(/{{corpo}}/g, description);
					html += htmlItem;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
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
 Pins
 ====================
 */
	var templatePin = '<li class="animated fadeInRight col-6 col-sm-4 col-md-2 mb-3">' + '<div class="pin-wrapper embed-responsive embed-responsive-1by1">' + '<a class="pin embed-responsive-item" href="https://www.pinterest.com/pin/{{id}}/" style="background-color: {{dominantColor}}; background-image: url({{imageUrl}})" rel="noopener" target="_blank" ga-on="click" ga-event-category="saviomd.com" ga-event-action="Pinterest" ga-event-label="https://www.pinterest.com/pin/{{id}}/"></a>' + '</div>' + '</li>';

	var $pinterest = $('.js-pinterest');
	$pinterest.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType: 'jsonp',
		type: 'GET',
		url: 'https://widgets.pinterest.com/v3/pidgets/users/saviomd/pins'
	}).done(function (response) {
		if (response.status === 'success') {
			var items = response.data.pins.slice(0, 6);
			var html = '';
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var item = _step3.value;

					var htmlItem = templatePin;
					var dominantColor = item.dominant_color;
					var imageUrl = item.images['237x'].url;
					var id = item.id;
					htmlItem = htmlItem.replace(/{{dominantColor}}/g, dominantColor).replace(/{{imageUrl}}/g, imageUrl).replace(/{{id}}/g, id);
					html += htmlItem;
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
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
}();
'use strict';

/* eslint-disable no-use-before-define */
var saviomd = saviomd || {};
/* eslint-enable no-use-before-define */

saviomd.header = function () {
	/*
 Toggle nav menu
 ====================
 */
	$('.js-btn-nav').on('click', function (e) {
		e.preventDefault();
		$(this).siblings('ul').toggleClass('active');
	});

	/*
 Animacao p/ scroll
 ====================
 */
	$('.header__nav-link').smoothScroll();
}();
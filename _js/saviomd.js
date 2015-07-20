/* global _gaq, WOW */
/*! saviomd.js */

var saviomd = saviomd || {};

saviomd.load = (function() {

	/*
	indicador de javascript
	==================================================
	*/
	$('html').removeClass('no-js').addClass('js');

	/*
	caminho dos arquivos no console
	==================================================
	*/
	if ('console' in window) {
		console.log('Original source code: http://github.com/saviomd/saviomd.github.io');
	}

})();

saviomd.animations = (function() {

	/*
	animacoes no scroll
	==================================================
	*/
	new WOW().init();

})();

saviomd.nav = (function() {

	/*
	toggle nav menu
	==================================================
	*/
	$('.js-btn-nav').on('click touchstart', function(e) {
		e.preventDefault();
		$(this).siblings('ul').slideToggle();
	});

	/*
	animacao p/ scroll
	==================================================
	*/
	$('.header__nav a').smoothScroll();

})();

saviomd.contato = (function() {

	/*
	contato
	==================================================
	*/
	$('.js-link-contato').on('click touchstart', function(e) {
		e.preventDefault();
		if (!$(this).hasClass('ativo')) {
			$('.header').animate({marginTop:$('.contato').height()});
			$(this).addClass('ativo');
		} else {
			$('.js-fechar-contato').trigger('click');
		}
	});
	$('.js-fechar-contato').on('click touchstart', function(e) {
		e.preventDefault();
		$('.header').animate({marginTop:0});
		$('.js-link-contato').removeClass('ativo');
	});

})();

saviomd.templates = (function() {

	var posts = '<li class="animated fadeInRight col-6 col-m-4">' +
			'<a href="{{link}}">' +
				'<div class="lista-posts__titulo">{{titulo}}</div>' +
				'<div class="lista-posts__corpo">{{corpo}}</div>' +
			'</a>' +
		'</li>';

	var getPosts = function() {
		return posts;
	};

	return {
		getPosts:getPosts
	};

})();

saviomd.syndication = (function() {

	/*
	posts do blog
	==================================================
	*/
	var $blog = $('.js-blog');
	$blog.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType:'xml',
		type:'GET',
		url:'http://saviomd.com/blog/atom.xml'
	}).done(function(response) {
		var itens = $(response).find('entry').slice(0, 9);
		var html = '';
		var template = saviomd.templates.getPosts();
		for (var i = 0, len = itens.length; i < len; i++) {
			var item = template;
			var link = $(itens[i]).find('link').attr('href');
			var title = $(itens[i]).find('title').text();
			var updated = $(itens[i]).find('updated').text().split('T')[0].split('-');
			var date = updated[2] + '/' + updated[1] + '/' + updated[0];
			item = item.replace('{{link}}', link)
				.replace('{{titulo}}', title)
				.replace('{{corpo}}', date);
			html += item;
		}
		$blog.html(html);
	}).fail(function() {
		$blog.html('<li class="animated fadeInRight col-12 acenter">N&atilde;o foi poss&iacute;vel carregar</li>');
	});

	/*
	github starred
	==================================================
	*/
	var $githubStarred = $('.js-github-starred');
	$githubStarred.html('<li class="loading col-12"></li>');
	$.ajax({
		dataType:'jsonp',
		type:'GET',
		url:'https://api.github.com/users/saviomd/starred?per_page=6'
	}).done(function(response) {
		if (response.meta.status === 200) {
			var itens = response.data;
			var html = '';
			var template = saviomd.templates.getPosts();
			for (var i = 0, len = itens.length; i < len; i++) {
				var item = template;
				// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
				var link = itens[i].html_url;
				var name = itens[i].full_name;
				// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
				var description = itens[i].description;
				item = item.replace('{{link}}', link)
					.replace('{{titulo}}', name)
					.replace('{{corpo}}', description);
				html += item;
			}
			$githubStarred.html(html);
		} else if (response.meta.status === 403) {
			$githubStarred.html('<li class="animated fadeInRight col-12 acenter">Limite da API atingido</li>');
		}
	}).fail(function() {
		$githubStarred.html('<li class="animated fadeInRight col-12 acenter">N&atilde;o foi poss&iacute;vel carregar</li>');
	});

})();

saviomd.track = (function() {

	/*
	event track
	==================================================
	*/
	if (location.search.indexOf('a=0') === -1) {

		$('.header__nav ul a').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Navegação', $(this).text()]);
		});

		$('.link-rede-social').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Links de redes sociais', $(this).attr('title')]);
		});

		$(document).on('click', '.js-blog a', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Posts do blog', $(this).find('.lista-posts__titulo').text()]);
		});

		$('.blog .js-link-mais').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Veja mais no blog']);
		});

		$(document).on('click', '.js-github-starred a', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Github starred', $(this).find('.lista-posts__titulo').text()]);
		});

		$('.github .js-link-mais').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Veja mais no github']);
		});

		$('.trabalhos .btn').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Trabalhos', $(this).siblings('header').find('.titulo').text()]);
		});

		$('.contato__link').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Enviar email no contato']);
		});

		$('.js-fechar-contato').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Fechar contato']);
		});

		$('.js-link-html5').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Link W3C no rodapé']);
		});

	}

})();

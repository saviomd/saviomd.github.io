/*!
 * jQuery Smooth Scroll - v1.5.4 - 2014-11-17
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){function e(t){return t.replace(/(:|\.|\/)/g,"\\$1")}var l="1.5.4",o={},n={exclude:[],excludeWithin:[],offset:0,direction:"top",scrollElement:null,scrollTarget:null,beforeScroll:function(){},afterScroll:function(){},easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0},s=function(e){var l=[],o=!1,n=e.dir&&"left"===e.dir?"scrollLeft":"scrollTop";return this.each(function(){if(this!==document&&this!==window){var e=t(this);e[n]()>0?l.push(this):(e[n](1),o=e[n]()>0,o&&l.push(this),e[n](0))}}),l.length||this.each(function(){"BODY"===this.nodeName&&(l=[this])}),"first"===e.el&&l.length>1&&(l=[l[0]]),l};t.fn.extend({scrollable:function(t){var e=s.call(this,{dir:t});return this.pushStack(e)},firstScrollable:function(t){var e=s.call(this,{el:"first",dir:t});return this.pushStack(e)},smoothScroll:function(l,o){if(l=l||{},"options"===l)return o?this.each(function(){var e=t(this),l=t.extend(e.data("ssOpts")||{},o);t(this).data("ssOpts",l)}):this.first().data("ssOpts");var n=t.extend({},t.fn.smoothScroll.defaults,l),s=t.smoothScroll.filterPath(location.pathname);return this.unbind("click.smoothscroll").bind("click.smoothscroll",function(l){var o=this,r=t(this),i=t.extend({},n,r.data("ssOpts")||{}),c=n.exclude,a=i.excludeWithin,f=0,h=0,u=!0,d={},p=location.hostname===o.hostname||!o.hostname,m=i.scrollTarget||t.smoothScroll.filterPath(o.pathname)===s,S=e(o.hash);if(i.scrollTarget||p&&m&&S){for(;u&&c.length>f;)r.is(e(c[f++]))&&(u=!1);for(;u&&a.length>h;)r.closest(a[h++]).length&&(u=!1)}else u=!1;u&&(i.preventDefault&&l.preventDefault(),t.extend(d,i,{scrollTarget:i.scrollTarget||S,link:o}),t.smoothScroll(d))}),this}}),t.smoothScroll=function(e,l){if("options"===e&&"object"==typeof l)return t.extend(o,l);var n,s,r,i,c,a=0,f="offset",h="scrollTop",u={},d={};"number"==typeof e?(n=t.extend({link:null},t.fn.smoothScroll.defaults,o),r=e):(n=t.extend({link:null},t.fn.smoothScroll.defaults,e||{},o),n.scrollElement&&(f="position","static"===n.scrollElement.css("position")&&n.scrollElement.css("position","relative"))),h="left"===n.direction?"scrollLeft":h,n.scrollElement?(s=n.scrollElement,/^(?:HTML|BODY)$/.test(s[0].nodeName)||(a=s[h]())):s=t("html, body").firstScrollable(n.direction),n.beforeScroll.call(s,n),r="number"==typeof e?e:l||t(n.scrollTarget)[f]()&&t(n.scrollTarget)[f]()[n.direction]||0,u[h]=r+a+n.offset,i=n.speed,"auto"===i&&(c=u[h]-s.scrollTop(),0>c&&(c*=-1),i=c/n.autoCoefficient),d={duration:i,easing:n.easing,complete:function(){n.afterScroll.call(n.link,n)}},n.step&&(d.step=n.step),s.length?s.stop().animate(u,d):n.afterScroll.call(n.link,n)},t.smoothScroll.version=l,t.smoothScroll.filterPath=function(t){return t=t||"",t.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")},t.fn.smoothScroll.defaults=n});
/*! WOW - v1.0.3 - 2015-01-14
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass,null!=this.config.callback?this.config.callback(a):void 0},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
/*! saviomd.js */

var saviomd = saviomd || {};

saviomd.load = function(){

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

}();

saviomd.animations = function(){

	/*
	animacoes no scroll
	==================================================
	*/
	new WOW().init();

}();

saviomd.nav = function(){

	/*
	toggle nav menu
	==================================================
	*/
	$('.js-btn-nav').on('click touchstart', function(e){
		e.preventDefault();
		$(this).siblings('ul').slideToggle();
	});

	/*
	animacao p/ scroll
	==================================================
	*/
	$('.header__nav a').smoothScroll();

}();

saviomd.contato = function(){

	/*
	contato
	==================================================
	*/
	$('.js-link-contato').on('click touchstart', function(e){
		e.preventDefault();
		if (!$(this).hasClass('ativo')){
			$('.header').animate({marginTop:$('.contato').height()});
			$(this).addClass('ativo');
		} else {
			$('.js-fechar-contato').trigger('click');
		}
	});
	$('.js-fechar-contato').on('click touchstart', function(e){
		e.preventDefault();
		$('.header').animate({marginTop:0});
		$('.js-link-contato').removeClass('ativo');
	});

}();

saviomd.templates = function(){

	var posts = '<li class="animated fadeInRight col-6 col-m-4">' +
			'<a href="{{link}}">' +
				'<div class="lista-posts__titulo">{{titulo}}</div>' +
				'<div class="lista-posts__corpo">{{corpo}}</div>' +
			'</a>' +
		'</li>';

	var getPosts = function(){
		return posts;
	};

	return {
		getPosts:getPosts
	};

}();

saviomd.syndication = function(){

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
	}).done(function(response){
		var itens = $(response).find('entry').slice(0,9);
		var html = '';
		var template = saviomd.templates.getPosts();
		for (var i = 0, len = itens.length; i < len; i++){
			var item = template;
			var link = $(itens[i]).find('link').attr('href');
			var title = $(itens[i]).find('title').text();
			var updated = $(itens[i]).find('updated').text().split('T')[0].split('-');
			var date = updated[2] + '/'+ updated[1] + '/'+ updated[0];
			item = item.replace('{{link}}', link)
				.replace('{{titulo}}', title)
				.replace('{{corpo}}', date);
			html += item;
		}
		$blog.html(html);
	}).fail(function(){
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
	}).done(function(response){
		if (response.meta.status === 200) {
			var itens = response.data;
			var html = '';
			var template = saviomd.templates.getPosts();
			for (var i = 0, len = itens.length; i < len; i++){
				var item = template;
				/* jshint ignore:start */
				var link = itens[i].html_url;
				var name = itens[i].full_name;
				/* jshint ignore:end */
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
	}).fail(function(){
		$githubStarred.html('<li class="animated fadeInRight col-12 acenter">N&atilde;o foi poss&iacute;vel carregar</li>');
	});

}();

saviomd.track = function(){

	/*
	event track
	==================================================
	*/
	if (location.search.indexOf('a=0') === -1){

		$('.header__nav ul a').on('click', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Navegação', $(this).text()]);
		});

		$('.link-rede-social').on('click', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Links de redes sociais', $(this).attr('title')]);
		});

		$(document).on('click', '.js-blog a', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Posts do blog', $(this).find('.lista-posts__titulo').text()]);
		});

		$('.blog .js-link-mais').on('click', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Veja mais no blog']);
		});

		$(document).on('click', '.js-github-starred a', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Github starred', $(this).find('.lista-posts__titulo').text()]);
		});

		$('.github .js-link-mais').on('click', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Veja mais no github']);
		});

		$('.trabalhos .btn').on('click', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Trabalhos', $(this).siblings('header').find('.titulo').text()]);
		});

		$('.contato__link').on('click', function(){
			_gaq.push(['_trackEvent', 'saviomd.com', 'Enviar email no contato']);
		});

		$('.js-fechar-contato').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Fechar contato']);
		});

		$('.js-link-html5').on('click', function() {
			_gaq.push(['_trackEvent', 'saviomd.com', 'Link W3C no rodapé']);
		});

	}

}();

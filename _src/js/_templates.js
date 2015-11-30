var saviomd = saviomd || {};

saviomd.templates = (function () {
	var post = '<li class="animated fadeInRight col-xs-6 col-md-4 m-b">' +
			'<a href="{{link}}" class="post">' +
				'<div class="post__title" title="{{titulo}}">{{titulo}}</div>' +
				'<div class="post__body">{{corpo}}</div>' +
			'</a>' +
		'</li>';

	var getPost = function () {
		return post;
	};

	var pin = '<li class="animated fadeInRight col-xs-6 col-md-3 m-b">' +
			'<div class="pin-wrapper">' +
				'<a class="pin" href="https://www.pinterest.com/pin/{{id}}/" style="background-color: {{dominantColor}}; background-image: url({{imageUrl}})" title="{{description}}"></a>' +
			'</div>' +
		'</li>';

	var getPin = function () {
		return pin;
	};

	return {
		getPost: getPost,
		getPin: getPin
	};
})();

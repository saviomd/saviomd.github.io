var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var del = require('del');
var eslint = require('gulp-eslint');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var stylelint = require('stylelint');
var stylestats = require('gulp-stylestats');
var uglify = require('gulp-uglify');

/*
configs
====================
- autoprefixer: https://github.com/postcss/autoprefixer#browsers
- eslint: https://github.com/eslint/eslint/blob/master/conf/eslint.json
- jade: http://jade-lang.com/api/
- minifyHtml: https://github.com/murphydanger/gulp-minify-html/blob/master/README.md
- stylelint: https://github.com/stylelint/stylelint/tree/master/src/rules
- stylestats: https://github.com/t32k/stylestats/blob/master/assets/default.json
*/
var autoprefixerConfig = { browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'Android >= 2'] };
var jadeConfig = { basedir: '_src', pretty: true };
var minifyHtmlConfig = { conditionals: true };
var stylestatsConfig = { config: '.stylestatsrc' };

/*
tasks
====================
*/
gulp.task('clean', function(cb) {
	return del([
			'+(css|js)',
			'+(404.html|index.html)'
		], cb)
});

gulp.task('buildHtml', function() {
	return gulp.src('_src/pages/*.jade')
		.pipe(jade(jadeConfig))
		.pipe(minifyHtml(minifyHtmlConfig))
		.pipe(gulp.dest('./'))
});

gulp.task('buildCssVendor', function() {
	return gulp.src('_src/css/vendor.scss')
		.pipe(sass())
		.pipe(autoprefixer(autoprefixerConfig))
		.pipe(gulp.dest('css'))
		.pipe(minifyCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
});

gulp.task('lintCssSite', function() {
	return gulp.src('_src/css/_*.scss')
		.pipe(postcss([
			stylelint()
		]))
});

gulp.task('buildCssSite', ['lintCssSite'], function() {
	return gulp.src('_src/css/saviomd.scss')
		.pipe(sass())
		.pipe(autoprefixer(autoprefixerConfig))
		.pipe(gulp.dest('css'))
		.pipe(minifyCss())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
});

gulp.task('copyJs', function() {
	return gulp.src([
			'node_modules/html5shiv/dist/html5shiv.min.js',
			'node_modules/respond.js/dest/respond.min.js'
		])
		.pipe(gulp.dest('js'))
});

gulp.task('buildJsVendor', function() {
	return gulp.src([
			'node_modules/jquery/dist/jquery.js',
			'node_modules/jquery-smooth-scroll/jquery.smooth-scroll.js',
			'node_modules/wow/dist/wow.js'
		])
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
});

gulp.task('buildJsSite', function() {
	return gulp.src([
			'_src/js/_templates.js',
			'_src/js/_header.js',
			'_src/js/_about.js',
			'_src/js/_feeds.js',
			'_src/js/_work.js',
			'_src/js/_contact.js',
			'_src/js/_footer.js',
			'_src/js/_animations.js'
		])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(concat('saviomd.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
});

gulp.task('imagemin', function() {
	return gulp.src('imgmin/**/*.+(gif|jpg|png)')
		.pipe(imagemin({ optimizationLevel: 7, pngquant: false, progressive: true }))
		.pipe(gulp.dest('img'))
});

gulp.task('browser-sync', function() {
	browserSync.init({
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		},
		server: {
			baseDir: './',
		},
		startPath: '?a=0'
	});
});

/*
build and dev tasks
====================
*/
gulp.task('default', ['clean'], function(){
	gulp.start('buildHtml', 'css', 'js');
});

gulp.task('css', function(){
	gulp.start('buildCssVendor', 'buildCssSite');
});

gulp.task('js', function(){
	gulp.start('copyJs', 'buildJsVendor', 'buildJsSite');
});

gulp.task('dev', ['browser-sync'], function() {
	gulp.watch('_src/**/*.jade', ['buildHtml', browserSync.reload])
	gulp.watch('_src/css/*.scss', ['css', browserSync.reload])
	gulp.watch('_src/js/*.js', ['js', browserSync.reload])
	gulp.watch('img/**/*.+(gif|jpg|png)', ['imagemin'])
});
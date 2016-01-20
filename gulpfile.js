var autoprefixer = require('autoprefixer');
var autoprefixerConfig = require('autoprefixer-config-saviomd');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var cssnano = require('cssnano');
var cssnanoConfig = require('cssnano-config-saviomd');
var del = require('del');
var eslint = require('gulp-eslint');
var eslintConfig = require('eslint-config-saviomd');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var htmlminConfig = require('htmlmin-config-saviomd');
var imagemin = require('gulp-imagemin');
var jade = require('gulp-jade');
var jadeConfig = require('jade-config-saviomd');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var stylelint = require('stylelint');
var stylelintConfig = require('stylelint-config-saviomd');
var stylestats = require('gulp-stylestats');
var stylestatsConfig = require('stylestats-config-saviomd');
var uglify = require('gulp-uglify');

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
		.pipe(htmlmin(htmlminConfig))
		.pipe(gulp.dest('./'))
});

gulp.task('buildCssVendor', function() {
	return gulp.src('_src/css/vendor.scss')
		.pipe(sass())
		.pipe(postcss([ autoprefixer(autoprefixerConfig) ]))
		.pipe(gulp.dest('css'))
		.pipe(postcss([ cssnano(cssnanoConfig) ]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
		.pipe(gulp.dest('css'))
});

gulp.task('lintCssSite', function() {
	return gulp.src('_src/css/_*.scss')
		.pipe(postcss([ stylelint(stylelintConfig) ]))
});

gulp.task('buildCssSite', ['lintCssSite'], function() {
	return gulp.src('_src/css/saviomd.scss')
		.pipe(sass())
		.pipe(postcss([ autoprefixer(autoprefixerConfig) ]))
		.pipe(gulp.dest('css'))
		.pipe(postcss([ cssnano(cssnanoConfig) ]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
		.pipe(gulp.dest('css'))
});

gulp.task('copyJs', function() {
	return gulp.src([
			'node_modules/html5shiv/dist/html5shiv.min.js',
			'node_modules/respond.js/dest/respond.min.js'
		])
		.pipe(gulp.dest('js'))
});

gulp.task('buildJsVendor', function() {
	return gulp.src(require('./_src/js/vendor.js'))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
});

gulp.task('buildJsSite', function() {
	return gulp.src(require('./_src/js/saviomd.js'))
		.pipe(eslint(eslintConfig))
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

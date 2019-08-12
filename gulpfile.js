var autoprefixer = require('autoprefixer');
var autoprefixerConfig = require('tools-config-saviomd/autoprefixer-config');
var babel = require('gulp-babel');
var browserSync = require('browser-sync');
var browserSyncConfig = require('tools-config-saviomd/browser-sync-config');
var concat = require('gulp-concat');
var cssnano = require('cssnano');
var cssnanoConfig = require('tools-config-saviomd/cssnano-config');
var del = require('del');
var eslint = require('gulp-eslint');
var eslintConfig = './node_modules/tools-config-saviomd/eslint-config.js';
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var htmlminConfig = require('tools-config-saviomd/htmlmin-config');
var postcss = require('gulp-postcss');
var postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
var pug = require('gulp-pug');
var pugConfig = require('tools-config-saviomd/pug-config');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var scss = require('postcss-scss');
var stylelint = require('stylelint');
var stylelintConfig = require('tools-config-saviomd/stylelint-config');
var uglify = require('gulp-uglify');

var server = browserSync.create();

function clean() {
	return del([
		'+(css|js)',
		'+(404.html|index.html|manifest.json)'
	])
}

function html() {
	return gulp.src('_src/pages/*.pug')
		.pipe(pug(pugConfig))
		.pipe(htmlmin(htmlminConfig))
		.pipe(gulp.dest('./'))
}

function manifests() {
	return gulp.src('_src/manifests/*.pug')
		.pipe(pug(pugConfig))
		.pipe(rename({ extname: '.json' }))
		.pipe(gulp.dest('./'))
}

function cssLint() {
	return gulp.src('_src/css/_*.scss')
		.pipe(postcss([ stylelint(stylelintConfig) ], { syntax: scss }))
}

function cssBuild() {
	return gulp.src('_src/css/saviomd.scss', { sourcemaps: true })
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([ autoprefixer(autoprefixerConfig), postcssFlexbugsFixes() ]))
		.pipe(gulp.dest('css'))
		.pipe(postcss([ cssnano(cssnanoConfig) ]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css', { sourcemaps: '.' }))
}

function jsLint() {
	return gulp.src('_src/js/_*.js')
		.pipe(eslint(eslintConfig))
		.pipe(eslint.format())
		.pipe(eslint.failAfterError())
}

function jsBuild() {
	return gulp.src(require('./_src/js/saviomd.js'), { sourcemaps: true })
		.pipe(babel())
		.pipe(concat('saviomd.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js', { sourcemaps: '.' }))
}

function serve(cb) {
	server.init(browserSyncConfig);
	cb();
}

function reload(cb) {
	server.reload();
	cb();
}

function css(cb) {
	return gulp.series(cssLint, cssBuild)(cb);
}

function js(cb) {
	return gulp.series(jsLint, jsBuild)(cb);
}

function watch(cb) {
	gulp.watch('_src/**/*.pug', gulp.series(html, reload))
	gulp.watch('_src/manifests/*.pug', gulp.series(manifests, reload))
	gulp.watch('_src/css/*.scss', gulp.series(css, reload))
	gulp.watch('_src/js/*.js', gulp.series(js, reload))
	cb()
}

exports.default = gulp.series(
	clean,
	gulp.parallel(html, manifests, css, js),
);

exports.dev = gulp.series(serve, watch);

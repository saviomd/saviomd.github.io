const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const cssnano = require('cssnano');
const del = require('del');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const projectData = require('./package.json');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const scss = require('postcss-scss');
const stylelint = require('stylelint');
const uglify = require('gulp-uglify');

const server = browserSync.create();

function clean() {
	return del([
		'+(css|js)',
		'+(404.html|index.html|manifest.json)'
	]);
}

function html() {
	return gulp.src('_src/pages/*.pug')
		.pipe(pug(projectData.pug))
		.pipe(htmlmin(projectData.htmlmin))
		.pipe(gulp.dest('./'));
}

function manifests() {
	return gulp.src('_src/manifests/*.pug')
		.pipe(pug(projectData.pug))
		.pipe(rename({extname: '.json'}))
		.pipe(gulp.dest('./'));
}

function cssLint() {
	return gulp.src('_src/css/_*.scss')
		.pipe(postcss([stylelint()], {syntax: scss}));
}

function cssBuild() {
	return gulp.src('_src/css/saviomd.scss', {sourcemaps: true})
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer(), postcssFlexbugsFixes()]))
		.pipe(gulp.dest('css'))
		.pipe(postcss([cssnano()]))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css', {sourcemaps: '.'}));
}

function jsLint() {
	return gulp.src('_src/js/_*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
}

function jsBuild() {
	return gulp.src(require('./_src/js/saviomd.js'), {sourcemaps: true})
		.pipe(babel())
		.pipe(concat('saviomd.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('js', {sourcemaps: '.'}));
}

function serve(cb) {
	server.init(projectData.browserSync);
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
	gulp.watch('_src/**/*.pug', gulp.series(html, reload));
	gulp.watch('_src/manifests/*.pug', gulp.series(manifests, reload));
	gulp.watch('_src/css/*.scss', gulp.series(css, reload));
	gulp.watch('_src/js/*.js', gulp.series(js, reload));
	cb();
}

exports.default = gulp.series(
	clean,
	gulp.parallel(html, manifests, css, js)
);

exports.dev = gulp.series(serve, watch);

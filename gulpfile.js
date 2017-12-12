var autoprefixer = require('autoprefixer');
var autoprefixerConfig = require('tools-config-saviomd/autoprefixer-config');
var browserSync = require('browser-sync');
var browserSyncConfig = require('tools-config-saviomd/browser-sync-config');
var concat = require('gulp-concat');
var cssnano = require('cssnano');
var cssnanoConfig = require('tools-config-saviomd/cssnano-config');
var del = require('del');
var eslint = require('gulp-eslint');
var eslintConfig = require('tools-config-saviomd/eslint-config');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var htmlminConfig = require('tools-config-saviomd/htmlmin-config');
var jade = require('gulp-jade');
var jadeConfig = require('tools-config-saviomd/jade-config');
var postcss = require('gulp-postcss');
var postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var stylelint = require('stylelint');
var stylelintConfig = require('tools-config-saviomd/stylelint-config');
var stylestats = require('gulp-stylestats');
var stylestatsConfig = require('tools-config-saviomd/stylestats-config');
var uglify = require('gulp-uglify');

/*
tasks
====================
*/
gulp.task('clean', function(cb) {
	return del([
			'+(css|js)',
			'+(404.html|index.html|manifest.json)'
		], cb)
});

gulp.task('html', function() {
	return gulp.src('_src/pages/*.jade')
		.pipe(jade(jadeConfig))
		.pipe(htmlmin(htmlminConfig))
		.pipe(gulp.dest('./'))
});

gulp.task('manifests', function() {
	return gulp.src('_src/manifests/*.jade')
		.pipe(jade(jadeConfig))
		.pipe(rename({ extname: '.json' }))
		.pipe(gulp.dest('./'))
});

gulp.task('cssVendor', function() {
	return gulp.src('_src/css/vendor.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([ autoprefixer(autoprefixerConfig), postcssFlexbugsFixes() ]))
		.pipe(gulp.dest('css'))
		.pipe(postcss([ cssnano(cssnanoConfig) ]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
		.pipe(gulp.dest('css'))
});

gulp.task('cssSiteLint', function() {
	return gulp.src('_src/css/_*.scss')
		.pipe(postcss([ stylelint(stylelintConfig) ]))
});

gulp.task('cssSite', ['cssSiteLint'], function() {
	return gulp.src('_src/css/saviomd.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([ autoprefixer(autoprefixerConfig), postcssFlexbugsFixes() ]))
		.pipe(gulp.dest('css'))
		.pipe(postcss([ cssnano(cssnanoConfig) ]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('css'))
		.pipe(stylestats(stylestatsConfig))
		.pipe(gulp.dest('css'))
});

gulp.task('jsVendor', function() {
	return gulp.src(require('./_src/js/vendor.js'))
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
});

gulp.task('jsSite', function() {
	return gulp.src(require('./_src/js/saviomd.js'))
		.pipe(eslint(eslintConfig))
		.pipe(eslint.format())
		.pipe(eslint.failOnError())
		.pipe(concat('saviomd.js'))
		.pipe(gulp.dest('js'))
		.pipe(uglify())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('js'))
});

gulp.task('browserSync', function() {
	browserSync.init(browserSyncConfig);
});

/*
build and dev tasks
====================
*/
gulp.task('default', ['clean'], function() {
	gulp.start('html', 'manifests', 'css', 'js');
});

gulp.task('css', function() {
	gulp.start('cssVendor', 'cssSite');
});

gulp.task('js', function() {
	gulp.start('jsVendor', 'jsSite');
});

gulp.task('dev', ['browserSync'], function() {
	gulp.watch('_src/**/*.jade', ['html', browserSync.reload])
	gulp.watch('_src/manifests/*.jade', ['manifests', browserSync.reload])
	gulp.watch('_src/css/*.scss', ['css', browserSync.reload])
	gulp.watch('_src/js/*.js', ['js', browserSync.reload])
});

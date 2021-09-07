const autoprefixer = require("autoprefixer");
const babel = require("gulp-babel");
const browserSync = require("browser-sync");
const concat = require("gulp-concat");
const cssnano = require("cssnano");
const del = require("del");
const eslint = require("gulp-eslint");
const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const postcssFlexbugsFixes = require("postcss-flexbugs-fixes");
const prettier = require("gulp-prettier");
const projectData = require("./package.json");
const pug = require("gulp-pug");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const scss = require("postcss-scss");
const stylelint = require("stylelint");
const uglify = require("gulp-uglify");

const server = browserSync.create();

const clean = () => del(["+(css|js)", "+(404.html|index.html|manifest.json)"]);

const htmlLint = () =>
  gulp.src("_src/**/*.pug").pipe(prettier()).pipe(gulp.dest("_src"));

const htmlBuild = () =>
  gulp
    .src("_src/pages/*.pug")
    .pipe(pug(projectData.pug))
    .pipe(htmlmin(projectData.htmlmin))
    .pipe(gulp.dest("./"));

const manifestBuild = () =>
  gulp
    .src("_src/manifests/*.pug")
    .pipe(pug(projectData.pug))
    .pipe(htmlmin(projectData.htmlmin))
    .pipe(rename({ extname: ".json" }))
    .pipe(gulp.dest("./"));

const cssLint = () =>
  gulp
    .src("_src/css/*.scss")
    .pipe(postcss([stylelint({ fix: true })], { syntax: scss }))
    .pipe(gulp.dest("_src/css"));

const cssBuild = () =>
  gulp
    .src("_src/css/saviomd.scss", { sourcemaps: true })
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), postcssFlexbugsFixes()]))
    .pipe(gulp.dest("css"))
    .pipe(postcss([cssnano()]))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("css", { sourcemaps: "." }));

const jsLint = () =>
  gulp
    .src("_src/js/*.js")
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(gulp.dest("_src/js"));

const jsBuild = () =>
  gulp
    .src(require("./_src/js/saviomd.js"), { sourcemaps: true })
    .pipe(babel())
    .pipe(concat("saviomd.js"))
    .pipe(gulp.dest("js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("js", { sourcemaps: "." }));

function serve(cb) {
  server.init(projectData.browserSync);
  cb();
}

function reload(cb) {
  server.reload();
  cb();
}

const html = (cb) => gulp.series(htmlLint, htmlBuild, manifestBuild)(cb);

const css = (cb) => gulp.series(cssLint, cssBuild)(cb);

const js = (cb) => gulp.series(jsLint, jsBuild)(cb);

function watch(cb) {
  gulp.watch("_src/**/*.pug", gulp.series(html, reload));
  gulp.watch("_src/css/*.scss", gulp.series(css, reload));
  gulp.watch("_src/js/*.js", gulp.series(js, reload));
  cb();
}

exports.default = gulp.series(clean, gulp.parallel(html, css, js));

exports.dev = gulp.series(serve, watch);

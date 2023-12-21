'use strict';

const browserSync   = require('browser-sync').create(),
    fs              = require('fs'),
    webpack         = require('webpack-stream'),
    gulp            = require('gulp'),
    sass            = require('gulp-sass')(require('sass')),
    clean           = require('gulp-clean'),
    plumber         = require('gulp-plumber'),
    gulpIf          = require('gulp-if'),
    insert          = require('gulp-insert'),
    sourcemaps      = require('gulp-sourcemaps'),
    autoprefixer    = require('gulp-autoprefixer'),
    changedInPlace  = require('gulp-changed-in-place'),
    csso            = require('gulp-csso')

// https://sass-lang.com/documentation/breaking-changes/slash-div

/* Paths and variables */
let domain = 'comparison';
/* End Paths and variables */

function onError(e) {
    console.log(e.toString());
    this.emit('end');
}

/* Service tasks */
function cleanCssMaps(cb) {
    gulp.src('../assets/css/maps', {read: false})
        .pipe(clean({force: true}))
    cb()
}
/* End Service tasks */

function scss(cb) {
    gulp.src('./scss/**/[^_]*.scss', {allowEmpty: true})
        .pipe(plumber({errorHandler: onError}))
        .pipe(sourcemaps.init())
        .pipe(sass.sync({includePaths: ['./scss/']}))
        .pipe(autoprefixer())
        .pipe(changedInPlace({firstPass: true}))
        .pipe(csso())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('../assets/css'));
    cb();
}
function scssRelease(cb) {
    gulp.src('./scss/**/[^_]*.scss', {allowEmpty: true})
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass.sync({includePaths: ['./scss/']}))
        .pipe(autoprefixer())
        .pipe(changedInPlace({firstPass: true}))
        .pipe(csso())
        .pipe(gulp.dest('../assets/css'));
    cb();
}
/* End CSS */


/* JS */
function js(cb) {
    gulp.src('./js/script.js')
        .pipe(webpack(require('./webpack.config.js')(false)))
        .pipe(gulp.dest('../assets/js'));

    cb();
}
function jsRelease(cb) {
    gulp.src('./js/script.js')
        .pipe(webpack(require('./webpack.config.js')(true)))
        .pipe(gulp.dest('../assets/js'));

    cb();
}
/* End JS */

function browserSyncInit(cb) {
    browserSync.init({
        proxy: domain,
        notify: false,
        port: 9000
    })

    gulp.watch([
        '../**/*.php',
        '../assets/css/**/*.css',
        '../assets/js/**/*.js'
    ], {cwd: './'})
        .on('change', function (path, stats) {
            browserSync.reload();
        });
    cb();
}

function watch(cb) {
    gulp.watch('../theme.json', {cwd: './'}, gulp.series(scss, js));
    gulp.watch('./scss/**/*.scss', {cwd: './'}, gulp.series(scss));
    gulp.watch('./js/**/*.js', {cwd: './'}, gulp.series(js));
    cb();
}


exports.release = gulp.series(cleanCssMaps, scssRelease, jsRelease);
exports.default = gulp.series(scss, js, gulp.parallel(browserSyncInit, watch));

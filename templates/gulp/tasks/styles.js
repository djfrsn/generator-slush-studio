
 // Process Styles w/ the exclusion of critical css
var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'), // https://github.com/sindresorhus/gulp-ruby-sass
    prefix = require('gulp-autoprefixer'), // https://github.com/ai/autoprefixer
    comb = require('gulp-csscomb'); // https://www.npmjs.org/package/gulp-csscomb

gulp.task('compile-sass', function () {

    return gulp.src(sourced.sass)
        .pipe(newer(sourced.sass))
        .pipe(filterCritical)
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(sass({sourcemap: true, sourcemapPath: '.', style: 'compact'}))
        .pipe(prefix('last 2 version', "> 1%", "Firefox ESR", "Opera 12.1", "ie 9", "ie 8", "ie 7"))
        .pipe(comb('zen'))
        // Add gulp-notify
        .pipe(gulp.dest(sourced.styles));
});



gulp.task('sync-css', function () {

    return gulp.src(sourced.css)
           .pipe(browserSync.reload({stream:true, once: true}))
           .pipe(gulp.dest(sourced.styles));
});

gulp.task('styles', function(callback) {
        runSequence( 'compile-sass', 'sync-css',
                  callback);
});

 // Process Styles w/ the exclusion of critical css
var gulp = require('gulp');

gulp.task('compile-sass', function () {
  var filterCritical = gulpFilter(['*', '!app/styles/critical/**/*.scss']);

    return gulp.src(sourced.sass)
        .pipe(changed(sourced.app, {hasChanged: changed.compareSha1Digest}))
        .pipe(filterCritical)
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(sass({sourcemap: true, sourcemapPath: '.', style: 'compact'}))
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
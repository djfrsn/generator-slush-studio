// Compile critical css 
var gulp = require('gulp');

gulp.task('compile-critical', function () {

    return gulp.src(sourced.criticalSASS)
        .pipe(changed(sourced.app, {hasChanged: changed.compareSha1Digest}))
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(sass({sourcemap: false, style: 'expanded'}))
        .pipe(gulp.dest(sourced.criticaldir));
});
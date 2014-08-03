// Compile critical css & transport to 'app/'
var gulp = require('gulp'),
    comb = require('gulp-csscomb'), // https://www.npmjs.org/package/gulp-csscomb
    prefix = require('gulp-autoprefixer'); // https://github.com/ai/autoprefixer

gulp.task('compile-critical', function () {

    return gulp.src(sourced.criticalSASS)
        .pipe(newer(sourced.criticalSASS))
        .pipe(plumber({errorHandler: notify.onError()}))
        .pipe(sass({sourcemap: false, style: 'expanded'}))
        .pipe(gulp.dest(sourced.criticaldir));
});
// Inlines critical css
var gulp = require('gulp');
    smoosher = require('gulp-smoosher'); // https://github.com/gabrielflorit/gulp-smoosher
    browserSync = require('browser-sync');

gulp.task('inline-critical',function () {

        return gulp.src(sourced.index)
        .pipe(smoosher())
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(sourced.app));
    });
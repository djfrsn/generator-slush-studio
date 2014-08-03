// Process 'app/lib/styles' & transport to '/dist'
var gulp = require('gulp');
    sass = require('gulp-ruby-sass'); // https://github.com/sindresorhus/gulp-ruby-sass
    comb = require('gulp-csscomb'); // https://www.npmjs.org/package/gulp-csscomb
    prefix = require('gulp-autoprefixer'); // https://github.com/ai/autoprefixer
    minifyCSS = require('gulp-minify-css'); // https://github.com/jonathanepollack/gulp-minify-css
    size = require('gulp-filesize'); // https://github.com/Metrime/gulp-filesize

gulp.task('build-styles', function () {

    return gulp.src(sourced.sass)
        .pipe(newer(sourced.sass))
        .pipe(filterCritical)
        .pipe(sass({sourcemap: false})) 
        .pipe(prefix('last 2 version', "> 1%", "Firefox ESR", "Opera 12.1", "ie 9", "ie 8", "ie 7"))
        .pipe(comb('zen'))
        .pipe(size())
        .pipe(minifyCSS())
        .pipe(size())
        // Add gulp-notify
        .pipe(gulp.dest(dist.styles));
});
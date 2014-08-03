// Process 'app/lib/styles' & transport to '/dist'
var gulp = require('gulp');
    gulpFilter = require('gulp-filter');
    sass = require('gulp-ruby-sass'); // https://github.com/sindresorhus/gulp-ruby-sass
    comb = require('gulp-csscomb'); // https://www.npmjs.org/package/gulp-csscomb
    prefix = require('gulp-autoprefixer'); // https://github.com/ai/autoprefixer
    minifyCSS = require('gulp-minify-css'); // https://github.com/jonathanepollack/gulp-minify-css
    size = require('gulp-filesize'); // https://github.com/Metrime/gulp-filesize

gulp.task('build-styles', function () {
    var filter = gulpFilter(['*', '!app/styles/critical/**/*.scss']);
        source = 'app/lib/styles/**/*.scss';
        dest = 'dist/lib/style/'; // change to /styles if we ever add more than one css file....dont add more than one

    return gulp.src(source)
        .pipe(newer(dest))
        .pipe(filter)
        .pipe(sass({sourcemap: false})) 
        .pipe(prefix('last 2 version', "> 1%", "Firefox ESR", "Opera 12.1", "ie 9", "ie 8", "ie 7"))
        .pipe(comb('zen'))
        .pipe(size())
        .pipe(minifyCSS())
        .pipe(size())
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(dest));
        // Shit for build: minify, clean
});
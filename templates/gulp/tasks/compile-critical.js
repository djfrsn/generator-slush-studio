// Compile critical css & transport to 'app/'
var gulp = require('gulp');
    sass = require('gulp-ruby-sass'); // https://github.com/sindresorhus/gulp-ruby-sass
    comb = require('gulp-csscomb'); // https://www.npmjs.org/package/gulp-csscomb
    prefix = require('gulp-autoprefixer'); // https://github.com/ai/autoprefixer

gulp.task('compile-critical', function () {
    var source = 'app/lib/styles/critical/**/*.scss';
        dest = 'app/lib/styles/critical/';

    return gulp.src(source)
        .pipe(newer(source))
        .pipe(plumber())
        .pipe(sass({sourcemap: false, style: 'expanded'}))
        .pipe(prefix('last 2 version', "> 1%", "Firefox ESR", "Opera 12.1", "ie 9", "ie 8", "ie 7"))
        .pipe(comb('zen'))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(dest));
});
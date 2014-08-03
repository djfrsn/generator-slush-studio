
 // Process Styles w/ the exclusion of critical css
var gulp = require('gulp'),
    gulpFilter = require('gulp-filter'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-ruby-sass'), // https://github.com/sindresorhus/gulp-ruby-sass
    prefix = require('gulp-autoprefixer'), // https://github.com/ai/autoprefixer
    comb = require('gulp-csscomb'); // https://www.npmjs.org/package/gulp-csscomb

gulp.task('compile-sass', function () {
    var filter = gulpFilter(['*', '!app/styles/critical/**/*.scss']),
        source = 'app/lib/styles/**/*.scss',
        dest = 'app/lib/styles/';

    return gulp.src(source)
        .pipe(newer(source))
        .pipe(filter)
        .pipe(plumber())
        .pipe(sass({sourcemap: true, sourcemapPath: '.', style: 'compact'}))
        .pipe(prefix('last 2 version', "> 1%", "Firefox ESR", "Opera 12.1", "ie 9", "ie 8", "ie 7"))
        .pipe(comb('zen'))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(dest));
});



gulp.task('sync-css', function () {
    var source = 'app/lib/styles/paint.css',
        dest = 'app/lib/styles/';

    return gulp.src(source)
           .pipe(browserSync.reload({stream:true, once: true}))
           .pipe(gulp.dest(dest));
});

gulp.task('styles', function(callback) {
        runSequence( 'compile-sass', 'sync-css',
                  callback);
});
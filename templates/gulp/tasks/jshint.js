// Lint js 
var gulp = require('gulp');
    gulpFilter = require('gulp-filter');
    jshint = require("gulp-jshint");
    stylish = require('jshint-stylish');

gulp.task('jshint', function() {
        var app = 'app/lib/js/**/*.js';
            filter = gulpFilter([ '*', '!app/lib/js/brush/*.js', '!app/lib/js/vendor/*.js' ]);

            return gulp.src(app)
            .pipe(filter)
            .pipe(newer(app))
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            // Add gulp-notify;
});
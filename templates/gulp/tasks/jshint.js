// Lint js 
var gulp = require('gulp');
    jshint = require("gulp-jshint");
    stylish = require('jshint-stylish');

gulp.task('jshint', function() {

            return gulp.src(sourced.jsdir)
            .pipe(filterBrushAndVendors)
            .pipe(newer(sourced.jsdir))
            .pipe(jshint())
            .pipe(jshint.reporter(stylish))
            // Add gulp-notify;
});
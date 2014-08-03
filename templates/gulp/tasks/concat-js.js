// Concat JS 
var gulp = require('gulp');
    plumber = require('gulp-plumber');
    concat = require('gulp-concat');
    
    gulp.task('concat-js', function() { 

            return gulp.src(sourced.jslib)
            .pipe(plumber())
            .pipe(concat('brush.js'))
            // Add gulp-notify
            .pipe(gulp.dest(sourced.brushdir));
});
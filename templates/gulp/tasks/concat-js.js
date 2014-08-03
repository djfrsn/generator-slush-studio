// Concat JS 
var gulp = require('gulp');
    gulpFilter = require('gulp-filter');
    plumber = require('gulp-plumber');
    concat = require('gulp-concat');
    
    gulp.task('concat-js', function() { // js is concatenated from left to right 
        var source = [ 'app/lib/js/vendor/*.js', 'app/lib/js/components/component.js' ];
            dest = 'app/lib/js/brush/';

            return gulp.src(source)
            .pipe(plumber())
            .pipe(concat('brush.js'))
            // Add gulp-notify
            .pipe(gulp.dest(dest));
});
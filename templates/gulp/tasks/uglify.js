// Minify JS 
var gulp = require('gulp'),
	uglify = require('gulp-uglify');

gulp.task('uglify', function() {

  return gulp.src(sourced.brush)
  	.pipe(plumber({errorHandler: notify.onError()}))
  	.pipe(uglify())
    .pipe(gulp.dest(sourced.brushdir))
});
// Minify JS 
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {

  return gulp.src(sourced.brush)
  	.pipe(uglify())
    .pipe(gulp.dest(sourced.brushdir))
});
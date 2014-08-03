// Minify JS 
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('uglify', function() {
  var source = [ 'app/lib/js/brush/brush.js' ];
  var dest = 'app/lib/js/brush/';

  return gulp.src(source)
  	.pipe(uglify())
    .pipe(gulp.dest(dest))
});
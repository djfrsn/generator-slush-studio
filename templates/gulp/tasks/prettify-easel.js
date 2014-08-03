// Prettify on easel  
var gulp = require('gulp');
	prettify = require('gulp-prettify');

gulp.task('prettify-easel', function () {
    var easel = 'app/easel.html';
    dest = 'app/';
	
	return gulp.src(easel)
	.pipe(prettify({
    "preserve-newlines": true
})) // prettified easel to work on
	.pipe(gulp.dest(dest));
});
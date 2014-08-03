// Prettify on easel  
var gulp = require('gulp'),
	prettify = require('gulp-prettify');

gulp.task('prettify-index', function () {
	
	return gulp.src(sourced.index)
	.pipe(plumber({errorHandler: notify.onError()}))
	.pipe(prettify({
    "preserve-newlines": true
})) // prettified easel to work on
	.pipe(gulp.dest(sourced.app));
});
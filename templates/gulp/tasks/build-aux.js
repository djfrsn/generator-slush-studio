// Transport selected files to 'dist/'
var gulp = require('gulp');
    
    gulp.task('build-aux', function() {

	return gulp.src(dist.aux) 
		.pipe(gulp.dest(dist.dir));
});

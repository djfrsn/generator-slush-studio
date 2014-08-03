// Transport selected files to 'dist/'
var gulp = require('gulp');
    
    gulp.task('build-aux', function() {
	var source = [
        'app/humans.txt',
        'app/robots.txt',
        'app/favicon.ico'
    ];    	
		dest = 'dist/';

	return gulp.src(source)
        .pipe(newer(dest)) 
		.pipe(gulp.dest(dest));
});

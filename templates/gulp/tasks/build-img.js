// Minify imgs & transport to 'dist/'
var gulp       = require('gulp');
	imagemin   = require('gulp-imagemin'); // https://github.com/sindresorhus/gulp-imagemin
	size = require('gulp-filesize'); // https://github.com/Metrime/gulp-filesize
	
gulp.task('build-img', function() {
	var source = './app/lib/img/**/*';
		dest = './dist/lib/img';

	return gulp.src(source)
        .pipe(newer(dest)) // Pipe newer files
		.pipe(size())
		.pipe(imagemin()) // Optimize img
		.pipe(size())
		.pipe(gulp.dest(dest));
});

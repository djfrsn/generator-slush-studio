// Minify imgs & transport to 'dist/'
var gulp       = require('gulp');
	imagemin   = require('gulp-imagemin'); // https://github.com/sindresorhus/gulp-imagemin
	size = require('gulp-filesize'); // https://github.com/Metrime/gulp-filesize
	
gulp.task('build-img', function() {

	return gulp.src(dist.img)
        .pipe(newer(dist.img)) // Pipe newer files
		.pipe(size())
		.pipe(imagemin()) // Optimize img
		.pipe(size())
		.pipe(gulp.dest(dist.imgdir));
});

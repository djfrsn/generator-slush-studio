// Minify html & transport to 'dist/'
var gulp = require('gulp'),
	fileinclude = require('gulp-file-include'), // https://github.com/coderhaoxin/gulp-file-include
	htmlmin = require('gulp-htmlmin'), // https://github.com/jonschlinkert/gulp-htmlmin
	size = require('gulp-filesize'), // https://github.com/Metrime/gulp-filesize
	rename = require("gulp-rename");

gulp.task('build-scaffold', function() {

	return gulp.src(sourced.index)
		.pipe(fileinclude())
		.pipe(size())
		.pipe(htmlmin({collapseWhitespace: true, removeComments: true, minifyCSS: true, minifyJS: true}))
		.pipe(rename("index.html"))
		.pipe(size())
		.pipe(gulp.dest(dist.dir));
});

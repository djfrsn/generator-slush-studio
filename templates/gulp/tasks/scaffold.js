// Compile scaffold file-includes, prettify stream & transport to 'app/index.html'
var gulp = require('gulp');
	remember = require('gulp-remember'); 
	fileinclude = require('gulp-file-include'); // https://github.com/coderhaoxin/gulp-file-include
	prettify = require('gulp-prettify');
	rename = require("gulp-rename");

gulp.task('compile-scaffold', function() {
	var source = [ 'app/lib/include/**/*.html', 'app/easel.html' ];
		includes = 'app/lib/include/**/*.html';
		easel = 'app/easel.html'; // Create your app in easel & use file-includes
		dest = 'app/';

	return gulp.src(source)
		.pipe(newer(includes))
		.pipe(remember(easel))
		.pipe(fileinclude())
		.pipe(rename("index.html"))
		.pipe(browserSync.reload({stream:true, once: true}))
		.pipe(gulp.dest(dest));
});

gulp.task('sync-css', function () {
    var source = 'app/lib/styles/paint.css';
        dest = 'app/lib/styles/';

    return gulp.src(source)
           .pipe(reload({stream:true}))
           .pipe(gulp.dest(dest));
});

gulp.task('scaffold', function(callback) {
        runSequence( 'compile-scaffold', 'sync-css',
                  callback);
});
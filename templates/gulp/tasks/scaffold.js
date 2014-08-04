// Compile scaffold file-includes, prettify stream & transport to 'app/index.html'
var gulp = require('gulp'),
	remember = require('gulp-remember'), 
	rename = require("gulp-rename");

gulp.task('compile-scaffold', function() {

	return gulp.src(sourced.html)
		.pipe(changed(sourced.includes))
		.pipe(remember(sourced.easel))
		.pipe(plumber({errorHandler: notify.onError()}))
		.pipe(fileinclude())
		.pipe(rename("index.html"))
		.pipe(browserSync.reload({stream:true, once: true}))
		.pipe(gulp.dest(sourced.app));
});

gulp.task('sync-css', function () {

    return gulp.src(sourced.css)
           .pipe(reload({stream:true}))
           .pipe(gulp.dest(sourced.styles));
});

gulp.task('scaffold', function(callback) {
        runSequence( 'compile-scaffold', 'sync-css',
                  callback);
});
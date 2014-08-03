var gulp        = require('gulp');
	browserSync = require('browser-sync');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: sourced.app
        }
    });
});

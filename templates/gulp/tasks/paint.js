var gulp = require('gulp');

gulp.task('crit', function(callback) {
		runSequence( 'compile-critical', 'inline-critical', 'scaffold',
			      callback);
});

gulp.task('paint', [ 'browser-sync'], function () {
    gulp.watch([ 'app/lib/styles/**/*.scss', '!app/lib/styles/critical/*.css', '!app/lib/styles/critical/**/*.scss'],
     	['styles']);
    gulp.watch([ '!app/lib/styles/**/*.scss', 'app/lib/styles/critical/**/*.scss'],
    	['crit']);
    gulp.watch([ 'app/lib/include/**/*.html', 'app/easel.html'],
    	['scaffold']);
});
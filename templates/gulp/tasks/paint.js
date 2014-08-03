var gulp = require('gulp');

gulp.task('crit', function(callback) {
		runSequence( 'compile-critical', 'inline-critical', 'scaffold',
			      callback);
});

gulp.task('paint', [ 'setWatch', 'browser-sync'], function () {
    gulp.watch([ sourced.sass, sourced.ignoreCritCSS, sourced.ignoreCritSASS],
     	['styles']);
    gulp.watch([ sourced.ignoreSASS, sourced.criticalSASS],
    	['crit']);
    gulp.watch([ sourced.includes, sourced.easel],
    	['scaffold']);
    gulp.watch([ sourced.jsdir],
    	['brush']);
});
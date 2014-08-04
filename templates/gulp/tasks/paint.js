var gulp = require('gulp');

gulp.task('crit', function(callback) {
		runSequence( 'compile-critical', 'scaffold', 'inline-critical', 
			      callback); // Compile crit css, then refresh index head with new script
}); // tag using scaffold, finally we can convert the script tag to inline css with inline-critical

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
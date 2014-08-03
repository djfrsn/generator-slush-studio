   // Run all task essential to compile optimized '/app' 
var gulp = require('gulp');
	runSequence = require('run-sequence');

	// This will run in this order:
	// * styles, compile-critical, scaffold in series
	// * inline-critical and brush in parallel
	// * Finally call the callback function
gulp.task('studio', function(callback) {
		runSequence('styles', 'compile-critical', 'scaffold',
	      [ 'inline-critical', 'brush' ],
	      callback);
});
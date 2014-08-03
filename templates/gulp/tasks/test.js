   // Run test on task
var gulp = require('gulp');
	runSequence = require('run-sequence');

	// This will run in this order:
	// * styles, compile-critical, scaffold in series
	// * inline-critical and brush in parallel
	// * Finally call the callback function
gulp.task('test', function(callback) {
		runSequence('studio', 'build-studio',
	      callback);
});
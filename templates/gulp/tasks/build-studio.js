// Run build task & transport to 'dist/'
var gulp = require('gulp');
	runSequence = require('run-sequence');

	// This will run in this order:
	// * styles-build, compile-critical  in series
	// * scaffold and build-aux in parallel
	// * inline-critical, build-scaffold in series
	// * Finally call the callback function
gulp.task('build-studio', function(callback) {
		runSequence('build-styles', 'compile-critical',
	      ['scaffold', 'brush', 'build-aux'],
	      'inline-critical', 'build-scaffold',
	      callback);
});

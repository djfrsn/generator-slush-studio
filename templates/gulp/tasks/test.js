   // Run test on task
var gulp = require('gulp');

gulp.task('test-app', function(callback) {
		runSequence( 'compile-sass', 'sync-css', 'compile-critical', 'scaffold',
	      ['inline-critical', 'concat-js'],
	      'studio',
	      callback);
});

gulp.task('test-build', function(callback) {
		runSequence( 'clean', 'build-styles', 'compile-critical',
	      ['scaffold', 'brush', 'build-aux'],
	      'inline-critical', 'build-scaffold',
	      callback);
});

gulp.task('test', function(callback) {
		runSequence( 'test-app',
	      ['test-build'],
	      callback);
});
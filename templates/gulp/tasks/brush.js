// Lint & concat js 
var gulp = require('gulp');

    gulp.task('brush', function(callback) {
        runSequence(  'jshint', 'concat-js', 'uglify',
          callback);
    });


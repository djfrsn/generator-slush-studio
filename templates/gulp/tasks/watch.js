// Watch 'app/' folder for changes
var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
	gulp.watch('app/lib/styles/**/*.scss', ['paint']);
	gulp.watch('app/lib/img/**/*', ['img']);
	gulp.watch('app/lib/js/**/*.js', ['brush']);
	gulp.watch(['app/lib/include/**/*.html', 'app/easel.html'], ['paint']);
});

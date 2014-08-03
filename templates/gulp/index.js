var fs = require('fs');
	onlyScripts = require('./util/scriptFilter');
	tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);
	gulpFilter = require('gulp-filter');
	filterCritical = gulpFilter(['*', '!app/styles/critical/**/*.scss']);
	filterBrushAndVendors = gulpFilter([ '*', '!app/lib/js/brush/*.js', '!app/lib/js/vendor/*.js' ]);
	sourced = {
		app: 'app/',
		easel: 'app/easel.html',
		index: 'app/index.html',
		html: [ 'app/lib/include/**/*.html', 'app/easel.html' ],
		includes: 'app/lib/include/**/*.html',
		sass: 'app/lib/styles/**/*.scss',
		css: 'app/lib/styles/paint.css',
		criticalSASS: 'app/lib/styles/critical/**/*.scss',
		critical: 'app/lib/styles/critical/',
		styles: 'app/lib/styles/',
		brush: 'app/lib/js/brush/brush.js',
		brushdir: 'app/lib/js/brush/', 
		jsdir: 'app/lib/js/**/*.js',
		jslib: [ 'app/lib/js/vendor/*.js', 'app/lib/js/components/component.js' ], // js is concatenated from left to right 
		ignoreSASS: '!app/lib/styles/**/*.scss',
		ignoreCritCSS: '!app/lib/styles/critical/*.css',
		ignoreCritSASS: '!app/lib/styles/critical/**/*.scss'
	};
	dist = {
		styles: 'dist/lib/styles/',
		img: './app/lib/img/**/*',
		imgdir: './dist/lib/img',
		aux: [ 'app/humans.txt', 'app/robots.txt', 'app/favicon.ico' ],
		dir: 'dist/'
	};

tasks.forEach(function(task) {
	require('./tasks/' + task);
});

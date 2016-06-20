var gulp = require('gulp'),
	config = require('../config'),
	sync = require('browser-sync');

gulp.task('watch', ['serve'], function() {
	gulp.watch(config.paths.styles.assets, ['styles']);
	gulp.watch(config.paths.scripts.assets, ['scripts']);
	gulp.watch(config.paths.images.assets, ['images']);
	gulp.watch([
		config.paths.styles.public + '/*.css',
		config.paths.scripts.public + '/*.js',
		config.paths.images.public + '/**/*',
		config.paths.views + '/**/*.html',		
		'**/*.php'
	]).on('change', sync.reload);
});
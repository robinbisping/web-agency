var gulp = require('gulp'),
	config = require('../config');

gulp.task('watch', function() {
	gulp.watch(config.paths.styles.assets, ['styles']);
	gulp.watch(config.paths.scripts.assets, ['scripts']);
	gulp.watch(config.paths.images.assets, ['images']);
});
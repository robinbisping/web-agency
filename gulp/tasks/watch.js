var gulp = require('gulp'),
	config = require('../config');

gulp.task('watch', function() {
	gulp.watch(config.paths.views + '/**/**.html', ['html-watch']);
	gulp.watch(config.paths.styles.assets, ['styles-watch']);
	gulp.watch(config.paths.scripts.assets, ['scripts-watch']);
	gulp.watch(config.paths.images.assets, ['images-watch']);
});
var gulp = require('gulp'),
	config = require('../config');

gulp.task('fonts', function() {
	return gulp.src([
			config.paths.fonts.assets,
			config.paths.modules.node + '/font-awesome/fonts/fontawesome-webfont.*'
		])
		.pipe(gulp.dest(config.paths.fonts.public));
});
var gulp = require('gulp'),
	config = require('../config'),
	clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src([
			config.paths.styles.public + '/**/*',
			config.paths.scripts.public + '/**/*',
			config.paths.fonts.public + '/**/*',
			config.paths.images.public + '/**/*'
		])
		.pipe(clean());
});
var gulp = require('gulp'),
	config = require('../config'),
	imagemin = require('gulp-imagemin');

gulp.task('images', function() {
	return gulp.src(config.paths.images.assets)
		.pipe(imagemin())
		.pipe(gulp.dest(config.paths.images.public));
});
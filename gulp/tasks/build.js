var gulp = require('gulp'),
	config = require('../config');

gulp.task('build', ['styles', 'scripts', 'fonts', 'images']);
var gulp = require('gulp'),
	config = require('../config'),
	sequence = require('run-sequence');

gulp.task('build', function() {
	sequence('clean', ['styles', 'scripts', 'fonts', 'images']);
});
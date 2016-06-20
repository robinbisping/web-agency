var gulp = require('gulp'),
	config = require('../config'),
	sequence = require('run-sequence');

gulp.task('default', function() {
	sequence('build', 'watch');
});
var gulp = require('gulp'),
	config = require('../config'),
	connect = require('gulp-connect-php');

gulp.task('serve', function() {
	connect.server({
		base: './public'
	});
});
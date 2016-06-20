var gulp = require('gulp'),
	config = require('../config'),
	connect = require('gulp-connect-php'),
	sync = require('browser-sync').create();

gulp.task('serve', function() {
	connect.server({
		base: './public'
	}, function () {
		sync.init({
			proxy: '127.0.0.1:8000'
		});
 	});
});
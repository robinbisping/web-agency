var gulp = require('gulp'),
	config = require('../config'),
	connect = require('gulp-connect-php'),
	browsersync = require('browser-sync').create();

gulp.task('serve', function() {
	connect.server({
		base: './public'
	}, function () {
		browsersync.init({
			proxy: '127.0.0.1:8000'
		});
	});
});

gulp.task('html-watch', function(done) {
	browsersync.reload();
	done();
});

gulp.task('styles-watch', ['styles'], function(done) {
	browsersync.reload();
	done();
});

gulp.task('scripts-watch', ['scripts'], function(done) {
	browsersync.reload();
	done();
});

gulp.task('images-watch', ['images'], function(done) {
	browsersync.reload();
	done();
});
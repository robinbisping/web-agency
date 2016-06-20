var gulp = require('gulp'),
	config = require('../config'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	insert = require('gulp-insert'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
	return gulp.src(config.paths.scripts.assets)
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(insert.prepend('/*\nThis file is auto-generated.\nDo not edit it or else you will lose changes next time you compile.\n*/\n\n'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.scripts.public));
});
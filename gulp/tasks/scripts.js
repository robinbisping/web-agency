var gulp = require('gulp'),
	config = require('../config'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	header = require('gulp-header'),
	sourcemaps = require('gulp-sourcemaps');

var banner = [
	'/*',
	'This file is auto-generated. Do not edit it.',
	'If you want to know which projects were used for this website, check the file `/packages.txt` out.',
	'*/',
	'',
	''].join('\n');

gulp.task('scripts', function() {
	return gulp.src(config.paths.scripts.assets)
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(header(banner))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.scripts.public));
});
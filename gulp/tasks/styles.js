var gulp = require('gulp'),
	config = require('../config'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleancss = require('gulp-clean-css'),
	header = require('gulp-header'),
	sourcemaps = require('gulp-sourcemaps');

var banner = [
	'/*',
	'This file is auto-generated. Do not edit it.',
	'If you want to know which projects were used for this website, check the file `/packages.txt` out.',
	'*/',
	'',
	''].join('\n');

gulp.task('styles', function() {
	return gulp.src(config.paths.styles.assets)
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				config.paths.modules.node + '/normalize.css',
				config.paths.modules.node + '/breakpoint-sass/stylesheets',
				config.paths.modules.node + '/susy/sass',
				config.paths.modules.node + '/font-awesome/scss'
			]
		}))
		.pipe(concat('all.css'))
		.pipe(autoprefixer({
			browsers: ['> 5%']
		}))
		.pipe(cleancss({
			keepSpecialComments: 0
		}))
		.pipe(header(banner))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.styles.public))
});
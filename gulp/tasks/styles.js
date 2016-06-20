var gulp = require('gulp'),
	config = require('../config'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	autoprefixer = require('gulp-autoprefixer'),
	cleancss = require('gulp-clean-css'),
	insert = require('gulp-insert'),
	sourcemaps = require('gulp-sourcemaps');

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
		.pipe(insert.prepend('/*\nThis file is auto-generated.\nDo not edit it or else you will lose changes next time you compile.\n*/\n\n'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.styles.public))
});
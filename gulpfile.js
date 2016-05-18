'use strict';
var gulp = require('gulp');

// Load Plugins
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Paths
var paths = {
	resources: {
		assets: './resources/assets',
		views: './resources/views'
	},
	npm: {
		susy: './node_modules/susy',
		jquery: './node_modules/jquery',
		fontAwesome: './node_modules/font-awesome'
	},
	public: './public'
}

// Styles
gulp.task('styles', function() {
	return gulp.src(paths.resources.assets + '/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				paths.npm.susy + '/sass',
				paths.npm.fontAwesome + '/scss'
			]
		}).on('error', sass.logError))
		.pipe(concat('all.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.public + '/css'))
});


// Scripts
gulp.task('scripts', function() {
	return gulp.src([paths.npm.jquery + '/dist/jquery.js', paths.resources.assets + '/js/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.public + '/js'))
});

// Fonts
gulp.task('fonts', function() {
	return gulp.src([
			paths.npm.fontAwesome + '/fonts/fontawesome-webfont.*'
		])
		.pipe(gulp.dest(paths.public + '/fonts'));
});

// Watch
gulp.task('watch', ['build'], function() {
	gulp.watch(paths.src.assets + '/sass/*.scss', ['styles']);
	gulp.watch(paths.src.assets + '/js/*.js', ['scripts']);
});

// Build
gulp.task('build', [
	'styles',
	'scripts',
	'fonts'
]);

// Default Task
gulp.task('default', ['build']);
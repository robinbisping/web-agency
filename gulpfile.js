'use strict';
var gulp = require('gulp');

// Load Plugins
var browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect-php'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps');

// Paths
var paths = {
	resources: {
		assets: './resources/assets',
		views: './resources/views'
	},
	npm: {
		fontAwesome: './node_modules/font-awesome',
		jquery: './node_modules/jquery',
		normalize: './node_modules/normalize.css',
		susy: './node_modules/susy'
	},
	public: './public'
}

// Styles
gulp.task('styles', function() {
	return gulp.src(paths.resources.assets + '/scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				paths.npm.normalize,
				paths.npm.susy + '/sass',
				paths.npm.fontAwesome + '/scss'
			]
		}).on('error', sass.logError))
		.pipe(concat('all.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.public + '/css'));
});


// Scripts
gulp.task('scripts', function() {
	return gulp.src([paths.npm.jquery + '/dist/jquery.js', paths.resources.assets + '/js/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.public + '/js'));
});

// Fonts
gulp.task('fonts', function() {
	return gulp.src([
			paths.npm.fontAwesome + '/fonts/fontawesome-webfont.*'
		])
		.pipe(gulp.dest(paths.public + '/fonts'));
});

// Serve
gulp.task('serve', function() {
	connect.server({
		base: 'public'
	}, function (){
		browserSync({
			proxy: '127.0.0.1:8000'
		});
 	});
});

// Watch
gulp.task('watch', ['build', 'serve'], function() {
	gulp.watch(paths.resources.assets + '/scss/*.scss', ['styles']);
	gulp.watch(paths.resources.assets + '/js/*.js', ['scripts']);
	gulp.watch(['**/*.php', paths.resources.views + '/**/*.html', paths.public + '/css/*.css', paths.public + '/js/*.js']).on('change', function () {
		browserSync.reload();
	});
});

// Build
gulp.task('build', [
	'styles',
	'scripts',
	'fonts'
]);

// Default Task
gulp.task('default', ['build']);
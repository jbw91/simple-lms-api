'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	nodemon = require('gulp-nodemon');

gulp.task('lint', function() {
	return gulp.src(['./app/**/*.js'])
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter(stylish))
		.pipe(jshint.reporter('fail'));
});

gulp.task('serve', function () {
	nodemon({script: 'app/bin/www',
			tasks: ['lint']})
	.on('restart', function () {
		console.log('reloaded...');
	});
});

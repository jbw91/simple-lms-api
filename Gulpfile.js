var gulp = require('gulp'),
	nodemon = require('gulp-nodemon');

gulp.task('serve', function () {
	nodemon({script: 'bin/www'})
	.on('restart', function () {
		console.log('reloaded...');
	});
});

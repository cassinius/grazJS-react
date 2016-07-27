const gulp 						= require('gulp');
const clean 					= require('gulp-clean');
const mocha 					= require('gulp-mocha');
// const babel           = require('gulp-babel');
const istanbul 				= require('gulp-istanbul');
const webpack					= require('webpack-stream');
const browserSync 		= require('browser-sync').create();

//----------------------------
// PATHS
//----------------------------
const paths = {
	sources: ['src/**/*.js', 'src/**/*.jsx', 'index.html'],
	tests: ['test/**/*.js'],
	clean: [''],
	public: ['index.html', 'public/bundle.js']
};


gulp.task('clean', function() {

});


gulp.task('build', ['clean'], function() {
	return gulp.src('') // specified in webpack config
		.pipe(webpack( require('./webpack.config.js' )))
		.pipe(gulp.dest('public/'));
});


//----------------------------
// BROWSER TASKS
//----------------------------
gulp.task('webpackBrowserSync', function() {
	browserSync.init({
		files: ['public/*', 'index.html'],
		server: {
			baseDir: './'
		}
	});

	gulp.watch(paths.sources, ['build']);
	gulp.watch(paths.public).on('change', browserSync.reload);
});


//----------------------------
// MAIN TASKS
//----------------------------
gulp.task('default', ['webpackBrowserSync']);

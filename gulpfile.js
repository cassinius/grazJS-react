const gulp 						= require('gulp');
const clean 					= require('gulp-clean');
const mocha 					= require('gulp-mocha');
const uglify 					= require('gulp-uglify');
const stylus 					= require('gulp-stylus');
const istanbul 				= require('gulp-istanbul');
const webpack					= require('webpack-stream');
const rename 					= require("gulp-rename");
const concat 					= require('gulp-concat');
const browserSync 		= require('browser-sync').create();


//----------------------------
// PATHS
//----------------------------
const paths = {
	sources: ['src/**/*.js', 'src/**/*.jsx', 'src/**/*.styl', 'index.html', 'webpack.config.js'],
	tests: ['test/**/*.js'],
	clean: ['public/*', 'coverage'],
	public: ['index.html', 'public/bundle.js'],
	styles: ['src/styles/**/*.styl']
};


gulp.task('clean', function() {
	return gulp.src(paths.clean)
		.pipe(clean())
});


gulp.task('build', ['clean'], function() {
	return gulp.src('') // specified in webpack config
		.pipe(webpack( require('./webpack.config.js' )))
		.pipe(gulp.dest('public/'));
});


gulp.task('uglify', ['stylus'], function() {
	return gulp.src('public/bundle.js')
		.pipe(uglify())
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest('public/'));
});


gulp.task('stylus', ['build'], function () {
	return gulp.src(paths.styles)
		.pipe(stylus({
			compress: true
		}))
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest('public/'));
});


//----------------------------
// BROWSER TASKS
//----------------------------
gulp.task('webpackBrowserSync', ['stylus'], function() {
	browserSync.init({
		files: ['public/bundle.js', 'index.html'],
		server: {
			baseDir: './'
		},
		open: true
	});

	gulp.watch(paths.sources, ['uglify']);
	gulp.watch(paths.public).on('change', browserSync.reload);
});


//----------------------------
// MAIN TASKS
//----------------------------
gulp.task('default', ['webpackBrowserSync']);

var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	color_rgba_fallback = require('postcss-color-rgba-fallback'),
	opacity = require('postcss-opacity'),
	pseudoelements = require('postcss-pseudoelements'),
	vmin = require('postcss-vmin'),
	pixrem = require('pixrem'),
	will_change = require('postcss-will-change');

var paths = {
	cssSource: 'src/css/',
	cssDestination: 'dist/css/'
};

gulp.task('style', function() {
	var processors = [
		will_change,
		autoprefixer,
		color_rgba_fallback,
		opacity,
		pseudoelements,
		vmin,
		pixrem
	];
	return gulp.src(paths.cssSource + '**/*.css')
		.pipe(sourcemaps.init())
		.pipe(postcss(processors))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.cssDestination));
});

gulp.watch(paths.cssSource + '**/*.css', ['style']);

gulp.task('default', ['style']);
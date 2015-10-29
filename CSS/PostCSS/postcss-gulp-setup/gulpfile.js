var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');

gulp.task('css', function() {
	//PostCSS插件
	var processors = [
		// 处理浏览器私有前缀
		autoprefixer({browsers: ['last 3 version']}),//传递参数
		//使用CSS未来的语法
		cssnext,
		//像Sass的函数
		precss
	];
	return gulp.src('./src/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'));
});
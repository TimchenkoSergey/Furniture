'use strict';

const gulp       = require('gulp');
const minify     = require('gulp-minify-css');
const prefix     = require('gulp-autoprefixer');
const sass       = require('gulp-sass');
const rename     = require('gulp-rename');
const concat     = require('gulp-concat');
const sourceMaps = require('gulp-sourcemaps');
const uglify     = require('gulp-uglify');
const babel      = require('gulp-babel');
const imageOptim = require('gulp-imagemin');
const flatten    = require('gulp-flatten');

gulp.task('css', function() {
	gulp.src([
			'source/public/**/*.scss',
			'!source/public/node_modules/*.scss'
		])
		.pipe(sass())
		.pipe(prefix('last 5 versions','> 1%','ie 9'))
		.pipe(minify())
		.pipe(gulp.dest(function (file) {
            return file.base;
        }));
});


gulp.task('images', function() {
    gulp.src([
    		'source/public/img/*.png',
    		'source/public/img/*.jpg'
    	])
		.pipe(imageOptim())
	    .pipe(gulp.dest('build/public/img/'));
});

gulp.task('dist', function () {
	gulp.src([
		'source/config/**/*.js',
		'source/controlers/**/*.js',
		'source/libs/**/*.js',
		'source/middlewares/**/*.js',
		'source/models/**/*.js',
		'source/routes/*.js',
		'source/app.js'
	], {base : '.'})
	.pipe(babel({
		presets: ['es2015', 'stage-2']
	}))
	.pipe(gulp.dest('./build/'));

	gulp.src('./config/*.json')
	 .pipe(gulp.dest('./build/config/'));

	gulp.src('./public/**/*')
		.pipe(gulp.dest('./build/public/'));

	gulp.src('./package.json')
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
	gulp.watch('source/public/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'js', 'images']);
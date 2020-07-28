const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
// const postcss = require('gulp-postcss');
// const autoprefixer = require('autoprefixer');
// const cssnano = require('cssnano');
const cleanCSS = require('gulp-clean-css');
const { src, series, parallel, dest, watch } = require('gulp');
const jsPath = 'src/js/*.js';
const cssPath = 'src/css/*.css';

function copyHtml() {
	return src('src/*.html').pipe(gulp.dest('dist')); //copies all html files into dist folder
} 

// function copy() {
// 	return src('src/fonts/*').pipe(gulp.dest('dist/assets/fonts')); //copies all files
// } 

function imgTask() {
	return src('src/images/**/*').pipe(imagemin()).pipe(gulp.dest('dist/images')); //optimizes all the images at once
}  

function jsTask() {
	return src(jsPath)
	  .pipe(sourcemaps.init())     //initialized the sourcemaps
	  // .pipe(concat('all.js'))      //concatenates all the js files
	  .pipe(terser())              //minifies the js files
	  .pipe(sourcemaps.write('.'))
	  .pipe(dest('dist/assets/js'));
}

function cssTask() {
	return src(cssPath)
	  .pipe(sourcemaps.init())    
	  // .pipe(concat('style.css'))   //concatenates all css files into one single css file    
	  // .pipe(postcss([autoprefixer(),cssnano()])) 
	  .pipe(cleanCSS())          
	  .pipe(sourcemaps.write('.'))
	  .pipe(dest('dist/assets/css'));
}

function watchTask() {
	watch([cssPath, jsPath], {interval: 1000},parallel(cssTask, jsTask));
}


// exports.copy = copy;
exports.cssTask = cssTask;
exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.copyHtml = copyHtml;  //private function to execute one specific function
exports.default = series(
	parallel(copyHtml, imgTask,jsTask, cssTask),
    watchTask
 );      //default function for gulp to execute all the functions in gulp file  
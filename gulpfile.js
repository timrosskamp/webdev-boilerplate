'use strict';

// GENERAL
const gulp = require('gulp');
const pump = require('pump');
const concat = require('gulp-concat');

// CSS
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

gulp.task('build', done => {
	pump([
		gulp.src([
			'src/scss/1-settings/*.scss',
			'src/scss/2-tools/*.scss',
			'src/scss/3-generic/*.scss',
			'src/scss/4-elements/*.scss',
			'src/scss/5-objects/*.scss',
			'src/scss/6-components/*.scss',
			'src/scss/7-utilities/*.scss'
		]),
		concat('style.css'),
		sass({
			includePaths: [
				'./node_modules'
			]
		}),
		postcss([
            mqpacker({
                sort: true
			}),
			cssnano({
				discardComments: {
					removeAll: true
				}
			})
        ]),
		gulp.dest('assets/css')
	], done);
});

gulp.task('watch', () => {
	gulp.watch(['src/scss/**'], {cwd: __dirname}, ['build']);
});
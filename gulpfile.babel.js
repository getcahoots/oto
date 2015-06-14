/*
 * @getcahoots/oto
 *
 * Copyright Cahoots.pw
 * MIT Licensed
 *
 */

/**
 * @author André König <andre@cahoots.ninja>
 *
 */

'use strict';

let gulp = require('gulp');
let postcss = require('gulp-postcss');
let vars = require('postcss-simple-vars');
let atimport = require('postcss-import');
let concat = require('gulp-concat');

gulp.task('styles', () => {
	return gulp.src('./**/*.scss')
		.pipe(postcss([
			vars(),
			atimport()
		]))
		.pipe(concat('oto.css'))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['styles']);

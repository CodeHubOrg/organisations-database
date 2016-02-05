"use strict";

// grab gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),  
    jshint = require('gulp-jshint'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream');

// define default task and add the watch task to it
gulp.task('default', ['build-es6-react']);

// not doing the obvious stuff yet, like conactenating + minifying 
// stylesheets; to follow!

// configure the jshint task
gulp.task('jshint', function(){
    return gulp.src('**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-es6-react', function() {
        return browserify({
            entries: 'public/components/mainApp.jsx',
            extensions:['.jsx'],
            debug: true
        })
        .transform(babelify)
        .bundle()
        .pipe(source('mainApp.js'))
        .pipe(gulp.dest('public/components'));
});

// configure which files to watch and what atsls to use on file changes
gulp.task('watch', function(){
  gulp.watch('public/components/*.jsx', ['build-es6-react']);
});
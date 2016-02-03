// grab gulp packages
var gulp  = require('gulp-help')(require('gulp')),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat')
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');


// define default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function(){
    return gulp.src('source/javascript/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// sass
gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sourcemaps.init())  // process original sources
          .pipe(concat('bundle.js'))
          .pipe(sass())
        .pipe(sourcemaps.write())  // Add the map to modified sources
        .pipe(gulp.dest('public/assets/stylesheets'));
})

gulp.task('build-js', function(){
    return gulp.src('source/javasript/**/*.js')
        .pipe(sourcemaps.init())
            .pipe(concat('bundle.js'))
            // only uglify if gulp is ran with '--type production'
            .pipe(gutil.env.type == 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())    
        .pipe(gulp.dest('public/assets/javascript'));
});

// configure which files to watch and what atsls to use on file changes
gulp.task('watch', function(){
  gulp.watch('source/javascript/**/*.js', ['jshint']);
  gulp.watch('source/scss/**/*.scss', ['build-css']);
});
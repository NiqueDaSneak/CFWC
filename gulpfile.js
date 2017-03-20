const gulp = require('gulp'),
      gutil = require('gulp-util'),
      sass = require('gulp-sass'),
      connect = require('gulp-connect');;

gulp.task('sass', function(){
  gulp.src('public/stylesheets/index.sass')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('public/assets'))
});

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/index.sass', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'app.js',
    livereload: true
  })
});

gulp.task('default', ['sass', 'watch'])

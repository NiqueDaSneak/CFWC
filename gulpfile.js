const gulp = require('gulp'),
      gutil = require('gulp-util'),
      sass = require('gulp-sass'),
      connect = require('gulp-connect'),
      html2pug = require('gulp-html2pug');

gulp.task('sass', function(){
  gulp.src('public/stylesheets/index.sass')
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('public/stylesheets'))
});

gulp.task('pug', function(){
  return gulp.src('views/index.html')
  .pipe(html2pug())
  .pipe(gulp.dest('views'));
});

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/index.sass', ['sass']);
  gulp.watch('views/index.html', ['pug']);
});



gulp.task('default', ['sass', 'pug', 'watch'])

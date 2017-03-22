const gulp = require('gulp');
// const html2pug = require('gulp-html2pug');

gulp.task('autoprefixer', function() {
  const gutil = require('gulp-util'),
        sass = require('gulp-sass'),
        connect = require('gulp-connect'),
        postcss = require('gulp-postcss'),
        autoprefixer = require('autoprefixer');


  return gulp.src('public/stylesheets/index.sass')
        .pipe(sass({style: 'expanded'}))
        .pipe(postcss([ autoprefixer() ]))
        .on('error', gutil.log)
        .pipe(gulp.dest('public/stylesheets'))

});

// gulp.task('pug', function(){
//   return gulp.src('views/index.html')
//   .pipe(html2pug())
//   .pipe(gulp.dest('views'));
// });

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/index.sass', ['autoprefixer']);
});



gulp.task('default', ['watch'])

const gulp = require('gulp');
// const html2pug = require('gulp-html2pug');
const sass = require('gulp-sass');
const gutil = require('gulp-util');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function(){
  return gulp.src('./public/stylesheets/sass/*.sass')
        .pipe(sass({style: 'compressed'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('./public/stylesheets'))
});

// gulp.task('pug', function(){
//   return gulp.src('views/index.html')
//   .pipe(html2pug())
//   .pipe(gulp.dest('views'));
// });

gulp.task('watch', function(){
  gulp.watch('public/stylesheets/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['watch', 'sass'])

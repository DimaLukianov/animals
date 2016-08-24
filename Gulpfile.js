const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const del = require('del');
const concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
const browserify = require('gulp-browserify');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

// gulp.task('clean', function() {
//   return del('public');
// });

gulp.task('styles', function() {
  return gulp.src('client/assets/styles/application.scss')
    .pipe(gulpIf(isDevelopment, sourcemaps.init()))

    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(debug({ title: 'scss ->' }))

    .pipe(autoprefixer())
    .pipe(debug({ title: 'autoprefixer ->' }))

    .pipe(concat('all.min.css'))
    .pipe(debug({ title: 'concat ->' }))

    .pipe(gulpIf(isDevelopment, sourcemaps.write()))
    .pipe(gulp.dest('public/styles/'))
    .pipe(debug({ title: 'FINISHED styles ->' }));
});

// JSHint task
gulp.task('lint', function() {
  gulp.src('./app/scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});

// Browserify task
gulp.task('browserify', function() {
  gulp.src(['client/app.js'])
      .pipe(browserify({
        insertGlobals: true,
        debug: true
      }))
      .pipe(debug({ title: 'browserify ->' }))
      .pipe(concat('main.min.js'))
      .pipe(debug({ title: 'concat js ->' }))
      .pipe(gulpIf(!isDevelopment, uglify()))
      .pipe(gulpIf(!isDevelopment, debug({ title: 'uglify ->' })))
      .pipe(gulp.dest('public/js'))
      .pipe(debug({ title: 'FINISHED browserify ->' }));
});

gulp.task('clean-views', function() {
  return del(['public/index.html', 'public/views']);
});


gulp.task('views', ['clean-views'], function() {
  gulp.src(['client/index.html', 'client/views'])
      .pipe(gulp.dest('public'));
});

gulp.task('clean-fonts', function() {
  return del(['public/fonts']);
});

gulp.task('fonts', ['clean-fonts'], function() {
  gulp.src(['client/assets/fonts/**/*'])
      .pipe(gulp.dest('public/fonts'));
});

gulp.task('clean-images', function() {
  return del(['public/fonts']);
});

gulp.task('images', ['clean-images'], function() {
  gulp.src(['client/assets/images/**/*'])
      .pipe(gulp.dest('public/images'));
});


gulp.task('server', function () {
  nodemon({
    script: 'server.js',
    watch: ['client/*.js', 'client/assets/scripts/**/*.js'],
    tasks: ['lint', 'browserify']  })
})

//Watch task
gulp.task('watch',function() {
  gulp.watch('client/assets/styles/**/*.scss',['styles']);
  gulp.watch(['client/index.html', 'client/views/**/*.html'],['views']);
  gulp.watch(['client/assets/fonts/**/*.*'],['fonts']);
  gulp.watch(['client/assets/images/**/*.*'],['images']);
});

gulp.task('default', ['views', 'fonts', 'images', 'styles', 'lint', 'browserify', 'watch', 'server']);

var gulp = require('gulp'),
  concat = require('gulp-concat'),
  minifycss = require('gulp-minify-css');

gulp.task('default', ['splat-css'], function () {
});

gulp.task('splat-css', function () {
  return gulp.src([
    'src/assets/css/gizmo-core.css',
    'src/assets/css/gizmo-animate.css',
    'src/assets/css/gizmo-colour.css',
    'src/assets/css/gizmo-responsive.css'
  ])
    .pipe(concat('gizmo.min.css'))
    .pipe(minifycss("gizmo.min.css"))
    .pipe(gulp.dest('src/assets/css'))

})
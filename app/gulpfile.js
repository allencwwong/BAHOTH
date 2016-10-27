var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser', ['serve'], function() {
  gulp.watch("**/*.html",['browser-reload']);
});

gulp.task('serve',function(){
  browserSync.init({
    server: {
      baseDir : './',
      index: 'page-player.html'
    }
  });
});

gulp.task('browser-reload',function(){
  browserSync.reload();
});
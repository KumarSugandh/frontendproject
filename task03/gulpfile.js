var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    lr = require('tiny-lr'),
    server = lr();
	
	
var jsSources = [
    'components/scripts/*.js'
  ];
  
var lessSources = [
    'components/less/*.less'
  ];
  
var coffeeSources = [
    'components/coffee/*.coffee'
  ];
  
  
gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('js'))
		.on( 'error', gutil.log)
});

gulp.task('less', function () {
    gulp.src(lessSources)
        .pipe(less({
            paths: [ path.join(__dirname, 'components/less')]
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('css'))
        .pipe(livereload());
  });
  
gulp.task('coffee', function() {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true})
            .on( 'error', gutil.log))
        .pipe(gulp.dest('components/scripts'));
  });
  
gulp.task('watch', function(){
	var server = livereload();
	gulp.watch(jsSources, ['js']);
	gulp.watch(lessSources, ['less']);
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(['js/script.js', '*.html'], function(e) {
      server.changed(e.path);
    });	
});

gulp.task('default', ['less', 'js', 'coffee', 'watch']);


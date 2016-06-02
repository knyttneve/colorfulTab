/* 
    Author: Mert Nerukuc
    @knyttneve
*/
var gulp = require("gulp"),
    pug = require("gulp-pug"),
    sass = require("gulp-sass"),
    uglify = require('gulp-uglifyjs'),
    rename = require("gulp-rename");

gulp.task('sassMin', function () {
 return gulp.src('src/scss/*')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(rename("colorfulTab.min.css"))
   .pipe(gulp.dest('dist/css'));
});

gulp.task('sass', function () {
 return gulp.src('src/scss/*')
   .pipe(sass()).pipe(gulp.dest('dist/css'));
});

gulp.task('jsMin', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename('colorfulTab.min.js'))
    .pipe(gulp.dest('dist/js'));
});


gulp.task("pug", function() {
   return gulp.src("src/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task("watch", function() {
    gulp.watch("src/*.pug", ["pug"]);
    gulp.watch("src/scss/*", ["sassMin"]);
    gulp.watch("src/scss/*", ["sass"]);
    gulp.watch("src/js/*", ["jsMin"]);
});



gulp.task("default", ["watch", "pug","sass","sassMin","jsMin"]);
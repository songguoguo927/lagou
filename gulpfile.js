const gulp = require('gulp');

// gulp.task('default',function(){
//     console.log('hello gulp')
// })


const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const concat = require("gulp-concat")
//gulp sass 执行编译
gulp.task('sass', function () {
    gulp.src('./style/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(gulp.dest('./style/css'));
});
//gulp watch执行监听
gulp.task('sass:watch', function() {
    gulp.watch('./style/*.scss', ['sass']);
});
gulp.task('concat',function(){
    gulp.src('./style/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('public/css'))
})
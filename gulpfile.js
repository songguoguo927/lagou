const gulp = require('gulp');

// gulp.task('default',function(){
//     console.log('hello gulp')
// })


const sass = require('gulp-sass');
sass.compiler = require('node-sass');
// const concat = require("gulp-concat")
const rename = require('gulp-rename');
const minifyHtml = require('gulp-minify-html')

//css文件的处理
//gulp sass 执行编译-压缩-重命名
gulp.task('sass', function () {
    gulp.src('./src/style/scss/index.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(rename('index.min.css'))
        .pipe(gulp.dest('dist/public/css'));
});

//html 文件的处理
gulp.task('html',function(){
    gulp.src('./*.html')
})
//gulp watch执行监听
// gulp.task('sass:watch', function() {
//     gulp.watch('./style/*.scss', ['sass']);
// });
// gulp.task('concat',function(){
//     gulp.src('./style/css/*.css')
//     .pipe(concat('all.min.css'))
//     .pipe(gulp.dest('public/css'))
// })
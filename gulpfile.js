const gulp = require('gulp');

// gulp.task('default',function(){
//     console.log('hello gulp')
// })


const sass = require('gulp-sass');
sass.compiler = require('node-sass');
// const concat = require("gulp-concat")
const rename = require('gulp-rename');
const minifyHtml = require('gulp-minify-html')
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
//css文件的处理
//gulp sass 执行编译-压缩-重命名
gulp.task('sass', function () {
    gulp.src('./src/style/scss/*/index.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/public/css'));
});

//html 文件的处理
gulp.task('html',function(){
    gulp.src('./src/*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist/'))
})

// 图片的处理
gulp.task('images',function () {
    gulp.src('src/public/images/**')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.jpegtran({progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('dist/public/images'));
})
//js文件的处理--压缩
gulp.task('js',function(){
    gulp.src('./src/backtotop.js')
    .pipe(uglify())
    .pipe(rename('backtotop.min.js'))
    .pipe(gulp.dest('dist/js'))
})



//---
//gulp watch执行监听
// gulp.task('sass:watch', function() {
//     gulp.watch('./style/*.scss', ['sass']);
// });
// gulp.task('concat',function(){
//     gulp.src('./style/css/*.css')
//     .pipe(concat('all.min.css'))
//     .pipe(gulp.dest('public/css'))
// })
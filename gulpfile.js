const gulp = require('gulp');

// gulp.task('default',function(){
//     console.log('hello gulp')
// })


const sass = require('gulp-sass');

//gulp sass 执行编译
gulp.task('sass', function () {
    gulp.src('.style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./style'));
});
//gulp watch执行监听
gulp.task('watch', function() {
    gulp.watch('./style/*.scss', ['sass']);
});

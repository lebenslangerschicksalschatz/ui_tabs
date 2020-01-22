const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
    //1. where is my SCSS file?
    return gulp.src('./public/scss/**/*.scss')
    //2. pass that file through sass compiler
        .pipe(sass())
    //3. where do I save the compiled CSS?
        .pipe(gulp.dest('./public/css'))
    //4. stream changes to all browsers
        .pipe(browserSync.stream());    
}

function watch() {
    browserSync.init({
        server: {
            baseDir: 'public'
        }
    });
    gulp.watch('./public/scss/**/*.scss', style);
    gulp.watch('./public/*.html').on('change', browserSync.reload);
    gulp.watch('./public/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;

// autoprefixer
const autoprefixer = require('gulp-autoprefixer');
 
exports.autoprefixer = () => (
    gulp.src('./public/css/**/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./public/css'))
);
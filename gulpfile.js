const gulp = require('gulp');
const clean = require('gulp-clean');

const nejc = require('nejc');
const path = require('path');

const config = {
    'src': 'src/**',
    'dist': 'dist',
    'ignoreFiles': [
        path.join(__dirname, 'src', '**', 'test', '**'),
        path.join(__dirname, 'src', 'define.js'),
        path.join(__dirname, 'src', 'util','query','nes.js'),
        path.join(__dirname, 'src', 'util','template','trimpath.js')
    ],
    'ext': ['.js'],
    'alias': {
        lib: path.resolve(__dirname, 'src'),
    },
    'outputAlias': {},
    'mode': 1
};

gulp.task('clean', function () {
    return gulp
        .src([
            'dist',
            path.join(config.src, 'define.js'),
            path.join(config.src, '**', 'test'),
            path.join(config.src, '**', 'demo')])
        .pipe(clean());
});

gulp.task('build', ['clean'], function () {
	return gulp
        .src(config.src)
        .pipe(nejc(config))
        .pipe(gulp.dest(config.dist));
});

gulp.task('default', ['build']);
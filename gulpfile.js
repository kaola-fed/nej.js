const gulp = require('gulp');
const clean = require('gulp-clean');
const insert = require('gulp-insert');
const nejc = require('nejc');
const path = require('path');
const fs = require('fs');
const dist = 'nej-commonjs';
const config = {
    'src': 'src/**',
    'dist': dist,
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
    'outputAlias': {
        'nej-commonjs': path.resolve(__dirname, 'src'),
    },
    'mode': 1,
    'isPatch': true
};
const platformJS = path.join(__dirname, dist, 'base', 'platform.js');

gulp.task('clean', function () {
    return gulp
        .src([
            platformJS,
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

gulp.task('AddNEJPATCH',
    ['build'],
    function () {
    var tpl = fs.readFileSync(path.join('template', 'NEJ.PATCH.js')).toString('utf-8');
    return gulp
        .src(platformJS)
        .pipe(insert.append(tpl))
        .pipe(gulp.dest(path.parse(platformJS).dir))
});

gulp.task('default', ['AddNEJPATCH']);
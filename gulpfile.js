const gulp          = require('gulp');
const babel         = require('gulp-babel');
const clean         = require('gulp-clean');
const insert        = require('gulp-insert');
const rename        = require('gulp-rename');
const nejc          = require('nejc');
const path          = require('path');
const fs            = require('fs');
const dist          = process.env.IE ? 'nej-ie.js' : 'nej.js';
const srcPackageJSON = process.env.IE ? './template/nej-ie.package.json' : './template/nej.package.json';
const platformJS    = path.join(__dirname, dist, 'base', 'platform.js');

const config    = {
    'src': 'src/**',
    'dist': dist,
    'ignoreFiles': [
        path.join(__dirname, 'src', '**', 'test', '**'),
        path.join(__dirname, 'src', 'define.js'),
        path.join(__dirname, 'src', 'util', 'query', 'nes.js'),
        path.join(__dirname, 'src', 'util', 'template', 'trimpath.js')
    ],
    'ext': ['.js'],
    'alias': {
        lib: path.resolve(__dirname, 'src'),
    },
    'outputAlias': {
        [dist]: path.resolve(__dirname, 'src'),
    },
    'mode': 1,
    'isPatch': process.env.IE
};

gulp.task('clean', function () {
    return gulp
        .src([
            platformJS,
            path.join(config.src, 'define.js'),
            path.join(config.src, '**', 'test'),
            path.join(config.src, '**', 'demo')
        ])
        .pipe(clean());
});

gulp.task('build', ['clean'], function () {
    return gulp
        .src(config.src)
        .pipe(nejc(config))
        .pipe(gulp.dest(config.dist));
});

gulp.task('add-nej-patch', ['build'],
    function () {
        var tpl = fs.readFileSync(path.join('template', 'NEJ.PATCH.js')).toString('utf-8');
        return gulp
            .src(platformJS)
            .pipe(insert.append(tpl))
            .pipe(gulp.dest(path.parse(platformJS).dir))
    });


gulp.task('copy-home-files', ['add-nej-patch'], function () {
    gulp
        .src([
            srcPackageJSON
        ])
        .pipe(rename('package.json'))
        .pipe(gulp.dest(dist));

    gulp.src([
            './readme.MD'
        ])
        .pipe(gulp.dest(dist))
});

gulp.task('copy-entries', ['copy-home-files'], function () {
    return gulp
        .src([
            path.join('template', 'NEJ.INDEX.js')
        ])
        .pipe(rename('index.js'))
        .pipe(gulp.dest(dist))
})

gulp.task('default', ['copy-entries']);

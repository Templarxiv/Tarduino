const gulp = require('gulp');
const del = require('del');
const gulpWebpack = require('webpack-stream');
const webpackConfigTard = require('./TardLib/webpack.config.js');
const webpackConfigServer = require('./TardServer/webpack.config.js');
const webpackConfigHTML = require('./TardHTML/webpack.config.js');
const webpack = require('webpack');

const paths = {
    pages: ['TardHTML/index.html'],
    vendor: [
        'node_modules/react/dist/react.js',
        'node_modules/react-dom/dist/react-dom.js'
    ]
};

gulp.task('clean', () => {
    return del(['build']);
});

gulp.task('copy-html-release', () => {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('build/release'));
});

gulp.task('copy-vendor-release', () => {
    return gulp.src(paths.vendor)
        .pipe(gulp.dest('build/release/vendor'));
});

gulp.task('webpack-tard', () => {
    return gulp.src('TardLib/src/main.ts')
        .pipe(gulpWebpack(webpackConfigTard, webpack))
        .pipe(gulp.dest('build/release'));
});

gulp.task('webpack-app', () => {
    return gulp.src('TardServer/src/TardServer.ts')
        .pipe(gulpWebpack(webpackConfigServer, webpack))
        .pipe(gulp.dest('build/release'));
});

gulp.task('webpack-html', () => {
    return gulp.src('TardHTML/src/main.tsx')
        .pipe(gulpWebpack(webpackConfigHTML, webpack))
        .pipe(gulp.dest('build/release'));
});


gulp.task('default', gulp.series(
    'clean',
    'webpack-tard',
    'webpack-app'
));

gulp.task('html', gulp.series(
    'clean',
    'copy-vendor-release',
    'copy-html-release',
    'webpack-html',
    'webpack-app'
));
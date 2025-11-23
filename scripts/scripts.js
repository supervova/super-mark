// 🤖 SCRIPTS

import gulp from 'gulp';
import Terser from 'terser-webpack-plugin';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import webpack from 'webpack-stream';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { paths } from './paths.js';
import bsInstance from './browsersync.js';

const { src, dest } = gulp;
const { argv } = yargs(hideBin(process.argv));
const PRODUCTION = argv.p;

/**
 * Compiles and bundles JavaScript files using Webpack.
 *
 * This function processes JavaScript files, handles errors,
 * and streams the result to the browser. It uses Webpack
 * for bundling and Terser for minification in production mode.
 *
 * @returns {Stream} The Gulp stream.
 */
export default function js(done) {
  return src(paths.js.src.main)
    .pipe(plumber({ errorHandler: notify.onError() }))
    .pipe(
      webpack({
        entry: paths.js.src.main,
        mode: PRODUCTION ? 'production' : 'development',
        devtool: PRODUCTION ? false : 'inline-source-map',
        optimization: PRODUCTION
          ? {
              minimizer: [new Terser()],
            }
          : {},
        output: {
          filename: '[name].js',
        },
      })
    )
    .pipe(dest(paths.js.dest))
    .pipe(bsInstance.stream())
    .on('end', done);
}

export function copyJs(done) {
  return src(paths.js.src.standAlone)
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(newer(paths.js.dest))
    .pipe(dest(paths.js.dest))
    .on('end', done);
}

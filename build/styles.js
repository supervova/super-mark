// 🎨 STYLES

/* eslint-disable no-console */
import gulp from 'gulp';

import * as sass from 'sass';
import cssnano from 'cssnano';
import futureFeatures from 'postcss-preset-env';
import gulpPlumber from 'gulp-plumber';
import gulpSass from 'gulp-sass';
import gulpif from 'gulp-if';
import inlineSvg from 'postcss-inline-svg';
import newer from 'gulp-newer';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
// import purge from '@fullhuman/postcss-purgecss';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import bsInstance from './browsersync.js';
import { root, paths } from './paths.js';

const { src, dest, parallel } = gulp;
const { argv } = yargs(hideBin(process.argv));
const PRODUCTION = argv.p;
const sassCompiler = gulpSass(sass);

// const selectorsToIgnore = ['button', /^(is-|has-)/, /^(.*?)(m|p)(t|b)-/];

/**
 * Processes Sass stylesheets, applies PostCSS transformations, and outputs CSS files.
 * @param {string} source - Source directory or file path for Sass stylesheets.
 * @param {string} subtitle - Subtitle used for logging purposes.
 * @param {string} destination - Destination directory for the processed CSS files.
 * @param {string[]} purgeContent - Array of file paths or globs to purge unused CSS.
 */
const processStyles = (source, subtitle, destination /* , purgeContent */) =>
  src(source)
    .pipe(newer(destination))
    .pipe(gulpPlumber({ errorHandler: notify.onError() }))
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(
      sassCompiler({
        precision: 4,
        includePaths: ['.'],
      }).on('error', (err) => {
        console.error('Error compiling Sass:', err.message);
      })
    )
    .pipe(dest(paths.css.tmp))
    .pipe(
      postcss([
        inlineSvg(),
        futureFeatures({
          stage: 2,
          features: {
            'cascade-layers': false,
            'custom-media-queries': true,
            'custom-properties': false,
            'custom-selectors': true,
            'has-pseudo-class': true,
            'image-set-function': true,
            'is-pseudo-class': false,
            'logical-properties-and-values': false,
            'media-query-ranges': true,
            'nesting-rules': true,
            'unset-value': true,
          },
          autoprefixer: { cascade: false },
        }),
        ...(PRODUCTION
          ? [
              // purge({
              //   content: purgeContent,
              //   dynamicAttributes: ['aria-selected'],
              //   fontFace: true,
              //   keyframes: true,
              //   safelist: selectorsToIgnore,
              //   variables: true,
              // }),
              cssnano({ reduceIdents: { keyframes: false } }),
            ]
          : [
              cssnano({
                preset: [
                  'lite',
                  {
                    normalizeWhitespace: false,
                  },
                ],
              }),
            ]),
      ])
    )
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(size({ title: `styles: ${subtitle}` }))
    .pipe(dest(destination))
    .pipe(bsInstance.stream());

/**
 * Task for processing main Sass stylesheets.
 * @param {function} done - Callback function to signal task completion.
 */
export function cssMain(done) {
  return processStyles(paths.css.src.main, 'main', paths.css.dest, [
    `${root.src}/pages/uncss/**/*.html`,
  ]).on('end', done);
}

/**
 * Task for processing front-end Sass stylesheets.
 * @param {function} done - Callback function to signal task completion.
 */
export function cssFront(done) {
  return processStyles(paths.css.src.front, 'front', paths.css.dest, [
    `${root.src}/pages/uncss/index.html`,
  ]).on('end', done);
}

/**
 * Task for processing blog Sass stylesheets.
 * @param {function} done - Callback function to signal task completion.
 */
export function cssBlog(done) {
  return processStyles(paths.css.src.blog, 'blog', paths.css.dest, [
    `${root.src}/pages/uncss/blog.html`,
  ]).on('end', done);
}

/**
 * Task for processing guestbook Sass stylesheets.
 * @param {function} done - Callback function to signal task completion.
 */
export function cssGuestbook(done) {
  return processStyles(paths.css.src.guestbook, 'guestbook', paths.css.dest, [
    `${root.src}/pages/uncss/guestbook.html`,
  ]).on('end', done);
}

// HEAD
// function cssHead(done) {
//   cssTasks(
//     paths.css.src.head, // src
//     'head', // subtitle
//     paths.css.dest,
//     false // uncss
//   );
//   done();
// }

const css = parallel(cssFront, cssGuestbook, cssBlog, cssMain);
export default css;

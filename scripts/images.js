// 🖼 IMAGES

import gulp from 'gulp';
import newer from 'gulp-newer';
import size from 'gulp-size';
import imagemin, { gifsicle, mozjpeg, optipng, svgo } from 'gulp-imagemin';
import { paths } from './paths.js';

const { src, dest, parallel } = gulp;

/**
 * Minifies images with various optimizations.
 * @param {string} source - Source directory for images.
 * @param {string} subtitle - Subtitle used for logging purposes.
 * @returns {NodeJS.WritableStream} The Gulp stream.
 */
function minifyImages(source, subtitle) {
  const destination = paths.img.dest;
  return src(source, { encoding: false })
    .pipe(newer(destination))
    .pipe(
      imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 85, progressive: true }),
        optipng({ optimizationLevel: 1 }),
        svgo({
          plugins: [
            { name: 'removeViewBox', active: false },
            {
              name: 'cleanupIDs',
              params: { remove: false, minify: false, preserve: [] },
            },
          ],
        }),
      ])
    )
    .pipe(dest(destination))
    .pipe(size({ title: `images: ${subtitle}` }));
}

/**
 * Task for processing graphics images.
 * @returns {NodeJS.WritableStream} The Gulp stream.
 */
export function imgGraphics() {
  return minifyImages(paths.img.src.graphics, 'graphics');
}

/**
 * Task for processing content images.
 * @returns {NodeJS.WritableStream} The Gulp stream.
 */
export function imgContent() {
  return minifyImages(paths.img.src.content, 'content');
}

// Parallel task for image processing
const img = parallel(imgGraphics, imgContent);

export default img;

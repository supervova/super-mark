// 🖼 IMAGES

import { src, dest, parallel } from 'gulp';
import newer from 'gulp-newer';
import size from 'gulp-size';
import imagemin from 'gulp-imagemin';
import imageminGIF from 'imagemin-gifsicle';
import imageminJPG from 'imagemin-mozjpeg';
import imageminPNG from 'imagemin-pngquant';
import imageminSVG from 'imagemin-svgo';
import { paths } from './paths';

/**
 * Minifies images with various optimizations.
 * @param {string} source - Source directory for images.
 * @param {string} subtitle - Subtitle used for logging purposes.
 */
function minifyImages(source, subtitle) {
  return src(source)
    .pipe(newer(paths.img.dest))
    .pipe(
      imagemin(
        [
          imageminGIF({ interlaced: true, optimizationLevel: 3 }),
          imageminJPG({ quality: 85 }),
          imageminPNG([0.8, 0.9]),
          imageminSVG({
            plugins: [{ removeViewBox: false }, { cleanupIDs: false }],
          }),
        ],
        { verbose: true }
      )
    )
    .pipe(dest(paths.img.dest))
    .pipe(size({ title: `images: ${subtitle}` }));
}

/**
 * Task for processing graphics images.
 * @param {function} done - Callback function to signal task completion.
 */

export function imgGraphics(done) {
  return minifyImages(paths.img.src.graphics, 'graphics').on('end', done);
}

/**
 * Task for processing content images.
 * @param {function} done - Callback function to signal task completion.
 */

export function imgContent(done) {
  return minifyImages(paths.img.src.content, 'content').on('end', done);
}

// Parallel task for image processing
const img = parallel(imgGraphics, imgContent);

export default img;

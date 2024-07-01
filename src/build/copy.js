// 🖼 COPY FILES WITHOUT OPTIMIZATION

import { src, dest } from 'gulp';
import newer from 'gulp-newer';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { paths } from './paths';

/**
 * Copies video files to the destination directory without optimization.
 *
 * This function checks if the video files in the source directory are newer
 * than those in the destination directory and copies only the newer files.
 *
 * @returns {Stream} The Gulp stream.
 */
export function copyVideo(done) {
  return src(paths.video.src)
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(newer(paths.video.dest))
    .pipe(dest(paths.video.dest))
    .on('end', done);
}

/**
 * Copies download files to the destination directory without optimization.
 *
 * This function checks if the download files in the source directory are newer
 * than those in the destination directory and copies only the newer files.
 *
 * @returns {Stream} The Gulp stream.
 */
export function copyDownloads(done) {
  return src(paths.downloads.src)
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(newer(paths.downloads.dest))
    .pipe(dest(paths.downloads.dest))
    .on('end', done);
}

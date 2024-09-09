import { series, parallel } from 'gulp';
import cssTasks, { cssMain, cssFront } from './build/styles.js';
import imgTasks from './build/images.js';
import jsTasks, { copyJs } from './build/scripts.js';
import spriteTask from './build/sprite.js';
import { cleanAssets, cleanSrc, cleanPages } from './build/clean.js';
import { copyDownloads, copyVideo } from './build/copy.js';
import { jekyllBuild, jekyllServe } from './build/jekyll.js';
import { serve, serveBs, watchFiles } from './build/server.js';

const buildAll = series(
  cleanPages,
  cleanSrc,
  jekyllBuild,
  spriteTask,
  imgTasks,
  copyVideo,
  copyDownloads,
  copyJs,
  parallel(cssTasks, jsTasks)
);

const buildAssets = series(
  spriteTask,
  imgTasks,
  copyVideo,
  copyDownloads,
  copyJs,
  parallel(cssTasks, jsTasks)
);

const dev = series(buildAll, serveBs, watchFiles);

export {
  copyDownloads,
  copyVideo,
  cleanAssets,
  cleanSrc,
  cssTasks as css,
  cssMain as cssm,
  cssFront as cssf,
  jsTasks as js,
  spriteTask as sprite,
  jekyllBuild,
  jekyllServe,
  imgTasks as img,
  // Tasks for building assets and pages
  buildAll as build,
  // Tasks for building only assets
  buildAssets,
  cleanPages,
  serve as s,
  watchFiles as w,
  dev,
};

// export default build;
export default buildAll;

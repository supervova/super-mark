import { series, parallel } from 'gulp';
import cssTasks, { cssMain, cssFront } from './src/build/styles';
import imgTasks from './src/build/images';
import jsTasks, { copyJs } from './src/build/scripts';
import spriteTask from './src/build/sprite';
import { cleanAssets, cleanSrc, cleanPages } from './src/build/clean';
import { copyDownloads, copyVideo } from './src/build/copy';
import { jekyllBuild, jekyllServe } from './src/build/jekyll';
import { serve, serveBs, watchFiles } from './src/build/server';

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
  // Tasks for building assets and pages
  buildAll as build,
  // Tasks for building only assets
  buildAssets,
  // Individual tasks
  copyDownloads,
  copyVideo,
  cleanAssets,
  cleanSrc,
  cleanPages,
  cssMain as cssm,
  cssFront as cssf,
  dev,
  jsTasks as js,
  spriteTask as sprite,
  jekyllBuild,
  jekyllServe,
  imgTasks as img,
  serve as s,
  watchFiles as w,
};

// export default build;
export default buildAll;

import { watch, series, parallel } from 'gulp';
import bsInstance from './browsersync';
import css from './styles';
import img from './images';
import js, { copyJs } from './scripts';
import sprite from './sprite';
import { cleanPages } from './clean';
import { copyDownloads, copyVideo } from './copy';
import { jekyllBuild, jekyllServe } from './jekyll';
import { paths, root } from './paths';

function watchFiles() {
  watch(
    paths.css.watch,
    series(css, (done) => {
      bsInstance.reload();
      done();
    })
  );
  watch(
    paths.js.watch,
    series(js, (done) => {
      bsInstance.reload();
      done();
    })
  );
  watch(
    paths.img.watch,
    series(img, (done) => {
      bsInstance.reload();
      done();
    })
  );
  watch(
    paths.jekyll.docs,
    series(jekyllBuild, (done) => {
      bsInstance.reload();
      done();
    })
  );
}

const serve = series(
  cleanPages,
  jekyllBuild,
  sprite,
  img,
  copyVideo,
  copyDownloads,
  copyJs,
  parallel(css, js),
  jekyllServe
);

function serveBs(done) {
  bsInstance.init({
    server: {
      baseDir: root.dest.site,
    },
    middleware(req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    },
    port: 9000,
    notify: false,
  });
  done();
}

export { serve, serveBs, watchFiles };

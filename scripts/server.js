import gulp from 'gulp';
import bsInstance from './browsersync.js';
import css from './styles.js';
import img from './images.js';
import js, { copyJs } from './scripts.js';
import sprite from './sprite.js';
import { cleanPages } from './clean.js';
import { copyDownloads, copyVideo } from './copy.js';
import { jekyllBuild, jekyllServe } from './jekyll.js';
import { paths, root } from './paths.js';

const { watch, series, parallel } = gulp;

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

// const serveBs = (done) => {
//   bsInstance.init({
//     server: {
//       baseDir: root.dest.site, // Основная директория - dist
//     },
//     port: 9000,
//     notify: false,

//     // Extensionless URLs
//     middleware: [
//       (req, res, next) => {
//         const baseDir = root.dest.site;

//         // Если URL корневой, перенаправляем на index.html
//         if (req.url === '/') {
//           req.url = '/index.html';
//         } else {
//           // Проверка: если URL заканчивается на `/`, ищем index.html
//           const dirPath = join(baseDir, req.url, 'index.html');
//           if (req.url.endsWith('/') && existsSync(dirPath)) {
//             req.url += 'index.html';
//           } else if (!/\.\w+$/.test(req.url)) {
//             // Если нет расширения, проверяем, существует ли index.html в директории
//             const potentialIndex = join(baseDir, req.url, 'index.html');
//             if (existsSync(potentialIndex)) {
//               req.url += '/index.html';
//             } else {
//               // Иначе просто добавляем .html к URL
//               req.url += '.html';
//             }
//           }
//         }

//         next();
//       },
//     ],
//   });
//   watchFiles();
//   done();
// };

export { serve, serveBs, watchFiles };

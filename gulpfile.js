/**
 * -----------------------------------------------------------------------------
 * 🧩 PLUGINS AND PATHS
 * -----------------------------------------------------------------------------
 */
// #region

// ☝️🧐 In order to build a Jekyll site and run a local server,
// it is preferable to keep package.json, node_modules and execute gulp commands
// within the source directory.

// ☝️🧐 The combination of Jekyll built-in server + gulp watchers + Chrome Live
// Reload Extension is much more faster than the 'gulp only' process.
// And the first workflow allows us to use extension-free links.

// The last option: symlink
const {
  src, dest, watch, series, parallel, lastRun,
} = require('gulp');

const browserSync = require('browser-sync').create();
const changed     = require('gulp-changed');
const child       = require('child_process');
const gulpif      = require('gulp-if');
// const newer       = require('gulp-newer');
// Prevent pipe breaking caused by errors from gulp plugins
const plumber     = require('gulp-plumber');
const size        = require('gulp-size');
const sourcemaps  = require('gulp-sourcemaps');
const yargs       = require('yargs').alias('p', 'production');

// Look for the --p flag
const PRODUCTION  = !!(yargs.argv.production);

// Paths
const root = {
  root: '.',
  src: './src',
  // It is better to stick to the system standards to avoid errors.
  tmp: './assets',
  dest: {
    site: './_site',
    assets: './_site/assets',
    build: './.publish',
  },
};

const paths = {
  css: {
    src: {
      main: `${root.src}/style.scss`,
      front: `${root.src}/pages/front/front.scss`,
      portfolio: `${root.src}/pages/page/portfolio/portfolio.scss`,
      head: `${root.src}/css/head-styles/*.scss`,
      critical: `${root.src}/critical.scss`,
    },
    watch: `${root.src}/**/*.scss`,
    tmp: `${root.src}/css`,
    dest: `${root.dest.assets}/css`,
  },

  jekyll: {
    docs: [
      `${root.base}/*.html`,
      `${root.base}/_config.yml`, `${root.base}/_data/*.yml`,
      `${root.base}/_includes/*.html`,
      `${root.base}/_layouts/*.html`,
      `${root.base}/_posts/*.*`,
    ],
  },

  markup: {
    src: {
      pug: [
        `${root.src}/**/*.pug`,
        `!${root.src}/**/_*.pug`,
        `!${root.src}/pages/base/*.pug`,
      ],
      html: `${root.dest.site}/**/*.html`,
    },
    watch: `${root.src}/**/*.pug`,
    dest: `${root.src}`,
  },

  img: {
    src: {
      graphics: [
        `${root.src}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
        `!${root.src}/base/icons/sprite/**/*`,
        `!${root.src}/img/**/*`,
      ],
      content: `${root.src}/img/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
    },
    // Vars array in watchers breaks build process, so there is one var for a watcher
    watch: [
      `${root.src}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
      `!${root.src}/base/icons/sprite/**/*`,
    ],
    dest: `${root.dest.assets}/img`,
  },

  js: {
    src: {
      main: [
        `${root.src}/**/*.js`,
        `!${root.src}/js/search.js`,
        `!${root.src}/js/vendor/*.js`,
      ],
      plugins: [
        `${root.src}/js/vendor/jquery.mobile.custom.js`,
        './node_modules/popper.js/dist/umd/popper.js',
        './node_modules/bootstrap/js/dist/util.js',
        './node_modules/bootstrap/js/dist/alert.js',
        './node_modules/bootstrap/js/dist/button.js',
        './node_modules/bootstrap/js/dist/carousel.js',
        './node_modules/bootstrap/js/dist/collapse.js',
        './node_modules/bootstrap/js/dist/dropdown.js',
        './node_modules/bootstrap/js/dist/modal.js',
        './node_modules/bootstrap/js/dist/tab.js',
      ],
      search: `${root.src}/js/search.js`,
      unoptimized: [
        `${root.src}/js/vendor/*.js`,
        `!${root.src}/js/vendor/jquery.mobile.custom.js`,
      ],
    },
    dest: `${root.dest.assets}/js`,
  },

  sprite: {
    src: `${root.src}/base/icons/sprite/*.svg`,
    dest: `${root.src}/base/icons`,
  },

  video: {
    src: [
      `${root.src}/**/*.+(mp4|ogg|ogv|webm)`,
      `${root.src}/**/video.zip`,
    ],
    dest: `${root.dest.assets}/video`,
  },
};
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🧪 JEKYLL
 * -----------------------------------------------------------------------------
 */
// #region

// Error: no acceptor (port is in use or requires root privileges)'
// We need to stop the local server, see what processes are running
// on the 4000th port ...
// $ lsof -i tcp:4000
// And then terminate unnecessary processes by specifying the PID
// $ kill -9 <PID>

const shell = require('shelljs');

function jekyllBuild(done) {
  let command;

  if (PRODUCTION) {
    command = shell.exec('JEKYLL_ENV=production jekyll build');
    done();
  }

  if (!PRODUCTION) {
    command = shell.exec('bundle exec jekyll build --config _config.yml');
    // command = child.spawn('bundle', ['exec', 'jekyll', 'build', '--config', '_config.yml,_config.dev.yml'], { stdio: 'inherit' });
    done();
  }
  return command;
}

function jekyllServe(done) {
  child.spawn(
    'jekyll',
    // ['serve', '--host=192.168.0.14', '--watch', '--incremental', '--drafts', '--config', '_config.yml'],
    ['serve', '--watch', '--incremental', '--drafts', '--trace', '--config', '_config.yml'],
    { stdio: 'inherit' },
  );
  done();
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🎨 STYLES
 * -----------------------------------------------------------------------------
 */
// #region

const autoprefixer = require('gulp-autoprefixer');
const cleanCSS     = require('gulp-clean-css');
const sass         = require('gulp-sass');
const postcss      = require('gulp-postcss');
const uncss        = require('postcss-uncss');

// COMMON STYLES FUNCTION
const cssTasks = (
  source, subtitle, uncssHTML, destination, link = true,
) => src(source)
  .pipe(changed(paths.css.dest))
  .pipe(plumber())
  .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
  .pipe(sass({
    precision: 4,
    includePaths: ['.'],
  }).on('error', sass.logError))
  .pipe(autoprefixer({ cascade: false }))
  .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
  .pipe(dest(paths.css.tmp))
  .pipe(
    gulpif(
      PRODUCTION,
      gulpif(
        link,
        postcss([
          uncss({
            html: uncssHTML,
            ignore: [
              /* eslint-disable max-len */
              // Bootstrap
              /\.carousel(-[a-zA-Z]+)?/, /\.collaps((-[a-zA-Z])+)?/, /\.dropdown(-[a-zA-Z]+)?/, /\.modal(-[a-zA-Z]+)?/, /\.navbar(-[a-zA-Z]+)?/, /\w\.fade/, /\w\.in/, /\w\.open/,

              // Custom
              '.vk', 'iframe', /\.[hs]laquo-[a-z0-9]+/, /\.[mp][bt]-[a-z0-9]+/,
              /* eslint-enable max-len */
            ],
          }),
        ]),
      ),
    ),
  )
  .pipe(gulpif(PRODUCTION, cleanCSS({ level: { 1: { specialComments: 0 } } })))
  .pipe(size({ title: `styles: ${subtitle}` }))
  .pipe(dest(destination))
  .pipe(browserSync.stream());

// MAIN
function cssMain(done) {
  cssTasks(
    paths.css.src.main, // src
    'main', // subtitle
    // uncssHTML; use array syntax for normal results
    [`${root.src}/css/uncss/**/*.html`],
    paths.css.dest,
  );
  done();
}

// FRONT
function cssFront(done) {
  cssTasks(
    paths.css.src.front, // src
    'front', // subtitle
    [`${root.src}/css/uncss/index.html`], // uncssHTML
    paths.css.dest,
  );
  done();
}

// PORTFOLIO
function cssPortfolio(done) {
  cssTasks(
    paths.css.src.portfolio, // src
    'portfolio', // subtitle
    [`${root.src}/css/uncss/portfolio.html`], // uncssHTML
    paths.css.dest,
  );
  done();
}

// HEAD
function cssHead(done) {
  cssTasks(
    paths.css.src.head, // src
    'head', // subtitle
    '', // uncss
    paths.css.dest,
    false,
  );
  done();
}

// STYLES BUILD
const css = parallel(
  cssFront,
  cssHead,
  cssPortfolio,
  cssMain,
);
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🖼 IMAGES
 * -----------------------------------------------------------------------------
 */
// #region

const imagemin    = require('gulp-imagemin');
const imageminGIF = require('imagemin-gifsicle');
const imageminJPG = require('imagemin-mozjpeg');
const imageminPNG = require('imagemin-pngquant');
const imageminSVG = require('imagemin-svgo');

// Common images function
const imgTasks = (source, subtitle) => src(source)
  .pipe(changed(`${root.dest.site}/assets/img`))
  .pipe(
    imagemin(
      [
        imageminGIF({
          interlaced: true,
          optimizationLevel: 3,
        }),
        imageminJPG({ quality: 85 }),
        imageminPNG([0.8, 0.9]),
        imageminSVG({
          plugins: [
            { removeViewBox: false },
            { cleanupIDs: false },
          ],
        }),
      ],
      { verbose: true },
    ),
  )
  .pipe(dest(`${root.dest.site}/assets/img`))
  .pipe(size({ title: `images: ${subtitle}` }));

// Graphics
function imgGraphics(done) {
  imgTasks(
    paths.img.src.graphics, // src
    'graphics', // subtitle
  );
  done();
}

// Content
function imgContent(done) {
  imgTasks(
    paths.img.src.content, // src
    'content', // subtitle
  );
  done();
}

// OPTIMIZE
const img = parallel(
  imgGraphics,
  imgContent,
);
// #endregion

/**
 * -----------------------------------------------------------------------------
 * ❤️ SVG SPRITE
 * -----------------------------------------------------------------------------
 */
// #region

const svgSprite = require('gulp-svg-sprite');

function svg() {
  return src(paths.sprite.src)
    .pipe(svgSprite({
      mode: {
        symbol: {
          dest: '.', // Mode specific output directory
          sprite: 'sprite.svg', // Sprite path and name
          prefix: '.', // Prefix for CSS selectors
          dimensions: '', // Suffix for dimension CSS selectors
          example: true, // Create an HTML example document
        },
      },
      svg: {
        xmlDeclaration: false, // strip out the XML attribute
        doctypeDeclaration: false, // don't include the !DOCTYPE declaration
      },
    }))
    .pipe(dest(paths.sprite.dest));
}

const sprite = series(
  svg,
  parallel(cssMain, imgGraphics),
);
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 📰 MARKUP
 * -----------------------------------------------------------------------------
 */
// #region

// PUG
const pug = require('gulp-pug');

function pugCompile() {
  return src(paths.markup.src.pug)
    .pipe(plumber())
    .pipe(pug({
      doctype: 'html',
      pretty: true,
      basedir: root.src,
    }))
    .pipe(size({ title: 'html' }))
    .pipe(dest(paths.markup.dest));
}

// MINIMIZE HTML
// 'gulp html' does nothing; 'gulp html --p' minifies

const htmlmin = require('gulp-htmlmin');

function html(done) {
  src(paths.markup.src.html)
    .pipe(
      gulpif(
        PRODUCTION,
        htmlmin({
          removeComments: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: false,
          removeAttributeQuotes: false,
          removeRedundantAttributes: false,
          minifyJS: true,
          minifyCSS: true,
        }),
      ),
    )
    .pipe(gulpif(PRODUCTION, size({ title: 'optimized HTML' })))
    .pipe(dest(paths.markup.dest));
  done();
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 💾 SCRIPTS
 * -----------------------------------------------------------------------------
 */
// #region

const babel  = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Common scripts function
const jsTasks = (source, file, compiler) => src(source)
  .pipe(changed(paths.js.dest))
  .pipe(plumber())
  // Use webpack instead others
  // .pipe(webpackstream(webpackconfig, webpack))
  .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
  .pipe(gulpif(compiler, babel({ presets: ['@babel/preset-env'] })))
  .pipe(concat(`${file}.js`))
  .pipe(uglify())
  .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
  .pipe(size({ title: `scripts: ${file}` }))
  .pipe(dest(paths.js.dest))
  .pipe(browserSync.stream());

// Plugins
function jsPlugins(done) {
  jsTasks(
    paths.js.src.plugins, // src
    'plugins', // file
  );
  done();
}

// Main
function jsMain(done) {
  jsTasks(
    paths.js.src.main, // src
    'main', // file
    true,
  );
  done();
}

// Search
function jsSearch() {
  return src(paths.js.src.search)
    .pipe(changed(paths.js.dest))
    .pipe(plumber())
    .pipe(size({ title: 'search script' }))
    .pipe(dest(paths.js.dest));
  // .pipe(browserSync.stream());
}

function jsUnoptimized() {
  return src(paths.js.src.unoptimized, { base: `${root.src}/js/`, since: lastRun(jsUnoptimized) })
    .pipe(changed(paths.js.dest))
    .pipe(size({ title: 'unoptimized scripts' }))
    .pipe(dest(paths.js.dest));
}

// SCRIPTS BUILD
const js = parallel(
  jsPlugins,
  jsMain,
  jsSearch,
  jsUnoptimized,
);
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 📼 VIDEO
 * -----------------------------------------------------------------------------
 */
// #region
function video() {
  return src(paths.video.src, { since: lastRun(video) })
    .pipe(changed(paths.video.dest))
    .pipe(dest(paths.video.dest));
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🛠 UTILITIES
 * -----------------------------------------------------------------------------
 */
// #region

// CLEAN
const del = require('del');

// Docs
function clean() {
  return del([
    `${root.base}/.jekyll-metadata`,
    `${root.dest.site}/**/*`,
    `!${root.dest.site}/assets`,
    `!${root.dest.site}/CNAME`,
    `!${root.dest.site}/favicon.ico`,
    `!${root.dest.site}/manifest.json`,
    `!${root.dest.site}/robots.txt`,
  ]);
}

// Assets
function cleanAssets() {
  return del([
    `${paths.css.dest}/**/*`,
    `${root.dest.site}_includes/critical.css`,
    `${paths.js.dest}/**/*`,
    `${paths.img.dest}/**/*`,
  ]);
}

function cleanSrc() {
  return del([`${root.src}/**/*.css`]);
}

// CLEAN _site with all assets and Jekyll caches
function cleanAll(done) {
  child.exec('bundle exec jekyll clean', (err, stdout, stderr) => {
    /* eslint-disable no-console */
    console.log(stdout);
    console.log(stderr);
    done(err);
  });
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 📶 SERVER
 * -----------------------------------------------------------------------------
 */
// #region

function watchFiles() {
  watch(paths.css.watch, series(css));
  watch(paths.js.src.main, series(jsMain));
  watch(paths.img.watch, series(img));
  watch(paths.jekyll.docs, series(jekyllBuild));
}

const serve = series(
  clean,
  jekyllBuild,
  svg,
  img,
  video,
  parallel(css, js),
  parallel(jekyllServe, watchFiles),
);

/* Use Browsersync for testing on mobile devices. Use html paths instead
extension-free permalinks */
function serveBS(done) {
  browserSync.init({
    server: {
      baseDir: root.dest.site,
    },
    port: 9000,
    notify: false,
  });
  watchFiles();
  done();
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🏗 BUILD / DEFAULT
 * -----------------------------------------------------------------------------
 */
// #region

const build = series(
  clean,
  cleanSrc,
  jekyllBuild,
  svg,
  img,
  video,
  parallel(css, js),
);

const buildAssets = series(
  svg,
  img,
  video,
  parallel(css, js),
);
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 📤 DEPLOY
 * -----------------------------------------------------------------------------
 */
// #region

const ghPages = require('gulp-gh-pages');

function deploy() {
  return src(`${root.dest.site}/**/*`)
    .pipe(ghPages());
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * ☑️ TASKS
 * -----------------------------------------------------------------------------
 */

/* eslint-disable no-multi-spaces */
exports.cleanSrc    = cleanSrc;
exports.cleanAssets = cleanAssets;
exports.cleanAll    = cleanAll;
exports.clean       = clean;
exports.pug         = pugCompile;
exports.html        = html;
exports.sprite      = sprite;
exports.video       = video;
exports.img         = img;
exports.js          = js;
exports.css         = css;
exports.ba          = buildAssets;
exports.jks         = jekyllServe;
exports.j           = jekyllBuild;
exports.deploy      = deploy;
exports.bs          = serveBS;
exports.s           = serve;
exports.default     = build;

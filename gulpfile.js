/**
 * -----------------------------------------------------------------------------
 * 🎛 COMMON PLUGINS AND SETTINGS
 * -----------------------------------------------------------------------------
 */
// #region

/**
 * ☝️🧐 In order to build a Jekyll site and run a local server,
 * it is preferable to keep package.json, node_modules and execute gulp commands
 * within the source directory.
 * ☝️🧐 The combination of Jekyll built-in server + gulp watchers + Chrome Live
 * Reload Extension is much more faster than the 'gulp only' process.
 * And the first workflow allows us to use extension-free links.
 * ☝️🧐 Uncss shows better results when styles are checked against special pages
 * containing all interface and text components.
 */
const browserSync = require('browser-sync').create();
const gulp        = require('gulp');
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

// Config
const config = {
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
      main: `${config.src}/style.scss`,
      front: `${config.src}/pages/front/front.scss`,
      portfolio: `${config.src}/pages/page/portfolio/portfolio.scss`,
      head: `${config.src}/css/head-styles/*.scss`,
      critical: `${config.src}/critical.scss`,
    },
    watch: `${config.src}/**/*.scss`,
    tmp: `${config.src}/css`,
    dest: `${config.dest.assets}/css`,
  },

  jekyll: {
    docs: [
      `${config.root}/*.html`,
      `${config.root}/_config.yml`, `${config.root}/_data/*.yml`,
      `${config.root}/_includes/*.html`,
      `${config.root}/_layouts/*.html`,
      `${config.root}/_posts/*.*`,
    ],
  },

  markup: {
    src: {
      pug: [
        `${config.src}/**/*.pug`,
        `!${config.src}/**/_*.pug`,
        `!${config.src}/pages/base/*.pug`,
      ],
      html: `${config.dest.site}/**/*.html`,
    },
    watch: `${config.src}/**/*.pug`,
    dest: `${config.src}`,
  },

  img: {
    src: {
      graphics: [
        `${config.src}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
        `!${config.src}/base/icons/sprite/**/*`,
        `!${config.src}/img/**/*`,
      ],
      content: `${config.src}/img/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
    },
    // Vars array in watchers breaks build process, so there is one var for a watcher
    watch: [
      `${config.src}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
      `!${config.src}/base/icons/sprite/**/*`,
    ],
    dest: `${config.dest.assets}/img`,
  },

  js: {
    src: {
      main: [
        `${config.src}/**/*.js`,
        `!${config.src}/js/search.js`,
        `!${config.src}/js/vendor/*.js`,
      ],
      plugins: [
        `${config.src}/js/vendor/jquery.mobile.custom.js`,
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
      search: `${config.src}/js/search.js`,
      unoptimized: [
        `${config.src}/js/vendor/*.js`,
        `!${config.src}/js/vendor/jquery.mobile.custom.js`,
      ],
    },
    dest: `${config.dest.assets}/js`,
  },

  sprite: {
    src: `${config.src}/base/icons/sprite/*.svg`,
    dest: `${config.src}/base/icons`,
  },

  video: {
    src: [
      `${config.src}/**/*.+(mp4|ogg|ogv|webm)`,
      `${config.src}/**/video.zip`,
    ],
    dest: `${config.dest.assets}/video`,
  },
};

const settings = {
  css: {
    autoprefixer: {
      browsers: [
        '> 1%',
        'last 2 versions',
      ],
    },

    uncss: {
      ignore: [

        /* eslint-disable max-len */
        // Bootstrap
        /\w\.in/, /\.navbar(-[a-zA-Z]+)?/, /\.modal(-[a-zA-Z]+)?/, /\.dropdown(-[a-zA-Z]+)?/, /\.carousel(-[a-zA-Z]+)?/, /\.open/, /\.fade/, /\.collaps((-[a-zA-Z])+)?/,

        // Custom
        /\.hlaquo-h1/, /\.slaquo-h1/, /\.vk/, /iframe/, /\.mb(-[a-zA-Z0-9]+)?/, /\.mt(-[a-zA-Z0-9]+)?/,
        /* eslint-enable max-len */
      ],
    },
  },

  sprite: {
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
  },
};
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🧪 JEKYLL
 * -----------------------------------------------------------------------------
 */
// #region

const shell = require('shelljs');

function jekyllBuild(done) {
  let command;

  if (!PRODUCTION) {
    command = child.spawn('bundle', ['exec', 'jekyll', 'build', '--watch', '--incremental'], { stdio: 'inherit' });
    done();
  }

  if (PRODUCTION) {
    command = shell.exec('JEKYLL_ENV=production jekyll build');
    done();
  }
  return command;
}

function jekyllServe() {
  return child.spawn(
    'jekyll',
    // ['serve', '--host=192.168.0.14', '--watch', '--incremental', '--drafts'],
    ['serve', '--watch', '--incremental', '--drafts'],
    { stdio: 'inherit' },
  );
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
const unCSS        = require('gulp-uncss');

// COMMON STYLES FUNCTION
const cssTasks = (src, subtitle, uncssHTML, dest, link = true) => gulp.src(src)
  .pipe(plumber())
  .pipe(changed(paths.css.dest))
  .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
  .pipe(sass({
    precision: 4,
    includePaths: ['.'],
  }).on('error', sass.logError))
  .pipe(autoprefixer({ cascade: false }))
  .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
  .pipe(gulp.dest(paths.css.tmp))
  .pipe(
    gulpif(
      PRODUCTION,
      gulpif(link, unCSS({

        // In case of an error, try to add the array brackets
        html: uncssHTML,

        // CSS Selectors for UnCSS to ignore
        ignore: settings.css.uncss.ignore,
      })),
    ),
  )
  .pipe(gulpif(PRODUCTION, cleanCSS({ level: { 1: { specialComments: 0 } } })))
  .pipe(size({ title: `styles: ${subtitle}` }))
  .pipe(gulp.dest(dest))
  .pipe(browserSync.stream());

// MAIN
function cssMain(done) {
  cssTasks(
    paths.css.src.main, // src
    'main', // subtitle
    // uncssHTML; use array syntax for normal results
    [`${config.src}/css/uncss/**/*.html`],
    paths.css.dest,
  );
  done();
}

// FRONT
function cssFront(done) {
  cssTasks(
    paths.css.src.front, // src
    'front', // subtitle
    [`${config.src}/css/uncss/index.html`], // uncssHTML
    paths.css.dest,
  );
  done();
}

// PORTFOLIO
function cssPortfolio(done) {
  cssTasks(
    paths.css.src.portfolio, // src
    'portfolio', // subtitle
    [`${config.src}/css/uncss/portfolio.html`], // uncssHTML
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
const css = gulp.parallel(
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
const imgTasks = (src, subtitle) => gulp.src(src)
  .pipe(changed(`${config.dest.site}/assets/img`))
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
  .pipe(gulp.dest(`${config.dest.site}/assets/img`))
  .pipe(size({ title: `styles: ${subtitle}` }));

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
const img = gulp.parallel(
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
  return gulp.src(paths.sprite.src)
    .pipe(svgSprite(settings.sprite))
    .pipe(gulp.dest(paths.sprite.dest));
}

const sprite = gulp.series(
  svg,
  gulp.parallel(cssMain, imgGraphics),
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
  return gulp.src(paths.markup.src.pug)
    .pipe(plumber())
    .pipe(pug({
      doctype: 'html',
      pretty: true,
      basedir: config.src,
    }))
    .pipe(size({ title: 'html' }))
    .pipe(gulp.dest(paths.markup.dest));
}

// MINIMIZE HTML
// 'gulp html' does nothing; 'gulp html --p' minifies

const htmlmin = require('gulp-htmlmin');

function html(done) {
  gulp.src(paths.markup.src.html)
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
    .pipe(gulp.dest(paths.markup.dest));
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
const jsTasks = (src, file, compiler) => gulp.src(src)
  .pipe(plumber())
  // Use webpack instead others
  // .pipe(webpackstream(webpackconfig, webpack))
  .pipe(changed(paths.js.dest))
  .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
  .pipe(gulpif(compiler, babel({ presets: ['@babel/preset-env'] })))
  .pipe(concat(`${file}.js`))
  .pipe(uglify())
  .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
  .pipe(size({ title: `scripts: ${file}` }))
  .pipe(gulp.dest(paths.js.dest));
  // .pipe(browserSync.stream());

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
  return gulp.src(paths.js.src.search)
    .pipe(changed(paths.js.dest))
    .pipe(size({ title: 'search script' }))
    .pipe(gulp.dest(paths.js.dest));
  // .pipe(browserSync.stream());
}

function jsUnoptimized() {
  return gulp.src(paths.js.src.unoptimized, { base: `${config.src}/js/` })
    .pipe(changed(paths.js.dest))
    .pipe(size({ title: 'unoptimized scripts' }))
    .pipe(gulp.dest(paths.js.dest));
}

// SCRIPTS BUILD
const js = gulp.parallel(
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
  return gulp.src(paths.video.src)
    .pipe(changed(paths.video.dest))
    .pipe(gulp.dest(paths.video.dest));
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
    `${config.root}/.jekyll-metadata`,
    `${config.dest.site}/**/*`,
    `!${config.dest.site}/assets`,
    `!${config.dest.site}/CNAME`,
    `!${config.dest.site}/favicon.ico`,
    `!${config.dest.site}/manifest.json`,
    `!${config.dest.site}/robots.txt`,
  ]);
}

// Assets
function cleanAssets() {
  return del([
    `${paths.css.dest}/**/*`,
    `${config.dest.site}_includes/critical.css`,
    `${paths.js.dest}/**/*`,
    `${paths.img.dest}/**/*`,
  ]);
}

function cleanSrc() {
  return del([`${config.src}/**/*.css`]);
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

function watch() {
  gulp.watch(paths.css.watch, gulp.series(css));
  gulp.watch(paths.js.src.main, gulp.series(jsMain));
  gulp.watch(paths.img.watch, gulp.series(img));
  gulp.watch(paths.jekyll.docs, gulp.series(jekyllBuild));
}

const serve = gulp.series(
  clean,
  jekyllBuild,
  svg,
  img,
  video,
  gulp.parallel(css, js),
  gulp.parallel(jekyllServe, watch),
);

/* Use Browsersync for testing on mobile devices. Use html paths instead
extension-free permalinks */
function serveBS(done) {
  browserSync.init({
    server: {
      baseDir: config.dest.site,
    },
    port: 9000,
    notify: false,
  });
  watch();
  done();
}
// #endregion

/**
 * -----------------------------------------------------------------------------
 * 🏗 BUILD / DEFAULT
 * -----------------------------------------------------------------------------
 */
// #region

const build = gulp.series(
  clean,
  cleanSrc,
  jekyllBuild,
  svg,
  img,
  video,
  gulp.parallel(css, js),
);

const buildAssets = gulp.series(
  svg,
  img,
  video,
  gulp.parallel(css, js),
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
  return gulp.src(`${config.dest.site}/**/*`)
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
exports.img         = img;
exports.js          = js;
exports.css         = css;
exports.ba          = buildAssets;
exports.jks         = jekyllServe;
exports.j           = jekyllBuild;
exports.deploy      = deploy;
exports.bs           = serveBS;
exports.s           = serve;
exports.default     = build;

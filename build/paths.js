// 👉 PATHS

const root = {
  base: '.',
  src: './src',
  tmp: './assets',
  dest: {
    site: './_site',
    assets: './_site/assets',
    build: './.publish',
  },
};

const srcBase = root.src;
const destAssets = root.dest.assets;

const paths = {
  css: {
    src: {
      main: `${srcBase}/main.scss`,
      front: `${srcBase}/pages/home/home.scss`,
      blog: `${srcBase}/pages/blog/blog.scss`,
      guestbook: `${srcBase}/pages/guestbook/guestbook.scss`,
    },
    watch: `${srcBase}/**/*.scss`,
    tmp: `${srcBase}/styles/css`,
    dest: `${destAssets}/css`,
  },

  jekyll: {
    docs: [
      `${root.base}/*.html`,
      `${root.base}/_config.yml`,
      `${root.base}/_data/*.yml`,
      `${root.base}/_includes/*.html`,
      `${root.base}/_layouts/*.html`,
      `${root.base}/_posts/*.*`,
      `${root.base}/ru/**/*.*`,
      `${root.base}/en/**/*.*`,
    ],
  },

  img: {
    src: {
      graphics: [
        `${srcBase}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
        `!${srcBase}/components/icon/sprite/**/*`,
        `!${srcBase}/components/icon/svg-bg/**/*`,
        `!${srcBase}/assets/img/**/*`,
      ],
      content: `${srcBase}/assets/img/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
    },
    watch: [
      `${srcBase}/**/*.+(jpg|jpeg|png|svg|gif|webp)`,
      `!${srcBase}/components/icon/sprite/**/*`,
    ],
    dest: `${destAssets}/img`,
  },

  js: {
    src: {
      main: `${srcBase}/main.js`,
      standAlone: [`${srcBase}/styles/helpers/animation.js`],
    },
    watch: `${srcBase}/**/*.js`,
    dest: `${destAssets}/js`,
  },

  sprite: {
    src: {
      main: [`${srcBase}/components/icon/sprite/*.svg`],
    },
    dest: `${srcBase}/components/icon`,
  },

  video: {
    src: [`${srcBase}/**/*.+(mp4|ogg|ogv|webm)`, `${srcBase}/**/video.zip`],
    dest: `${destAssets}/video`,
  },

  downloads: {
    src: `${srcBase}/assets/downloads/**/*`,
    dest: `${destAssets}/downloads`,
  },
};

export { root, paths };

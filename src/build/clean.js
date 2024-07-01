// 🧹 CLEAN UP

/* eslint-disable no-console */
import del from 'del';
import { root, paths } from './paths';

/**
 * Cleans the build directories for the site, excluding assets.
 *
 * @returns {Promise<void>} A promise that resolves when the deletion is complete.
 */
export async function cleanPages() {
  await del([
    `${root.base}/.jekyll-cache`,
    `${root.base}/.jekyll-metadata`,
    `${root.dest.site}/**/*`,
    `!${root.dest.site}/assets`,
    `!${root.dest.site}/CNAME`,
    `!${root.dest.site}/favicon.ico`,
    `!${root.dest.site}/manifest.json`,
    `!${root.dest.site}/robots.txt`,
  ]);
}

/**
 * Cleans the assets directories (CSS, JS, and images).
 *
 * @returns {Promise<string[]>} A promise that resolves when the deletion is complete.
 */
export function cleanAssets() {
  return del([
    `${paths.css.dest}/**/*`,
    `${root.dest.site}/_includes/critical.css`,
    `${paths.js.dest}/**/*`,
    `${paths.img.dest}/**/*`,
  ]);
}

/**
 * Cleans the source CSS files.
 *
 * @returns {Promise<string[]>} A promise that resolves when the deletion is complete.
 */
export function cleanSrc() {
  return del([`${root.src}/**/*.css`]);
}

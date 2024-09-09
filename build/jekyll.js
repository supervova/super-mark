// 🧪 JEKYLL

/* eslint-disable no-console */

import shell from 'shelljs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const { argv } = yargs(hideBin(process.argv));
const PRODUCTION = argv.p;

/**
 * Builds the Jekyll project.
 * @param {function} done - Callback function to be called upon completion of the build.
 */
function jekyllBuild(done) {
  const command = PRODUCTION
    ? 'JEKYLL_ENV=production bundle exec jekyll build'
    : 'bundle exec jekyll build --config _config.yml';

  shell.exec(command, (code, stdout, stderr) => {
    if (code !== 0) {
      console.error(`Error: ${stderr}`);
      done(new Error('Jekyll build failed')); // Signal async completion with error
    } else {
      console.log(stdout);
      done(); // Signal async completion
    }
  });
}

/**
 * Starts the Jekyll local server with automatic rebuilds on file changes.
 * @param {function} done - Callback function to be called upon successful server startup.
 */
function jekyllServe(done) {
  const command =
    'bundle exec jekyll serve --incremental --watch --drafts --trace --config _config.yml';

  shell.exec(command, (code, stdout, stderr) => {
    if (code !== 0) {
      console.error(`Error: ${stderr}`);
      done(new Error('Jekyll serve failed')); // Signal async completion with error
    } else {
      console.log(stdout);
      done(); // Signal async completion
    }
  });
}

export { jekyllBuild, jekyllServe };

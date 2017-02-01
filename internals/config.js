const resolve = require('path').resolve;
const pullAll = require('lodash/pullAll');
const uniq = require('lodash/uniq');

const config = {
  version: '1.0.0',
  dllPlugin: {
    defaults: {
      exclude: [
        'chalk',
        'compression',
        'cross-env',
        'express',
        'ip',
        'minimist',
        'sanitize.css',
      ],

      include: ['core-js', 'eventsource-polyfill', 'babel-polyfill', 'lodash'],

      // The path where the DLL manifest and bundle will get built
      path: resolve('../node_modules/marvel-dlls'),
    },

    entry(pkg) {
      const dependencyNames = Object.keys(pkg.dependencies);
      const exclude = pkg.dllPlugin.exclude || config.dllPlugin.defaults.exclude;
      const include = pkg.dllPlugin.include || config.dllPlugin.defaults.include;
      const includeDependencies = uniq(dependencyNames.concat(include));

      return {
        marvelDeps: pullAll(includeDependencies, exclude),
      };
    },
  },
};

module.exports = config;

'use strict';

const path = require('path');
const Debug = require('debug');
const vite = require('vite');

const debug = Debug("cypress-vite");
const cache = {};
function vitePreprocessor(userConfigPath) {
  debug("User config path: %s", userConfigPath);
  return async (file) => {
    const { outputPath, filePath, shouldWatch } = file;
    debug("Preprocessing file %s", filePath);
    if (cache[filePath]) {
      debug("Cached bundle exist for file %s", filePath);
      return cache[filePath];
    }
    const fileName = path.basename(outputPath);
    const filenameWithoutExtension = path.basename(
      outputPath,
      path.extname(outputPath)
    );
    const defaultConfig = {
      logLevel: "silent",
      define: {
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
      },
      build: {
        emptyOutDir: false,
        minify: false,
        outDir: path.dirname(outputPath),
        sourcemap: true,
        write: true,
        watch: getWatcherConfig(shouldWatch),
        lib: {
          entry: filePath,
          fileName: () => fileName,
          formats: ["umd"],
          name: filenameWithoutExtension
        }
      }
    };
    cache[filePath] = outputPath;
    debug("Bundle for file %s cached at %s", filePath, outputPath);
    const watcher = await vite.build({
      configFile: userConfigPath,
      ...defaultConfig
    });
    return new Promise((resolve, reject) => {
      if (shouldWatch && isWatcher(watcher)) {
        watcher.on("event", (event) => {
          debug("Watcher %s for file %s", event.code, filePath);
          if (event.code === "END") {
            resolve(outputPath);
            file.emit("rerun");
          }
          if (event.code === "ERROR") {
            console.error(event);
            reject(new Error(event.error.message));
          }
        });
        file.on("close", () => {
          delete cache[filePath];
          watcher.close();
          debug("File %s closed.", filePath);
        });
      } else {
        resolve(outputPath);
      }
    });
  };
}
function getWatcherConfig(shouldWatch) {
  return shouldWatch ? {} : null;
}
function isWatcher(watcher) {
  return watcher.on !== void 0;
}

module.exports = vitePreprocessor;

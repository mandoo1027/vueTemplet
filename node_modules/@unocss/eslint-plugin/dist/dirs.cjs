'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const node_url = require('node:url');

const distDir = node_url.fileURLToPath(new URL("../dist", (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('dirs.cjs', document.baseURI).href))));

exports.distDir = distDir;

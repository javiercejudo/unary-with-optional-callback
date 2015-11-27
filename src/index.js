/*jshint node:true */

'use strict';

module.exports = function unaryWithOptionalCallback(fn, fallback) {
  return function(x, callback) {
    return fn(callback || fallback, x);
  };
};

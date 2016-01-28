'use strict';

module.exports = function (str, opts) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  opts = opts || {};

  return 'I am cool';
};

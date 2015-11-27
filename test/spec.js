/*jshint node:true, mocha:true */

'use strict';

require('should');

var unaryWithOptionalCallback = require('../');

function transformableSqrt(transformer, x) {
  return transformer(Math.sqrt(x));
}

describe('binary function with optional callback', function() {
  it('should take a function and a fallback and return a function that takes an x and and optional fallback', function() {
    var integerSqrt = unaryWithOptionalCallback(transformableSqrt, Math.floor);

    integerSqrt(8).should.be.exactly(2);
    integerSqrt(8, Math.ceil).should.be.exactly(3);
  });
});

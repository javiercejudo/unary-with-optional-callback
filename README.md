# unary-with-optional-callback

[![Build Status](https://travis-ci.org/javiercejudo/unary-with-optional-callback.svg)](https://travis-ci.org/javiercejudo/unary-with-optional-callback)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/unary-with-optional-callback/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/unary-with-optional-callback?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/unary-with-optional-callback/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/unary-with-optional-callback)

Creates a unary function with an optional transformer callback from a callable and a transformer fallback

## Install

    npm i unary-with-optional-callback

## Usage

```js
var unaryWithOptionalCallback = require('unary-with-optional-callback');

function transformableSqrt(transformer, x) {
  return transformer(Math.sqrt(x));
}

var integerSqrt = unaryWithOptionalCallback(transformableSqrt, Math.floor);

integerSqrt(8); // => 2
integerSqrt(8, Math.ceil); // => 3
```

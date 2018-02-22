# koa-logline

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

Minimal, dependency-free logging middleware for Koa web apps.

## Install

```
npm install --save koa-logline
```

## API

```js
logline(stream)
```

Returns an async function that plugs into a Koa middleware stack.

The `stream` argument is an optional [stream](https://nodejs.org/api/stream.html) to write request logs to. If not provided, it defaults to `stdout`.

Log lines are written in the [Common Log Format](https://en.wikipedia.org/wiki/Common_Log_Format).

## Usage

Default logging to `stdout`:

```js
const koa = require('koa')
const logline = require('koa-logline')

const app = new koa()

app.use(logline())

app.listen(3000)
```

Logging to syslog using the [syslog2](https://www.npmjs.com/package/syslog2) library:

```js
const koa = require('koa')
const logline = require('koa-logline')
const syslog = require('syslog2')

const app = new koa()
const log = new syslog2.create()

app.use(logline(log))

app.listen(3000)
```

## Alternatives

This package was written for a very specific use case and may not be right for yours. If you require more configurability or flexibility, [search NPM for ‘koa log’](https://www.npmjs.com/search?q=koa+log) and check out the alternatives.

## License

Copyright 2018 Digivizer Pty Ltd.

This project is open source under the terms of the ISC license. See the `LICENSE` file included with this software distribution for more information.

[npm-image]: https://img.shields.io/npm/v/koa-logline.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/koa-logline
[travis-image]: https://img.shields.io/travis/digivizer/koa-logline/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/digivizer/koa-logline

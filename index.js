const util = require('util')

module.exports = function(stream) {
  if (!stream) {
    stream = process.stdout
  }

  return async function(ctx, next) {
    await next()

    // ip, date, method, path, status and length
    let format = '%s - - [%s] "%s %s HTTP/1.X" %d %s\n'
    let length = ctx.length ? ctx.length.toString() : '-'
    let date = new Date()

    stream.write(util.format(format, ctx.ip, date, ctx.method, ctx.path, ctx.status, length))
  }
}

const test = require('ava')
const { stdio } = require('stdio-mock')
const logline = require('./index')

test('writes CLF log line for a given request', t => {
  const { stdout } = stdio()

  const ctx = {
    ip: '127.0.0.1',
    method: 'GET',
    path: '/ping',
    status: 200,
    body: 'OK',
    length: 2
  }

  stdout.on('data', line => {
    t.regex(line, /127.0.0.1/)
    t.regex(line, /"GET \/ping HTTP\/1.X"/)
    t.regex(line, /200 2/)
  })

  logline(stdout)(ctx, () => t.pass())
})

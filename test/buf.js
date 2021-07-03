const test = require('tape')
const tou8 = require('../index.js')

test('buffer to uint8', function (t) {
  t.plan(2)
  const buf = Buffer.from('whatever')
  const a = tou8(buf)
  t.equal(a.constructor.name, 'Uint8Array', 'constructor name')
  t.equal(a.length, 8, 'buffer length')
})

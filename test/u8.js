const test = require('tape')
const tou8 = require('../')

test('uint8 to uint8', function (t) {
  t.plan(3)
  const a = new Uint8Array(8)
  const buf = Buffer.from('whatever')
  for (let i = 0; i < buf.length; i++) a[i] = buf[i]

  const b = tou8(a)

  t.notEqual(a, b, 'reference equality')
  t.equal(a.constructor.name, 'Uint8Array', 'constructor name')
  t.equal(a.length, 8, 'u8 length')
})

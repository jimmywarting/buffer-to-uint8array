const test = require('tape')
const tou8 = require('../')

test('string to uint8', function (t) {
  t.plan(2)
  const str = 'whatever'
  const a = tou8(str)
  t.equal(a.constructor.name, 'Uint8Array', 'constructor name')
  t.equal(a.length, 8, 'length')
})

const tou8 = require('../')
const buf = Buffer.from('whatever')
const a = tou8(buf)
console.log(a.constructor.name)
console.log(a)

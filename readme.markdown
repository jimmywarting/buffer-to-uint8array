# buffer-to-uint8array

Convert a ArrayBuffer, ArrayBufferView (or string) to a Uint8Array

# example

``` js
import tou8 from 'buffer-to-uint8array'
const buf = Buffer.from('whatever')
const a = tou8(buf)
console.log(a.constructor.name)
console.log(a)
```

# methods

``` js
import tou8 from 'buffer-to-uint8array'
```

## const u = tou8(buf)

Convert `buf`, a `ArrayBuffer`, `ArrayBufferView` or `String` to a `Uint8Array`.
It will use same underlying ArrayBuffer to avoid copying

# install

With [npm](https://npmjs.org) do:

```
npm install buffer-to-uint8array
```

# license

MIT

module.exports = buf => ArrayBuffer.isView(buf)
  ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength)
  : buf instanceof ArrayBuffer
    ? new Uint8Array(buf)
    : new TextEncoder().encode(buf)

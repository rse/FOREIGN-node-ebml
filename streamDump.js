/* eslint no-console:off */
const { EbmlStreamDecoder } = require('./lib');

const ebmlDecoder = new EbmlStreamDecoder();
const counts = {};

let indent = 0
let dump = ""
require('fs')
  .createReadStream('media/test.webm')
  .pipe(ebmlDecoder)
  .on('data', (tag) => {
      const str = tag.dump()
      if (str.match(/^<\//)) {
          indent--
      }
      let prefix = ""
      for (let i = 0; i < indent; i++)
          prefix += "    "
      dump += prefix + str + "\n"
      if (str.match(/^<(?:[^/]|[^/].*[^/])>$/)) {
          indent++
      }
  })
  .on('finish', () => {
      console.log(dump)
  })


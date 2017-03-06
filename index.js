const micro = require('micro')
const pug   = require('pug')
const fs    = require('fs')

let locals = {};
locals.renderer = fs.readFileSync('./src/render.js')

const server = micro(async (req, res) => {
  var fn = pug.compileFile('./src/index.pug')
  var html = fn(locals)
  micro.send(res, 200, html)
})

server.listen(3000)

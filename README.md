# `micro-pugjs`

A stupid demo of a stupid hack.

### `summary`
We're sending javascript code over in a single
`micro.send()` call.

We achieve this by rendering the code we care about as
unbuffered code via pugjs. In our example, we also include
`jquery` to help give us bindings when the page loads.

#### tl;dr:
Instead of including javascript files like a normal person,
I made this.

### `so what?`
I don't know yet. Let me know if you figure it something out.


### `index.js`
```javascript
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
```

const temp = require('./temp.js')
const tempUrl = require('./assets/temp.png')

const logo = new Image()
logo.src = tempUrl
document.body.appendChild(logo)

temp.hello(temp.v1)
console.log('test')

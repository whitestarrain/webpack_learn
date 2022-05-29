const temp = require('./temp.js')
const tempUrl = require('./assets/temp.png')
const indexCss = require('./css/home.css')

const logo = new Image()
logo.src = tempUrl
document.body.appendChild(logo)

temp.hello(temp.v1)
console.log('test')

console.log(indexCss)

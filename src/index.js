import { hello, v1 } from './temp.js'
import tempUrl from './assets/temp.png'
import indexCss from './css/home.css'

const logo = new Image()
logo.src = tempUrl
document.body.appendChild(logo)

hello(v1)
console.log('test')

console.log(indexCss)

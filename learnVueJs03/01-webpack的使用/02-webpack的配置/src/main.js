//CommonJs导入
const {add,mul} = require('./mathUtils.js')

console.log(add(20,30))
console.log(mul(20,30))

//ES6导入
import {name,age,height} from './info.js'

console.log(name,age,height);

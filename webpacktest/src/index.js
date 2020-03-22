import calc from './utils/utility'

let x = 9;
let y = 3;
let str = `<h2>${x} + ${y} = ${calc.add2(x, y)}</h2>`

document.getElementById('app').innerHTML = str
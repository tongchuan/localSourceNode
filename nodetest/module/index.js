// 当 Node.js 直接运行一个文件时，require.main 会被设为它的 module

// console.log(require.main===module) // true

// const circle = require('./circle.js');
// console.log(`半径为 4 的圆的面积是 ${circle.area(4)}`)

// const Square = require('./square.js');
// const mySquare = new Square(2)
// console.log(`mySquare 的面积是 ${mySquare.area()}`)

// (function(exports, require, module, __filename, __dirname){

// console.log(__dirname)
// console.log(__filename)
// });
// console.log(__dirname)
// console.log(__filename)

const a = require('./a.js')
a.on('ready',(data,index)=>{
	console.log(index)
	console.log(data)
	console.log(`模块 a 已准备好`)
})
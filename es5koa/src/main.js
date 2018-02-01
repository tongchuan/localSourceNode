import "babel-polyfill"
import 'babel-register'

import Koa from 'koa'
import Router from 'koa-router'
import View from 'koa-view'
import router from './router'
let app = new Koa()
app.env = process.env.NODE_ENV || 'development'; 
// let router = new Router()

// router.all('/news', async(ctx,next)=>{
// 	ctx.body = 'news'
// })
// router.all('/api', async(ctx,next)=>{
// 	ctx.body = 'api'
// })
// 
console.log(app.env)
app.use(View(__dirname + '/views'));
app.use(router.routes())
app.use(async(ctx, next) => {
	ctx.body = 'Hello World!'
})

app.listen(5000)

// export default class Main{
// 	constructor(name,age){
// 		this.name = name
// 		this.age = age
// 	}
// 	getName(){
// 		return this.name
// 	}
// 	getAge(){
// 		return this.age
// 	}
// }
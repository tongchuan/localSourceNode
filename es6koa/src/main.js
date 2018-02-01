import "babel-polyfill"
import 'babel-register'
import path from 'path'
import Koa from 'koa'
import Router from 'koa-router'
import View from 'koa-view'
import Keygrip from 'keygrip'
import serve from 'koa-static'
import favicon from 'koa-favicon'

import router from './router'
// import logger from './utils/logger'

let app = new Koa()
app.env = process.env.NODE_ENV || 'development'; 

// console.log(path.join(__dirname,'../static/images/favicon.ico'))
// app.use(logger({
//   "file": "./logs/log_file.log",
// }))
app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new Keygrip(['im a newer secret', 'i like turtle'], 'sha256');

app.use(async (ctx, next) => {
  ctx.acceptsCharsets('utf-8', 'utf-7');
  if(ctx.url.slice(0,4)==='/api'){
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Headers', 'Origin, Content-Type, Authorization, X-Requested-With, Accept')
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    ctx.set('X-Powered-By', '3.2.1')
    ctx.set('Content-Type', 'application/json;charset=utf-8')
  }
  await next()
})

app.use(favicon(path.join(__dirname,'../static/images/favicon.ico')))
app.use(View(path.join(__dirname,'views')));
app.use(serve(path.join(__dirname, '../static')))
app.use(router.routes())
// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now();
  await next()
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.on('error', err => {
  console.error('server error', err)
});

app.use(async(ctx, next) => {
	await ctx.render('404')
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
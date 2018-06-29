import Koa from 'koa'
import http from 'http'
import path from 'path'
import os from 'os'
import koaFavicon from 'koa-favicon'
import koaViews from 'koa-views'
import koaStatic from 'koa-static'
import koaJson from 'koa-json'
import koaSession from 'koa-session'
// import socketIo from 'socket.io'

import router from './router/index'
import socket from './socket/index'

const app = new Koa()


// console.log(path.resolve('./views'))
app.use(koaStatic(path.resolve('./static')))
app.use(koaViews(path.resolve('./views'), {
  // map: {html: 'nunjucks' }
}))
app.use(router.routes())

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
app.on('error', (err, ctx)=>{
  console.log('server error', err, ctx)
})




// app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(koaViews('views', {
//   root: __dirname + '/views',
//   default: 'hbs',
//   map: { hbs: 'handlebars' }
// }));
// app.use(koaJson())

// pp.keys = ['some secret hurr'];
 
// const CONFIG = {
//   key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
//   /** (number || 'session') maxAge in ms (default is 1 days) */
//   /** 'session' will result in a cookie that expires when session/browser is closed */
//   /** Warning: If a session cookie is stolen, this cookie will never expire */
//   maxAge: 86400000,
//   overwrite: true, /** (boolean) can overwrite or not (default true) */
//   httpOnly: true, /** (boolean) httpOnly or not (default true) */
//   signed: true, /** (boolean) signed or not (default true) */
//   rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
//   renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
// };
 
// app.use(koaSession(CONFIG, app));
// // or if you prefer all default config, just use => app.use(session(app));
 
// app.use(ctx => {
//   // ignore favicon
//   if (ctx.path === '/favicon.ico') return;
 
//   let n = ctx.session.views || 0;
//   ctx.session.views = ++n;
//   ctx.body = n + ' views';
// });


let port = 3000;
let host = 'localhost'
let exclusive = false
const hostData =  Object.values(os.networkInterfaces())
hostData.forEach((item)=>{
  host = item[0].address
})

app.context.address = {host, port, exclusive}

const server = http.createServer(app.callback())
socket(server)
// console.log({host, port, exclusive})
server.listen({host, port, exclusive},()=>{
  console.log(`server start: http://${server.address().address}:${server.address().port}`)
})
// app.listen(3000)
// http.createServer(app.callback()).listen(3000);
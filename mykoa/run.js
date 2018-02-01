const Koa = require('koa')
const view = require('koa-view')
const Keygrip = require('keygrip')
const serve = require('koa-static')
const favicon = require('koa-favicon');
const logger = require('./utils/logger')
const app = new Koa()
const router = require('./router')

// console.log(process.env)
app.env = process.env.NODE_ENV || 'development'; 
// console.log(process.env.NODE_ENV)
app.use(logger({
  "file": "logs/log_file.log",
}))

app.use(async(ctx, next) => {
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

app.use(view(__dirname + '/views'));
app.use(router.routes())
app.use(serve(__dirname+'/static'))
app.use(favicon(__dirname + '/static/images/favicon.ico'))

app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new Keygrip(['im a newer secret', 'i like turtle'], 'sha256');

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
  // console.log(`${JSON.stringify(ctx)}`)
  // {"request":{"method":"GET","url":"/","header":{"host":"127.0.0.1:3000","connection":"keep-alive","pragma":"no-cache","cache-control":"no-cache","upgrade-insecure-requests":"1","user-agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.119 Safari/537.36","accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8","accept-encoding":"gzip, deflate, br","accept-language":"zh-CN,zh;q=0.9,en;q=0.8","cookie":"_ga=GA1.1.1648667098.1515564083; session=eyJsb2dnZWRfaW4iOnRydWV9.DVHgCQ.fsS-vd0yKoXR3Yv0FcX8O2m07m0"}},"response":{"status":200,"message":"OK","header":{"content-type":"text/plain; charset=utf-8","content-length":"11"}},"app":{"subdomainOffset":2,"proxy":false,"env":"development"},"originalUrl":"/","req":"<original node req>","res":"<original node res>","socket":"<original node socket>"}
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  // console.log(JSON.stringify(ctx))
})

app.on('error', err => {
  console.error('server error', err)
});

app.use(async ctx => {
  await ctx.render('404')
  // ctx.body = 'Hello World'
  // ctx; // 这是 Context
  // ctx.request; // 这是 koa Request
  // ctx.response; // 这是 koa Response
  // ctx.req Node 的 request 对象.
  // ctx.res Node 的 response 对象.
  // 绕过 Koa 的 response 处理是 不被支持的. 应避免使用以下 node 属性：
  // ctx.state 推荐的命名空间，用于通过中间件传递信息和你的前端视图。
  // ctx.state.user = await User.find(id);
  // ctx.acceptsEncodings('gzip', 'deflate', 'identity');

})
app.listen(3001)
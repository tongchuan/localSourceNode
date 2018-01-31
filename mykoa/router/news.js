const Router = require('koa-router')
const router = new Router()
const newModel = require('../model/newsModel')

router.all('/', async (ctx, next) => {
  // ctx.body ='news index'
  // ctx.cookies.set('name', 'tobi', { signed: true });
  let list = []
  await newModel.getData({name:111}).then((data)=>{
    list = data
  }, (error) => {
    console.log(error)
  })
  await ctx.render('news/list',{name:"张彤川", data:list})
  
})

router.all('/detailed/:id', async(ctx, next) => {
  // console.log(ctx.params)
  let list = {}
  await newModel.getItem({ id: ctx.params.id}).then((data)=>{
    // console.log(data)
    list = data[0]
  }, (error) => {
    // console.log(error)
  })
  // console.log(list)
  // let data = { id: ctx.params.id}
  // data.name = "zhang"
  // data.age = 55
  // data.list = [{kaishi:1,kaishi2:3433}]
  // data.cook = ctx.cookies.get('name')
  // console.log(ctx)
  // ctx.request.header['Content-Type'] = 'application/json; charset=utf-8'
  // console.log(ctx)
  // console.log('===============')
  // ctx.body ='news Detailed'
  await ctx.render('news/detailed',{data:list})
})

module.exports = router ;
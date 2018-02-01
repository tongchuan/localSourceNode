import Router from 'koa-router'
const router = new Router()

router.all('/', async (ctx, next) => {
  let data = {
    code: 1000,
    msg: '成功',
    data: [{name:1,age:3},{name:1,age:3},{name:1,age:3}]
  }
  ctx.body = await JSON.stringify(data)
})

router.all('/detailed/:id', async (ctx, next) => {
  let data = {
    code: 1000,
    msg: '成功',
    data: [{name:1,age:3},{name:1,age:3},{name:1,age:3}]
  }
  ctx.body = await JSON.stringify(data)
})

export default router

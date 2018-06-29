import koaRouter from 'koa-router'
const router = new koaRouter()
router.get('/',async (ctx,next)=>{
  console.log(ctx.address)
  await ctx.render('index/index')
})
export default router;
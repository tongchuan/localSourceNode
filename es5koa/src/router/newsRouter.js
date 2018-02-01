import Router from 'koa-router'

const router = new Router()

router.all('/',async(ctx, next) => {
	// ctx.body = 'news index'
	await ctx.render('news/index',{data:"news/index"})
})

router.all('/list',async(ctx, next) => {
	await ctx.render('news/list',{data:"news/list"})
})


router.all('/details',(ctx, next) => {
	ctx.body = 'news details'
})

export default router
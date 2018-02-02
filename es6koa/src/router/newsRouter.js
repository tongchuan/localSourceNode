import Router from 'koa-router'
import resultModel from '../model/resultModel'
import newsModel from '../model/newsModel'

const router = new Router()
// const model = new newsModel()

router.all('/',async(ctx, next) => {
	// ctx.body = 'news index'
	let result = new resultModel()
	await newsModel.getEntries().then((data)=>{
		result.data = data
	},(err)=>{
		result.message = err.toString()
	})
	await ctx.render('news/index',result)
})

router.all('/list',async(ctx, next) => {
	let result = new resultModel()
	await newsModel.getEntriesById().then((data)=>{
		result.data = data
	},(err)=>{
		result.message = err.toString()
	})
	await ctx.render('news/list',result)
})


router.all('/details/:id',async (ctx, next) => {
	let result = new resultModel()
	// console.log(ctx.params.id)
	await newsModel.getEntriesById(ctx.params.id).then((data)=>{
		result.data = data[0]//Object.assign({}, data[0])
	},(err)=>{
		result.message = err.toString()
	})
	// console.log(result)
	await ctx.render('news/details',result)
})

router.all('/test',(ctx, next) => {
	ctx.body = 'news test'
})
export default router
import Router from 'koa-router'
import newsRouter from './newsRouter'

const router = new Router()

router.use('/news', newsRouter.routes())

export default router
import Router from 'koa-router'
import newsRouter from './newsRouter'
import apiRouter from './apiRouter'

const router = new Router()

router.use('/news', newsRouter.routes())
router.use('/api', apiRouter.routes())
export default router
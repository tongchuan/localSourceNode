const Router = require('koa-router')
const router = new Router()
const routerNews = require('./news')
const routerApi = require('./api') 

router.use('/news', routerNews.routes())
router.use('/api', routerApi.routes())

module.exports = router ;
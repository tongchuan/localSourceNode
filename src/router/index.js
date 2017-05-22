import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/Index'
import News from '@/containers/News'
// import Hello from '@/components/Hello'
import Page404 from '@/components/Page404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})

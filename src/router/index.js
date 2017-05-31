import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/Index'
const NotFound = resolve => require(['@/containers/notFound'], resolve)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/Index'
const NotFound = resolve => require(['@/containers/notFound'], resolve)
const List = resolve => require(['@/containers/list'], resolve)
const Form = resolve => require(['@/containers/form'], resolve)
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/index'
const NotFound = resolve => require(['@/containers/notFound'], resolve)
const List = resolve => require(['@/containers/list'], resolve)
const Form = resolve => require(['@/containers/form'], resolve)
const Register = resolve => require(['@/containers/register'], resolve)
const VuePage = resolve => require(['@/containers/vue'], resolve)
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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/vue',
      name: 'Vue',
      component: VuePage,
      children: [
        {
          path: '/vue/page1',
          name: 'vueRegister',
          component: Form
        },
        {
          path: '/vue/page2',
          name: 'vueRegister',
          component: Register
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/containers/Index'
// import News from '@/containers/News'
// import Test from '@/containers/Test'
// import Hello from '@/components/Hello'
// import Page404 from '@/components/Page404'
// import UserLogin from '@/containers/userLogin'
Vue.use(Router)
const News = resolve => require(['@/containers/News'], resolve)
const Test = resolve => require(['@/containers/Test'], resolve)
const Page404 = resolve => require(['@/components/Page404'], resolve)
const UserLogin = resolve => require(['@/containers/userLogin'], resolve)
const UserList = resolve => require(['@/containers/UserList'], resolve)
// const UserLogin = resolve => { require(['@/containers/userLogin'], resolve) }
// const UserLogin = resolve => {
//   // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//   // （代码分块）
//   require.ensure(['@/containers/userLogin'], () => {
//     resolve(require('@/containers/userLogin'))
//   })
// }
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
      path: '/news',
      name: 'home',
      component: News
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: Test
    },
    {
      path: '/usersd',
      name: 'register',
      component: Test
    },
    {
      path: '/login',
      name: 'userlogin',
      component: UserLogin
    },
    {
      path: '/list',
      name: 'userlist',
      component: UserList
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ]
})

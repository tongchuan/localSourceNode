// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
import router from './router'
import $ from 'jquery'
import iView from 'iview'
import Vuerify from 'vuerify'

// import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'
// import zhLocale from 'iview/src/locale/lang/zh-CN'
// import enLocale from 'iview/src/locale/lang/en-US'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import Modal from './util/modal'
import store from './store'
Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(Modal)
// Vue.use(VueI18n)
Vue.use(iView)
Vue.use(Vuerify)
Vue.config.lang = 'zh-CN'
// Vue.locale('zh-CN', zhLocale)
// Vue.locale('en-US', enLocale)

router.beforeEach((to, form, next) => {
  $('#app')
  // $.ajax({
  //   url: 'http://baidu.com',
  //   data: {name: 'zhangtongchuan'},
  //   success: function () {

  //   },
  //   error: function () {

  //   }
  // })
  // console.log(store.carouselStore)
  // // console.log(store._actions['USER_LIST']())
  // console.log([to, form, next])
  next()
})
console.log(router)
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
})

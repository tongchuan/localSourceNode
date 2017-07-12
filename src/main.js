// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import ElementUI from 'element-ui'
import router from './router'
import $ from 'jquery'
import iView from 'iview'
// import Vuerify from 'vuerify'
import VeeValidate from 'vee-validate'
// import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'
// import zhLocale from 'iview/src/locale/lang/zh-CN'
// import enLocale from 'iview/src/locale/lang/en-US'
import 'bootstrap/dist/css/bootstrap.min.css'
// import 'element-ui/lib/theme-default/index.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './less/main'
import Verify from '@/util/verify'
// import Modal from './util/modal'
import store from './store'
Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(Modal)
// Vue.use(VueI18n)
// console.log()
Vue.use(iView)

Vue.use(Verify)
// Vue.$IsEmail('444444$IsEmail')

// Vue.use(Vuerify)

// const config = {
//   errorBagName: 'errors', // change if property conflicts.
//   fieldsBagName: 'fields',
//   delay: 0,
//   locale: 'zh_CN',
//   dictionary: null,
//   strict: true,
//   enableAutoClasses: false,
//   classNames: {
//     touched: 'touched', // the control has been blurred
//     untouched: 'untouched', // the control hasn't been blurred
//     valid: 'valid', // model is valid
//     invalid: 'invalid', // model is invalid
//     pristine: 'pristine', // control has not been interacted with
//     dirty: 'dirty' // control has been interacted with
//   },
//   events: 'input|blur',
//   inject: true
// }
// VeeValidate.extend('mobile', {
//   messages: {
//     zh_CN: field => field + '必须是11位手机号码'
//   },
//   validate: value => {
//     return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//   }
// })
Vue.use(VeeValidate)
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
// console.log(router)
/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
})

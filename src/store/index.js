import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import userStore from './modules/userStore'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    userStore
  }
})
export default store

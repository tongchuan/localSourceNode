import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import userStore from './modules/userStore'
import carouselStore from './modules/carouselStore'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user,
    userStore,
    carouselStore
  }
})
export default store

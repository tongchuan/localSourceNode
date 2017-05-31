import * as carouselDB from '../../api/carouselDB'
export const CAROUSEL_LIST = 'CAROUSEL_LIST'

const state = {
  carouselStore: {
    dataList: []
  }
}
const getters = {
  carouselStore: state => {
    return state.carouselStore
  }
}

const actions = {
  [CAROUSEL_LIST] ({commit}, data) {
    console.log(data)
    carouselDB.getCarousel(data).then((data) => {
      commit(CAROUSEL_LIST, data)
    })
  }
}

const mutations = {
  [CAROUSEL_LIST] (state, data) {
    state.carouselStore.dataList = Object.assign([], data.data)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}


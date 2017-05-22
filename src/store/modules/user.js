import userDB from '../../api/user'

const GET_USER_ITEM = 'GET_USER_ITEM' //
const USER_DATA_ERROR = 'USER_DATA_ERROR'

const state = {
  user: null,
  error: ''
}
const getters = {
  user: state => {
    return state.user
  }
}

const actions = {
  getUser ({ commit, state }, { data }) {
    userDB.getUserById(data).then((data) => {
      commit('GET_USER_ITEM', data)
    }, (err) => {
      commit('USER_DATA_ERROR', err)
    })
  },
  updateUser ({ commit, state }, { data }) {
    userDB.updateUser(data).then((data) => {
      commit('GET_USER_ITEM', data)
    }, (err) => {
      commit('USER_DATA_ERROR', err)
    })
  }
}
const mutations = {
  [GET_USER_ITEM] (state, { data }) {
    state.user = data
  },
  [USER_DATA_ERROR] (state, err) {
    state.error = err.toString()
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}

import userDB from '../../api/userDB'
// import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN' // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录]
export const USER_LIST = 'USER_LIST'

const state = {
  userStore: {
    user: JSON.parse(localStorage.getItem('user')) || {},
    userList: []
  }
}

const getters = {
  userStore: state => {
    return state.userStore
  }
}

const actions = {
  [USER_SIGNIN] ({commit}, user) {
    // console.log('-----------')
    // console.log(user)
    commit(USER_SIGNIN, user)
  },
  [USER_SIGNOUT] ({commit}) {
    // console.log('============')
    // localStorage.removeItem('user')
    commit(USER_SIGNOUT)
  },
  [USER_LIST] ({commit}) {
    userDB.userList().then((data) => {
      console.log(data)
      commit(USER_LIST, data.data)
    })
  }
}

const mutations = {
  [USER_SIGNIN] (state, user) {
    localStorage.setItem('user', JSON.stringify(user))
    // console.log(JSON.stringify(user))
    state.userStore.user = user
    // sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign({}, state)
  },
  [USER_SIGNOUT] (state) {
    // sessionStorage.removeItem('user')
    localStorage.removeItem('user')
    // console.log(state.userStore)
    // console.log(Object.keys(state.userStore))
    state.userStore.user = {}
    Object.assign({}, state)
    // Vue.delete(state.userStore.user, 'user')
    // Object.keys(state).forEach(k => Vue.delete(state, k))
  },
  [USER_LIST] (state, data) {
    state.userStore.userList = Object.assign([], data)
    Object.assign({}, state)
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}

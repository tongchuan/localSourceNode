// import userDB from '../../api/userDB'

export const USER_SIGNIN = 'USER_SIGNIN' // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录

const state = {
  userStore: {
    user: JSON.parse(localStorage.getItem('user')) || {}
  }
}

const getters = {
  userStore: state => {
    return state.userStore
  }
}

const actions = {
  [USER_SIGNIN] ({commit}, user) {
    console.log('-----------')
    console.log(user)
    commit(USER_SIGNIN, user)
  },
  [USER_SIGNOUT] ({commit}) {
    console.log('============')
    localStorage.removeItem('user')
    commit(USER_SIGNOUT)
  }
}

const mutations = {
  [USER_SIGNIN] (state, user) {
    // sessionStorage.setItem('user', JSON.stringify(user))
    // Object.assign(state, user)
  },
  [USER_SIGNOUT] (state) {
    // sessionStorage.removeItem('user')
    // Object.keys(state).forEach(k => Vue.delete(state, k))
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}

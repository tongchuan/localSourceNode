import userDB from '../../api/userDB'
// import Vue from 'vue'
export const USER_SIGNIN = 'USER_SIGNIN' // 登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' // 退出登录]
export const USER_LIST = 'USER_LIST'
export const USER_SAVE = 'USER_SAVE'
export const USER_DEL = 'USER_DEL'
// sessionStorage
// localStorage
const state = {
  userStore: {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
    userList: [],
    ListPage: {
      page: 1,
      rows: 5,
      total: 0
    },
    userSaveMsg: {
      code: 0,
      msg: '',
      data: null
    },
    userDelMsg: {
      code: 0
    }
  }
}

const getters = {
  userStore: state => {
    return state.userStore
  }
}

const actions = {
  [USER_SIGNIN] ({commit}, user) {
    commit(USER_SIGNIN, user)
  },
  [USER_SIGNOUT] ({commit}) {
    commit(USER_SIGNOUT)
  },
  [USER_LIST] ({commit, state}, data) {
    userDB.userList(data).then((data) => {
      commit(USER_LIST, data)
    })
  },
  [USER_SAVE] ({commit, state}, data) {
    userDB.userSave(data).then((data) => {
      commit(USER_SAVE, {code: 1, msg: '添加成功！', data: data})
    }, (error) => {
      commit(USER_SAVE, {code: 2, msg: '添加失败，' + error.toString() + '!', data: null})
    })
  },
  [USER_DEL] ({commit, state}, data) {
    userDB.userDel(data).then((data) => {
      commit(USER_DEL, data)
    })
  }
}

const mutations = {
  [USER_SIGNIN] (state, user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    // console.log(JSON.stringify(user))
    state.userStore.user = user
    // sessionStorage.setItem('user', JSON.stringify(user))
    Object.assign({}, state)
  },
  [USER_SIGNOUT] (state) {
    // sessionStorage.removeItem('user')
    sessionStorage.removeItem('user')
    // console.log(state.userStore)
    // console.log(Object.keys(state.userStore))
    state.userStore.user = {}
    Object.assign({}, state)
    // Vue.delete(state.userStore.user, 'user')
    // Object.keys(state).forEach(k => Vue.delete(state, k))
  },
  [USER_LIST] (state, data) {
    state.userStore.userList = Object.assign([], data.data)
    state.userStore.ListPage = Object.assign({}, {page: data.page, rows: data.rows, total: data.total})
    Object.assign({}, state)
  },
  [USER_SAVE] (state, data) {
    state.userStore.userSaveMsg = Object.assign({}, data)
  },
  [USER_DEL] (state, data) {
    state.userStore.userDelMsg = Object.assign({}, {code: 1})
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}

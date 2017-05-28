import $ from 'jquery'
import config from './config'
export default {
  getUserById (data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: config.user.getUserItem,
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        dataType: 'json',
        beforeSend: () => {
        },
        success: (data) => {
          resolve(data)
        },
        error: (err) => {
          reject(err)
        }
      })
    })
  },
  updateUser (data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: config.user.updateUser,
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        dataType: 'json',
        beforeSend: () => {
        },
        success: (data) => {
          resolve(data)
        },
        error: (err) => {
          reject(err)
        }
      })
    })
  },
  userList (data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: config.user.userList,
        type: 'get',
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        dataType: 'json',
        beforeSend: () => {
        },
        success: (data) => {
          resolve(data)
        },
        error: (err) => {
          reject(err)
        }
      })
    })
  },
  userSave (data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: config.user.userSave,
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        dataType: 'json',
        beforeSend: () => {
        },
        success: (data) => {
          resolve(data)
        },
        error: (err) => {
          reject(err)
        }
      })
    })
  },
  userDel (data) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: config.user.userDel,
        type: 'post',
        contentType: 'application/x-www-form-urlencoded',
        data: data,
        dataType: 'json',
        beforeSend: () => {
        },
        success: (data) => {
          resolve(data)
        },
        error: (err) => {
          reject(err)
        }
      })
    })
  }
}

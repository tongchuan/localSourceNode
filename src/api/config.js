const serverURL = 'http://127.0.0.1:88/'
export default {
  user: {
    getUserItem: serverURL + 'mapping/add',
    updateUser: serverURL + 'ddd',
    userList: 'http://localhost:8080/api/user/listPage',
    userSave: 'http://localhost:8080/api/user/save',
    userDel: 'http://localhost:8080/api/user/delete'
  },
  news: {

  },
  carouse: {
    list: 'http://localhost:8080/api/carousel/find'
  },
  img: {
    upimg: 'http://127.0.0.1:88/user/upi'
  }
}

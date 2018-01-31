const Promise = require('promise');
const db = require('../utils/mysqldb')
module.exports = {
  getData(data) {
    return new Promise(function(resolve,reject){
      db.query('SELECT * FROM `entries`',function (error, results, fields){
        if(error===null){
          resolve(results)
        }else{
          reject(error)
        }
      })
    })
  },
  getItem(data){
    return new Promise(function(resolve,reject){
      db.query('SELECT * FROM `entries` where id = ?',[data.id],function (error, results, fields){
        if(error===null){
          resolve(results)
        }else{
          reject(error)
        }
      })
    })
  }
}
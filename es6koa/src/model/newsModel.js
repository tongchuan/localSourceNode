import Promise from 'promise'
import db from '../db/mysqldb'

class newsModel {
  constructor(){
    this.table = 'entries'
  }
  getEntries(){
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${this.table}`).spread((data) => {
        resolve(data)
      }).catch((err)=>{
        reject(err)
      });
    })
  }
  getEntriesById(id){
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${this.table} WHERE id=?`, [id])/*.then(() => {
        return db.query(`SELECT * FROM ${this.table}`);
      })*/.spread(function (data) {
        resolve(data)
      }).catch((err)=>{
        reject(err)
      });
    })
  }
  getEntriesByIdList(id){
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM ${this.table} WHERE id=?`, [id]).then(() => {
        return db.query(`SELECT * FROM ${this.table}`);
        // console.log(this.table)
      }).spread(function (data) {
        // console.log(data)
        resolve(data)
      }).catch((err)=>{
        reject(err)
      });
    })
  }
}

export default new newsModel()
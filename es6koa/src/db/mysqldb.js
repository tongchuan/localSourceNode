import mysql from 'mysql-promise'
const db = mysql()
db.configure({
  "host": "127.0.0.1",
	"user": "root",
	"password": "root",
	"database": "webpython"
})

export default db
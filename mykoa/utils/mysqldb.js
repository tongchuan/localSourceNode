const mysql = require('mysql')

// const connection = mysql.createConnection({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : 'root',
//   database : 'webpython'
// })

// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection



var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : '127.0.0.1',
  user            : 'root',
  password        : 'root',
  database        : 'webpython'
});

module.exports = pool
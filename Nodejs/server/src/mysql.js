const mysql = require('mysql')
const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"root",
    database:"Coupon",
    waitForConnections:true,
    connectionLimit: 10,
    queueLimit: 0,
    port:3306,
    dateStrings : true
})
let query = function( sql, values ) {
  // 返回一个 Promise
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
      	console.log(sql, values);
        connection.query(sql, values, ( err, rows) => {

          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          // 结束会话
          connection.release()
        })
      }
    })
  })
}

module.exports =  query
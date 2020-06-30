const mysql = require("mysql");
const bluebird = require("bluebird");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "dulcet_music",
  dateStrings: true
});

db.connect(err => {
  if (err) throw err;
  console.log("Connected");
});

bluebird.promisifyAll(db);
module.exports = db;

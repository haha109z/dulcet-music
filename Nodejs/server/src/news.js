const express = require("express");
const router = express.Router();
// const db = require(__dirname + "/db_connect2");
// const query = require(__dirname + "/mysql");
const db = require(__dirname + "/../_mysql");

router.get("/", function(req, res){
  const sql = `SELECT * FROM news ORDER BY NewsDate DESC `;
  
  db.queryAsync(sql).then(result =>{
      console.log(result)
      return res.json(result);
  })
})

router.get("/:NewsID?", function(req, res){
  const sql =`SELECT * FROM news WHERE NewsID = ?`
  console.log(req.params.NewsID)
  db.queryAsync(sql, [req.params.NewsID]).then(result=>{return res.json(result)})
})

module.exports = router;



const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");

router.get('/',async (req,res) => {
  let {
    Mid,
    Mname,
    Memail,
    Maddress,
    Muser,
    Mtelephone,
    Mphone,
  } = req.body;
  let resData = { code:'', msg:''};
  
  // await query(
  //   `SELECT manufacturer FROM Mid = 1`
  // )

  const [ r ] = await db.query( `SELECT * FROM manufacturer WHERE Mid = 1`)

  resData = { code:0, msg:'正確', data : r};
  res.json(resData);
})



module.exports = router;

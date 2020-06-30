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
  

  const [newdata] = await query( `SELECT * FROM manufacturer WHERE Mid = 11`)
  // if(newdata.Mcategory=='樂器'){
  //   console.log('是樂器')
  // }else{
  //   console.log('是影片')
  // }
  console.log(newdata)
  resData = { code:0, msg:'正確', data : newdata};
  res.json(newdata);
})



module.exports = router;

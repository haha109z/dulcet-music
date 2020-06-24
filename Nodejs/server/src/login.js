const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql');
const sha1 = require('sha1')
// const getData = async (req) => {
    
//   let userMail = req.params.userMail || '';
//   const output = {
//     rows: [],
//   };

//   const sql = `SELECT * FROM user WHERE userMail = "${userMail}"`;
//   const [r1] = await db.query(sql);
//   if ([r1]) output.rows = r1;

//   return output;
// };

router.post('/', async (req, res) => {
  let {userPwd, userMail} = req.body
  console.log(userPwd, userMail);  
  
  let resData = { code: "", msg: ""}
  // const output = await getData(req);
  const output = await query(`SELECT * FROM user WHERE userMail = ?`, [userMail]);
  if(output.length === 0){
    resData = { code: 1, msg: "帳號錯誤"}
    return res.json(resData);
  }
  console.log(output[0].userPwd , sha1(userPwd))
  if(output[0].userPwd !== sha1(userPwd)){
    resData = { code: 2, msg: "密碼錯誤"}
    return res.json(resData);
  }
  resData = { code: 0, msg: "正確", data: output}
  res.json(resData);
});

module.exports = router;


const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql');
const sha1 = require('sha1')
// const getData = async (req) => {
    
//   let Memail = req.params.Memail || '';
//   const output = {
//     rows: [],
//   };

//   const sql = `SELECT * FROM user WHERE Memail = "${Memail}"`;
//   const [r1] = await db.query(sql);
//   if ([r1]) output.rows = r1;

//   return output;
// };

router.post('/', async (req, res) => {
  let {Mpwd, Memail} = req.body
  
//   console.log(req.body);  

  let resData = { code: "", msg: ""}
  // const output = await getData(req);
  
  const output = await query(`SELECT * FROM manufacturer WHERE Memail = ?`, [Memail]);
  console.log(output)
  if(output.length === 0){
    resData = { code: 1, msg: "帳號錯誤"}
    return res.json(resData);
  }
  // console.log(output[0].userPwd , sha1(userPwd))
  if(output[0].Mpwd !== sha1(Mpwd)){
    resData = { code: 2, msg: "密碼錯誤"}
    return res.json(resData);
  }
  resData = { code: 0, msg: "正確", data: output}
  res.json(resData);
});

module.exports = router;


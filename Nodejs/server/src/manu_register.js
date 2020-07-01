const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql')
// const sha1 = require('sha1');

// `UPDATE user SET , userName = ?, userPwd = ?, userPhone = ?, userMail =?, userBirthday = ?, userAddress = ? WHERE user.userID = ?`

router.post('/', async (req, res) => {
  let {
    Mname,
    Memail,
    Maddress,
    Mphone,
    Muser,
    Mtelephone,
    Mpwd,
    Mimg,
    Mcategory,
  } = req.body;
  console.log(req.body)

  //INSERT INTO `manufacturer`(`Mname`, `Maddress`, `Muser`, `Mphone`, `Mtelephone`, `Memail`, `Mpwd`, `Mimg`, `Mcategory`) VALUES ('1','1','1','1','1','1','1','1','1')
  const news2 =await query("INSERT INTO `manufacturer`(`Mname`, `Maddress`, `Muser`, `Mphone`, `Mtelephone`, `Memail`, `Mpwd`, `Mimg`, `Mcategory`)  VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?);",
  [
    Mname,
    Maddress,
    Muser,
    Mphone,
    Mtelephone,
    Memail,
    Mpwd,
    Mimg,
    Mcategory,
])
  
  res.json(news2);
});

module.exports = router;

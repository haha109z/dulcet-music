const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const query = require(__dirname + '/mysql');

router.post('/', async (req, res) => {
  let {userRegisterName, userRegisterEmail, userRegisterBir, userRegisterAddress, userRegisterMobile, userRegisterPwd} = req.body
  let resData = { code: "", msg: ""}
  await query("INSERT INTO `user` (`userID`, `username`, `userPwd`, `userPhone`, `userMail`, `userBirthday`, `userAddress`, `userImg`) VALUES (?, ?, ?, ?, ?, ?, ?, NULL);", [userRegisterName, userRegisterName, userRegisterPwd, userRegisterMobile, userRegisterEmail, userRegisterBir, userRegisterAddress])

  // const output = await query(`SELECT * FROM user WHERE userMail = ?`, [userRegisterEmail]);
  
  resData = { code: 0, msg: "正確"}  

  res.json(resData);

});

module.exports = router;


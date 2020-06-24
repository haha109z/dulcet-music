const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const query = require(__dirname + '/mysql');

router.post('/', async (req, res) => {
  let {userRegisterName, userRegisterEmail, userRegisterBir, userRegisterAddress, userRegisterMobile, userRegisterPassword} = req.body
  let resData = { code: "", msg: ""}
  await query("INSERT INTO `user` (`userID`, `username`, `userPwd`, `userPhone`, `userMail`, `userBirthday`, `userAddress`, `userImg`) VALUES (?, ?, ?, ?, ?, ?, ?, NULL);", [userRegisterName, userRegisterName, userRegisterPassword, userRegisterMobile, userRegisterEmail, userRegisterBir, userRegisterAddress])
  
  resData = { code: 0, msg: "正確"}

  res.json(resData);
});

module.exports = router;


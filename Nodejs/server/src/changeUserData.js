const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql');
const sha1 = require('sha1');

// `UPDATE user SET , userName = ?, userPwd = ?, userPhone = ?, userMail =?, userBirthday = ?, userAddress = ? WHERE user.userID = ?`

router.post('/', async (req, res) => {
  let {
    userID,
    changUsername,
    changUserMail,
    changUserBirthday,
    changUserAddress,
    changUserPhone,
  } = req.body;
  let resData = { code: '', msg: '' };
  // const output = await getData(req);
try{
  await query(
    `UPDATE user SET userName = ?,userPhone = ?,userMail= ?,userBirthday = ?,userAddress = ? WHERE user.userID = ?;
    `,
    [
      changUsername,
      changUserPhone,
      changUserMail,
      changUserBirthday,
      changUserAddress,
      userID,
    ],
    (err, result) => {
      if (err) throw err;
      console.log(result);
    }
  );
}
catch (e){
console.log(e.errno)
if(e.errno==1062){
}
resData = { code: 3, msg: '信箱已經被註冊過請換個信箱試試',};
return res.json(resData);
}
  const newData = await query(
    `SELECT * FROM user WHERE userID LIKE ?;
    `,
    [userID]
  );
  resData = { code: 0, msg: '正確', data: newData };
  res.json(resData);
})

module.exports = router;

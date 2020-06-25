const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql');
const sha1 = require('sha1');

// `UPDATE user SET , userName = ?, userPwd = ?, userPhone = ?, userMail =?, userBirthday = ?, userAddress = ? WHERE user.userID = ?`

router.post('/', async (req, res) => {
  let { userID, newPwd ,oldPwd} = req.body;
  let resData = { code: '', msg: '' };
  // const output = await getData(req);
  const judgment = await query(
    `SELECT * FROM user WHERE userID LIKE ? AND userPwd LIKE ?`,
    [userID,oldPwd]
  );
  if (judgment.length === 0) {
    resData = { code: 1, msg: '密碼錯誤' };
    return res.json(resData);
  }
  if (judgment.length != 0) {
    const output = await query(
      `UPDATE user SET userPwd = ? WHERE user.userID = ?;
    `,
      [newPwd, userID]
    );
   
    resData = { code: 0, msg: '正確', data: newData };
    res.json(newData);
  }
});

module.exports = router;

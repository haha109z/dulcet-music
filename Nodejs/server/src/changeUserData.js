const express = require('express');
// const db = require(__dirname + '/db_connect2');
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

  const output = await query(
    `UPDATE user SET userName = ?,userPhone = ?,userMail= ?,userBirthday = ?,userAddress = ? WHERE user.userID = ?;
    `,
    [
      changUsername,
      changUserPhone,
      changUserMail,
      changUserBirthday,
      changUserAddress,
      userID,
    ]
  );
  const newData = await query(
    `SELECT * FROM user WHERE userID LIKE ?;
    `,
    [userID]
  );
 

  if (output.length === 0) {
    resData = { code: 1, msg: '新增失敗' };
    return res.json(resData);
  }

  resData = { code: 0, msg: '正確', data: newData };
  res.json(resData);
  
}
)

module.exports = router;

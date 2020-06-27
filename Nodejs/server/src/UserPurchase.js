const express = require('express');
const db = require(__dirname + '/db_connect2');
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql');
const sha1 = require('sha1');
const router = express.Router();

router.post('/', async (req, res) => {
  let { userID } = req.body;
  let resData = { code: '', msg: '' };
  
  const data =  await query(
      `SELECT user.userID,orderlist.orderId,orderlist.orderPrice,orderlist.orderState FROM user INNER JOIN orderlist ON user.userID=orderlist.memberId WHERE user.userID = ?
      `,
      [userID]
    );

    if(data.length != 0){
        resData = { code: '0', msg: '有資料',data:data };
        res.json(resData);

    }
  
});

module.exports = router;

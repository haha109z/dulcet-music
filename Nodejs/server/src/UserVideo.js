const express = require('express');
const query = require(__dirname + '/mysql');
const router = express.Router();

router.post('/', async (req, res) => {
  let { userID } = req.body;
  console.log('userID', userID);

  let resData = { code: '', msg: '' };
  const output = await query(
    `SELECT orderlist.memberId, product_video.PName, product_video.PImg, product_video.PVideo, product_video.Pdesciption, product_video.PId FROM ( orderlist LEFT JOIN orderitem ON orderlist.orderId = orderitem.orderId ) LEFT JOIN product_video ON product_video.PId = orderitem.productId WHERE orderlist.memberId = ? AND orderlist.orderState = "完成" AND orderitem.productCategory ="影片" ORDER BY product_video.PId ASC`,
    [userID]
  );

  resData = { code: 0, msg: '正確', data: output };

  res.json(resData);
});

module.exports = router;

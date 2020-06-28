const express = require('express');
const db = require(__dirname + '/db_connect2');
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql');
const sha1 = require('sha1');
const router = express.Router();

router.post('/', async (req, res) => {
  let { userID, num } = req.body;
  let resData = { code: '', msg: '' };
  
// user.userID=orderlist.memberId
// 會員表的會員id   訂單表的會員id 

// user.userID,
// 會員id
// orderlist.orderId,
// 訂單流水號
// orderlist.orderPrice,
// 訂單總價
// orderlist.orderState
// 訂單狀態

// User join orderlist
  const data =  await query('SELECT     `orderlist`.`memberId`,     orderlist.orderPrice,     orderitem.orderId,     orderItem.productCategory,     orderItem.cartNumber,     orderlist.orderState,     product_video.PName,     product_video.PImg,     product_video.PPrice,     product_video.Pdesciption,     0 AS q FROM     `orderlist` LEFT JOIN orderitem ON orderlist.orderId = orderitem.orderId JOIN product_video ON(         orderitem.productCategory = product_video.PCategoryId AND orderitem.productId = product_video.PId     ) WHERE     orderlist.memberId = 1 UNION SELECT     `orderlist`.`memberId`,     orderlist.orderPrice,     orderitem.orderId,     orderItem.productCategory,     orderItem.cartNumber,     orderlist.orderState,     product_courses.PName,     product_courses.PImg,     product_courses.PPrice,     product_courses.Pdesciption,     product_courses.PQty FROM     `orderlist` LEFT JOIN orderitem ON orderlist.orderId = orderitem.orderId JOIN product_courses ON(         orderitem.productCategory = product_courses.PCategoryId AND orderitem.productId = product_courses.PId     ) WHERE     orderlist.memberId = 1 UNION SELECT     `orderlist`.`memberId`,     orderlist.orderPrice,     orderitem.orderId,     orderItem.productCategory,     orderItem.cartNumber,     orderlist.orderState,     product_instruments.PName,     product_instruments.PImg,     product_instruments.PPrice,     product_instruments.Pdesciption,     product_instruments.PQty FROM     `orderlist` LEFT JOIN orderitem ON orderlist.orderId = orderitem.orderId JOIN product_instruments ON(         orderitem.productCategory = product_instruments.PCategoryId AND orderitem.productId = product_instruments.PId     ) WHERE     orderlist.memberId = 1 ORDER BY     `orderId` ASC  '
      ,
      [userID, userID, userID]
    );

    if(data.length != 0){
        resData = { code: '0', msg: '有資料',data:data };
        res.json(resData);

    }
  
});

module.exports = router;

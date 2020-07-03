const express = require('express');
const router = express.Router();
const db = require(__dirname + '/db_connect2');
// 引入query套件
const query = require(__dirname + '/mysql');

console.log('1');

router.post('/', async (req, res) => {

  console.log('2');

  // 前端透過路由傳過來的資料(自定義變數)接收至req.body
  let {
    memberid,
    name,
    address,
    phone,
    email,
    invoice,
    invoicestorage,
    invoiceinfo,
    coupon,
    orderprice,
    orderpayment,
    orderstate,
    orderData,
  } = req.body;
  // 以上相當於
  // memberid  =  req.body.memberid

  // 前端接收過來的訂單明細資料(自定義變數)
  // console.log(orderData);

  // 新增訂單至資料庫sql語法
  const orderlistSql = await query(
    `INSERT INTO orderlist (memberId, name, address, phone, email, invoice, invoiceStorage, invoiceInfo, coupon, orderPrice, orderPayment, orderState ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      memberid,
      name,
      address,
      phone,
      email,
      invoice,
      invoicestorage,
      invoiceinfo,
      coupon,
      orderprice,
      orderpayment,
      orderstate,
    ]
  );

  // 使用insertId方法抓取資料庫訂單資料表資料筆數作為orderID
  var orderID = orderlistSql.insertId;
  // 當一筆新增訂單資料成功時，才執行新增一筆訂單明細資料
  if (orderID) {
    orderData.map((v) => {
      console.log(v,ID)
      
       query(
        `INSERT INTO orderitem (orderItem,orderId, productCategory, productId, cartNumber) VALUES (NULL, ?, ?, ?, ?)`,
        [ 
          orderID,
          v.PCategoryId,
          v.PId,
          v.num
        ]
      )
    })   
  }

  // 回傳資料
  res.json(orderlistSql);

});

module.exports = router;

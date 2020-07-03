const express = require('express');
const router = express.Router();
const db = require(__dirname + '/db_connect2');
const query = require(__dirname + '/mysql');

console.log('1');

router.post('/', async (req, res) => {
  console.log('2');

  // memberid  =  req.body.memberid
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
    newData,
  } = req.body;
  // console.log(newData);
  const orderSql = await query(
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

  var ID = orderSql.insertId;
  if (ID) {
    newData.map((v) => {
      console.log(v,ID)
      
       query(
        `INSERT INTO orderitem (orderItem,orderId, productCategory, productId, cartNumber) VALUES (NULL, ?, ?, ?, ?);
        `,
        [ID,
          v.PCategoryId,
          v.PId,
          v.num
        ]
      )
    })
   
  }
  // const orderSql = await query(
  //   `INSERT INTO orderlist (orderId, memberId, name, address, phone, email, invoice, invoiceStorage, invoiceInfo, coupon, orderPrice, orderPayment, orderState, ) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,);`,
  //   [ memberid, name, address, phone, email, invoice, invoicestorage, invoiceinfo, coupon, orderprice, orderpayment, orderstate]
  // );

  res.json(orderSql);
});

module.exports = router;

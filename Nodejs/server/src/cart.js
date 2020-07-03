const express = require("express");
const router = express.Router();
const db = require(__dirname + "/db_connect2");


router.post("/", async (req, res) => {

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
    orderstate
  } = req.body;
  console.log(req.body)
  
  await query (
    "INSERT INTO `orderlist` (`memberId`, `name`, `address`, `phone`, `email`, `invoice`, `invoiceStorage`, `invoiceInfo`, `coupon`, `orderPrice`, `orderPayment`, `orderState` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [ memberid, name, address, phone, email, invoice, invoicestorage, invoiceinfo, coupon, orderprice, orderpayment, orderstate]
  );

  // const orderSql = await query(
  //   `INSERT INTO orderlist (orderId, memberId, name, address, phone, email, invoice, invoiceStorage, invoiceInfo, coupon, orderPrice, orderPayment, orderState, ) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,);`,
  //   [ memberid, name, address, phone, email, invoice, invoicestorage, invoiceinfo, coupon, orderprice, orderpayment, orderstate]
  // ); 

  // res.json(orderSql);

});

module.exports = router;
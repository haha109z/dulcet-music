const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");

router.post("/", async (req, res) => {
    let {
        // 要傳到前端的名稱
     Mid
    } = req.body;
    console.log("req.body", req.body);
    let resData = { code: "", msg: "" };
    
    const newData = await query(
      `SELECT 
      orderlist.orderId, 
      orderlist.orderState, 
      orderlist.address, 
      orderlist.phone, 
      orderlist.name, 
      orderlist.created_at, 
      orderitem.cartNumber, 
      orderitem.productCategory,
      orderitem.orderItem,
      product_instruments.PCategoryId, 
      product_instruments.PName, 
      product_instruments.PImg, 
      product_instruments.PPrice, 
      product_instruments.PCompanyId, 
      product_instruments.PId
        FROM ( orderlist LEFT JOIN orderitem ON orderlist.orderId = orderitem.orderId ) LEFT JOIN product_instruments ON orderitem.productId = product_instruments.PId WHERE product_instruments.PCompanyId = ? AND orderitem.productCategory = '樂器' ORDER BY product_instruments.PCompanyId ASC
      `,
      [Mid]
    );
    resData = { code: 0, msg: "正確", data: newData };
    res.json(newData);
    console.log(newData)
  });

  module.exports = router;
const express = require("express");

const router = express.Router();
const db = require(__dirname + "/db_connect2");

const getCartInfo = async () => {
  const cartInfo = await db.query(" SELECT * FROM `cart` WHERE `userID`='3' ");
  return cartInfo;
};

router.post("/cart", async (req, res) => {
  const [cartInfo] = await getCartInfo(req);
  res.json(cartInfo);
});

module.exports = router;

SELECT * FROM `cart`
INNER JOIN `product_courses` ON `cart`.`productCategory` = `product_courses`.`PCategoryId`
INNER JOIN `product_instruments` ON `cart`.`productCategory` = `product_instruments`.`PCategoryId`
INNER JOIN `product_video` ON `cart`.`productCategory` = `product_video`.`PCategoryId`
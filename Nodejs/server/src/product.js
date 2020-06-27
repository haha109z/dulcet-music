const express = require("express");

const router = express.Router();
const db = require(__dirname + "/db_connect2");

router.post("/instrument", async (req, res) => {
  const [data] = await db.query("SELECT * FROM `product_instruments`");
  res.json(data);
});

router.post("/instrument/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='樂器'"
  );
  res.json(data);
});

router.post("/addFavorite", async (req, res) => {
  let { CatId, PId } = req.body;

  await db.query(
    "INSERT INTO `product_favorite`(`FavUId`, `PCategory`, `FavPId`) VALUES (1,?,?)",
    [CatId, PId]
  );
  // res.json(resData);
});

router.post("/delFavorite", async (req, res) => {
  let { CatId, PId } = req.body;

  await db.query(
    "DELETE FROM `product_favorite` WHERE `FavUId`=1 && `PCategory`=? && `FavPId`=?",
    [CatId, PId]
  );
  // res.json(resData);
});

module.exports = router;

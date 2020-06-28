const express = require("express");

const router = express.Router();
const db = require(__dirname + "/db_connect2");

//課程
router.post("/course", async (req, res) => {
  const [data] = await db.query("SELECT * FROM `product_courses`");
  res.json(data);
});
router.post("/course/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='課程'"
  );
  res.json(data);
});

//影片
router.post("/video", async (req, res) => {
  const [data] = await db.query("SELECT * FROM `product_video`");
  res.json(data);
});
router.post("/video/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='影片'"
  );
  res.json(data);
});

//樂器
router.post("/instrument", async (req, res) => {
  const { idFirst, idLast } = req.body;
  const [data] = await db.query(
    "SELECT * FROM `product_instruments`LIMIT ?,?",
    [idFirst, idLast]
  );
  res.json(data);
});
router.post("/instrument/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='樂器'"
  );
  res.json(data);
});
router.post("/instrument/getid", async (req, res) => {
  let { PId } = req.body;
  const [data] = await db.query(
    "SELECT * ,CASE `PInstrumentId` WHEN '爵士鼓' THEN 'jazz_drum' END AS 'PIId' FROM `product_instruments` WHERE `PId`=?",
    PId
  );
  res.json(data);
});

//增刪最愛
router.post("/addFavorite", async (req, res) => {
  let { CatId, PId } = req.body;

  await db.query(
    "INSERT INTO `product_favorite`(`FavUId`, `PCategory`, `FavPId`) VALUES (1,?,?)",
    [CatId, PId]
  );
});
router.post("/delFavorite", async (req, res) => {
  let { CatId, PId } = req.body;

  await db.query(
    "DELETE FROM `product_favorite` WHERE `FavUId`=1 && `PCategory`=? && `FavPId`=?",
    [CatId, PId]
  );
});

module.exports = router;

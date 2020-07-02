const express = require("express");

const router = express.Router();
const db = require(__dirname + "/db_connect2");

//課程
router.post("/course", async (req, res) => {
  const { control, idFirst, idLast } = req.body;
  let sql = "";
  if (control == "價格高到低") {
    sql = "SELECT * FROM `product_courses` ORDER BY `PPrice` DESC LIMIT ?,?";
  } else if (control == "價格低到高") {
    sql = "SELECT * FROM `product_courses` ORDER BY `PPrice` ASC LIMIT ?,?";
  } else if (control == "熱門度") {
    sql = "SELECT * FROM `product_courses` ORDER BY `PClick` DESC LIMIT ?,?";
  }
  const [data] = await db.query(sql, [idFirst, idLast]);
  res.json(data);
});
router.post("/course/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='課程'"
  );
  res.json(data);
});
router.post("/course/getid", async (req, res) => {
  let { PId } = req.body;
  const [data] = await db.query(
    "SELECT * ,CASE `PInstrumentId` WHEN '爵士鼓' THEN 'jazz_drum' END AS 'PIId' FROM `product_courses` WHERE `PId`=?",
    PId
  );
  res.json(data);
});

//影片
router.post("/video", async (req, res) => {
  const { control, idFirst, idLast } = req.body;
  let sql = "";
  if (control == "價格高到低") {
    sql = "SELECT * FROM `product_video` ORDER BY `PPrice` DESC LIMIT ?,?";
  } else if (control == "價格低到高") {
    sql = "SELECT * FROM `product_video` ORDER BY `PPrice` ASC LIMIT ?,?";
  } else if (control == "熱門度") {
    sql = "SELECT * FROM `product_video` ORDER BY `PClick` DESC LIMIT ?,?";
  }
  const [data] = await db.query(sql, [idFirst, idLast]);
  res.json(data);
});
router.post("/video/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='影片'"
  );
  res.json(data);
});
router.post("/video/getid", async (req, res) => {
  let { PId } = req.body;
  const [data] = await db.query(
    "SELECT * ,CASE `PInstrumentId` WHEN '爵士鼓' THEN 'jazz_drum' END AS 'PIId' FROM `product_video` WHERE `PId`=?",
    PId
  );
  res.json(data);
});

//樂器
router.post("/instrument", async (req, res) => {
  const { control, idFirst, idLast, category } = req.body;
  let sql = "SELECT * FROM `product_instruments`";
  console.log(category);
  if (category == "piano") {
    sql += " WHERE `PInstrumentId` = '鋼琴'";
  } else if (category == "keyboard") {
    sql += " WHERE `PInstrumentId` = '電子琴'";
  } else {
    sql += "";
  }
  if (control == "價格高到低") {
    sql += " ORDER BY `PPrice` DESC LIMIT ?,?";
  } else if (control == "價格低到高") {
    sql += " ORDER BY `PPrice` ASC LIMIT ?,?";
  } else if (control == "熱門度") {
    sql += " ORDER BY `PClick` DESC LIMIT ?,?";
  }
  console.log(sql);

  const [data] = await db.query(sql, [idFirst, idLast]);
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

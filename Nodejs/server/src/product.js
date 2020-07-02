const express = require("express");

const router = express.Router();
const db = require(__dirname + "/db_connect2");

router.post("/getMayLike", async (req, res) => {
  const { list } = req.body;
  let sql = "";
  switch (list) {
    case "instrument":
      sql += "SELECT * FROM `product_instruments`";
      break;
    case "video":
      sql += "SELECT * FROM `product_video`";
      break;
    case "course":
      sql += "SELECT * FROM `product_courses`";
      break;
  }
  sql += " ORDER BY `PClick` DESC LIMIT 0,4";
  const [data] = await db.query(sql);
  res.json(data);
});

//課程
router.post("/course/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='課程'"
  );
  res.json(data);
});

//影片
router.post("/video/favorite", async (req, res) => {
  const [data] = await db.query(
    "SELECT * FROM `product_favorite` WHERE `PCategory`='影片'"
  );
  res.json(data);
});

//樂器
router.post("/getlist", async (req, res) => {
  const { control, idFirst, idLast, category, list } = req.body;
  let sql = "";
  switch (list) {
    case "instrument":
      sql += "SELECT * FROM `product_instruments`";
      break;
    case "video":
      sql += "SELECT * FROM `product_video`";
      break;
    case "course":
      sql += "SELECT * FROM `product_courses`";
      break;
  }
  console.log(category);
  switch (category) {
    case "piano":
      sql += " WHERE `PInstrumentId` = '鋼琴'";
      break;
    case "keyboard":
      sql += " WHERE `PInstrumentId` = '電子琴'";
      break;
    case "violin":
      sql += " WHERE `PInstrumentId` = '小提琴'";
      break;
    case "viola":
      sql += " WHERE `PInstrumentId` = '中提琴'";
      break;
    case "saxophone":
      sql += " WHERE `PInstrumentId` = '薩克斯風'";
      break;
    case "jazz_drum":
      sql += " WHERE `PInstrumentId` = '爵士鼓'";
      break;
    case "guitar":
      sql += " WHERE `PInstrumentId` = '吉他'";
      break;
    case "ukulele":
      sql += " WHERE `PInstrumentId` = '烏克麗麗'";
      break;
    case "flute":
      sql += " WHERE `PInstrumentId` = '長笛'";
      break;
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
router.post("/getid", async (req, res) => {
  let { PId, productCategoryId } = req.body;
  let sql =
    "SELECT * ,CASE `PInstrumentId` WHEN '鋼琴' THEN 'piano' WHEN '電子琴' THEN 'keyboard' WHEN '小提琴' THEN 'violin' WHEN '中提琴' THEN 'viola' WHEN '吉他' THEN 'guitar' WHEN '長笛' THEN 'flute' WHEN '烏克麗麗' THEN 'ukulele' WHEN '薩克斯風' THEN 'saxophone' WHEN '爵士鼓' THEN 'jazz_drum' END AS 'PIId'";
  switch (productCategoryId) {
    case "instrument":
      sql += " FROM `product_instruments` WHERE `PId`=?";
      break;
    case "video":
      sql += " FROM `product_video` WHERE `PId`=?";
      break;
    case "course":
      sql += " FROM `product_courses` WHERE `PId`=?";
      break;
  }
  const [data] = await db.query(sql, PId);
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

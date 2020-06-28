const express = require("express");
const router = express.Router();
const db = require(__dirname + "/db_connect2");

router.post("/newsList", async (req, res) => {
  const [data] = await db.query("SELECT * FROM `news` ORDER BY NewsDate DESC");
  res.json(data);
});

router.post("/newsCategory", async (req, res) => {
  const [data] = await db.query("SELECT * FROM `news_category`");
  res.json(data);
});

router.post("/newsidcty", async (req, res) => {
  let { NewsCategory, NewsID } = req.body;
  const [
    data,
  ] = await db.query(
    "SELECT *  FROM `news` WHERE (`NewsID`, `NewsCategory`)=(?,?)",
    [NewsID, NewsCategory]
  );
  res.json(data);
});

module.exports = router;

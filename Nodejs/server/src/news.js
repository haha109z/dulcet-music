const express = require("express");
const router = express.Router();
// const db = require(__dirname + "/db_connect2");
const query = require(__dirname + "/mysql");

router.post("/newsList", async (req, res) => {
  const [data] = await query("SELECT * FROM `news` ORDER BY NewsDate DESC");
  res.json(data);
});

router.post("/newsidcty", async (req, res) => {
  let { NewsCategory, NewsID } = req.body;
  const [
    data,
  ] = await query(
    "SELECT *  FROM `news` WHERE (`NewsID`, `NewsCategory`)=(?,?)",
    [NewsID, NewsCategory]
  );
  res.json(data);
});

router.post("/newsCategory", async (req, res) => {
  const [data] = await query("SELECT * FROM `news_category`");
  res.json(data);
});

router.post("/newsdatecty", async (req, res) => {
  let { NewsCategory, NewsDate } = req.body;

  const 
    data
   = await query(
    "SELECT * FROM `news` WHERE NewsDate LIKE ? && NewsCategory = ? ORDER BY NewsDate DESC",
    [NewsDate + "%", NewsCategory]
  );
  res.json(data);
});

router.post("/newsdatecty", async (req, res) => {
  let { NewsCategory } = req.body;

  const 
    [data]
   = await query(
    "SELECT * FROM `news` WHERE NewsCategory = ?  ORDER BY NewsDate DESC",
    [NewsCategory]
  );
  res.json(data);
});

router.post("/newsdatecty", async (req, res) => {
  let { NewsDate } = req.body;
  const [data] = await query("SELECT * FROM `news` WHERE NewsDate LIKE ?  ORDER BY NewsDate DESC",[NewsDate+'%']);
  res.json(data);
});

router.post("/newsdatecty", async (req, res) => {
  const [data] = await query("SELECT * FROM `news` ORDER BY NewsDate DESC");
  res.json(data);
});
module.exports = router;

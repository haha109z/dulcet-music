const express = require("express");

const router = express.Router();
const db = require(__dirname + "/db_connect2");

const getInstrument = async () => {
  const r1 = await db.query("SELECT * FROM `product_instruments`");
  return r1;
};

router.post("/instrument", async (req, res) => {
  const [data] = await getInstrument(req);
  res.json(data);
});

module.exports = router;

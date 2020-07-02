const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");

router.post("/", async (req, res) => {
    let {
        Mid,
        newPName,
        newPCategoryId,
        newPQty,
        newPPrice,
        newPState,
        newPInstrumentId,
        newPIntro,
        newPdesciption,
    } = req.body;
    console.log("req.body", req.body);
    let resData = { code: "", msg: "" };
    try {
        await query(
        `INSERT INTO product_instruments (PCompanyId,PName,PCategoryId,PQty,PPrice,PState,PInstrumentId,PIntro,Pdesciption) VALUES(?,?,?,?,?,?,?,?,?)`,
      [
          Mid,
          newPName,
          newPCategoryId,
          newPQty,
          newPPrice,
          newPState,
          newPInstrumentId,
          newPIntro,
          newPdesciption,
        ],
      (err, result) => {
        if (err) throw err;
        // console.log(result);
      }
    );
    }catch (e) {
        // console.log(e.errno);
        if (e.errno == 1062) {
        }
        resData = { code: 3, msg: "信箱已經被註冊過請換個信箱試試" };
        return res.json(resData);
      }
    
    resData = { code: 0, msg: "正確"};
    res.json(resData);
  });

  module.exports = router;
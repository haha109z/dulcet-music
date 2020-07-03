const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");


router.post('/',async (req,res) => {
    let {
        Mid,
        PId,
        changePName,
        changePQty,
        changePPrice,
        changePState,
        changePInstrumentId,
        changePIntro,
        changePdesciption,
    } = req.body;
    let resData = { code:'',msg :''};
    try {
        await query(
        `UPDATE
          product_instruments
        SET
          PName = ?,
          PQty = ?,
          PPrice = ?,
          PState = ?,
          PInstrumentId = ?,
          PIntro = ?,
          Pdesciption = ?,
          PCompanyId = ?    
        WHERE
          PId = ?
        `,
          [ 
            changePName,
            changePQty,
            changePPrice,
            changePState,
            changePInstrumentId,
            changePIntro,
            changePdesciption,
            Mid,
            PId,
          ],
          (err, result) => {
            if (err) throw err;
            // console.log(result);
          }
        );
      } catch (e) {
        // console.log(e.errno);
        if (e.errno == 1062) {
        }
        resData = { code: 3, msg: "信箱已經被註冊過請換個信箱試試" };
        return res.json(resData);
      }
    const listdata = await query(`SELECT * FROM product_instruments WHERE PCompanyId = ?`,
        [Mid]
    );
    console.log(listdata)
    resData = { code:0, msg:'正確', data : listdata};
    res.json(listdata);
})

module.exports = router;

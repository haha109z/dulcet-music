const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");


router.post('/',async (req,res) => {
    let {
        PId,
    } = req.body;
    let resData = { code:'',msg :''};
    try {
        await query(
          `DELETE FROM product_instruments WHERE PId = ?;
        `,
          [ 
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
        resData = { code: 3, msg: "無法刪除" };
        return res.json(resData);
      }
   
    resData = { code:0, msg:'正確'};
    res.json(resData);
})

module.exports = router;
const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");


router.post('/',async (req,res) => {
    let {
        Pid,
        chPstate,
        chPClick,
        chPcategoryId,
        chPimg,
        chPname,
        chPInstrumentId,
        chPQty,
        chPIntro,
        chPdesciption,
        chPCompanyId,
        chPPrice,
    } = req.body;
    let resData = { code:'',msg :''};
    try {
        await query(
          `UPDATE product_instruments SET Pstate = ?,PClick = ?,PcategoryId = ?,Pimg = ?, Pname = ?, PInstrumentId = ?, PQty = ?,
          PIntro = ?, Pdesciption  = ?, PCompanyId = ?, PPrice = ?
          WHERE product_instruments.Pid = ?;
        `,
          [
            chPstate,
            chPClick,
            chPcategoryId,
            chPimg,
            chPname,
            chPInstrumentId,
            chPQty,
            chPIntro,
            chPdesciption,
            chPCompanyId,
            chPPrice,
            Pid,
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
        resData = { code: 3, msg: "上傳錯誤" };
        return res.json(resData);
      }

    const [listdata] = await query(`SELECT 
        product_instruments.PId,
        product_instruments.PCategoryId,
        product_instruments.PName,
        product_instruments.PImg,
        product_instruments.PPrice,
        product_instruments.PQty,
        product_instruments.PState,
        product_instruments.PIntro,
        product_instruments.Pdesciption,
        product_instruments.PInstrumentId,
        product_instruments.PCompanyId,
        product_instruments.PClick,
        product_instruments.created_at,
        product_instruments.update_at
        FROM
        manufacturer 
        LEFT JOIN product_instruments on manufacturer.Mid = product_instruments.PCompanyId
        WHERE manufacturer.Mid = ?`,
        [Mid]
    );

    console.log(listdata)
    resData = { code:0, msg:'正確', data : listdata};
    res.json(listdata);
})

module.exports = router;

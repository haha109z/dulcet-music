const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");

// router.post('/',async (req,res) => {
//     let {
//         Pid,
//         PcategoryId,
//         Pimg,
//         Pname,
//         PInstrumentId,
//         PQty,
//         PIntro,
//         Pdesciption,
//         PCompanyId,
//         PPrice,
//         update_at,
//     } = req.body;
//     let resData = { code:'',msg :''};

//     const [listdata] = await query(`SELECT * FROM product_instruments WHERE PId = 1`)

//     console.log(listdata)
//     resData = { code:0, msg:'正確', data : listdata};
//     res.json(listdata);
// })


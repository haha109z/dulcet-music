const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");

router.post('/', async (req, res) => {
    let { Mid, newPwd ,oldPwd} = req.body;
    let resData = { code: '', msg: '' };
    // const output = await getData(req);
    const judgment = await query(
      `SELECT * FROM manufacturer WHERE Mid LIKE ? AND Mpwd LIKE ?`,
      [Mid,oldPwd]
    );
    if (judgment.length === 0) {
      resData = { code: 1, msg: '密碼錯誤' };
      return res.json(resData);
    }
    if (judgment.length != 0) {
      const output = await query(
        `UPDATE manufacturer SET Mpwd = ? WHERE manufacturer.Mid = ?;
      `,
        [newPwd, Mid]
      );
     
      // resData = { code: 0, msg: '正確', data: newData };
      // res.json(newData);
      
    }
  });
  
  module.exports = router;
const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");

router.post("/", async (req, res) => {
  let {
    Mid,
    changeMname,
    changeMemail,
    changeMaddress,
    changeMuser,
    changeMtelephone,
    changeMphone,
  } = req.body;
  console.log("req.body", req.body);
  let resData = { code: "", msg: "" };
  try {
    await query(
      `UPDATE manufacturer SET Mname = ?,Memail = ?,Maddress = ?,Muser = ?,Mtelephone = ?, Mphone = ? WHERE manufacturer.Mid = ?;
    `,
      [
        changeMname,
        changeMemail,
        changeMaddress,
        changeMuser,
        changeMtelephone,
        changeMphone,
        Mid,
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
  const newData = await query(
    `SELECT * FROM manufacturer WHERE Mid LIKE ?;
    `,
    [Mid]
  );
  resData = { code: 0, msg: "正確", data: newData };
  res.json(resData);
});

module.exports = router;

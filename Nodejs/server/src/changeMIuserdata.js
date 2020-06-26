const express = require("express");
const db = require(__dirname + "/db_connect2");
const router = express.Router();
const upload = require(__dirname + "/upload-module");
const query = require(__dirname + "/mysql");
const sha1 = require("sha1");

// `UPDATE user SET , userName = ?, userPwd = ?, userPhone = ?, userMail =?, userBirthday = ?, userAddress = ? WHERE user.userID = ?`

router.post("/", async (req, res) => {
  let { ID } = req.body;
  let resData = { code: "", msg: "" };
  // const output = await getData(req);
  
  const newData = await query(
      `SELECT * FROM instrument WHERE Mid = ?;`,
      [ID],
    );
if(newData.length > 0){
    resData = { code: 0, msg: "正確", data: newData };
  res.json(resData);
}else{
    resData = { code: 1, msg: "error" };
  res.json(resData);
}

  
});

module.exports = router;

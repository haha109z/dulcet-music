// const express = require("express");
// // const cors = require("cors");
// const app = express.Router();
// const query = require(__dirname + '/mysql');


// app.get('/123', async (req, res) => {
//     const output = await query("SELECT * FROM `ForumAbout` WHERE 1");
//   console.log(output)
//     res.json(output);
//   });
//   module.exports = app;


const router = require("./login");
const db = require(__dirname + "/db_connect2");

const getDataForum = async (req) =>{
    const r1 = await db.query("SELECT `ForumId`, `TitleMusic`, `TitleId`, `Ｍemo`, `NewsDate` FROM `ForumAbout` WHERE 1");
    return r1;
};
router.use("/",async (req , res) =>{
    const text = await getDataForum(req);
    res.json(text);
})
module.exports = router;



const express = require('express');
const router = express.Router();
const db = require(__dirname + "/db_connect2");

const getDataList = async () =>{
    const r1 = await db.query("SELECT * FROM `news_category`");
    return r1;
};

router.post("/",async(req,res)=>{
    const [aaa] = await getDataList(req);
    res.json(aaa);
});

module.exports = router;
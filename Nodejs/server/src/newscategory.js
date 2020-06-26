const express = require('express');
const router = express.Router();
const db = require(__dirname + "/db_connect2");

const getCategory = async () =>{
    const r1 = await db.query("SELECT * FROM `news_category`");
    return r1;
};

router.post("/",async(req,res)=>{
    const [category] = await getCategory(req);
    res.json(category);
});

module.exports = router;
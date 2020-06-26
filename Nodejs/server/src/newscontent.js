const express = require('express');
const router = express.Router();
const db = require(__dirname + "/db_connect2");

const getContent = async () =>{
    const r1 = await db.query("SELECT * FROM `news`");
    return r1;
};

router.post("/",async(req,res)=>{
    const [content] = await getContent(req);
    res.json(content);
});

module.exports = router;
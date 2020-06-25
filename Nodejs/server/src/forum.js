const express = require("express");
// const cors = require("cors");
const app = express.Router();
const query = require(__dirname + '/mysql');


app.get('/123', async (req, res) => {
    const output = await query("SELECT * FROM `ForumAbout` WHERE 1");
  console.log(output)
    res.json(output);
  });





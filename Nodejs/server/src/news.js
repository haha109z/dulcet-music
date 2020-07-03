const express = require("express");
const router = express.Router();
// const db = require(__dirname + "/db_connect2");
// const query = require(__dirname + "/mysql");
const moment = require("moment-timezone");
const db = require(__dirname + "/../_mysql");

router.get("/:page?", function(req, res) {
  //設定每頁商品筆數;總筆數;總頁數
  const perPage = 5;
  let totalRows, totalPages;
  let page = req.params.page ? parseInt(req.params.page) : 1;

  const whereAr = [];

  const NewsCategory = parseInt(req.query.NewsCategory);
  if (req.query.NewsCategory && NewsCategory) {
    whereAr.push("NewsCategory=" + NewsCategory);
  }

  let whereStr = "";
  if (whereAr.length) {
    whereStr = " WHERE " + whereAr.join(" AND ");
  }

  const t_sql = ` SELECT COUNT(1) num FROM news ${whereStr}`;
  const p_sql = ` SELECT * FROM news ${whereStr} ORDER BY NewsDate DESC LIMIT ${(page -
    1) *
    perPage}, ${perPage} `;

  db.queryAsync(t_sql)
    .then(result => {
      totalRows = result[0].num;
      totalPages = Math.ceil(totalRows / perPage);
      if (page < 1) page = 1;
      if (page > totalPages) page = totalPages;

      return db.queryAsync(p_sql);
    })
    //node使用ejs不需要return但此處為前後端連接因此需要return
    .then(result => {
      result.forEach((row,idx)=>{row.created_at=moment(row.created_at).format("YYYY-MM-DD")});
      return res.json({ totalRows, totalPages, page, rows: result });
    });
  });

router.get("/news-content/:NewsID?", function (req, res) {
  const sql = `SELECT * FROM news WHERE NewsID = ?`;
  console.log(req.params.NewsID);
  db.queryAsync(sql, [req.params.NewsID]).then((result) => {
    return res.json(result);
  });
});

module.exports = router;

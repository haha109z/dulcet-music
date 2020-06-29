const express = require('express');
const db = require(__dirname + '/db_connect2');
// const upload = require(__dirname + '/upload-module');
var multer = require('multer')

const file_extension = {
  "image/jpeg":"jpg",
  "image/png":"png",
  "image/gif":"gif",
  'video/mp4':"mp4"
}
var storage_user = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/user/')
  },
  filename: function (req, file, cb) {
    console.log(file)
    cb(null, Date.now()+ '.' + file_extension[file.mimetype])
  }
})
var storage_product = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/product/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+ '.' + file_extension[file.mimetype])
  }
})

var upload_product = multer({ storage: upload_product })
var upload_user = multer({ storage: storage_user })
// var upload = multer({ dest: 'public/images/news/' });
const query = require(__dirname + '/mysql');
// const sha1 = require('sha1');
const router = express.Router();

router.post('/user/:userID', upload_user.single('image'), async function (req, res, next) {
  console.log(req.file.filename)
  await query("UPDATE `user` SET `userImg` = ? WHERE `user`.`userID` = ?", [req.file.filename, req.params.userID])
  res.json({status: 1, imgName: req.file.filename})
});

router.post('/product', upload_product.single('image'), function (req, res, next) {
  console.log(req.file.filename)
  res.json({msg: 1})
});

module.exports = router;

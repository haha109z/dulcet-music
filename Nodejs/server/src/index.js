const express = require("express");
const cors = require("cors");
// var multer = require("multer");
// const session = require("express-session");
// const MysqlStore = require("express-mysql-session")(session);
// const upload = require(__dirname + '/upload-module');
const query = require(__dirname + "/mysql");
var app = express();

// parse application/   x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

const whitelist = [
  undefined,
  "http://localhost:5500",
  "http://localhost:3000",
  "http://localhost:3001",
];
const corsOptions = {
  credentials: true,
  origin: function (origin, cb) {
    //console.log(origin);
    if (whitelist.indexOf(origin) !== -1) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
};
app.use(cors(corsOptions));

app.use(express.static("public"));

app.use("/login/user", require(__dirname + "/login"));
app.use("/register/user", require(__dirname + "/register"));

app.use("/user/UserData", require(__dirname + "/changeUserData"));
app.use("/user/UserPwd", require(__dirname + "/changeUserPwd"));
app.use("/user/UserPurchase", require(__dirname + "/UserPurchase"));
app.use("/user/UserLike", require(__dirname + "/UserLike"));
app.use("/user/UserVideo", require(__dirname + "/UserVideo"));


app.use("/img-upload", require(__dirname + "/img-upload"));
// 廠商登入註冊
app.use("/login/manufacturer", require(__dirname + "/manu_login"));
app.use("/register/manufacturer", require(__dirname + "/manu_register"));

app.use("/ManufacturerInstrument/InstrumentHome",require(__dirname + "/manuI_userdata"));
app.use("/ManufacturerInstrument/InstrumentPassword",require(__dirname + "/manuI_userpwd"));
app.use("/ManufacturerInstrument/InstrumentPutOn",require(__dirname + "/manuI_puton"));
app.use("/ManufacturerInstrument/InstrumentList",require(__dirname + "/manuI_list"));
app.use("/ManufacturerInstrument/InstrumentOrder",require(__dirname + "/manuI_order"));
app.use("/ManufacturerVideo/VideoHome",require(__dirname + "/manuV_userdata"));




// app.use("/form", require(__dirname + "/form"));

// 在網址 localhost:3030/123 來測試
// app.use((req,res)=>{
//     // 返回純文字，標籤也是被當成純文字輸出，像text()
//     // res.type("text/plain");
//     res.status(404);
//     // res.send(`<h2>SOR...找不到你要的網頁</h2>`);
//     res.send(`<h2>SOR...找不到你要的網頁</h2>`);
// })


//商品
app.use("/product", require(__dirname + "/product"));



app.use("/forum/123" , require(__dirname + "/forum123"));

// Forum!!
app.get("/forum", async (req, res) => {
  const output = await query(
     `SELECT ForumAbout.ForumId,ForumAbout.userID,user.userName,ForumAbout.TitleMusic,ForumAbout.TitleId,ForumAbout.Memo FROM ForumAbout left JOIN user ON ForumAbout.userID = user.userID`
  );
  console.log(output);
  res.json(output);
});



//news
app.use("/news", require(__dirname + "/news"));


// cart
// 新增一筆訂單資料至資料庫
app.use("/cart/3", require(__dirname + "/cart"));
// 獲取該登入會員之購物車資料
// app.get('/cart', async (req, res) => {
//   const output = await query("SELECT * FROM `cart` WHERE `userID`='3' ");
//   console.log(output)
//   res.json(output);
// });
// 獲取該購物車之商品資訊
// app.get('/cart/2', async (req, res) => {
//   const output = await query("SELECT * FROM `product` WHERE 1");
//   console.log(output)
//   res.json(output);
// });
// 獲取該購物車之商品資訊
// app.get('/cart/3', async (req, res) => {
//   const output = await query(
//     " SELECT * FROM `cart` INNER JOIN `product` ON `cart`.`productId` = `product`.`PId` "
//   );
//   console.log(output)
//   res.json(output);
// });


// simple route
app.get("/", (req, res) => {
  res.send("123");
});

app.listen(3030, () => {
  console.log("server 啟動");
});

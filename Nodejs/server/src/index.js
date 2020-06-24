const express = require("express");
const cors = require("cors");
// var multer = require("multer");
// const session = require("express-session");
// const MysqlStore = require("express-mysql-session")(session);
// const upload = require(__dirname + '/upload-module');

var app = express();

// parse application/   x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

const whitelist = [undefined, 'http://localhost:5500', 'http://localhost:3000','http://localhost:3001']
const corsOptions = {
    credentials: true,
    origin: function(origin, cb){
        //console.log(origin);
        if(whitelist.indexOf(origin) !== -1){
            cb(null, true);
        } else {
            cb(null, false);
        }
    }
};
app.use(cors(corsOptions));

app.use("/login/user", require(__dirname + "/login"));
app.use("/register", require(__dirname + "/register"));

// 在網址 localhost:3030/123 來測試
// app.use((req,res)=>{
//     // 返回純文字，標籤也是被當成純文字輸出，像text()
//     // res.type("text/plain");
//     res.status(404);
//     // res.send(`<h2>SOR...找不到你要的網頁</h2>`);
//     res.send(`<h2>SOR...找不到你要的網頁</h2>`);
// })

// simple route
app.get("/", (req, res) => {
    res.send("123");
  });

app.listen(3030,()=>{
    console.log("server 啟動");
})
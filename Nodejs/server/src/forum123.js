const express = require('express');
const db = require(__dirname + '/db_connect2');
const router = express.Router();
const upload = require(__dirname + '/upload-module');
const query = require(__dirname + '/mysql');
// const sha1 = require('sha1');

// `UPDATE user SET , userName = ?, userPwd = ?, userPhone = ?, userMail =?, userBirthday = ?, userAddress = ? WHERE user.userID = ?`

router.post('/', async (req, res) => {
  let {
    ForumTitle,
    ForumAction,
    userID
  } = req.body;
  

  // let {ForumId} = req.body;
  // let resData = { code: '', msg: '' };
  // const output = await getData(req);
  // console.log(req.body)
  // const new123 = await query(
  //   "UPDATE `forumabout` SET  `userID`=?,`userName`=?,`TitleMusic`=?,`TitleId`=?,`Memo`=?",[userID,userName,TitleMusic,TitleId,Memo])

  //   const new123 = await query(
  //     "INSERT INTO `forumabout` (`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`,`NewsDate`) VALUES (NULL, '?', '?', '?', '?', current_timestamp())",[TitleMusic,TitleId,Memo,userID]
  // );
  
  
  // const new123 = await query("INSERT INTO `forumabout` (`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`) VALUES (NULL, ?, ?, ?, ?);",[TitleMusic,TitleId,Memo,userID])
  // res.json(new123);
  // await query("INSERT INTO `user` ( `userID`,`username`, `userPwd`, `userPhone`, `userMail`, `userBirthday`, `userAddress`, `userImg`) VALUES (NULL,?, ?, ?, ?, ?, ?, ?);", [userRegisterName, userRegisterPwd, userRegisterMobile, userRegisterEmail, userRegisterBir, userRegisterAddress,"userImg000"])
  

  // INSERT INTO `user` (`userID`, `userName`, `userPwd`, `userPhone`, `userMail`, `userBirthday`, `userAddress`, `userImg`, `created_at`, `updated_at`) VALUES (NULL, '1', '1', '1', '1', '1', '1', '1', current_timestamp(), current_timestamp());

  // ("INSERT INTO `forumabout` (`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`) VALUES (NULL, ?, ?, ?, ?);",[TitleMusic,TitleId,Memo,userID])
  const news1 =await query("INSERT INTO `forumabout` (`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`) VALUES (NULL, ?, ?, NULL, '3');",[ForumTitle,ForumAction])
  
  //  console.log(news.typeof)
  res.json(news1);
});

module.exports = router;

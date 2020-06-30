const express = require('express');
const router = express.Router();
const query = require(__dirname + '/mysql');

// `UPDATE user SET , userName = ?, userPwd = ?, userPhone = ?, userMail =?, userBirthday = ?, userAddress = ? WHERE user.userID = ?`

router.post('/', async (req, res) => {
  let { userID } = req.body;
  let resData = { code: '', msg: '' };
  // const output = await getData(req);

  const likeData = await query(
    'SELECT     product_favorite.FavUId,     product_video.PId,     product_video.PCategoryId,     product_video.PName,     product_video.PImg,     product_video.PPrice FROM     product_favorite INNER JOIN product_video ON product_favorite.PCategory = product_video.PCategoryId WHERE     product_favorite.FavUId = ? AND product_favorite.FavPId = product_video.PId UNION SELECT     product_favorite.FavUId,     product_courses.PId,     product_courses.PCategoryId,     product_courses.PName,     product_courses.PImg,     product_courses.PPrice FROM     product_favorite INNER JOIN product_courses ON product_favorite.PCategory = product_courses.PCategoryId WHERE     product_favorite.FavUId = ? AND product_favorite.FavPId = product_courses.PId UNION SELECT     product_favorite.FavUId,     product_instruments.PId,     product_instruments.PCategoryId,     product_instruments.PName,     product_instruments.PImg,     product_instruments.PPrice FROM     product_favorite INNER JOIN product_instruments ON product_favorite.PCategory = product_instruments.PCategoryId WHERE     product_favorite.FavUId = ? AND product_favorite.FavPId = product_instruments.PId',
    [userID, userID, userID]
  );
// console.log(likeData)
  resData = { code: 0, msg: '正確', likeData: likeData };
  res.json(resData);
});

module.exports = router;

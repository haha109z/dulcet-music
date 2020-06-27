-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 06 月 27 日 06:51
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.3.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `Coupon`
--

-- --------------------------------------------------------

--
-- 資料表結構 `ForumAbout`
--

CREATE TABLE `ForumAbout` (
  `ForumId` int(4) NOT NULL COMMENT '討論區ID',
  `TitleMusic` varchar(10) DEFAULT NULL COMMENT '樂器類型',
  `TitleId` varchar(100) NOT NULL COMMENT '討論主題',
  `Memo` varchar(100) DEFAULT NULL COMMENT '討論內容',
  `userID` int(5) DEFAULT NULL COMMENT '會員ID',
  `NewsDate` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `ForumAbout`
--

INSERT INTO `ForumAbout` (`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`, `NewsDate`) VALUES
(1, '小提琴', '手指頭有點不太協調怎麼辦？', '手指不協調，先看手是不是緊張了，大拇指位置是不是自己最舒服的位置了，把這些基礎的問題解決了，自然會好很多，連基礎的東西都沒解決好，就追求協調什麼的，根本是不可能的！', 1, '2020-06-26 23:03:46'),
(2, '小提琴', '你好！我現在大一，想學琴，但什麼樂理的都是零基礎！！！想買一本關於樂理的書，求大神推薦呀！！！謝謝！！', '鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你能的！', 1, '2020-06-26 23:06:48'),
(3, '小提琴', '如何拉好小提琴.總是感覺雜音很多如何治？', '初期有雜音是正常的，因為你掌握不好四根弦之間的角度，拉這根弦老是碰另一根，那麼你只能多練，去感覺，慢慢的才能不出雜音。', 2, '2020-06-27 09:47:06');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `ForumAbout`
--
ALTER TABLE `ForumAbout`
  ADD PRIMARY KEY (`ForumId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `ForumAbout`
--
ALTER TABLE `ForumAbout`
  MODIFY `ForumId` int(4) NOT NULL AUTO_INCREMENT COMMENT '討論區ID', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

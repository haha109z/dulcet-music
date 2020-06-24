-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 06 月 24 日 05:16
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
-- 資料庫： `Forum`
--

-- --------------------------------------------------------

--
-- 資料表結構 `ForumAbout`
--

CREATE TABLE `ForumAbout` (
  `ForumId` int(4) NOT NULL COMMENT '討論區ID',
  `TitleMusic` varchar(10) DEFAULT NULL COMMENT '樂器類型',
  `TitleId` varchar(30) NOT NULL COMMENT '討論主題',
  `Ｍemo` varchar(50) NOT NULL COMMENT '討論內容',
  `NewsDate` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `ForumAbout`
--

INSERT INTO `ForumAbout` (`ForumId`, `TitleMusic`, `TitleId`, `Ｍemo`, `NewsDate`) VALUES
(1, '小提琴', '我的小提琴問題', '我的小提琴沒有問題', '2020-06-23 19:17:24'),
(2, '大提琴', '我的大提琴問題', '我的小提琴出問題了', '2020-06-23 19:17:16');

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
  MODIFY `ForumId` int(4) NOT NULL AUTO_INCREMENT COMMENT '討論區ID', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

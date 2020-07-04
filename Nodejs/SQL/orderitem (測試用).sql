-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2020 年 07 月 04 日 16:26
-- 伺服器版本： 5.7.26
-- PHP 版本： 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `dulcet_music`
--

-- --------------------------------------------------------

--
-- 資料表結構 `orderitem`
--

CREATE TABLE `orderitem` (
  `orderItem` tinyint(10) NOT NULL COMMENT '訂單明細編號',
  `orderId` tinyint(10) NOT NULL COMMENT '訂單編號',
  `productCategory` varchar(10) NOT NULL COMMENT '商品類別ID',
  `productId` tinyint(10) NOT NULL COMMENT '商品ID',
  `cartNumber` tinyint(10) NOT NULL COMMENT '購物車數量'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderitem`
--

INSERT INTO `orderitem` (`orderItem`, `orderId`, `productCategory`, `productId`, `cartNumber`) VALUES
(1, 1, '樂器', 1, 1),
(2, 1, '樂器', 2, 1),
(3, 1, '樂器', 3, 2),
(4, 2, '樂器', 4, 1),
(5, 2, '影片', 6, 1),
(6, 3, '樂器', 1, 1),
(7, 4, '樂器', 7, 1),
(8, 5, '樂器', 3, 1),
(9, 6, '課程', 1, 1),
(10, 6, '影片', 2, 1),
(11, 7, '樂器', 3, 1),
(12, 8, '樂器', 6, 1),
(13, 9, '樂器', 3, 1),
(14, 10, '樂器', 1, 1),
(15, 10, '樂器', 2, 2),
(16, 10, '影片', 3, 1),
(17, 11, '影片', 4, 1),
(18, 12, '影片', 10, 1),
(19, 13, '影片', 9, 1),
(20, 14, '影片', 8, 1),
(21, 17, '影片', 20, 1),
(22, 16, '影片', 29, 1),
(23, 17, '影片', 22, 1),
(24, 14, '影片', 29, 1),
(25, 16, '影片', 28, 1),
(26, 15, '影片', 27, 1),
(27, 14, '影片', 26, 1),
(28, 13, '影片', 25, 1),
(29, 12, '影片', 24, 1),
(30, 24, '樂器', 36, 1),
(31, 25, '影片', 2, 1),
(32, 26, '樂器', 58, 2),
(33, 27, '樂器', 22, 1),
(34, 28, '樂器', 14, 10),
(35, 29, '樂器', 4, 5),
(36, 30, '影片', 43, 1);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`orderItem`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `orderItem` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單明細編號', AUTO_INCREMENT=37;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

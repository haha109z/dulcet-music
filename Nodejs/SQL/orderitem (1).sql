-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:3306
-- 產生時間： 2020 年 07 月 05 日 03:19
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
(41, 34, '樂器', 3, 2),
(42, 34, '影片', 34, 1),
(43, 34, '樂器', 4, 1),
(44, 34, '影片', 26, 1),
(45, 35, '影片', 43, 1),
(46, 36, '影片', 21, 1),
(47, 37, '樂器', 57, 1),
(48, 37, '樂器', 45, 2),
(49, 38, '影片', 26, 1),
(50, 38, '影片', 10, 1),
(51, 38, '影片', 42, 1),
(52, 38, '樂器', 2, 1),
(53, 38, '影片', 30, 1),
(54, 38, '影片', 49, 1),
(55, 38, '樂器', 4, 1),
(56, 39, '樂器', 11, 1),
(57, 40, '樂器', 36, 1),
(58, 40, '樂器', 3, 1),
(59, 41, '樂器', 12, 1),
(60, 41, '樂器', 32, 1),
(61, 42, '樂器', 58, 1),
(62, 42, '影片', 44, 1),
(63, 42, '樂器', 43, 1),
(64, 43, '影片', 5, 1),
(65, 45, '樂器', 58, 1),
(66, 45, '樂器', 2, 1),
(67, 45, '樂器', 33, 1),
(68, 45, '樂器', 55, 1),
(69, 45, '影片', 29, 1),
(70, 46, '影片', 26, 1),
(71, 46, '樂器', 48, 1),
(72, 47, '樂器', 30, 1),
(73, 48, '樂器', 14, 1),
(74, 48, '樂器', 53, 1),
(75, 49, '樂器', 47, 1),
(76, 49, '樂器', 30, 1);

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
  MODIFY `orderItem` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單明細編號', AUTO_INCREMENT=77;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

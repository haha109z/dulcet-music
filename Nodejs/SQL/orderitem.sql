-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-07-01 07:40:46
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `dulcet_music_0628`
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
  `cartNumber` tinyint(10) NOT NULL COMMENT '購物車數量',
  `Mid` int(10) NOT NULL COMMENT '廠商ID'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderitem`
--

INSERT INTO `orderitem` (`orderItem`, `orderId`, `productCategory`, `productId`, `cartNumber`, `Mid`) VALUES
(1, 1, '樂器', 1, 1, 6),
(2, 1, '樂器', 2, 1, 2),
(3, 1, '樂器', 3, 2, 1),
(4, 2, '樂器', 4, 1, 2),
(5, 2, '影片', 6, 1, 10),
(6, 3, '樂器', 1, 1, 3),
(7, 4, '樂器', 7, 1, 5),
(8, 5, '樂器', 3, 1, 7),
(9, 6, '課程', 1, 1, 0),
(10, 6, '影片', 2, 1, 8),
(11, 7, '樂器', 3, 1, 4),
(12, 8, '樂器', 6, 1, 5),
(13, 9, '樂器', 3, 1, 3),
(14, 10, '樂器', 1, 1, 1),
(15, 10, '樂器', 2, 2, 2),
(16, 10, '影片', 3, 1, 15);

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
  MODIFY `orderItem` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單明細編號', AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

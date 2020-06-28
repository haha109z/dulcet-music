-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-28 04:23:41
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
-- 資料表結構 `cart`
--

CREATE TABLE `cart` (
  `cartItem` tinyint(10) NOT NULL COMMENT '購物車明細編號',
  `memberId` tinyint(10) NOT NULL COMMENT '會員ID',
  `productCategory` varchar(10) NOT NULL COMMENT '商品類別',
  `productId` tinyint(10) NOT NULL COMMENT '商品ID',
  `cartNumber` tinyint(10) NOT NULL COMMENT '購物車該件商品數量'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `cart`
--

INSERT INTO `cart` (`cartItem`, `memberId`, `productCategory`, `productId`, `cartNumber`) VALUES
(1, 3, '課程', 1, 1),
(2, 3, '課程', 2, 2),
(3, 3, '課程', 3, 1),
(4, 1, '課程', 4, 1),
(5, 2, '影片', 2, 1),
(6, 4, '課程', 3, 2),
(7, 8, '課程', 4, 1),
(8, 8, '影片', 2, 1),
(9, 6, '課程', 2, 1),
(10, 9, '課程', 4, 1),
(11, 5, '樂器', 1, 1),
(12, 7, '課程', 1, 1),
(13, 7, '課程', 2, 1),
(14, 10, '樂器', 1, 1);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cartItem`),
  ADD KEY `memberId` (`memberId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `cartItem` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '購物車明細編號', AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-27 14:10:36
-- 伺服器版本： 10.4.11-MariaDB
-- PHP 版本： 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
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
-- 資料表結構 `product_favorite`
--

CREATE TABLE `product_favorite` (
  `FavId` int(255) NOT NULL COMMENT '最愛編號',
  `FavUId` int(255) NOT NULL COMMENT '會員編號',
  `PCategory` varchar(255) NOT NULL COMMENT '商品類別',
  `FavPId` int(255) NOT NULL COMMENT '商品編號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `product_favorite`
--

INSERT INTO `product_favorite` (`FavId`, `FavUId`, `PCategory`, `FavPId`) VALUES
(1, 1, '課程', 2),
(2, 1, '影片', 10),
(3, 1, '樂器', 18),
(4, 2, '樂器', 28),
(5, 2, '樂器', 19),
(10, 1, '樂器', 4),
(12, 1, '樂器', 5),
(17, 1, '樂器', 1),
(18, 1, '樂器', 2);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `product_favorite`
--
ALTER TABLE `product_favorite`
  ADD PRIMARY KEY (`FavId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_favorite`
--
ALTER TABLE `product_favorite`
  MODIFY `FavId` int(255) NOT NULL AUTO_INCREMENT COMMENT '最愛編號', AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

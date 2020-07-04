-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2020-07-02 16:31:22
-- 服务器版本： 5.7.26
-- PHP 版本： 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `dulcet_music`
--

-- --------------------------------------------------------

--
-- 表的结构 `orderitem`
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
-- 转存表中的数据 `orderitem`
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
(16, 10, '影片', 3, 1, 15),
(17, 11, '影片', 4, 1, 15),
(18, 12, '影片', 10, 1, 15),
(19, 13, '影片', 9, 1, 15),
(20, 14, '影片', 8, 1, 15),
(21, 17, '影片', 20, 1, 15),
(22, 16, '影片', 29, 1, 15),
(23, 17, '影片', 22, 1, 15),
(24, 14, '影片', 29, 1, 15),
(25, 16, '影片', 28, 1, 15),
(26, 15, '影片', 27, 1, 15),
(27, 14, '影片', 26, 1, 15),
(28, 13, '影片', 25, 1, 15),
(29, 12, '影片', 24, 1, 15);

--
-- 转储表的索引
--

--
-- 表的索引 `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`orderItem`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `orderItem` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單明細編號', AUTO_INCREMENT=30;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

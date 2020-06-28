-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-24 16:09:10
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
-- 資料庫： `dulcet_music`
--

-- --------------------------------------------------------

--
-- 資料表結構 `orderlist`
--

CREATE TABLE `orderlist` (
  `orderId` tinyint(10) NOT NULL COMMENT '訂單編號',
  `memberId` tinyint(10) NOT NULL COMMENT '會員ID',
  `name` varchar(50) NOT NULL COMMENT '收件人姓名',
  `address` varchar(100) NOT NULL COMMENT '收件人地址',
  `phone` varchar(50) NOT NULL COMMENT '收件人手機',
  `email` varchar(50) NOT NULL COMMENT '收件人email',
  `invoice` varchar(50) NOT NULL COMMENT '發票號碼',
  `invoiceStorage` varchar(50) NOT NULL COMMENT '發票儲存方式',
  `invoiceInfo` varchar(50) DEFAULT NULL COMMENT '發票資料',
  `coupon` int(10) DEFAULT NULL COMMENT '折扣碼',
  `orderPrice` int(10) NOT NULL COMMENT '訂單總價',
  `orderPayment` varchar(50) NOT NULL COMMENT '付款方式',
  `orderState` varchar(50) NOT NULL COMMENT '訂單狀態'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderlist`
--

INSERT INTO `orderlist` (`orderId`, `memberId`, `name`, `address`, `phone`, `email`, `invoice`, `invoiceStorage`, `invoiceInfo`, `coupon`, `orderPrice`, `orderPayment`, `orderState`) VALUES
(1, 1, 'Neil', 'Neil Road', '0988888888', 'neil@gmail.com', 'YM12345678', '會員載具', NULL, 1000, 3700, 'atm', '待付款'),
(2, 7, 'Lola', 'Rola Road', '0966666666', 'lora@gmail.com', 'YM12345679', '會員載具', NULL, NULL, 6500, 'atm', '待付款'),
(3, 5, 'Sandy', 'Sandy Road', '0911111111', 'sandy@gmail.com', 'YM12345680', '手機條碼載具', '/888NNN8', NULL, 3500, '信用卡', '完成'),
(4, 2, 'Coral', 'Coral Road', '0922222222', 'coral@gmail.com', 'YM12345681', '會員載具', NULL, NULL, 5000, 'atm', '待付款'),
(5, 3, 'Judy', 'Judy Road', '0955555555', 'judy@gmail.com', 'YM12345682', '會員載具', NULL, NULL, 2000, 'atm', '待付款'),
(6, 8, 'May', 'May Road', '0933333333', 'may@gmail.com', 'YM12345683', '捐贈', '浪兔協會', NULL, 3200, '信用卡', '完成'),
(7, 4, 'Ben', 'Ben Road ', '0999999999', 'ben@gmail.com', 'YM12345684', '會員載具', NULL, 2000, 1600, '信用卡', '完成'),
(8, 6, 'Cindy', 'Cindy Road', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成'),
(9, 3, 'Judy', 'Judy Road', '0955555555', 'judy@gmail.com', 'YM12345686', '會員載具', NULL, NULL, 3600, 'atm', '待付款'),
(10, 1, 'Neil', 'Neil Road', '0988888888', 'neil@gmail.com', 'YM12345687', '會員載具', NULL, 3000, 5200, 'atm', '待付款');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`orderId`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `orderId` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

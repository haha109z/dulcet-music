-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- 主机： localhost:3306
-- 生成日期： 2020-07-02 16:31:35
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
-- 表的结构 `orderlist`
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
  `orderState` varchar(50) NOT NULL COMMENT '訂單狀態',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '訂單成立時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 转存表中的数据 `orderlist`
--

INSERT INTO `orderlist` (`orderId`, `memberId`, `name`, `address`, `phone`, `email`, `invoice`, `invoiceStorage`, `invoiceInfo`, `coupon`, `orderPrice`, `orderPayment`, `orderState`, `created_at`) VALUES
(1, 1, 'Neil', '106台北市大安區和平東路二段106號1樓', '0988888888', 'neil@gmail.com', 'YM12345678', '會員載具', NULL, 1000, 3700, 'atm', '待付款', '2020-07-01 13:32:34'),
(2, 1, 'Lola', '彰化縣彰化市崙平南路126號', '0966666666', 'lora@gmail.com', 'YM12345679', '會員載具', NULL, NULL, 6500, 'atm', '待出貨', '2020-07-01 13:32:34'),
(3, 1, 'Sandy', '桃園市平鎮區太平西路99巷22號', '0911111111', 'sandy@gmail.com', 'YM12345680', '手機條碼載具', '/888NNN8', NULL, 3500, '信用卡', '完成', '2020-07-01 13:32:34'),
(4, 1, 'Coral', '106台北市大安區和平東路二段106號4樓', '0922222222', 'coral@gmail.com', 'YM12345681', '會員載具', NULL, NULL, 5000, 'atm', '待付款', '2020-05-01 13:32:34'),
(5, 1, 'Judy', '嘉義縣太保市高鐵西路174號', '0955555555', 'judy@gmail.com', 'YM12345682', '會員載具', NULL, NULL, 2000, 'atm', '待收貨', '2020-05-08 14:12:34'),
(6, 1, 'May', '106台北市大安區和平東路二段106號6樓', '0933333333', 'may@gmail.com', 'YM12345683', '捐贈', '浪兔協會', NULL, 3200, '信用卡', '完成', '2020-05-11 13:32:34'),
(7, 1, 'Ben', '彰化縣彰化市崙平南路126號', '0999999999', 'ben@gmail.com', 'YM12345684', '會員載具', NULL, 2000, 1600, '信用卡', '取消', '2020-05-28 09:32:34'),
(8, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(9, 1, 'Judy', '嘉義縣太保市高鐵西路174號', '0955555555', 'judy@gmail.com', 'YM12345686', '會員載具', NULL, NULL, 3600, 'atm', '待付款', '2020-06-19 13:32:34'),
(10, 1, 'Neil', '106台北市大安區和平東路二段106號1樓', '0988888888', 'neil@gmail.com', 'YM12345687', '會員載具', NULL, 3000, 5200, 'atm', '待付款', '2020-07-01 13:32:34'),
(11, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(12, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(13, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(14, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(15, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(16, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(17, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34'),
(18, 1, 'Cindy', '106台北市大安區和平東路二段106號8樓', '0977777777', 'cindy@gmail.com', 'YM12345685', '捐贈', '愛兔協會', 1000, 12000, '信用卡', '完成', '2020-06-05 11:32:34');

--
-- 转储表的索引
--

--
-- 表的索引 `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`orderId`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `orderId` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=19;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

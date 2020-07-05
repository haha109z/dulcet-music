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
  `orderState` varchar(50) NOT NULL COMMENT '訂單狀態',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '訂單成立時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `orderlist`
--

INSERT INTO `orderlist` (`orderId`, `memberId`, `name`, `address`, `phone`, `email`, `invoice`, `invoiceStorage`, `invoiceInfo`, `coupon`, `orderPrice`, `orderPayment`, `orderState`, `created_at`) VALUES
(34, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '', '', 0, 83900, 'ATM', '取消', '2020-07-05 00:58:10'),
(35, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '', '', 0, 1200, 'ATM', '待付款', '2020-07-05 00:59:24'),
(36, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '', '', 0, 1000, '信用卡', '完成', '2020-07-05 01:00:27'),
(37, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 40660, '信用卡', '完成', '2020-07-05 01:01:39'),
(38, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 57630, '信用卡', '完成', '2020-07-05 01:03:22'),
(39, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 59000, 'ATM', '待付款', '2020-07-05 01:04:31'),
(40, 2, '蔡孟洋', '桃園市龜山區樂善里013鄰文武街３２號', '0919390002', '002@gmail.com', 'YM', '會員載具', '', 0, 30280, 'ATM', '待付款', '2020-07-05 01:10:27'),
(41, 3, '謝凱成', '桃園市龜山區公西里013鄰文三一街５０之１號', '0919390003', '003@gmail.com', 'YM', '會員載具', '', 0, 62600, '信用卡', '完成', '2020-07-05 01:20:26'),
(42, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 22600, '信用卡', '完成', '2020-07-05 01:25:48'),
(43, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 100, '信用卡', '完成', '2020-07-05 01:30:42'),
(44, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 100, '信用卡', '完成', '2020-07-05 01:30:42'),
(45, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 87450, '信用卡', '完成', '2020-07-05 01:35:34'),
(46, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 42100, 'ATM', '待付款', '2020-07-05 01:38:23'),
(47, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 2500, 'ATM', '待付款', '2020-07-05 01:39:53'),
(48, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 41149, 'ATM', '待出貨', '2020-07-05 01:43:12'),
(49, 1, '王小明', '桃園市龜山區樂善里013鄰文武街', '091939008', '001@gmail.com', 'YM', '會員載具', '', 0, 57100, 'ATM', '待收貨', '2020-07-05 01:44:24');

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
  MODIFY `orderId` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=50;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

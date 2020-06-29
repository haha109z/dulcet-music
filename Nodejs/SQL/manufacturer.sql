-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-29 12:49:14
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
-- 資料庫： `dulcet_music`
--

-- --------------------------------------------------------

--
-- 資料表結構 `manufacturer`
--

CREATE TABLE `manufacturer` (
  `Mid` int(11) NOT NULL,
  `Mname` varchar(255) NOT NULL,
  `Maddress` varchar(255) NOT NULL,
  `Muser` varchar(10) NOT NULL,
  `Mphone` varchar(15) NOT NULL,
  `Mtelephone` varchar(15) NOT NULL,
  `Memail` varchar(255) NOT NULL,
  `Mpwd` varchar(255) NOT NULL,
  `Mimg` longtext NOT NULL,
  `Mcategory` varchar(10) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `manufacturer`
--

INSERT INTO `manufacturer` (`Mid`, `Mname`, `Maddress`, `Muser`, `Mphone`, `Mtelephone`, `Memail`, `Mpwd`, `Mimg`, `Mcategory`, `created_at`, `updated_at`) VALUES
(1, '海蝶音樂', '彰化縣彰化市崙平南路125號', '徐美駿', '0930016500', '0298338367', 'm001@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '樂器', '2019-11-25 13:18:46', '2020-06-29 18:47:13'),
(2, '彎的音樂', '桃園市平鎮區太平西路99巷15號', '夏淑貞', '0963134692', '0298338361', 'm002@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '樂器', '2019-11-26 13:18:46', '2020-06-29 18:47:31'),
(3, '角頭音樂', '屏東縣長治鄉德和路77號', '陸奕怡', '0930016499', '0298338350', 'm003@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '樂器', '2019-11-27 13:18:46', '2020-06-29 18:47:42'),
(4, '後台音樂', '桃園市平鎮區太平西路99巷22號', '沈玉梅', '0930016490', '0298338369', 'm004@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '樂器', '2019-11-28 13:18:46', '2020-06-29 18:47:46'),
(5, '禾廣娛樂', '桃園市平鎮區太平西路99巷18號', '李淑敏', '0963134690', '0298338346', 'm005@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '樂器', '2019-11-29 13:18:46', '2020-06-29 18:47:50'),
(6, '典選音樂', '屏東縣長治鄉德和路75號', '蔡軒諭', '0972314568', '0298338339', 'm006@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '樂器', '2019-11-30 13:18:46', '2020-06-29 18:47:54'),
(7, '豐華音樂', '桃園市平鎮區太平西路99巷19號', '林裕寧', '0911163267', '0298338368', 'm007@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '樂器', '2019-12-01 13:18:46', '2020-06-29 18:48:01'),
(8, '擎天娛樂', '屏東縣長治鄉德和路82號', '江佳妃', '0963134694', '0298338379', 'm008@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-02 13:18:46', '2020-06-29 18:48:08'),
(9, '亞神音樂', '嘉義縣太保市高鐵西路173號', '張博胤', '0911163269', '0298338340', 'm009@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-03 13:18:46', '2020-06-29 18:48:14'),
(10, '何樂音樂', '屏東縣長治鄉德和路80號', '張佑霖', '0930016501', '0298338356', 'm010@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-04 13:18:46', '2020-06-29 18:48:20'),
(11, '種子音樂', '嘉義縣太保市高鐵西路174號', '盛彥翔', '0963134691', '0298338342', 'm011@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-05 13:18:46', '2020-06-29 18:48:23'),
(12, '山葉音樂', '桃園市平鎮區太平西路99巷13號', '彭俊憲', '0930016503', '0298338351', 'm012@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-06 13:18:46', '2020-06-29 18:48:27'),
(13, '相信音樂', '台北市大安區信義路四段149-2號', '郎士哲', '0911163264', '0298338378', 'm013@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-07 13:18:46', '2020-06-29 18:48:31'),
(14, '杰威爾音樂', '台北市大安區信義路四段149-12號', '黃玄豐', '0911163265', '0298338385', 'm014@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-08 13:18:46', '2020-06-29 18:48:34'),
(15, '寰亞音樂', '彰化縣彰化市崙平南路126號', '余柔喬', '0911163278', '0298338359', 'm015@gmail.com', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '', '影片', '2019-12-09 13:18:46', '2020-06-29 18:48:38');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `manufacturer`
--
ALTER TABLE `manufacturer`
  ADD PRIMARY KEY (`Mid`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `Mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

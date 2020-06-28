-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-06-28 08:40:20
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

-- --------------------------------------------------------

--
-- 資料表結構 `forumabout`
--

CREATE TABLE `forumabout` (
  `ForumId` int(4) NOT NULL COMMENT '討論區ID',
  `TitleMusic` varchar(10) DEFAULT NULL COMMENT '樂器類型',
  `TitleId` varchar(100) NOT NULL COMMENT '討論主題',
  `Memo` varchar(100) DEFAULT NULL COMMENT '討論內容',
  `userID` int(5) DEFAULT NULL COMMENT '會員ID',
  `NewsDate` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `forumabout`
--

INSERT INTO `forumabout` (`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`, `NewsDate`) VALUES
(1, '小提琴', '手指頭有點不太協調怎麼辦？', '手指不協調，先看手是不是緊張了，大拇指位置是不是自己最舒服的位置了，把這些基礎的問題解決了，自然會好很多，連基礎的東西都沒解決好，就追求協調什麼的，根本是不可能的！', 1, '2020-06-26 23:03:46'),
(2, '小提琴', '你好！我現在大一，想學琴，但什麼樂理的都是零基礎！！！想買一本關於樂理的書，求大神推薦呀！！！謝謝！！', '鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你能的！', 1, '2020-06-26 23:06:48'),
(3, '小提琴', '如何拉好小提琴.總是感覺雜音很多如何治？', '初期有雜音是正常的，因為你掌握不好四根弦之間的角度，拉這根弦老是碰另一根，那麼你只能多練，去感覺，慢慢的才能不出雜音。', 2, '2020-06-27 09:47:06');

-- --------------------------------------------------------

--
-- 資料表結構 `manu_instrument`
--

CREATE TABLE `manu_instrument` (
  `Mid` int(11) NOT NULL,
  `Mname` varchar(255) NOT NULL,
  `Maddress` varchar(255) NOT NULL,
  `Muser` varchar(10) NOT NULL,
  `Mphone` varchar(15) NOT NULL,
  `Mtelephone` varchar(15) NOT NULL,
  `Memail` varchar(255) NOT NULL,
  `Maccount` varchar(255) NOT NULL,
  `Mpwd` varchar(255) NOT NULL,
  `Mimg` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `manu_instrument`
--

INSERT INTO `manu_instrument` (`Mid`, `Mname`, `Maddress`, `Muser`, `Mphone`, `Mtelephone`, `Memail`, `Maccount`, `Mpwd`, `Mimg`, `created_at`, `updated_at`) VALUES
(1, '海蝶音樂', '彰化縣彰化市崙平南路125號', '徐美駿', '0930016500', '0298338367', 'test01@gmail.com', 'm0001test', 'm0001fuck', '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', '2019-11-25 13:18:46', '2020-06-27 11:10:39'),
(2, '彎的音樂', '桃園市平鎮區太平西路99巷15號', '夏淑貞', '0963134692', '0298338361', 'test02@gmail.com', 'm0002test', 'm0002fuck', '002.jpg', '2019-11-26 13:18:46', '2019-11-25 13:18:47'),
(3, '角頭音樂', '屏東縣長治鄉德和路77號', '陸奕怡', '0930016499', '0298338350', 'test03@gmail.com', 'm0003test', 'm0003fuck', '003.jpg', '2019-11-27 13:18:46', '2019-11-25 13:18:48'),
(4, '後台音樂', '桃園市平鎮區太平西路99巷22號', '沈玉梅', '0930016490', '0298338369', 'test04@gmail.com', 'm0004test', 'm0004fuck', '004.jpg', '2019-11-28 13:18:46', '2019-11-25 13:18:49'),
(5, '禾廣娛樂', '桃園市平鎮區太平西路99巷18號', '李淑敏', '0963134690', '0298338346', 'test05@gmail.com', 'm0005test', 'm0005fuck', '005.jpg', '2019-11-29 13:18:46', '2019-11-25 13:18:50'),
(6, '典選音樂', '屏東縣長治鄉德和路75號', '蔡軒諭', '0972314568', '0298338339', 'test06@gmail.com', 'm0006test', 'm0006fuck', '006.jpg', '2019-11-30 13:18:46', '2019-11-25 13:18:51'),
(7, '豐華音樂', '桃園市平鎮區太平西路99巷19號', '林裕寧', '0911163267', '0298338368', 'test07@gmail.com', 'm0007test', 'm0007fuck', '007.jpg', '2019-12-01 13:18:46', '2019-11-25 13:18:52'),
(8, '擎天娛樂', '屏東縣長治鄉德和路82號', '江佳妃', '0963134694', '0298338379', 'test08@gmail.com', 'm0008test', 'm0008fuck', '008.jpg', '2019-12-02 13:18:46', '2019-11-25 13:18:53'),
(9, '亞神音樂', '嘉義縣太保市高鐵西路173號', '張博胤', '0911163269', '0298338340', 'test09@gmail.com', 'm0009test', 'm0009fuck', '009.jpg', '2019-12-03 13:18:46', '2019-11-25 13:18:54'),
(10, '何樂音樂', '屏東縣長治鄉德和路80號', '張佑霖', '0930016501', '0298338356', 'test10@gmail.com', 'm0010test', 'm0010fuck', '010.jpg', '2019-12-04 13:18:46', '2019-11-25 13:18:55'),
(11, '種子音樂', '嘉義縣太保市高鐵西路174號', '盛彥翔', '0963134691', '0298338342', 'test11@gmail.com', 'm0011test', 'm0011fuck', '011.jpg', '2019-12-05 13:18:46', '2019-11-25 13:18:56'),
(12, '山葉音樂', '桃園市平鎮區太平西路99巷13號', '彭俊憲', '0930016503', '0298338351', 'test12@gmail.com', 'm0012test', 'm0012fuck', '012.jpg', '2019-12-06 13:18:46', '2019-11-25 13:18:57'),
(13, '相信音樂', '台北市大安區信義路四段149-2號', '郎士哲', '0911163264', '0298338378', 'test13@gmail.com', 'm0013test', 'm0013fuck', '013.jpg', '2019-12-07 13:18:46', '2019-11-25 13:18:58'),
(14, '杰威爾音樂', '台北市大安區信義路四段149-12號', '黃玄豐', '0911163265', '0298338385', 'test14@gmail.com', 'm0014test', 'm0014fuck', '014.jpg', '2019-12-08 13:18:46', '2019-11-25 13:18:59'),
(15, '寰亞音樂', '彰化縣彰化市崙平南路126號', '余柔喬', '0911163278', '0298338359', 'test15@gmail.com', 'm0015test', 'm0015fuck', '015.jpg', '2019-12-09 13:18:46', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `manu_video`
--

CREATE TABLE `manu_video` (
  `Mid` int(11) NOT NULL,
  `Mname` varchar(255) NOT NULL,
  `Maddress` varchar(255) NOT NULL,
  `Muser` varchar(10) NOT NULL,
  `Mphone` varchar(15) NOT NULL,
  `Mtelephone` varchar(15) NOT NULL,
  `Memail` varchar(25) NOT NULL,
  `Maccount` varchar(255) NOT NULL,
  `Mpwd` varchar(255) NOT NULL,
  `Mimg` longtext NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `manu_video`
--

INSERT INTO `manu_video` (`Mid`, `Mname`, `Maddress`, `Muser`, `Mphone`, `Mtelephone`, `Memail`, `Maccount`, `Mpwd`, `Mimg`, `created_at`, `updated_at`) VALUES
(1, '海蝶音樂', '彰化縣彰化市崙平南路125號', '徐美駿', '0930016500', '0298338367', 'test01@gmail.com', 'm0001test', 'm0001fuck', '001.jpg', '2019-11-25 13:18:46', '2019-11-25 13:18:46'),
(2, '彎的音樂', '桃園市平鎮區太平西路99巷15號', '夏淑貞', '0963134692', '0298338361', 'test02@gmail.com', 'm0002test', 'm0002fuck', '002.jpg', '2019-11-26 13:18:46', '2019-11-25 13:18:47'),
(3, '角頭音樂', '屏東縣長治鄉德和路77號', '陸奕怡', '0930016499', '0298338350', 'test03@gmail.com', 'm0003test', 'm0003fuck', '003.jpg', '2019-11-27 13:18:46', '2019-11-25 13:18:48'),
(4, '後台音樂', '桃園市平鎮區太平西路99巷22號', '沈玉梅', '0930016490', '0298338369', 'test04@gmail.com', 'm0004test', 'm0004fuck', '004.jpg', '2019-11-28 13:18:46', '2019-11-25 13:18:49'),
(5, '禾廣娛樂', '桃園市平鎮區太平西路99巷18號', '李淑敏', '0963134690', '0298338346', 'test05@gmail.com', 'm0005test', 'm0005fuck', '005.jpg', '2019-11-29 13:18:46', '2019-11-25 13:18:50'),
(6, '典選音樂', '屏東縣長治鄉德和路75號', '蔡軒諭', '0972314568', '0298338339', 'test06@gmail.com', 'm0006test', 'm0006fuck', '006.jpg', '2019-11-30 13:18:46', '2019-11-25 13:18:51'),
(7, '豐華音樂', '桃園市平鎮區太平西路99巷19號', '林裕寧', '0911163267', '0298338368', 'test07@gmail.com', 'm0007test', 'm0007fuck', '007.jpg', '2019-12-01 13:18:46', '2019-11-25 13:18:52'),
(8, '擎天娛樂', '屏東縣長治鄉德和路82號', '江佳妃', '0963134694', '0298338379', 'test08@gmail.com', 'm0008test', 'm0008fuck', '008.jpg', '2019-12-02 13:18:46', '2019-11-25 13:18:53'),
(9, '亞神音樂', '嘉義縣太保市高鐵西路173號', '張博胤', '0911163269', '0298338340', 'test09@gmail.com', 'm0009test', 'm0009fuck', '009.jpg', '2019-12-03 13:18:46', '2019-11-25 13:18:54'),
(10, '何樂音樂', '屏東縣長治鄉德和路80號', '張佑霖', '0930016501', '0298338356', 'test10@gmail.com', 'm0010test', 'm0010fuck', '010.jpg', '2019-12-04 13:18:46', '2019-11-25 13:18:55'),
(11, '種子音樂', '嘉義縣太保市高鐵西路174號', '盛彥翔', '0963134691', '0298338342', 'test11@gmail.com', 'm0011test', 'm0011fuck', '011.jpg', '2019-12-05 13:18:46', '2019-11-25 13:18:56'),
(12, '山葉音樂', '桃園市平鎮區太平西路99巷13號', '彭俊憲', '0930016503', '0298338351', 'test12@gmail.com', 'm0012test', 'm0012fuck', '012.jpg', '2019-12-06 13:18:46', '2019-11-25 13:18:57'),
(13, '相信音樂', '台北市大安區信義路四段149-2號', '郎士哲', '0911163264', '0298338378', 'test13@gmail.com', 'm0013test', 'm0013fuck', '013.jpg', '2019-12-07 13:18:46', '2019-11-25 13:18:58'),
(14, '杰威爾音樂', '台北市大安區信義路四段149-12號', '黃玄豐', '0911163265', '0298338385', 'test14@gmail.com', 'm0014test', 'm0014fuck', '014.jpg', '2019-12-08 13:18:46', '2019-11-25 13:18:59'),
(15, '寰亞音樂', '彰化縣彰化市崙平南路126號', '余柔喬', '0911163278', '0298338359', 'test15@gmail.com', 'm0015test', 'm0015fuck', '015.jpg', '2019-12-09 13:18:46', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `NewsID` int(255) NOT NULL,
  `NewsCategory` varchar(255) NOT NULL,
  `NewsTitle` varchar(255) NOT NULL,
  `NewsDate` date NOT NULL,
  `NewsDateTitle` varchar(255) NOT NULL,
  `NewsAddress` varchar(500) NOT NULL,
  `NewsImg` varchar(1000) NOT NULL,
  `NewsLink` varchar(1000) NOT NULL,
  `NewsContent` varchar(3000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='News資料表';

--
-- 傾印資料表的資料 `news`
--

INSERT INTO `news` (`NewsID`, `NewsCategory`, `NewsTitle`, `NewsDate`, `NewsDateTitle`, `NewsAddress`, `NewsImg`, `NewsLink`, `NewsContent`) VALUES
(1, '活動', '古典管絃樂團2020夏季音樂會', '2020-07-05', '109年7月5號 (日) 14:30', '臺中市中山堂', 'news_a001.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0CKGT93', '古典管絃樂團創立於1998年，創辦人兼藝術總監為小提琴家曾慶然先生(前國立臺灣交響樂團首席)，樂團目標在於培養台灣音樂表演、創作之教育專業人才為主要目標，讓這些年輕的音樂家們具有音樂藝術專業技術及專業知能，多年來我們在台北國家音樂廳、台中中興堂、中山堂等專業場地表演已超過百餘場次，目前古典管絃樂團已經是台灣青少年樂團中最具代表性且最大樂團之一。\n\n本次音樂會的內容包括:優美的羅西尼 : 絃樂奏鳴曲及葛利格 : 民歌組曲，藉由團員輕巧的雙手將輕快美妙的音符，傳遞四方。另外由八位團員聯合演出演出作曲家韋瓦第四支小提琴協奏曲，韋瓦第是巴洛克時期器樂作曲技巧之寶，欣賞年輕團員的演出，將會留下深刻而美好的迴響。\n\n壓軸節目是，邀請知小提琴家吳庭毓及曾慶然聯袂演出維瓦第: 四季小提琴協奏曲，吳庭毓是現任國家交響樂團首席，曾慶然是前國立台灣交響樂團首席與國內首屈一指的音樂家合作演出，更能讓中部地區的廣大音樂愛好者，無距離的體會音樂之美，並能感受到一場細緻而磅礡的古典盛宴。\n\n演出曲目\n\n維瓦第：四季小提琴協奏曲\n　　　　小提琴：吳庭毓-春、夏\n　　　　小提琴：曾慶然-秋、冬\n\n維瓦第：四支小提琴協奏曲\n\n羅西尼：絃樂奏鳴曲\n\n葛利格：民歌組曲'),
(2, '活動', '2020新竹縣東興國小第四屆擊樂音樂會', '2020-07-08', '109年7月8號 (三) 19:30', '新竹縣政府文化局演藝廳', 'news_a002.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0CP4M3V', '從青澀懵懂　到氣定自信　再到大將風範\n\n這些年　我們手握琴槌　腳踩節奏\n\n共度了精彩的孩提歲月\n\n \n　　新竹縣東興國小打擊樂團成軍邁入第六年，團員從低年級打練習板、數節奏開始，走入擊樂的世界，到高年級時手握四隻琴槌、腳踩爵士大鼓，練就了十八般武藝和扎實的打擊技巧。背著琴槌袋上學是我們的日常，默契在經年累月的合奏中培養到極致；目光交會、點頭聳肩，是樂曲的點綴；solo也好、陪襯也罷，只要全員站在舞台上，就是動人的畫面。\n\n　　「我們是這樣敲敲打打地長大」，從無敵鐵金剛到大黃蜂，從兒童話劇到百老匯音樂劇，從經典曲目到自創曲，我們大膽嘗試、勤奮苦練，轉眼間已長大成為獨領風騷的樂手。這些年，我們不僅敲敲打打地長大，也在一場場音樂會中茁壯；每年夏季的音樂會，是我們擦亮招牌的時候，東興擊樂不畏外頭風雨，使盡渾身解數，挑戰嶄新風貌。連續第四年，邀請舊雨新知闔家共賞，見證東興擊樂如何從稚氣轉變成獨當一面。'),
(3, '活動', '2020馬聿明小提琴獨奏會', '2020-07-11', '109年7月11號 (六) 19:30', '衛武營國家藝術文化中心表演廳', 'news_a003.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0DFGZJ7', '2020 馬聿明小提琴獨奏會 Yu-Ming Ma Violin Recital\r\n\r\n馬聿明，1997年出生於臺灣，從小就展露對藝術的熱愛及天份，先後師事安那多里、張睿洲、Todor Pelev, Ivan Zenaty, Jinjoo Cho, Jan Sloman, Jaime Laredo, 等大師，2015畢業於Idyllwild Arts Academy音樂系，2019年取得Cleveland Institute of Music學士學位，目前獲得全額獎學金，於美國Rice Univirsity攻讀研究所，與Paul Kantor教授學習，欲藉由舉辦個人獨奏會，傳頌內心深層的感動，與聽眾一同享受音樂世界的美好\r\n\r\n演出曲目\r\nBach - Sonata No. 2 in A minor, BWV1003\r\n巴哈：A小調第二號小提琴奏鳴曲，BWV1003\r\n\r\nPaganini - Caprice No. 10\r\n\r\n帕格尼尼：第十號小提琴隨想曲\r\n\r\nKreisler - Recitativo and Scherzo-Caprice, Op. 6\r\n\r\n克萊斯勒：宣敘調與詼諧曲，作品六\r\n\r\nStrauss - Violin Sonata in E-flat major, Op. 18\r\n\r\n史特勞斯：降E大調小提琴奏鳴曲，作品十八\r\n\r\n★主辦單位保留節目更動權\r\n\r\n演出者簡介\r\n\r\n馬聿明 MA,YU-MING\r\n\r\n   馬聿明，1997年出生於台灣，五歲啟蒙於前高市交首席安那多里老師，先後師事現任國台交首席張睿洲、Todor Pelev, Ivan Zenaty, Jinjoo Cho, Jan Sloman, Jaime Laredo, 等老師，並曾接受胡乃元教授、歐陽慧剛教授、1986年柴可夫斯基大賽小提琴冠軍得主 Movses Pogossian, Henry Gronnier, Aranovskaya, Zvonnikov, Lynn Chang, Augustin Hadelich, Vadim Gluzman, Almita Vamos, 等多位國際大師指導。十四歲赴美國 Idyllwild Arts Academy 深造，擔任IAA orchestra 首席，大學畢業於Cleveland Institute of Music，目前獲得全額獎學金，於美國Rice Univirsity攻讀研究所，與Paul Kantor教授學習，主修小提琴。\r\n\r\n   2009年至2011年擔任由周安瑞老師所指揮高雄市交響樂團附設青少年管弦樂團首席，並分別於2009、2011、2012、2014、2016、2017及2018舉辦個人小提琴獨奏會，2017和國台交首席張睿洲、李百佳和呂孟君老師共同演出室內樂，深受好評。2013年贏得IAA協奏曲比賽，與IAA Orchestra 合作演出，擔任柴可夫斯基小提琴協奏曲獨奏。2014年贏得Inland Velly Young Artist Concerto Competition 第三名。室內樂獲邀於全美廣播電台聯播節目\"From the Top\"，現場採訪演出，2016年獲得New York String Orchestra全額獎學金，2018年再度受邀於紐約卡內基音樂廳演出，並擔任二提首席。2017年參加Aspen音樂節，2019年參加Kneisel室內樂音樂節皆獲得全額獎學金。2017年3月在克里弗蘭音樂學院的協奏曲比賽中贏得honorable mention，於2017年秋季與CIM Orchestra合作演出Chausson Poeme。2018年由簡文彬大師指揮與雄頌管弦樂團合作，擔任獨奏演出德弗札克小提琴協奏曲，2019年與弦樂四重奏 Quartet Avanzare 晉級 Fischoff 室內樂大賽的半決賽，2020年二月受邀至韓國統營國際音樂節擔任guess artist，並與Jinjoo Cho, Mathieu Herzog, Eric Wong, Brannon Cho, 及 Karol Marianowski 同台演出弦樂六重奏。'),
(4, '活動', '《40.續》2020陳怡君單簧管獨奏會', '2020-07-19', '109年7月19號 (日) 14:30', '花蓮郭子究音樂文化館 二館表演廳', 'news_a004.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N07QU9ZU', '《40.續》2020陳怡君單簧管獨奏會 \r\n\r\n享受、探索與追求40人生的精彩，續～ \r\n\r\n年滿40的這一年，經歷許多徬徨、欣喜、振奮之後，少了激情，多了沉穩；少了放任，多了責任，《40.續》獻給在事業、家庭間打拼的女人，讓我們繼續探索生活的美好。這場演出挑選了不同樂派的樂曲，更特別委託新銳作曲家 周宣宏創作《願》一曲，象徵著人在不同階段都會有願望，無論人生如何轉變，內心原始的「願」始終維持著最核心的自己，也支持著自己持續向前。\r\n\r\n \r\n\r\nEnjoy, explore and pursue the wonderful life of 40. SHE (continue~)\r\n\r\n“40-she” meaning to keep exploring the beauty of life, continue to pursue the beauty of music, and encourage many women who are struggling between their careers and families.“Vow” written by Hsuan-Hung Chou, a young talented Taiwanese composer, dedicated to a hard woman, whether you are about to turn forty, or have already experienced the time. In the year of no doubt, we have the beauty of music and continue to enjoy the music !\r\n\r\n \r\n\r\n【演奏者】\r\n\r\n單簧管｜陳怡君（Clarinet｜I-Chun Chen）\r\n\r\n鋼琴｜于汶蕙（Piano｜Wen-Hui Yu）'),
(5, '活動', '黃采羚琴笛獨奏會', '2020-07-24', '109年7月24號 (五) 19:30', '高雄市音樂館', 'news_a005.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0D17AF2', '黃采羚\n\n2001年出生於台灣高雄市。6歲開始學習鋼琴，9歲學習長笛，畢業於加昌國小、新興國中音樂班、高雄中學音樂班，鋼琴師事張雅舜老師、長笛師事林玲如老師。2017年以副修長笛榮獲105學年度全國學生音樂大賽長笛國中A組特優第一名，保送高雄中學音樂班；同年榮獲台灣扶輪教育基金會獎學金。高中時期以鋼琴、長笛為雙主修，並於今年以長笛主修考取國立高雄師範大學音樂系。\n\n \n\n鋼琴現師事 張雅舜老師，曾師事 陳芝羽老師，在學期間曾參加國內外音樂營，並曾接受 范姜毅、郭姿妤、陳必先、陳俐慧、Christian Wilm Müller、Kirill Monorosi ，等教授大師班指導。\n\n長笛現師事 林玲如老師，也曾多次參加國內外音樂營，並曾接受劉慧謹、林薏蕙、黃貞瑛、馬曉珮、吳思芳、林鴻君、陳怡婷、Philippe Bernold 、 Gaby Pas-Van Riet 、 Jim Walker、 Andrea Oliva、Vincent Lucas、Walter Auer、Karl-Heinz Schütz，等教授大師班指導。\n\n \n\n本場音樂會是我人生中第一場的個人獨奏會，感謝一路在身旁為我加油打氣的人，一次帶給觀眾兩種不同樂器的音樂饗宴，作為自己一路學習音樂的一場成果展，也是即將邁入大學前的一場啟程序幕。\n\n \n\n指導老師：鋼琴∕張雅舜老師 . 長笛∕林玲如老師  鋼琴合作：陳柏豪老師\n\n \n\n演出曲目:\n\n \n\nPiano:\n\n \n\nBach:Prelude and Fugue No.9 in E Major, BWV 854   \n\n \n\nMozart: Piano Sonata No. 12 in F Major, K. 332  \n\n \n\nLiszt:Rigoletto Paraphrase\n\n \n\nFlute:\n\n \n\nC.P.E.Bach: Hamburger Sonata No.133in G Major\n\n \n\nH. Dutilleux: Sonatine for Flute and Piano\n\n \n\nF. Borne: Carmen Fantasy for Flute and Piano\n\n \n\n全長90分鐘，含中場休息15分鐘\n'),
(6, '活動', '柯嘉惠、楊妮蓉雙鋼琴音樂會', '2020-07-25', '109年7月25號 (六) 19:30', '大東文化藝術中心 演藝廳', 'news_a006.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0DX46LC', '節目介紹 \r\n\r\n此場音樂會將由兩位鋼琴家柯嘉惠與楊妮蓉攜手演出多首經典雙鋼琴曲作品，並以多元的音樂風格與充滿異國風情的樣貌呈現，曲目類型選自作曲家原創作品、改編為雙鋼琴版本以及主題變奏曲等創作，演出作品包含耳熟能詳古典時期作曲家莫札特唯一的雙鋼琴奏鳴曲創作，浪漫時期有鋼琴詩人之稱蕭邦改編其鋼琴獨奏作品的雙鋼琴版本C大調輪旋曲，以及三位民族音樂代表作曲家雙鋼琴作品，如西班牙作曲家阿爾班尼士《伊貝利亞》組曲中，最為知名且極具西班牙民俗舞蹈特色的《特里亞納》，柴可夫斯基自經典芭蕾舞劇《胡桃鉗》創作中選曲為雙鋼琴而作的《胡桃鉗組曲》，以及盧托斯拉夫斯基以帕格尼尼《第二十四號隨想曲》的主題改編具炫技性的《帕格尼尼雙鋼琴主題變奏曲》。\r\n\r\n此場雙鋼琴音樂會期待能帶給愛樂者聽覺的享受之外，藉由多元的音樂曲目與型態，一探古典作曲家在創作中欲傳達的意涵，進而引領聽眾感受雙鋼琴音樂之美，同時也提升社會大眾藝術文化之素養。\r\n\r\n演出人員\r\n\r\n鋼琴 / 柯嘉惠\r\n\r\n畢業於美國俄亥俄州立大學音樂研究所，鋼琴演奏博士(Doctor of Musical Arts)，國內畢業於國立台灣師範大學音樂系，曾師事李金里，王穎。1992年赴美，主修鋼琴演奏，師事Dr. Harper, Dr. Platt & Mr. Glaser。曾榮獲OSU 校內管弦樂協奏曲首獎，並隨團巡迴演出。 在校期間擔任音樂助教，除教授大學部音樂基礎訓練外，並擔任各項室內樂專屬伴奏。曾在美舉辦多場鋼琴獨奏會、室內樂音樂會。並榮獲兩年Dr. Haddack 獎學金。1998獲選為全美榮譽組織Phi Kappa Phi會員。取得鋼琴演奏博士學位歸國後，相繼於各縣市文化局演藝廳等地舉辦鋼琴獨奏會與室內樂音樂會。也曾於台中，高雄，台東等地講辦多次音樂講座與「亞歷山大放鬆技巧」等。曾任教台南應用科技大學，台東大學，國立屏東教育大學等大專院校。目前專任於高雄市立空中大學，國立中山大學與高雄中學音樂班。\r\n\r\n鋼琴 / 楊妮蓉\r\n\r\n畢業於光仁中學音樂班、國立台灣藝術專科學校音樂科(現國立台灣藝術大學)、東吳大學音樂系、國立中山大學音樂研究所，主修鋼琴演奏，曾師事張靜枝、李文修、施勝譽、蔡奎一、陳俐慧及李美文教授。取得碩士學位後榮獲鋼琴伴奏助教全額獎學金，赴美密西根州立大學(Michigan State University)攻讀音樂藝術博士學位(Doctor of Musical Arts)，主修鋼琴演奏，師事美國范•克萊本鋼琴大賽銀牌得主Mr. PanayisLyras教授。就讀密西根州立大學期間於音樂廳 Music Auditorium舉辦多場鋼琴獨奏會、室內樂音樂會以及解說音樂會，並榮獲全額獎學金擔任專任鋼琴伴奏助教，除器樂伴奏外，亦受聲樂教授Richard Fracker (Area Chair of Vocal Arts at MSU)之邀，獲榮譽獎學金擔任聲樂伴奏。\r\n\r\n取得鋼琴演奏博士學位歸國後，相繼於國家演奏廳、多縣市文化局演藝廳等地舉辦鋼琴獨奏會，受邀參與巴洛克協奏曲與多重室內樂組合之音樂會演出。國內演出外，亦於2009年7月赴捷克布拉格參與室內樂音樂節「Ameropa Chamber Music Festival」，於Kaiserstejn Palace、Theresian Hall、Jan HanusMusic School Concert Hall等多處音樂廳巡迴演奏。除了密集的音樂演出與教學，亦投入進行學術研究，曾擔任國立嘉義大學駐校藝術家以及國立中山大學音樂學系博士後研究人員，相繼受邀於國立中山大學、台北教育大學及台灣藝術大學舉辦之國際學術研討會發表論文，探討議題分別為「消失的傳統–從Clementi到Chopin的開放式踏板」、「巴爾托克鋼琴踏板技巧與教學應用」、「淺談十九世紀具代表性鋼琴演奏家之炫技風格與詮釋探討」。曾任教國立臺灣藝術大學音樂系暨研究所、台北基督書院及多所國高中音樂班，目前任教於高雄醫學大學通識教育中心與國立中山大學音樂學系。\r\n\r\n\r\n全長75分鐘，含中場休息15分鐘');

-- --------------------------------------------------------

--
-- 資料表結構 `news_category`
--

CREATE TABLE `news_category` (
  `NewsCategoryID` varchar(255) NOT NULL,
  `NewsCategoryName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `news_category`
--

INSERT INTO `news_category` (`NewsCategoryID`, `NewsCategoryName`) VALUES
('A', '活動'),
('C', '課程'),
('P', '公告');

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
(16, 10, '影片', 3, 1);

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

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `PId` int(255) NOT NULL COMMENT '商品編號',
  `PName` varchar(255) NOT NULL COMMENT '商品名稱',
  `PImg` varchar(1000) DEFAULT NULL COMMENT '圖片檔名',
  `PVideo` varchar(1000) DEFAULT NULL COMMENT '影片檔名',
  `PPrice` int(255) NOT NULL COMMENT '商品價格',
  `PQty` int(255) DEFAULT NULL COMMENT '商品數量/人數',
  `PTime` varchar(255) DEFAULT NULL COMMENT '影片時數',
  `PIntro` varchar(1000) NOT NULL COMMENT '商品簡介',
  `Pdesciption` varchar(3000) NOT NULL COMMENT '商品描述',
  `PCategoryId` varchar(255) NOT NULL COMMENT '商品類別編號',
  `PInstrumentId` varchar(255) NOT NULL COMMENT '樂器類別編號',
  `PCompanyId` int(255) DEFAULT NULL COMMENT '上架廠商',
  `PClick` int(255) NOT NULL COMMENT '點擊次數',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品資料表';

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`PId`, `PName`, `PImg`, `PVideo`, `PPrice`, `PQty`, `PTime`, `PIntro`, `Pdesciption`, `PCategoryId`, `PInstrumentId`, `PCompanyId`, `PClick`, `created_at`, `update_at`) VALUES
(1, '【七月】鋼琴 - 平日班', 'Product_20200423164200.jpg', NULL, 8000, 2, NULL, '【七月】鋼琴 - 平日班', '【七月】鋼琴 - 平日班', '課程', '鋼琴', NULL, 0, '2020-03-03 14:18:00', '2020-03-04 14:18:00'),
(2, '【八月】鋼琴 - 平日班', 'Product_20200423164201.jpg', NULL, 8000, 2, NULL, '【八月】鋼琴 - 平日班', '【八月】鋼琴 - 平日班', '課程', '鋼琴', NULL, 0, '2020-03-04 14:18:00', '2020-03-05 14:18:00'),
(3, '【九月】鋼琴 - 平日班', 'Product_20200423164202.jpg', NULL, 8000, 2, NULL, '【九月】鋼琴 - 平日班', '【九月】鋼琴 - 平日班', '課程', '鋼琴', NULL, 0, '2020-03-05 14:18:00', '2020-03-06 14:18:00'),
(4, '【十月】鋼琴 - 平日班', 'Product_20200423164203.jpg', NULL, 8000, 2, NULL, '【十月】鋼琴 - 平日班', '【十月】鋼琴 - 平日班', '課程', '鋼琴', NULL, 0, '2020-03-06 14:18:00', '2020-03-07 14:18:00'),
(5, '【十一月】鋼琴 - 平日班', 'Product_20200423164204.jpg', NULL, 8000, 2, NULL, '【十一月】鋼琴 - 平日班', '【十一月】鋼琴 - 平日班', '課程', '鋼琴', NULL, 0, '2020-03-07 14:18:00', '2020-03-08 14:18:00'),
(6, '【十二月】鋼琴 - 平日班', 'Product_20200423164205.jpg', NULL, 8000, 2, NULL, '【十二月】鋼琴 - 平日班', '【十二月】鋼琴 - 平日班', '課程', '鋼琴', NULL, 0, '2020-03-08 14:18:00', '2020-03-09 14:18:00'),
(7, '【七月】電子琴 - 平日班', 'Product_20200423164206.jpg', NULL, 5000, 10, NULL, '【七月】電子琴 - 平日班', '【七月】電子琴 - 平日班', '課程', '電子琴', NULL, 0, '2020-03-09 14:18:00', '2020-03-10 14:18:00'),
(8, '【八月】電子琴 - 平日班', 'Product_20200423164207.jpg', NULL, 5000, 10, NULL, '【八月】電子琴 - 平日班', '【八月】電子琴 - 平日班', '課程', '電子琴', NULL, 0, '2020-03-10 14:18:00', '2020-03-11 14:18:00'),
(9, '【九月】電子琴 - 平日班', 'Product_20200423164208.jpg', NULL, 5000, 10, NULL, '【九月】電子琴 - 平日班', '【九月】電子琴 - 平日班', '課程', '電子琴', NULL, 0, '2020-03-11 14:18:00', '2020-03-12 14:18:00'),
(10, '【十月】電子琴 - 平日班', 'Product_20200423164209.jpg', NULL, 5000, 10, NULL, '【十月】電子琴 - 平日班', '【十月】電子琴 - 平日班', '課程', '電子琴', NULL, 0, '2020-03-12 14:18:00', '2020-03-13 14:18:00'),
(11, '【十一月】電子琴 - 平日班', 'Product_20200423164210.jpg', NULL, 5000, 10, NULL, '【十一月】電子琴 - 平日班', '【十一月】電子琴 - 平日班', '課程', '電子琴', NULL, 0, '2020-03-13 14:18:00', '2020-03-14 14:18:00'),
(12, '【十二月】電子琴 - 平日班', 'Product_20200423164211.jpg', NULL, 5000, 10, NULL, '【十二月】電子琴 - 平日班', '【十二月】電子琴 - 平日班', '課程', '電子琴', NULL, 0, '2020-03-14 14:18:00', '2020-03-15 14:18:00'),
(13, '【七月】小提琴 - 平日班', 'Product_20200423164212.jpg', NULL, 8000, 10, NULL, '【七月】小提琴 - 平日班', '【七月】小提琴 - 平日班', '課程', '小提琴', NULL, 0, '2020-03-15 14:18:00', '2020-03-16 14:18:00'),
(14, '【八月】小提琴 - 平日班', 'Product_20200423164213.jpg', NULL, 8000, 10, NULL, '【八月】小提琴 - 平日班', '【八月】小提琴 - 平日班', '課程', '小提琴', NULL, 0, '2020-03-16 14:18:00', '2020-03-17 14:18:00'),
(15, '【九月】小提琴 - 平日班', 'Product_20200423164214.jpg', NULL, 8000, 10, NULL, '【九月】小提琴 - 平日班', '【九月】小提琴 - 平日班', '課程', '小提琴', NULL, 0, '2020-03-17 14:18:00', '2020-03-18 14:18:00'),
(16, '【十月】小提琴 - 平日班', 'Product_20200423164215.jpg', NULL, 8000, 10, NULL, '【十月】小提琴 - 平日班', '【十月】小提琴 - 平日班', '課程', '小提琴', NULL, 0, '2020-03-18 14:18:00', '2020-03-19 14:18:00'),
(17, '【十一月】小提琴 - 平日班', 'Product_20200423164216.jpg', NULL, 8000, 10, NULL, '【十一月】小提琴 - 平日班', '【十一月】小提琴 - 平日班', '課程', '小提琴', NULL, 0, '2020-03-19 14:18:00', '2020-03-20 14:18:00'),
(18, '【十二月】小提琴 - 平日班', 'Product_20200423164217.jpg', NULL, 8000, 10, NULL, '【十二月】小提琴 - 平日班', '【十二月】小提琴 - 平日班', '課程', '小提琴', NULL, 0, '2020-03-20 14:18:00', '2020-03-21 14:18:00'),
(19, '【七月】中提琴 - 平日班', 'Product_20200423164218.jpg', NULL, 7000, 5, NULL, '【七月】中提琴 - 平日班', '【七月】中提琴 - 平日班', '課程', '中提琴', NULL, 0, '2020-03-21 14:18:00', '2020-03-22 14:18:00'),
(20, '【八月】中提琴 - 平日班', 'Product_20200423164219.jpg', NULL, 7000, 5, NULL, '【八月】中提琴 - 平日班', '【八月】中提琴 - 平日班', '課程', '中提琴', NULL, 0, '2020-03-22 14:18:00', '2020-03-23 14:18:00'),
(21, '【九月】中提琴 - 平日班', 'Product_20200423164220.jpg', NULL, 7000, 5, NULL, '【九月】中提琴 - 平日班', '【九月】中提琴 - 平日班', '課程', '中提琴', NULL, 0, '2020-03-23 14:18:00', '2020-03-24 14:18:00'),
(22, '【十月】中提琴 - 平日班', 'Product_20200423164221.jpg', NULL, 7000, 5, NULL, '【十月】中提琴 - 平日班', '【十月】中提琴 - 平日班', '課程', '中提琴', NULL, 0, '2020-03-24 14:18:00', '2020-03-25 14:18:00'),
(23, '【十一月】中提琴 - 平日班', 'Product_20200423164222.jpg', NULL, 7000, 5, NULL, '【十一月】中提琴 - 平日班', '【十一月】中提琴 - 平日班', '課程', '中提琴', NULL, 0, '2020-03-25 14:18:00', '2020-03-26 14:18:00'),
(24, '【十二月】中提琴 - 平日班', 'Product_20200423164223.jpg', NULL, 7000, 5, NULL, '【十二月】中提琴 - 平日班', '【十二月】中提琴 - 平日班', '課程', '中提琴', NULL, 0, '2020-03-26 14:18:00', '2020-03-27 14:18:00'),
(25, '【七月】薩克斯風 - 平日班', 'Product_20200423164224.jpg', NULL, 8000, 10, NULL, '【七月】薩克斯風 - 平日班', '【七月】薩克斯風 - 平日班', '課程', '薩克斯風', NULL, 0, '2020-03-27 14:18:00', '2020-03-28 14:18:00'),
(26, '【八月】薩克斯風 - 平日班', 'Product_20200423164225.jpg', NULL, 8000, 10, NULL, '【八月】薩克斯風 - 平日班', '【八月】薩克斯風 - 平日班', '課程', '薩克斯風', NULL, 0, '2020-03-28 14:18:00', '2020-03-29 14:18:00'),
(27, '【九月】薩克斯風 - 平日班', 'Product_20200423164226.jpg', NULL, 8000, 10, NULL, '【九月】薩克斯風 - 平日班', '【九月】薩克斯風 - 平日班', '課程', '薩克斯風', NULL, 0, '2020-03-29 14:18:00', '2020-03-30 14:18:00'),
(28, '【十月】薩克斯風 - 平日班', 'Product_20200423164227.jpg', NULL, 8000, 10, NULL, '【十月】薩克斯風 - 平日班', '【十月】薩克斯風 - 平日班', '課程', '薩克斯風', NULL, 0, '2020-03-30 14:18:00', '2020-03-31 14:18:00'),
(29, '【十一月】薩克斯風 - 平日班', 'Product_20200423164228.jpg', NULL, 8000, 10, NULL, '【十一月】薩克斯風 - 平日班', '【十一月】薩克斯風 - 平日班', '課程', '薩克斯風', NULL, 0, '2020-03-31 14:18:00', '2020-04-01 14:18:00'),
(30, '【十二月】薩克斯風 - 平日班', 'Product_20200423164229.jpg', NULL, 8000, 10, NULL, '【十二月】薩克斯風 - 平日班', '【十二月】薩克斯風 - 平日班', '課程', '薩克斯風', NULL, 0, '2020-04-01 14:18:00', '2020-04-02 14:18:00'),
(31, '【七月】長笛 - 平日班', 'Product_20200423164230.jpg', NULL, 8000, 10, NULL, '【七月】長笛 - 平日班', '【七月】長笛 - 平日班', '課程', '長笛', NULL, 0, '2020-04-02 14:18:00', '2020-04-03 14:18:00'),
(32, '【八月】長笛 - 平日班', 'Product_20200423164231.jpg', NULL, 8000, 10, NULL, '【八月】長笛 - 平日班', '【八月】長笛 - 平日班', '課程', '長笛', NULL, 0, '2020-04-03 14:18:00', '2020-04-04 14:18:00'),
(33, '【九月】長笛 - 平日班', 'Product_20200423164232.jpg', NULL, 8000, 10, NULL, '【九月】長笛 - 平日班', '【九月】長笛 - 平日班', '課程', '長笛', NULL, 0, '2020-04-04 14:18:00', '2020-04-05 14:18:00'),
(34, '【十月】長笛 - 平日班', 'Product_20200423164233.jpg', NULL, 8000, 10, NULL, '【十月】長笛 - 平日班', '【十月】長笛 - 平日班', '課程', '長笛', NULL, 0, '2020-04-05 14:18:00', '2020-04-06 14:18:00'),
(35, '【十一月】長笛 - 平日班', 'Product_20200423164234.jpg', NULL, 8000, 10, NULL, '【十一月】長笛 - 平日班', '【十一月】長笛 - 平日班', '課程', '長笛', NULL, 0, '2020-04-06 14:18:00', '2020-04-07 14:18:00'),
(36, '【十二月】長笛 - 平日班', 'Product_20200423164235.jpg', NULL, 8000, 10, NULL, '【十二月】長笛 - 平日班', '【十二月】長笛 - 平日班', '課程', '長笛', NULL, 0, '2020-04-07 14:18:00', '2020-04-08 14:18:00'),
(37, '【七月】烏克莉莉 - 平日班', 'Product_20200423164236.jpg', NULL, 4000, 20, NULL, '【七月】烏克莉莉 - 平日班', '【七月】烏克莉莉 - 平日班', '課程', '烏克麗麗', NULL, 0, '2020-04-08 14:18:00', '2020-04-09 14:18:00'),
(38, '【八月】烏克莉莉 - 平日班', 'Product_20200423164237.jpg', NULL, 4000, 20, NULL, '【八月】烏克莉莉 - 平日班', '【八月】烏克莉莉 - 平日班', '課程', '烏克麗麗', NULL, 0, '2020-04-09 14:18:00', '2020-04-10 14:18:00'),
(39, '【九月】烏克莉莉 - 平日班', 'Product_20200423164238.jpg', NULL, 4000, 20, NULL, '【九月】烏克莉莉 - 平日班', '【九月】烏克莉莉 - 平日班', '課程', '烏克麗麗', NULL, 0, '2020-04-10 14:18:00', '2020-04-11 14:18:00'),
(40, '【十月】烏克莉莉 - 平日班', 'Product_20200423164239.jpg', NULL, 4000, 20, NULL, '【十月】烏克莉莉 - 平日班', '【十月】烏克莉莉 - 平日班', '課程', '烏克麗麗', NULL, 0, '2020-04-11 14:18:00', '2020-04-12 14:18:00'),
(41, '【十一月】烏克莉莉 - 平日班', 'Product_20200423164240.jpg', NULL, 4000, 20, NULL, '【十一月】烏克莉莉 - 平日班', '【十一月】烏克莉莉 - 平日班', '課程', '烏克麗麗', NULL, 0, '2020-04-12 14:18:00', '2020-04-13 14:18:00'),
(42, '【十二月】烏克莉莉 - 平日班', 'Product_20200423164241.jpg', NULL, 4000, 20, NULL, '【十二月】烏克莉莉 - 平日班', '【十二月】烏克莉莉 - 平日班', '課程', '烏克麗麗', NULL, 0, '2020-04-13 14:18:00', '2020-04-14 14:18:00'),
(43, '【七月】爵士鼓 - 平日班', 'Product_20200423164242.jpg', NULL, 4000, 20, NULL, '【七月】爵士鼓 - 平日班', '【七月】爵士鼓 - 平日班', '課程', '爵士鼓', NULL, 0, '2020-04-14 14:18:00', '2020-04-15 14:18:00'),
(44, '【八月】爵士鼓 - 平日班', 'Product_20200423164243.jpg', NULL, 4000, 20, NULL, '【八月】爵士鼓 - 平日班', '【八月】爵士鼓 - 平日班', '課程', '爵士鼓', NULL, 0, '2020-04-15 14:18:00', '2020-04-16 14:18:00'),
(45, '【九月】爵士鼓 - 平日班', 'Product_20200423164244.jpg', NULL, 4000, 20, NULL, '【九月】爵士鼓 - 平日班', '【九月】爵士鼓 - 平日班', '課程', '爵士鼓', NULL, 0, '2020-04-16 14:18:00', '2020-04-17 14:18:00'),
(46, '【十月】爵士鼓 - 平日班', 'Product_20200423164245.jpg', NULL, 4000, 20, NULL, '【十月】爵士鼓 - 平日班', '【十月】爵士鼓 - 平日班', '課程', '爵士鼓', NULL, 0, '2020-04-17 14:18:00', '2020-04-18 14:18:00'),
(47, '【十一月】爵士鼓 - 平日班', 'Product_20200423164246.jpg', NULL, 4000, 20, NULL, '【十一月】爵士鼓 - 平日班', '【十一月】爵士鼓 - 平日班', '課程', '爵士鼓', NULL, 0, '2020-04-18 14:18:00', '2020-04-19 14:18:00'),
(48, '【十二月】爵士鼓 - 平日班', 'Product_20200423164247.jpg', NULL, 4000, 20, NULL, '【十二月】爵士鼓 - 平日班', '【十二月】爵士鼓 - 平日班', '課程', '爵士鼓', NULL, 0, '2020-04-19 14:18:00', '2020-04-20 14:18:00'),
(49, '【七月】鋼琴 - 假日班', 'Product_20200423164248.jpg', NULL, 4000, 2, NULL, '【七月】鋼琴 - 假日班', '【七月】鋼琴 - 假日班', '課程', '鋼琴', NULL, 0, '2020-04-20 14:18:00', '2020-04-21 14:18:00'),
(50, '【八月】鋼琴 - 假日班', 'Product_20200423164249.jpg', NULL, 4000, 2, NULL, '【八月】鋼琴 - 假日班', '【八月】鋼琴 - 假日班', '課程', '鋼琴', NULL, 0, '2020-04-21 14:18:00', '2020-04-22 14:18:00'),
(51, '【九月】鋼琴 - 假日班', 'Product_20200423164250.jpg', NULL, 4000, 2, NULL, '【九月】鋼琴 - 假日班', '【九月】鋼琴 - 假日班', '課程', '鋼琴', NULL, 0, '2020-04-22 14:18:00', '2020-04-23 14:18:00'),
(52, '【十月】鋼琴 - 假日班', 'Product_20200423164251.jpg', NULL, 4000, 2, NULL, '【十月】鋼琴 - 假日班', '【十月】鋼琴 - 假日班', '課程', '鋼琴', NULL, 0, '2020-04-23 14:18:00', '2020-04-24 14:18:00'),
(53, '【十一月】鋼琴 - 假日班', 'Product_20200423164252.jpg', NULL, 4000, 2, NULL, '【十一月】鋼琴 - 假日班', '【十一月】鋼琴 - 假日班', '課程', '鋼琴', NULL, 0, '2020-04-24 14:18:00', '2020-04-25 14:18:00'),
(54, '【十二月】鋼琴 - 假日班', 'Product_20200423164253.jpg', NULL, 4000, 2, NULL, '【十二月】鋼琴 - 假日班', '【十二月】鋼琴 - 假日班', '課程', '鋼琴', NULL, 0, '2020-04-25 14:18:00', '2020-04-26 14:18:00'),
(55, '【七月】電子琴 - 假日班', 'Product_20200423164254.jpg', NULL, 2500, 10, NULL, '【七月】電子琴 - 假日班', '【七月】電子琴 - 假日班', '課程', '電子琴', NULL, 0, '2020-04-26 14:18:00', '2020-04-27 14:18:00'),
(56, '【八月】電子琴 - 假日班', 'Product_20200423164255.jpg', NULL, 2500, 10, NULL, '【八月】電子琴 - 假日班', '【八月】電子琴 - 假日班', '課程', '電子琴', NULL, 0, '2020-04-27 14:18:00', '2020-04-28 14:18:00'),
(57, '【九月】電子琴 - 假日班', 'Product_20200423164256.jpg', NULL, 2500, 10, NULL, '【九月】電子琴 - 假日班', '【九月】電子琴 - 假日班', '課程', '電子琴', NULL, 0, '2020-04-28 14:18:00', '2020-04-29 14:18:00'),
(58, '【十月】電子琴 - 假日班', 'Product_20200423164257.jpg', NULL, 2500, 10, NULL, '【十月】電子琴 - 假日班', '【十月】電子琴 - 假日班', '課程', '電子琴', NULL, 0, '2020-04-29 14:18:00', '2020-04-30 14:18:00'),
(59, '【十一月】電子琴 - 假日班', 'Product_20200423164258.jpg', NULL, 2500, 10, NULL, '【十一月】電子琴 - 假日班', '【十一月】電子琴 - 假日班', '課程', '電子琴', NULL, 0, '2020-04-30 14:18:00', '2020-05-01 14:18:00'),
(60, '【十二月】電子琴 - 假日班', 'Product_20200423164259.jpg', NULL, 2500, 10, NULL, '【十二月】電子琴 - 假日班', '【十二月】電子琴 - 假日班', '課程', '電子琴', NULL, 0, '2020-05-01 14:18:00', '2020-05-02 14:18:00'),
(61, '【七月】小提琴 - 假日班', 'Product_20200423164300.jpg', NULL, 4000, 10, NULL, '【七月】小提琴 - 假日班', '【七月】小提琴 - 假日班', '課程', '小提琴', NULL, 0, '2020-05-02 14:18:00', '2020-05-03 14:18:00'),
(62, '【八月】小提琴 - 假日班', 'Product_20200423164301.jpg', NULL, 4000, 10, NULL, '【八月】小提琴 - 假日班', '【八月】小提琴 - 假日班', '課程', '小提琴', NULL, 0, '2020-05-03 14:18:00', '2020-05-04 14:18:00'),
(63, '【九月】小提琴 - 假日班', 'Product_20200423164302.jpg', NULL, 4000, 10, NULL, '【九月】小提琴 - 假日班', '【九月】小提琴 - 假日班', '課程', '小提琴', NULL, 0, '2020-05-04 14:18:00', '2020-05-05 14:18:00'),
(64, '【十月】小提琴 - 假日班', 'Product_20200423164303.jpg', NULL, 4000, 10, NULL, '【十月】小提琴 - 假日班', '【十月】小提琴 - 假日班', '課程', '小提琴', NULL, 0, '2020-05-05 14:18:00', '2020-05-06 14:18:00'),
(65, '【十一月】小提琴 - 假日班', 'Product_20200423164304.jpg', NULL, 4000, 10, NULL, '【十一月】小提琴 - 假日班', '【十一月】小提琴 - 假日班', '課程', '小提琴', NULL, 0, '2020-05-06 14:18:00', '2020-05-07 14:18:00'),
(66, '【十二月】小提琴 - 假日班', 'Product_20200423164305.jpg', NULL, 4000, 10, NULL, '【十二月】小提琴 - 假日班', '【十二月】小提琴 - 假日班', '課程', '小提琴', NULL, 0, '2020-05-07 14:18:00', '2020-05-08 14:18:00'),
(67, '【七月】中提琴 - 假日班', 'Product_20200423164306.jpg', NULL, 3500, 5, NULL, '【七月】中提琴 - 假日班', '【七月】中提琴 - 假日班', '課程', '中提琴', NULL, 0, '2020-05-08 14:18:00', '2020-05-09 14:18:00'),
(68, '【八月】中提琴 - 假日班', 'Product_20200423164307.jpg', NULL, 3500, 5, NULL, '【八月】中提琴 - 假日班', '【八月】中提琴 - 假日班', '課程', '中提琴', NULL, 0, '2020-05-09 14:18:00', '2020-05-10 14:18:00'),
(69, '【九月】中提琴 - 假日班', 'Product_20200423164308.jpg', NULL, 3500, 5, NULL, '【九月】中提琴 - 假日班', '【九月】中提琴 - 假日班', '課程', '中提琴', NULL, 0, '2020-05-10 14:18:00', '2020-05-11 14:18:00'),
(70, '【十月】中提琴 - 假日班', 'Product_20200423164309.jpg', NULL, 3500, 5, NULL, '【十月】中提琴 - 假日班', '【十月】中提琴 - 假日班', '課程', '中提琴', NULL, 0, '2020-05-11 14:18:00', '2020-05-12 14:18:00'),
(71, '【十一月】中提琴 - 假日班', 'Product_20200423164310.jpg', NULL, 3500, 5, NULL, '【十一月】中提琴 - 假日班', '【十一月】中提琴 - 假日班', '課程', '中提琴', NULL, 0, '2020-05-12 14:18:00', '2020-05-13 14:18:00'),
(72, '【十二月】中提琴 - 假日班', 'Product_20200423164311.jpg', NULL, 3500, 5, NULL, '【十二月】中提琴 - 假日班', '【十二月】中提琴 - 假日班', '課程', '中提琴', NULL, 0, '2020-05-13 14:18:00', '2020-05-14 14:18:00'),
(73, '【七月】薩克斯風 - 假日班', 'Product_20200423164312.jpg', NULL, 4000, 10, NULL, '【七月】薩克斯風 - 假日班', '【七月】薩克斯風 - 假日班', '課程', '薩克斯風', NULL, 0, '2020-05-14 14:18:00', '2020-05-15 14:18:00'),
(74, '【八月】薩克斯風 - 假日班', 'Product_20200423164313.jpg', NULL, 4000, 10, NULL, '【八月】薩克斯風 - 假日班', '【八月】薩克斯風 - 假日班', '課程', '薩克斯風', NULL, 0, '2020-05-15 14:18:00', '2020-05-16 14:18:00'),
(75, '【九月】薩克斯風 - 假日班', 'Product_20200423164314.jpg', NULL, 4000, 10, NULL, '【九月】薩克斯風 - 假日班', '【九月】薩克斯風 - 假日班', '課程', '薩克斯風', NULL, 0, '2020-05-16 14:18:00', '2020-05-17 14:18:00'),
(76, '【十月】薩克斯風 - 假日班', 'Product_20200423164315.jpg', NULL, 4000, 10, NULL, '【十月】薩克斯風 - 假日班', '【十月】薩克斯風 - 假日班', '課程', '薩克斯風', NULL, 0, '2020-05-17 14:18:00', '2020-05-18 14:18:00'),
(77, '【十一月】薩克斯風 - 假日班', 'Product_20200423164316.jpg', NULL, 4000, 10, NULL, '【十一月】薩克斯風 - 假日班', '【十一月】薩克斯風 - 假日班', '課程', '薩克斯風', NULL, 0, '2020-05-18 14:18:00', '2020-05-19 14:18:00'),
(78, '【十二月】薩克斯風 - 假日班', 'Product_20200423164317.jpg', NULL, 4000, 10, NULL, '【十二月】薩克斯風 - 假日班', '【十二月】薩克斯風 - 假日班', '課程', '薩克斯風', NULL, 0, '2020-05-19 14:18:00', '2020-05-20 14:18:00'),
(79, '【七月】長笛 - 假日班', 'Product_20200423164318.jpg', NULL, 4000, 10, NULL, '【七月】長笛 - 假日班', '【七月】長笛 - 假日班', '課程', '長笛', NULL, 0, '2020-05-20 14:18:00', '2020-05-21 14:18:00'),
(80, '【八月】長笛 - 假日班', 'Product_20200423164314.jpg', NULL, 4000, 10, NULL, '【八月】長笛 - 假日班', '【八月】長笛 - 假日班', '課程', '長笛', NULL, 0, '2020-05-21 14:18:00', '2020-05-22 14:18:00'),
(81, '【九月】長笛 - 假日班', 'Product_20200423164315.jpg', NULL, 4000, 10, NULL, '【九月】長笛 - 假日班', '【九月】長笛 - 假日班', '課程', '長笛', NULL, 0, '2020-05-22 14:18:00', '2020-05-23 14:18:00'),
(82, '【十月】長笛 - 假日班', 'Product_20200423164316.jpg', NULL, 4000, 10, NULL, '【十月】長笛 - 假日班', '【十月】長笛 - 假日班', '課程', '長笛', NULL, 0, '2020-05-23 14:18:00', '2020-05-24 14:18:00'),
(83, '【十一月】長笛 - 假日班', 'Product_20200423164317.jpg', NULL, 4000, 10, NULL, '【十一月】長笛 - 假日班', '【十一月】長笛 - 假日班', '課程', '長笛', NULL, 0, '2020-05-24 14:18:00', '2020-05-25 14:18:00'),
(84, '【十二月】長笛 - 假日班', 'Product_20200423164318.jpg', NULL, 4000, 10, NULL, '【十二月】長笛 - 假日班', '【十二月】長笛 - 假日班', '課程', '長笛', NULL, 0, '2020-05-25 14:18:00', '2020-05-26 14:18:00'),
(85, '【七月】烏克莉莉 - 假日班', 'Product_20200423164319.jpg', NULL, 2000, 20, NULL, '【七月】烏克莉莉 - 假日班', '【七月】烏克莉莉 - 假日班', '課程', '烏克麗麗', NULL, 0, '2020-05-26 14:18:00', '2020-05-27 14:18:00'),
(86, '【八月】烏克莉莉 - 假日班', 'Product_20200423164320.jpg', NULL, 2000, 20, NULL, '【八月】烏克莉莉 - 假日班', '【八月】烏克莉莉 - 假日班', '課程', '烏克麗麗', NULL, 0, '2020-05-27 14:18:00', '2020-05-28 14:18:00'),
(87, '【九月】烏克莉莉 - 假日班', 'Product_20200423164321.jpg', NULL, 2000, 20, NULL, '【九月】烏克莉莉 - 假日班', '【九月】烏克莉莉 - 假日班', '課程', '烏克麗麗', NULL, 0, '2020-05-28 14:18:00', '2020-05-29 14:18:00'),
(88, '【十月】烏克莉莉 - 假日班', 'Product_20200423164322.jpg', NULL, 2000, 20, NULL, '【十月】烏克莉莉 - 假日班', '【十月】烏克莉莉 - 假日班', '課程', '烏克麗麗', NULL, 0, '2020-05-29 14:18:00', '2020-05-30 14:18:00'),
(89, '【十一月】烏克莉莉 - 假日班', 'Product_20200423164323.jpg', NULL, 2000, 20, NULL, '【十一月】烏克莉莉 - 假日班', '【十一月】烏克莉莉 - 假日班', '課程', '烏克麗麗', NULL, 0, '2020-05-30 14:18:00', '2020-05-31 14:18:00'),
(90, '【十二月】烏克莉莉 - 假日班', 'Product_20200423164324.jpg', NULL, 2000, 20, NULL, '【十二月】烏克莉莉 - 假日班', '【十二月】烏克莉莉 - 假日班', '課程', '烏克麗麗', NULL, 0, '2020-05-31 14:18:00', '2020-06-01 14:18:00'),
(91, '【七月】爵士鼓 - 假日班', 'Product_20200423164325.jpg', NULL, 2000, 20, NULL, '【七月】爵士鼓 - 假日班', '【七月】爵士鼓 - 假日班', '課程', '爵士鼓', NULL, 0, '2020-06-01 14:18:00', '2020-06-02 14:18:00'),
(92, '【八月】爵士鼓 - 假日班', 'Product_20200423164326.jpg', NULL, 2000, 20, NULL, '【八月】爵士鼓 - 假日班', '【八月】爵士鼓 - 假日班', '課程', '爵士鼓', NULL, 0, '2020-06-02 14:18:00', '2020-06-03 14:18:00'),
(93, '【九月】爵士鼓 - 假日班', 'Product_20200423164327.jpg', NULL, 2000, 20, NULL, '【九月】爵士鼓 - 假日班', '【九月】爵士鼓 - 假日班', '課程', '爵士鼓', NULL, 0, '2020-06-03 14:18:00', '2020-06-04 14:18:00'),
(94, '【十月】爵士鼓 - 假日班', 'Product_20200423164328.jpg', NULL, 2000, 20, NULL, '【十月】爵士鼓 - 假日班', '【十月】爵士鼓 - 假日班', '課程', '爵士鼓', NULL, 0, '2020-06-04 14:18:00', '2020-06-05 14:18:00'),
(95, '【十一月】爵士鼓 - 假日班', 'Product_20200423164329.jpg', NULL, 2000, 20, NULL, '【十一月】爵士鼓 - 假日班', '【十一月】爵士鼓 - 假日班', '課程', '爵士鼓', NULL, 0, '2020-06-05 14:18:00', '2020-06-06 14:18:00'),
(96, '【十二月】爵士鼓 - 假日班', 'Product_20200423164330.jpg', NULL, 2000, 20, NULL, '【十二月】爵士鼓 - 假日班', '【十二月】爵士鼓 - 假日班', '課程', '爵士鼓', NULL, 0, '2020-06-06 14:18:00', '2020-06-07 14:18:00'),
(97, '【10分鐘鋼琴教室】初學者的迷思-01', 'Product_20200423164331.jpg', 'Product_20200622202222.mp4', 100, NULL, '10min', '【10分鐘鋼琴教室】初學者的迷思-01', '【10分鐘鋼琴教室】初學者的迷思-01', '影片', '鋼琴', 10, 0, '2020-06-07 14:18:00', '2020-06-08 14:18:00'),
(98, '【10分鐘鋼琴教室】初學者的迷思-02', 'Product_20200423164332.jpg', 'Product_20200622202322.mp4', 100, NULL, '10min', '【10分鐘鋼琴教室】初學者的迷思-02', '【10分鐘鋼琴教室】初學者的迷思-02', '影片', '鋼琴', 10, 0, '2020-06-08 14:18:00', '2020-06-09 14:18:00'),
(99, '【10分鐘鋼琴教室】初學者的迷思-03', 'Product_20200423164333.jpg', 'Product_20200622202422.mp4', 100, NULL, '10min', '【10分鐘鋼琴教室】初學者的迷思-03', '【10分鐘鋼琴教室】初學者的迷思-03', '影片', '鋼琴', 10, 0, '2020-06-09 14:18:00', '2020-06-10 14:18:00'),
(100, '【10分鐘鋼琴教室】初學者的迷思-04', 'Product_20200423164334.jpg', 'Product_20200622202522.mp4', 100, NULL, '10min', '【10分鐘鋼琴教室】初學者的迷思-04', '【10分鐘鋼琴教室】初學者的迷思-04', '影片', '鋼琴', 10, 0, '2020-06-10 14:18:00', '2020-06-11 14:18:00'),
(101, '【10分鐘鋼琴教室】初學者的迷思-05', 'Product_20200423164335.jpg', 'Product_20200622202622.mp4', 100, NULL, '11min', '【10分鐘鋼琴教室】初學者的迷思-05', '【10分鐘鋼琴教室】初學者的迷思-05', '影片', '鋼琴', 10, 0, '2020-06-11 14:18:00', '2020-06-12 14:18:00'),
(102, '【10分鐘鋼琴教室】初學者的迷思-06', 'Product_20200423164336.jpg', 'Product_20200622202722.mp4', 100, NULL, '12min', '【10分鐘鋼琴教室】初學者的迷思-06', '【10分鐘鋼琴教室】初學者的迷思-06', '影片', '鋼琴', 10, 0, '2020-06-12 14:18:00', '2020-06-13 14:18:00'),
(103, '【烏克莉莉彈奏教學】小星星', 'Product_20200423164337.jpg', 'Product_20200622202822.mp4', 150, NULL, '15min', '【烏克莉莉彈奏教學】小星星', '【烏克莉莉彈奏教學】小星星', '影片', '烏克麗麗', 8, 0, '2020-06-13 14:18:00', '2020-06-14 14:18:00'),
(104, '【烏克莉莉彈奏教學】小幸運', 'Product_20200423164338.jpg', 'Product_20200622202922.mp4', 200, NULL, '22min', '【烏克莉莉彈奏教學】小幸運', '【烏克莉莉彈奏教學】小幸運', '影片', '烏克麗麗', 8, 0, '2020-06-14 14:18:00', '2020-06-15 14:18:00'),
(105, '【烏克莉莉彈奏教學】小情歌', 'Product_20200423164339.jpg', 'Product_20200622203022.mp4', 200, NULL, '25min', '【烏克莉莉彈奏教學】小情歌', '【烏克莉莉彈奏教學】小情歌', '影片', '烏克麗麗', 8, 0, '2020-06-15 14:18:00', '2020-06-16 14:18:00'),
(106, '【烏克莉莉彈奏教學】小蘋果', 'Product_20200423164340.jpg', 'Product_20200622203122.mp4', 180, NULL, '22min', '【烏克莉莉彈奏教學】小蘋果', '【烏克莉莉彈奏教學】小蘋果', '影片', '烏克麗麗', 8, 0, '2020-06-16 14:18:00', '2020-06-17 14:18:00'),
(107, '【美美老師長笛小學堂】第一課', 'Product_20200423164341.jpg', 'Product_20200622203222.mp4', 1000, NULL, '52min', '【美美老師長笛小學堂】第一課', '【美美老師長笛小學堂】第一課', '影片', '長笛', 1, 0, '2020-06-17 14:18:00', '2020-06-18 14:18:00'),
(108, '【美美老師長笛小學堂】第二課', 'Product_20200423164342.jpg', 'Product_20200622203322.mp4', 1000, NULL, '55min', '【美美老師長笛小學堂】第二課', '【美美老師長笛小學堂】第二課', '影片', '長笛', 1, 0, '2020-06-18 14:18:00', '2020-06-19 14:18:00'),
(109, '【美美老師長笛小學堂】第三課', 'Product_20200423164343.jpg', 'Product_20200622203422.mp4', 1000, NULL, '57min', '【美美老師長笛小學堂】第三課', '【美美老師長笛小學堂】第三課', '影片', '長笛', 1, 0, '2020-06-19 14:18:00', '2020-06-20 14:18:00'),
(110, '【美美老師長笛小學堂】第四課', 'Product_20200423164344.jpg', 'Product_20200622203522.mp4', 1000, NULL, '55min', '【美美老師長笛小學堂】第四課', '【美美老師長笛小學堂】第四課', '影片', '長笛', 1, 0, '2020-06-20 14:18:00', '2020-06-21 14:18:00'),
(111, '【美美老師長笛小學堂】第五課', 'Product_20200423164345.jpg', 'Product_20200622203622.mp4', 1000, NULL, '56min', '【美美老師長笛小學堂】第五課', '【美美老師長笛小學堂】第五課', '影片', '長笛', 1, 0, '2020-06-21 14:18:00', '2020-06-22 14:18:00'),
(112, '【美美老師長笛小學堂】第六課', 'Product_20200423164346.jpg', 'Product_20200622237222.mp4', 1000, NULL, '62min', '【美美老師長笛小學堂】第六課', '【美美老師長笛小學堂】第六課', '影片', '長笛', 1, 0, '2020-06-22 14:18:00', '2020-06-23 14:18:00'),
(113, '【美美老師長笛小學堂】第七課', 'Product_20200423164347.jpg', 'Product_20200622203822.mp4', 1000, NULL, '62min', '【美美老師長笛小學堂】第七課', '【美美老師長笛小學堂】第七課', '影片', '長笛', 1, 0, '2020-06-23 14:18:00', '2020-06-24 14:18:00'),
(114, '【薩克斯風】01', 'Product_20200423164348.jpg', 'Product_20200622203922.mp4', 1000, NULL, '65min', '【薩克斯風】01', '【薩克斯風】01', '影片', '薩克斯風', 22, 0, '2020-06-24 14:18:00', '2020-06-25 14:18:00'),
(115, '【薩克斯風】02', 'Product_20200423164349.jpg', 'Product_20200622204022.mp4', 1000, NULL, '62min', '【薩克斯風】02', '【薩克斯風】02', '影片', '薩克斯風', 22, 0, '2020-06-25 14:18:00', '2020-06-26 14:18:00'),
(116, '【薩克斯風】03', 'Product_20200423164350.jpg', 'Product_20200622204122.mp4', 1000, NULL, '66min', '【薩克斯風】03', '【薩克斯風】03', '影片', '薩克斯風', 22, 0, '2020-06-26 14:18:00', '2020-06-27 14:18:00'),
(117, '【薩克斯風】04', 'Product_20200423164351.jpg', 'Product_20200622204222.mp4', 1000, NULL, '62min', '【薩克斯風】04', '【薩克斯風】04', '影片', '薩克斯風', 22, 0, '2020-06-27 14:18:00', '2020-06-28 14:18:00'),
(118, '【薩克斯風】05', 'Product_20200423164352.jpg', 'Product_20200622204322.mp4', 1000, NULL, '64min', '【薩克斯風】05', '【薩克斯風】05', '影片', '薩克斯風', 22, 0, '2020-06-28 14:18:00', '2020-06-29 14:18:00'),
(119, '【薩克斯風】06', 'Product_20200423164353.jpg', 'Product_20200622204422.mp4', 1000, NULL, '65min', '【薩克斯風】06', '【薩克斯風】06', '影片', '薩克斯風', 22, 0, '2020-06-29 14:18:00', '2020-06-30 14:18:00'),
(120, '【爵士鼓教學】01', 'Product_20200423164354.jpg', 'Product_20200622204522.mp4', 500, NULL, '32min', '【爵士鼓教學】01', '【爵士鼓教學】01', '影片', '爵士鼓', 17, 0, '2020-06-30 14:18:00', '2020-07-01 14:18:00'),
(121, '【爵士鼓教學】02', 'Product_20200423164355.jpg', 'Product_20200622204622.mp4', 500, NULL, '35min', '【爵士鼓教學】02', '【爵士鼓教學】02', '影片', '爵士鼓', 17, 0, '2020-07-01 14:18:00', '2020-07-02 14:18:00'),
(122, '【爵士鼓教學】03', 'Product_20200423164356.jpg', 'Product_20200622204722.mp4', 500, NULL, '34min', '【爵士鼓教學】03', '【爵士鼓教學】03', '影片', '爵士鼓', 17, 0, '2020-07-02 14:18:00', '2020-07-03 14:18:00'),
(123, '【爵士鼓教學】04', 'Product_20200423164357.jpg', 'Product_20200622204822.mp4', 500, NULL, '30min', '【爵士鼓教學】04', '【爵士鼓教學】04', '影片', '爵士鼓', 17, 0, '2020-07-03 14:18:00', '2020-07-04 14:18:00'),
(124, '電子琴基礎教學-01', 'Product_20200423164358.jpg', 'Product_20200622204922.mp4', 550, NULL, '25min', '電子琴基礎教學-01', '電子琴基礎教學-01', '影片', '電子琴', 23, 0, '2020-07-04 14:18:00', '2020-07-05 14:18:00'),
(125, '電子琴基礎教學-02', 'Product_20200423164359.jpg', 'Product_20200622205022.mp4', 550, NULL, '30min', '電子琴基礎教學-02', '電子琴基礎教學-02', '影片', '電子琴', 23, 0, '2020-07-05 14:18:00', '2020-07-06 14:18:00'),
(126, '電子琴基礎教學-03', 'Product_20200423164400.jpg', 'Product_20200622205122.mp4', 550, NULL, '35min', '電子琴基礎教學-03', '電子琴基礎教學-03', '影片', '電子琴', 23, 0, '2020-07-06 14:18:00', '2020-07-07 14:18:00'),
(127, '電子琴中級教學-01', 'Product_20200423164401.jpg', 'Product_20200622205222.mp4', 550, NULL, '34min', '電子琴中級教學-01', '電子琴中級教學-01', '影片', '電子琴', 23, 0, '2020-07-07 14:18:00', '2020-07-08 14:18:00'),
(128, '電子琴中級教學-02', 'Product_20200423164402.jpg', 'Product_20200622205322.mp4', 550, NULL, '25min', '電子琴中級教學-02', '電子琴中級教學-02', '影片', '電子琴', 23, 0, '2020-07-08 14:18:00', '2020-07-09 14:18:00'),
(129, '電子琴中級教學-03', 'Product_20200423164403.jpg', 'Product_20200622205422.mp4', 550, NULL, '32min', '電子琴中級教學-03', '電子琴中級教學-03', '影片', '電子琴', 23, 0, '2020-07-09 14:18:00', '2020-07-10 14:18:00'),
(130, '【提琴教室】小提琴-01', 'Product_20200423164404.jpg', 'Product_20200622205522.mp4', 1200, NULL, '57min', '【提琴教室】小提琴-01', '【提琴教室】小提琴-01', '影片', '小提琴', 15, 0, '2020-07-10 14:18:00', '2020-07-11 14:18:00'),
(131, '【提琴教室】小提琴-02', 'Product_20200423164405.jpg', 'Product_20200622205622.mp4', 1200, NULL, '55min', '【提琴教室】小提琴-02', '【提琴教室】小提琴-02', '影片', '小提琴', 15, 0, '2020-07-11 14:18:00', '2020-07-12 14:18:00'),
(132, '【提琴教室】小提琴-03', 'Product_20200423164406.jpg', 'Product_20200622205722.mp4', 1200, NULL, '56min', '【提琴教室】小提琴-03', '【提琴教室】小提琴-03', '影片', '小提琴', 15, 0, '2020-07-12 14:18:00', '2020-07-13 14:18:00'),
(133, '【提琴教室】小提琴-04', 'Product_20200423164407.jpg', 'Product_20200622205822.mp4', 1200, NULL, '62min', '【提琴教室】小提琴-04', '【提琴教室】小提琴-04', '影片', '小提琴', 15, 0, '2020-07-13 14:18:00', '2020-07-14 14:18:00'),
(134, '【提琴教室】小提琴-05', 'Product_20200423164408.jpg', 'Product_20200622205922.mp4', 1200, NULL, '65min', '【提琴教室】小提琴-05', '【提琴教室】小提琴-05', '影片', '小提琴', 15, 0, '2020-07-14 14:18:00', '2020-07-15 14:18:00'),
(135, '【提琴教室】小提琴-06', 'Product_20200423164409.jpg', 'Product_20200622212222.mp4', 1200, NULL, '62min', '【提琴教室】小提琴-06', '【提琴教室】小提琴-06', '影片', '小提琴', 15, 0, '2020-07-15 14:18:00', '2020-07-16 14:18:00'),
(136, '【提琴教室】小提琴-07', 'Product_20200423164410.jpg', 'Product_20200622212322.mp4', 1200, NULL, '66min', '【提琴教室】小提琴-07', '【提琴教室】小提琴-07', '影片', '小提琴', 15, 0, '2020-07-16 14:18:00', '2020-07-17 14:18:00'),
(137, '【提琴教室】小提琴-08', 'Product_20200423164411.jpg', 'Product_20200622212422.mp4', 1200, NULL, '57min', '【提琴教室】小提琴-08', '【提琴教室】小提琴-08', '影片', '小提琴', 15, 0, '2020-07-17 14:18:00', '2020-07-18 14:18:00'),
(138, '【提琴教室】中提琴-01', 'Product_20200423164412.jpg', 'Product_20200622212522.mp4', 1200, NULL, '55min', '【提琴教室】中提琴-01', '【提琴教室】中提琴-01', '影片', '中提琴', 15, 0, '2020-07-18 14:18:00', '2020-07-19 14:18:00'),
(139, '【提琴教室】中提琴-02', 'Product_20200423164413.jpg', 'Product_20200622212622.mp4', 1200, NULL, '56min', '【提琴教室】中提琴-02', '【提琴教室】中提琴-02', '影片', '中提琴', 15, 0, '2020-07-19 14:18:00', '2020-07-20 14:18:00'),
(140, '【提琴教室】中提琴-03', 'Product_20200423164414.jpg', 'Product_20200622212722.mp4', 1200, NULL, '62min', '【提琴教室】中提琴-03', '【提琴教室】中提琴-03', '影片', '中提琴', 15, 0, '2020-07-20 14:18:00', '2020-07-21 14:18:00'),
(141, '【提琴教室】中提琴-04', 'Product_20200423164415.jpg', 'Product_20200622212822.mp4', 1200, NULL, '66min', '【提琴教室】中提琴-04', '【提琴教室】中提琴-04', '影片', '中提琴', 15, 0, '2020-07-21 14:18:00', '2020-07-22 14:18:00'),
(142, '【提琴教室】中提琴-05', 'Product_20200423164416.jpg', 'Product_20200622212922.mp4', 1200, NULL, '65min', '【提琴教室】中提琴-05', '【提琴教室】中提琴-05', '影片', '中提琴', 15, 0, '2020-07-22 14:18:00', '2020-07-23 14:18:00'),
(143, '【提琴教室】中提琴-06', 'Product_20200423164417.jpg', 'Product_20200622213022.mp4', 1200, NULL, '62min', '【提琴教室】中提琴-06', '【提琴教室】中提琴-06', '影片', '中提琴', 15, 0, '2020-07-23 14:18:00', '2020-07-24 14:18:00'),
(144, '【提琴教室】中提琴-07', 'Product_20200423164418.jpg', 'Product_20200622213122.mp4', 1200, NULL, '56min', '【提琴教室】中提琴-07', '【提琴教室】中提琴-07', '影片', '中提琴', 15, 0, '2020-07-24 14:18:00', '2020-07-25 14:18:00'),
(145, '【提琴教室】中提琴-08', 'Product_20200423164419.jpg', 'Product_20200622213222.mp4', 1200, NULL, '62min', '【提琴教室】中提琴-08', '【提琴教室】中提琴-08', '影片', '中提琴', 15, 0, '2020-07-25 14:18:00', '2020-07-26 14:18:00'),
(146, 'YAMAHA RYDEEN 傳統爵士鼓組 黑色款', 'Product_20200423164420.jpg', NULL, 27000, 5, NULL, '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '樂器', '爵士鼓', 50, 0, '2020-07-26 14:18:00', '2020-07-27 14:18:00'),
(147, 'YAMAHA RYDEEN 傳統爵士鼓組 酒紅色款', 'Product_20200423164421.jpg', NULL, 27000, 5, NULL, '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '樂器', '爵士鼓', 50, 0, '2020-07-27 14:18:00', '2020-07-28 14:18:00'),
(148, 'YAMAHA RYDEEN 傳統爵士鼓組 雅痞黃色款', 'Product_20200423164422.jpg', NULL, 27000, 5, NULL, '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '樂器', '爵士鼓', 50, 0, '2020-07-28 14:18:00', '2020-07-29 14:18:00'),
(149, 'YAMAHA RYDEEN 傳統爵士鼓組 絢麗銀色款', 'Product_20200423164423.jpg', NULL, 27000, 5, NULL, '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '樂器', '爵士鼓', 50, 0, '2020-07-29 14:18:00', '2020-07-30 14:18:00'),
(150, 'YAMAHA Stage Custom 爵士鼓組 典雅白色款', 'Product_20200423164424.jpg', NULL, 46000, 5, NULL, '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '樂器', '爵士鼓', 50, 0, '2020-07-30 14:18:00', '2020-07-31 14:18:00'),
(151, 'YAMAHA Stage Custom 爵士鼓組 蜂蜜琥珀色款', 'Product_20200423164425.jpg', NULL, 46000, 5, NULL, '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '樂器', '爵士鼓', 50, 0, '2020-07-31 14:18:00', '2020-08-01 14:18:00'),
(152, 'YAMAHA Stage Custom 爵士鼓組 酒紅木紋色款', 'Product_20200423164426.jpg', NULL, 46000, 5, NULL, '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '樂器', '爵士鼓', 50, 0, '2020-08-01 14:18:00', '2020-08-02 14:18:00'),
(153, 'YAMAHA Stage Custom 爵士鼓組 自然原木色款', 'Product_20200423164427.jpg', NULL, 46000, 5, NULL, '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '樂器', '爵士鼓', 50, 0, '2020-08-02 14:18:00', '2020-08-03 14:18:00'),
(154, 'DIXON 台灣製 兒童爵士鼓 BK黑色', 'Product_20200423164428.jpg', NULL, 14000, 5, NULL, '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '樂器', '爵士鼓', 48, 0, '2020-08-03 14:18:00', '2020-08-04 14:18:00'),
(155, 'DIXON 台灣製 兒童爵士鼓 F22銅刷線', 'Product_20200423164429.jpg', NULL, 14000, 5, NULL, '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '樂器', '爵士鼓', 48, 0, '2020-08-04 14:18:00', '2020-08-05 14:18:00'),
(156, 'DIXON 台灣製 兒童爵士鼓 F25藍刷線', 'Product_20200423164430.jpg', NULL, 14000, 5, NULL, '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '樂器', '爵士鼓', 48, 0, '2020-08-05 14:18:00', '2020-08-06 14:18:00'),
(157, 'DIXON 台灣製 兒童爵士鼓 SL銀色', 'Product_20200423164431.jpg', NULL, 14000, 5, NULL, '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '樂器', '爵士鼓', 48, 0, '2020-08-06 14:18:00', '2020-08-07 14:18:00'),
(158, 'DIXON 台灣製 兒童爵士鼓 WR酒紅', 'Product_20200423164432.jpg', NULL, 14000, 5, NULL, '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '樂器', '爵士鼓', 48, 0, '2020-08-07 14:18:00', '2020-08-08 14:18:00'),
(159, '標準加厚88鍵 鋰電池充電式 手捲電子琴', 'Product_20200423164433.jpg', NULL, 2799, 10, NULL, '超輕便好收納隨時隨地帶著走、可當MIDI鍵盤做電腦編輯、錄音、作詞曲', '超輕便好收納隨時隨地帶著走、可當MIDI鍵盤做電腦編輯、錄音、作詞曲', '樂器', '電子琴', 47, 0, '2020-08-08 14:18:00', '2020-08-09 14:18:00'),
(160, '『YAMAHA NP12』全新機種 61鍵電子琴『黑色款』', 'Product_20200423164434.jpg', NULL, 8500, 7, NULL, 'NP系列是優雅與簡約的絕佳組合、輕薄小巧的鍵盤有著精緻的音色', 'NP系列是優雅與簡約的絕佳組合、輕薄小巧的鍵盤有著精緻的音色', '樂器', '電子琴', 46, 0, '2020-08-09 14:18:00', '2020-08-10 14:18:00'),
(161, '『YAMAHA NP12』全新機種 61鍵電子琴『白色款』', 'Product_20200423164435.jpg', NULL, 8500, 8, NULL, 'NP系列是優雅與簡約的絕佳組合、輕薄小巧的鍵盤有著精緻的音色', 'NP系列是優雅與簡約的絕佳組合、輕薄小巧的鍵盤有著精緻的音色', '樂器', '電子琴', 46, 0, '2020-08-10 14:18:00', '2020-08-11 14:18:00'),
(162, 'YAMAHA PSR-E463 61鍵自動伴奏電子琴', 'Product_20200423164436.jpg', NULL, 13500, 4, NULL, 'PSR-E463以包含758種樂器音色的豐富音樂資料庫為特色，讓您盡情享受各種音樂類型。', 'PSR-E463以包含758種樂器音色的豐富音樂資料庫為特色，讓您盡情享受各種音樂類型。', '樂器', '電子琴', 46, 0, '2020-08-11 14:18:00', '2020-08-12 14:18:00'),
(163, '『YAMAHA 山葉 NP-32』76鍵攜帶式電子琴『黑色款』', 'Product_20200423164437.jpg', NULL, 15000, 4, NULL, '76鍵 標準鍵鍵盤電子琴', '76鍵 標準鍵鍵盤電子琴', '樂器', '電子琴', 46, 0, '2020-08-12 14:18:00', '2020-08-13 14:18:00'),
(164, '台灣JAZZY61鍵數位電子琴，JZ-618', 'Product_20200423164438.jpg', NULL, 3115, 6, NULL, '430種音色/300種節奏', '430種音色/300種節奏', '樂器', '電子琴', 45, 0, '2020-08-13 14:18:00', '2020-08-14 14:18:00'),
(165, 'KAWAI K-400直立式鋼琴', 'Product_20200423164439.jpg', NULL, 50000, 1, NULL, '雙重鉸鏈的摔跤板增添了獨特的吸引力。', '雙重鉸鏈的摔跤板增添了獨特的吸引力。', '樂器', '鋼琴', 44, 0, '2020-08-14 14:18:00', '2020-08-15 14:18:00'),
(166, 'KAWAI K-500直立式鋼琴', 'Product_20200423164440.jpg', NULL, 55000, 2, NULL, 'K-500提供了功率，動態範圍和音調豐富度的罕見組合', 'K-500提供了功率，動態範圍和音調豐富度的罕見組合', '樂器', '鋼琴', 44, 0, '2020-08-15 14:18:00', '2020-08-16 14:18:00'),
(167, 'KAWAI  K-30(SNW)直立式鋼琴', 'Product_20200423164441.jpg', NULL, 60000, 1, NULL, '採用日本原裝打擊系統、音搥、琴弦，外觀歐洲宮庭型', '採用日本原裝打擊系統、音搥、琴弦，外觀歐洲宮庭型', '樂器', '鋼琴', 44, 0, '2020-08-16 14:18:00', '2020-08-17 14:18:00'),
(168, 'KAWAI K-80W(CA)直立式鋼琴', 'Product_20200423164442.jpg', NULL, 60000, 1, NULL, '採用日本原裝打擊系統、音搥、琴弦。G曲線響板設計，響板音孔裝置，定弦裝置。', '採用日本原裝打擊系統、音搥、琴弦。G曲線響板設計，響板音孔裝置，定弦裝置。', '樂器', '鋼琴', 44, 0, '2020-08-17 14:18:00', '2020-08-18 14:18:00'),
(169, 'KAWAI K-80(E)直立式鋼琴', 'Product_20200423164443.jpg', NULL, 60000, 1, NULL, '採用日本原裝打擊系統、音搥、琴弦。G曲線響板設計，響板音孔裝置，定弦裝置。', '採用日本原裝打擊系統、音搥、琴弦。G曲線響板設計，響板音孔裝置，定弦裝置。', '樂器', '鋼琴', 44, 0, '2020-08-18 14:18:00', '2020-08-19 14:18:00'),
(170, 'aNueNue AQUA-002 23 吋烏克麗麗', 'Product_20200423164444.jpg', NULL, 2800, 5, NULL, '獨一無二的設計概念，23吋可愛輕巧的琴身、特殊的琴頭造型與簡約的琴身設計', '獨一無二的設計概念，23吋可愛輕巧的琴身、特殊的琴頭造型與簡約的琴身設計', '樂器', '烏克麗麗', 26, 0, '2020-08-19 14:18:00', '2020-08-20 14:18:00'),
(171, 'aNueNue CK3 26吋相思木烏克麗麗', 'Product_20200423164445.jpg', NULL, 3900, 3, NULL, '相思木除了木紋優雅漂亮之外，聲音溫暖且豐實', '相思木除了木紋優雅漂亮之外，聲音溫暖且豐實', '樂器', '烏克麗麗', 26, 0, '2020-08-20 14:18:00', '2020-08-21 14:18:00'),
(172, 'aNueNue MCM 23吋桃花心木烏克麗麗', 'Product_20200423164446.jpg', NULL, 3600, 2, NULL, '舒適輕巧手感，讓你彈任何曲風都難不倒它平實的價格，高規格的對待', '舒適輕巧手感，讓你彈任何曲風都難不倒它平實的價格，高規格的對待', '樂器', '烏克麗麗', 26, 0, '2020-08-21 14:18:00', '2020-08-22 14:18:00'),
(173, 'aNueNue 900S 21吋桃花心木烏克麗麗', 'Product_20200423164447.jpg', NULL, 5800, 1, NULL, '新一代U900升級面單桃花心木內部結構升級，聲音較響亮飽滿、顆粒扎實', '新一代U900升級面單桃花心木內部結構升級，聲音較響亮飽滿、顆粒扎實', '樂器', '烏克麗麗', 26, 0, '2020-08-22 14:18:00', '2020-08-23 14:18:00'),
(174, '『PUKA 烏克麗麗』PK-DPS 21吋口輪系列 / 小海豚款', 'Product_20200423164448.jpg', NULL, 1980, 5, NULL, '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '樂器', '烏克麗麗', 27, 0, '2020-08-23 14:18:00', '2020-08-24 14:18:00'),
(175, '『PUKA 烏克麗麗』PK-HBC 23吋口輪系列 / 扶桑花款', 'Product_20200423164449.jpg', NULL, 2500, 3, NULL, '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '樂器', '烏克麗麗', 27, 0, '2020-08-24 14:18:00', '2020-08-25 14:18:00'),
(176, '『PUKA 烏克麗麗』PU-PEACE-S 21吋口輪系列 / 和平', 'Product_20200423164450.jpg', NULL, 2100, 2, NULL, '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '樂器', '烏克麗麗', 27, 0, '2020-08-25 14:18:00', '2020-08-26 14:18:00'),
(177, '『PUKA 烏克麗麗』PU-LOVE-S 21吋口輪系列 / 愛心款', 'Product_20200423164451.jpg', NULL, 2100, 2, NULL, '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '樂器', '烏克麗麗', 27, 0, '2020-08-26 14:18:00', '2020-08-27 14:18:00'),
(178, '『PUKA 烏克麗麗』PK-TFC 23吋口輪系列 / 熱帶魚款', 'Product_20200423164452.jpg', NULL, 2500, 1, NULL, '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '樂器', '烏克麗麗', 27, 0, '2020-08-27 14:18:00', '2020-08-28 14:18:00'),
(179, 'Sebrew 希伯萊 MC-1  入門小提琴', 'Product_20200423164453.jpg', NULL, 1600, 10, NULL, ' 入門小提琴', ' 入門小提琴', '樂器', '小提琴', 28, 0, '2020-08-28 14:18:00', '2020-08-29 14:18:00'),
(180, 'Sebrew 希伯萊 MC-2 考級小提琴', 'Product_20200423164454.jpg', NULL, 2280, 8, NULL, '考級小提琴', '考級小提琴', '樂器', '小提琴', 28, 0, '2020-08-29 14:18:00', '2020-08-30 14:18:00'),
(181, 'Jazzy 台灣品牌 小提琴', 'Product_20200423164455.jpg', NULL, 3280, 3, NULL, 'A級雲杉木 ', 'A級雲杉木 ', '樂器', '小提琴', 28, 0, '2020-08-30 14:18:00', '2020-08-31 14:18:00'),
(182, '專業級 Elegant 605 手工虎背紋小提琴', 'Product_20200423164456.jpg', NULL, 18000, 1, NULL, '琴採用優質雲杉實木面板、高級楓木側板、背板有虎背紋，手工漆及手工鑲邊', '琴採用優質雲杉實木面板、高級楓木側板、背板有虎背紋，手工漆及手工鑲邊', '樂器', '小提琴', 29, 0, '2020-08-31 14:18:00', '2020-09-01 14:18:00'),
(183, '★SEKWANG★SVN-400雲杉實木小提琴', 'Product_20200423164457.jpg', NULL, 7000, 2, NULL, '雲衫實木面板、楓木側板及背板、烏木指板烏木配件', '雲衫實木面板、楓木側板及背板、烏木指板烏木配件', '樂器', '小提琴', 29, 0, '2020-09-01 14:18:00', '2020-09-02 14:18:00'),
(184, '德國 Conrad Götz 小提琴 CG-123', 'Product_20200423164458.jpg', NULL, 76500, 1, NULL, '德國GOTZ原廠裝配，使用奧地利Thomastik Dominant 尼龍弦', '德國GOTZ原廠裝配，使用奧地利Thomastik Dominant 尼龍弦', '樂器', '小提琴', 29, 0, '2020-09-02 14:18:00', '2020-09-03 14:18:00'),
(185, 'Abbott SN-300 小提琴', 'Product_20200423164459.jpg', NULL, 26000, 1, NULL, '手工刷漆，高級烏木配件，虎背紋路清晰', '手工刷漆，高級烏木配件，虎背紋路清晰', '樂器', '小提琴', 29, 0, '2020-09-03 14:18:00', '2020-09-04 14:18:00'),
(186, '★嚴選JYC JV-17 亮面虎紋小提琴', 'Product_20200423164500.jpg', NULL, 16500, 2, NULL, '金屬拉弦板', '金屬拉弦板', '樂器', '小提琴', 29, 0, '2020-09-04 14:18:00', '2020-09-05 14:18:00'),
(187, '小提琴 BEAUTE ETERNA小提琴', 'Product_20200423164501.jpg', NULL, 7890, 2, NULL, '楓木實板，鋁合金拉版，棗木配件', '楓木實板，鋁合金拉版，棗木配件', '樂器', '小提琴', 30, 0, '2020-09-05 14:18:00', '2020-09-06 14:18:00'),
(188, 'BEAUTE ETERNA 雲杉木單板 小提琴 FL34', 'Product_20200423164502.jpg', NULL, 9200, 4, NULL, '鋁合金拉版，棗木配件，手工刷漆，復古色小提琴', '鋁合金拉版，棗木配件，手工刷漆，復古色小提琴', '樂器', '小提琴', 30, 0, '2020-09-06 14:18:00', '2020-09-07 14:18:00'),
(189, 'BEAUTE ETERNA小提琴【FD12染黑配件】', 'Product_20200423164503.jpg', NULL, 6590, 3, NULL, '全楓木實板，鋁合金拉版，染黑配件', '全楓木實板，鋁合金拉版，染黑配件', '樂器', '小提琴', 30, 0, '2020-09-07 14:18:00', '2020-09-08 14:18:00'),
(190, 'BEAUTE ETERNA 雲杉木單板 小提琴 FL12', 'Product_20200423164504.jpg', NULL, 9230, 3, NULL, '鋁合金拉版，棗木配件，手工刷漆，復古色小提琴', '鋁合金拉版，棗木配件，手工刷漆，復古色小提琴', '樂器', '小提琴', 30, 0, '2020-09-08 14:18:00', '2020-09-09 14:18:00'),
(191, 'YAMAHA YFL-222 長笛', 'Product_20200423164505.jpg', NULL, 24710, 1, NULL, '音色溫暖有深度，中、高音域集中，易控制，適合第一次使用手工吹頭者', '音色溫暖有深度，中、高音域集中，易控制，適合第一次使用手工吹頭者', '樂器', '長笛', 34, 0, '2020-09-09 14:18:00', '2020-09-10 14:18:00'),
(192, 'YAMAHA YFL-372 長笛', 'Product_20200423164506.jpg', NULL, 54600, 1, NULL, '吹口管是決定音色的重要要素', '吹口管是決定音色的重要要素', '樂器', '長笛', 34, 0, '2020-09-10 14:18:00', '2020-09-11 14:18:00'),
(193, 'YAMAHA YFL-272 長笛', 'Product_20200423164507.jpg', NULL, 41600, 1, NULL, '音色溫暖有深度，中、高音域集中，易控制，適合第一次使用手工吹頭者', '音色溫暖有深度，中、高音域集中，易控制，適合第一次使用手工吹頭者', '樂器', '長笛', 34, 0, '2020-09-11 14:18:00', '2020-09-12 14:18:00'),
(194, '★JYC JV-402A中提琴★雲杉實木頂級音色', 'Product_20200423164508.jpg', NULL, 16400, 10, NULL, '德國SANDNER學生級琴弦', '德國SANDNER學生級琴弦', '樂器', '中提琴', 36, 0, '2020-09-12 14:18:00', '2020-09-13 14:18:00'),
(195, '★JYC JV-404中提琴★嚴選手工清鑲邊漆琴', 'Product_20200423164509.jpg', NULL, 18900, 12, NULL, '德國AUBERT一星琴橋', '德國AUBERT一星琴橋', '樂器', '中提琴', 36, 0, '2020-09-13 14:18:00', '2020-09-14 14:18:00'),
(196, 'YAMAHA 山葉 YTS-62 專業級 次中音薩克斯風 ', 'Product_20200423164510.jpg', NULL, 130500, 2, NULL, '不分音樂界限，不被時代考驗，為樂手們一致熱愛及推崇', '不分音樂界限，不被時代考驗，為樂手們一致熱愛及推崇', '樂器', '薩克斯風', 39, 0, '2020-09-14 14:18:00', '2020-09-15 14:18:00'),
(197, 'Zeus Alto 中音薩克斯風/黑金色　Z-A580BG', 'Product_20200423164511.jpg', NULL, 37570, 5, NULL, '德國原銅 / 台灣製造', '德國原銅 / 台灣製造', '樂器', '薩克斯風', 39, 0, '2020-09-15 14:18:00', '2020-09-16 14:18:00'),
(198, 'JUPITER JTS-500Q 次中音 薩克斯風', 'Product_20200423164512.jpg', NULL, 38350, 4, NULL, '喇叭口與身管可拆換，可調拇指靠座', '喇叭口與身管可拆換，可調拇指靠座', '樂器', '薩克斯風', 39, 0, '2020-09-16 14:18:00', '2020-09-17 14:18:00'),
(199, 'Zeus Alto 中音薩克斯風　Z-A580L', 'Product_20200423164513.jpg', NULL, 35100, 2, NULL, '德國原銅 / 台灣製造', '德國原銅 / 台灣製造', '樂器', '薩克斯風', 39, 0, '2020-09-17 14:18:00', '2020-09-18 14:18:00'),
(200, 'JUPITER JTS-700Q 次中音 薩克斯風', 'Product_20200423164514.jpg', NULL, 46800, 3, NULL, '德國原銅 / 台灣製造', '德國原銅 / 台灣製造', '樂器', '薩克斯風', 39, 0, '2020-09-18 14:18:00', '2020-09-19 14:18:00');

-- --------------------------------------------------------

--
-- 資料表結構 `product_courses`
--

CREATE TABLE `product_courses` (
  `PId` int(255) NOT NULL COMMENT '商品編號',
  `PCategoryId` varchar(10) NOT NULL COMMENT '商品類別ID',
  `PName` varchar(255) NOT NULL COMMENT '商品名稱',
  `PImg` varchar(1000) NOT NULL COMMENT '圖片檔名',
  `PPrice` int(255) NOT NULL COMMENT '商品價格',
  `PQty` int(255) NOT NULL COMMENT '商品數量/人數',
  `PDate` date NOT NULL COMMENT '上課日期',
  `PIntro` varchar(1000) NOT NULL COMMENT '商品簡介',
  `Pdesciption` varchar(1000) NOT NULL COMMENT '商品描述',
  `PInstrumentId` varchar(255) NOT NULL COMMENT '類別編號',
  `PClick` int(30) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='product_courses';

--
-- 傾印資料表的資料 `product_courses`
--

INSERT INTO `product_courses` (`PId`, `PCategoryId`, `PName`, `PImg`, `PPrice`, `PQty`, `PDate`, `PIntro`, `Pdesciption`, `PInstrumentId`, `PClick`, `created_at`, `update_at`) VALUES
(1, '課程', '【七月】鋼琴 - 平日班', 'Product_20200423164200.jpg', 8000, 2, '2020-07-20', '【七月】鋼琴 - 平日班', '【七月】鋼琴 - 平日班', '鋼琴', NULL, '2020-03-03 14:18:00', '2020-03-04 14:18:00'),
(2, '課程', '【八月】鋼琴 - 平日班', 'Product_20200423164201.jpg', 8000, 2, '2020-08-20', '【八月】鋼琴 - 平日班', '【八月】鋼琴 - 平日班', '鋼琴', NULL, '2020-03-04 14:18:00', '2020-03-05 14:18:00'),
(3, '課程', '【九月】鋼琴 - 平日班', 'Product_20200423164202.jpg', 8000, 2, '2020-09-20', '【九月】鋼琴 - 平日班', '【九月】鋼琴 - 平日班', '鋼琴', NULL, '2020-03-05 14:18:00', '2020-03-06 14:18:00'),
(4, '課程', '【十月】鋼琴 - 平日班', 'Product_20200423164203.jpg', 8000, 2, '2020-10-20', '【十月】鋼琴 - 平日班', '【十月】鋼琴 - 平日班', '鋼琴', NULL, '2020-03-06 14:18:00', '2020-03-07 14:18:00'),
(5, '課程', '【十一月】鋼琴 - 平日班', 'Product_20200423164204.jpg', 8000, 2, '2020-11-20', '【十一月】鋼琴 - 平日班', '【十一月】鋼琴 - 平日班', '鋼琴', NULL, '2020-03-07 14:18:00', '2020-03-08 14:18:00'),
(6, '課程', '【十二月】鋼琴 - 平日班', 'Product_20200423164205.jpg', 8000, 2, '2020-12-20', '【十二月】鋼琴 - 平日班', '【十二月】鋼琴 - 平日班', '鋼琴', NULL, '2020-03-08 14:18:00', '2020-03-09 14:18:00'),
(7, '課程', '【七月】電子琴 - 平日班', 'Product_20200423164206.jpg', 5000, 10, '2020-07-20', '【七月】電子琴 - 平日班', '【七月】電子琴 - 平日班', '電子琴', NULL, '2020-03-09 14:18:00', '2020-03-10 14:18:00'),
(8, '課程', '【八月】電子琴 - 平日班', 'Product_20200423164207.jpg', 5000, 10, '2020-08-20', '【八月】電子琴 - 平日班', '【八月】電子琴 - 平日班', '電子琴', NULL, '2020-03-10 14:18:00', '2020-03-11 14:18:00'),
(9, '課程', '【九月】電子琴 - 平日班', 'Product_20200423164208.jpg', 5000, 10, '2020-09-20', '【九月】電子琴 - 平日班', '【九月】電子琴 - 平日班', '電子琴', NULL, '2020-03-11 14:18:00', '2020-03-12 14:18:00'),
(10, '課程', '【十月】電子琴 - 平日班', 'Product_20200423164209.jpg', 5000, 10, '2020-10-20', '【十月】電子琴 - 平日班', '【十月】電子琴 - 平日班', '電子琴', NULL, '2020-03-12 14:18:00', '2020-03-13 14:18:00'),
(11, '課程', '【十一月】電子琴 - 平日班', 'Product_20200423164210.jpg', 5000, 10, '2020-11-20', '【十一月】電子琴 - 平日班', '【十一月】電子琴 - 平日班', '電子琴', NULL, '2020-03-13 14:18:00', '2020-03-14 14:18:00'),
(12, '課程', '【十二月】電子琴 - 平日班', 'Product_20200423164211.jpg', 5000, 10, '2020-12-20', '【十二月】電子琴 - 平日班', '【十二月】電子琴 - 平日班', '電子琴', NULL, '2020-03-14 14:18:00', '2020-03-15 14:18:00'),
(13, '課程', '【七月】小提琴 - 平日班', 'Product_20200423164212.jpg', 8000, 10, '2020-07-20', '【七月】小提琴 - 平日班', '【七月】小提琴 - 平日班', '小提琴', NULL, '2020-03-15 14:18:00', '2020-03-16 14:18:00'),
(14, '課程', '【八月】小提琴 - 平日班', 'Product_20200423164213.jpg', 8000, 10, '2020-08-20', '【八月】小提琴 - 平日班', '【八月】小提琴 - 平日班', '小提琴', NULL, '2020-03-16 14:18:00', '2020-03-17 14:18:00'),
(15, '課程', '【九月】小提琴 - 平日班', 'Product_20200423164214.jpg', 8000, 10, '2020-09-20', '【九月】小提琴 - 平日班', '【九月】小提琴 - 平日班', '小提琴', NULL, '2020-03-17 14:18:00', '2020-03-18 14:18:00'),
(16, '課程', '【十月】小提琴 - 平日班', 'Product_20200423164215.jpg', 8000, 10, '2020-10-20', '【十月】小提琴 - 平日班', '【十月】小提琴 - 平日班', '小提琴', NULL, '2020-03-18 14:18:00', '2020-03-19 14:18:00'),
(17, '課程', '【十一月】小提琴 - 平日班', 'Product_20200423164216.jpg', 8000, 10, '2020-11-20', '【十一月】小提琴 - 平日班', '【十一月】小提琴 - 平日班', '小提琴', NULL, '2020-03-19 14:18:00', '2020-03-20 14:18:00'),
(18, '課程', '【十二月】小提琴 - 平日班', 'Product_20200423164217.jpg', 8000, 10, '2020-12-20', '【十二月】小提琴 - 平日班', '【十二月】小提琴 - 平日班', '小提琴', NULL, '2020-03-20 14:18:00', '2020-03-21 14:18:00'),
(19, '課程', '【七月】中提琴 - 平日班', 'Product_20200423164218.jpg', 7000, 5, '2020-07-20', '【七月】中提琴 - 平日班', '【七月】中提琴 - 平日班', '中提琴', NULL, '2020-03-21 14:18:00', '2020-03-22 14:18:00'),
(20, '課程', '【八月】中提琴 - 平日班', 'Product_20200423164219.jpg', 7000, 5, '2020-08-20', '【八月】中提琴 - 平日班', '【八月】中提琴 - 平日班', '中提琴', NULL, '2020-03-22 14:18:00', '2020-03-23 14:18:00'),
(21, '課程', '【九月】中提琴 - 平日班', 'Product_20200423164220.jpg', 7000, 5, '2020-09-20', '【九月】中提琴 - 平日班', '【九月】中提琴 - 平日班', '中提琴', NULL, '2020-03-23 14:18:00', '2020-03-24 14:18:00'),
(22, '課程', '【十月】中提琴 - 平日班', 'Product_20200423164221.jpg', 7000, 5, '2020-10-20', '【十月】中提琴 - 平日班', '【十月】中提琴 - 平日班', '中提琴', NULL, '2020-03-24 14:18:00', '2020-03-25 14:18:00'),
(23, '課程', '【十一月】中提琴 - 平日班', 'Product_20200423164222.jpg', 7000, 5, '2020-11-20', '【十一月】中提琴 - 平日班', '【十一月】中提琴 - 平日班', '中提琴', NULL, '2020-03-25 14:18:00', '2020-03-26 14:18:00'),
(24, '課程', '【十二月】中提琴 - 平日班', 'Product_20200423164223.jpg', 7000, 5, '2020-12-20', '【十二月】中提琴 - 平日班', '【十二月】中提琴 - 平日班', '中提琴', NULL, '2020-03-26 14:18:00', '2020-03-27 14:18:00'),
(25, '課程', '【七月】薩克斯風 - 平日班', 'Product_20200423164224.jpg', 8000, 10, '2020-07-20', '【七月】薩克斯風 - 平日班', '【七月】薩克斯風 - 平日班', '薩克斯風', NULL, '2020-03-27 14:18:00', '2020-03-28 14:18:00'),
(26, '課程', '【八月】薩克斯風 - 平日班', 'Product_20200423164225.jpg', 8000, 10, '2020-08-20', '【八月】薩克斯風 - 平日班', '【八月】薩克斯風 - 平日班', '薩克斯風', NULL, '2020-03-28 14:18:00', '2020-03-29 14:18:00'),
(27, '課程', '【九月】薩克斯風 - 平日班', 'Product_20200423164226.jpg', 8000, 10, '2020-09-20', '【九月】薩克斯風 - 平日班', '【九月】薩克斯風 - 平日班', '薩克斯風', NULL, '2020-03-29 14:18:00', '2020-03-30 14:18:00'),
(28, '課程', '【十月】薩克斯風 - 平日班', 'Product_20200423164227.jpg', 8000, 10, '2020-10-20', '【十月】薩克斯風 - 平日班', '【十月】薩克斯風 - 平日班', '薩克斯風', NULL, '2020-03-30 14:18:00', '2020-03-31 14:18:00'),
(29, '課程', '【十一月】薩克斯風 - 平日班', 'Product_20200423164228.jpg', 8000, 10, '2020-11-20', '【十一月】薩克斯風 - 平日班', '【十一月】薩克斯風 - 平日班', '薩克斯風', NULL, '2020-03-31 14:18:00', '2020-04-01 14:18:00'),
(30, '課程', '【十二月】薩克斯風 - 平日班', 'Product_20200423164229.jpg', 8000, 10, '2020-12-20', '【十二月】薩克斯風 - 平日班', '【十二月】薩克斯風 - 平日班', '薩克斯風', NULL, '2020-04-01 14:18:00', '2020-04-02 14:18:00'),
(31, '課程', '【七月】長笛 - 平日班', 'Product_20200423164230.jpg', 8000, 10, '2020-07-20', '【七月】長笛 - 平日班', '【七月】長笛 - 平日班', '長笛', NULL, '2020-04-02 14:18:00', '2020-04-03 14:18:00'),
(32, '課程', '【八月】長笛 - 平日班', 'Product_20200423164231.jpg', 8000, 10, '2020-08-20', '【八月】長笛 - 平日班', '【八月】長笛 - 平日班', '長笛', NULL, '2020-04-03 14:18:00', '2020-04-04 14:18:00'),
(33, '課程', '【九月】長笛 - 平日班', 'Product_20200423164232.jpg', 8000, 10, '2020-09-20', '【九月】長笛 - 平日班', '【九月】長笛 - 平日班', '長笛', NULL, '2020-04-04 14:18:00', '2020-04-05 14:18:00'),
(34, '課程', '【十月】長笛 - 平日班', 'Product_20200423164233.jpg', 8000, 10, '2020-10-20', '【十月】長笛 - 平日班', '【十月】長笛 - 平日班', '長笛', NULL, '2020-04-05 14:18:00', '2020-04-06 14:18:00'),
(35, '課程', '【十一月】長笛 - 平日班', 'Product_20200423164234.jpg', 8000, 10, '2020-11-20', '【十一月】長笛 - 平日班', '【十一月】長笛 - 平日班', '長笛', NULL, '2020-04-06 14:18:00', '2020-04-07 14:18:00'),
(36, '課程', '【十二月】長笛 - 平日班', 'Product_20200423164235.jpg', 8000, 10, '2020-12-20', '【十二月】長笛 - 平日班', '【十二月】長笛 - 平日班', '長笛', NULL, '2020-04-07 14:18:00', '2020-04-08 14:18:00'),
(37, '課程', '【七月】烏克麗麗 - 平日班', 'Product_20200423164236.jpg', 4000, 20, '2020-07-20', '【七月】烏克麗麗 - 平日班', '【七月】烏克麗麗 - 平日班', '烏克麗麗', NULL, '2020-04-08 14:18:00', '2020-04-09 14:18:00'),
(38, '課程', '【八月】烏克麗麗 - 平日班', 'Product_20200423164237.jpg', 4000, 20, '2020-08-20', '【八月】烏克麗麗 - 平日班', '【八月】烏克麗麗 - 平日班', '烏克麗麗', NULL, '2020-04-09 14:18:00', '2020-04-10 14:18:00'),
(39, '課程', '【九月】烏克麗麗 - 平日班', 'Product_20200423164238.jpg', 4000, 20, '2020-09-20', '【九月】烏克麗麗 - 平日班', '【九月】烏克麗麗 - 平日班', '烏克麗麗', NULL, '2020-04-10 14:18:00', '2020-04-11 14:18:00'),
(40, '課程', '【十月】烏克麗麗 - 平日班', 'Product_20200423164239.jpg', 4000, 20, '2020-10-20', '【十月】烏克麗麗 - 平日班', '【十月】烏克麗麗 - 平日班', '烏克麗麗', NULL, '2020-04-11 14:18:00', '2020-04-12 14:18:00'),
(41, '課程', '【十一月】烏克麗麗 - 平日班', 'Product_20200423164240.jpg', 4000, 20, '2020-11-20', '【十一月】烏克麗麗 - 平日班', '【十一月】烏克麗麗 - 平日班', '烏克麗麗', NULL, '2020-04-12 14:18:00', '2020-04-13 14:18:00'),
(42, '課程', '【十二月】烏克麗麗 - 平日班', 'Product_20200423164241.jpg', 4000, 20, '2020-12-20', '【十二月】烏克麗麗 - 平日班', '【十二月】烏克麗麗 - 平日班', '烏克麗麗', NULL, '2020-04-13 14:18:00', '2020-04-14 14:18:00'),
(43, '課程', '【七月】爵士鼓 - 平日班', 'Product_20200423164242.jpg', 4000, 20, '2020-07-20', '【七月】爵士鼓 - 平日班', '【七月】爵士鼓 - 平日班', '爵士鼓', NULL, '2020-04-14 14:18:00', '2020-04-15 14:18:00'),
(44, '課程', '【八月】爵士鼓 - 平日班', 'Product_20200423164243.jpg', 4000, 20, '2020-08-20', '【八月】爵士鼓 - 平日班', '【八月】爵士鼓 - 平日班', '爵士鼓', NULL, '2020-04-15 14:18:00', '2020-04-16 14:18:00'),
(45, '課程', '【九月】爵士鼓 - 平日班', 'Product_20200423164244.jpg', 4000, 20, '2020-09-20', '【九月】爵士鼓 - 平日班', '【九月】爵士鼓 - 平日班', '爵士鼓', NULL, '2020-04-16 14:18:00', '2020-04-17 14:18:00'),
(46, '課程', '【十月】爵士鼓 - 平日班', 'Product_20200423164245.jpg', 4000, 20, '2020-10-20', '【十月】爵士鼓 - 平日班', '【十月】爵士鼓 - 平日班', '爵士鼓', NULL, '2020-04-17 14:18:00', '2020-04-18 14:18:00'),
(47, '課程', '【十一月】爵士鼓 - 平日班', 'Product_20200423164246.jpg', 4000, 20, '2020-11-20', '【十一月】爵士鼓 - 平日班', '【十一月】爵士鼓 - 平日班', '爵士鼓', NULL, '2020-04-18 14:18:00', '2020-04-19 14:18:00'),
(48, '課程', '【十二月】爵士鼓 - 平日班', 'Product_20200423164247.jpg', 4000, 20, '2020-12-20', '【十二月】爵士鼓 - 平日班', '【十二月】爵士鼓 - 平日班', '爵士鼓', NULL, '2020-04-19 14:18:00', '2020-04-20 14:18:00'),
(49, '課程', '【七月】鋼琴 - 假日班', 'Product_20200423164248.jpg', 4000, 2, '2020-07-20', '【七月】鋼琴 - 假日班', '【七月】鋼琴 - 假日班', '鋼琴', NULL, '2020-04-20 14:18:00', '2020-04-21 14:18:00'),
(50, '課程', '【八月】鋼琴 - 假日班', 'Product_20200423164249.jpg', 4000, 2, '2020-08-20', '【八月】鋼琴 - 假日班', '【八月】鋼琴 - 假日班', '鋼琴', NULL, '2020-04-21 14:18:00', '2020-04-22 14:18:00'),
(51, '課程', '【九月】鋼琴 - 假日班', 'Product_20200423164250.jpg', 4000, 2, '2020-09-20', '【九月】鋼琴 - 假日班', '【九月】鋼琴 - 假日班', '鋼琴', NULL, '2020-04-22 14:18:00', '2020-04-23 14:18:00'),
(52, '課程', '【十月】鋼琴 - 假日班', 'Product_20200423164251.jpg', 4000, 2, '2020-10-20', '【十月】鋼琴 - 假日班', '【十月】鋼琴 - 假日班', '鋼琴', NULL, '2020-04-23 14:18:00', '2020-04-24 14:18:00'),
(53, '課程', '【十一月】鋼琴 - 假日班', 'Product_20200423164252.jpg', 4000, 2, '2020-11-20', '【十一月】鋼琴 - 假日班', '【十一月】鋼琴 - 假日班', '鋼琴', NULL, '2020-04-24 14:18:00', '2020-04-25 14:18:00'),
(54, '課程', '【十二月】鋼琴 - 假日班', 'Product_20200423164253.jpg', 4000, 2, '2020-12-20', '【十二月】鋼琴 - 假日班', '【十二月】鋼琴 - 假日班', '鋼琴', NULL, '2020-04-25 14:18:00', '2020-04-26 14:18:00'),
(55, '課程', '【七月】電子琴 - 假日班', 'Product_20200423164254.jpg', 2500, 10, '2020-07-20', '【七月】電子琴 - 假日班', '【七月】電子琴 - 假日班', '電子琴', NULL, '2020-04-26 14:18:00', '2020-04-27 14:18:00'),
(56, '課程', '【八月】電子琴 - 假日班', 'Product_20200423164255.jpg', 2500, 10, '2020-08-20', '【八月】電子琴 - 假日班', '【八月】電子琴 - 假日班', '電子琴', NULL, '2020-04-27 14:18:00', '2020-04-28 14:18:00'),
(57, '課程', '【九月】電子琴 - 假日班', 'Product_20200423164256.jpg', 2500, 10, '2020-09-20', '【九月】電子琴 - 假日班', '【九月】電子琴 - 假日班', '電子琴', NULL, '2020-04-28 14:18:00', '2020-04-29 14:18:00'),
(58, '課程', '【十月】電子琴 - 假日班', 'Product_20200423164257.jpg', 2500, 10, '2020-10-20', '【十月】電子琴 - 假日班', '【十月】電子琴 - 假日班', '電子琴', NULL, '2020-04-29 14:18:00', '2020-04-30 14:18:00'),
(59, '課程', '【十一月】電子琴 - 假日班', 'Product_20200423164258.jpg', 2500, 10, '2020-11-20', '【十一月】電子琴 - 假日班', '【十一月】電子琴 - 假日班', '電子琴', NULL, '2020-04-30 14:18:00', '2020-05-01 14:18:00'),
(60, '課程', '【十二月】電子琴 - 假日班', 'Product_20200423164259.jpg', 2500, 10, '2020-12-20', '【十二月】電子琴 - 假日班', '【十二月】電子琴 - 假日班', '電子琴', NULL, '2020-05-01 14:18:00', '2020-05-02 14:18:00'),
(61, '課程', '【七月】小提琴 - 假日班', 'Product_20200423164300.jpg', 4000, 10, '2020-07-20', '【七月】小提琴 - 假日班', '【七月】小提琴 - 假日班', '小提琴', NULL, '2020-05-02 14:18:00', '2020-05-03 14:18:00'),
(62, '課程', '【八月】小提琴 - 假日班', 'Product_20200423164301.jpg', 4000, 10, '2020-08-20', '【八月】小提琴 - 假日班', '【八月】小提琴 - 假日班', '小提琴', NULL, '2020-05-03 14:18:00', '2020-05-04 14:18:00'),
(63, '課程', '【九月】小提琴 - 假日班', 'Product_20200423164302.jpg', 4000, 10, '2020-09-20', '【九月】小提琴 - 假日班', '【九月】小提琴 - 假日班', '小提琴', NULL, '2020-05-04 14:18:00', '2020-05-05 14:18:00'),
(64, '課程', '【十月】小提琴 - 假日班', 'Product_20200423164303.jpg', 4000, 10, '2020-10-20', '【十月】小提琴 - 假日班', '【十月】小提琴 - 假日班', '小提琴', NULL, '2020-05-05 14:18:00', '2020-05-06 14:18:00'),
(65, '課程', '【十一月】小提琴 - 假日班', 'Product_20200423164304.jpg', 4000, 10, '2020-11-20', '【十一月】小提琴 - 假日班', '【十一月】小提琴 - 假日班', '小提琴', NULL, '2020-05-06 14:18:00', '2020-05-07 14:18:00'),
(66, '課程', '【十二月】小提琴 - 假日班', 'Product_20200423164305.jpg', 4000, 10, '2020-12-20', '【十二月】小提琴 - 假日班', '【十二月】小提琴 - 假日班', '小提琴', NULL, '2020-05-07 14:18:00', '2020-05-08 14:18:00'),
(67, '課程', '【七月】中提琴 - 假日班', 'Product_20200423164306.jpg', 3500, 5, '2020-07-20', '【七月】中提琴 - 假日班', '【七月】中提琴 - 假日班', '中提琴', NULL, '2020-05-08 14:18:00', '2020-05-09 14:18:00'),
(68, '課程', '【八月】中提琴 - 假日班', 'Product_20200423164307.jpg', 3500, 5, '2020-08-20', '【八月】中提琴 - 假日班', '【八月】中提琴 - 假日班', '中提琴', NULL, '2020-05-09 14:18:00', '2020-05-10 14:18:00'),
(69, '課程', '【九月】中提琴 - 假日班', 'Product_20200423164308.jpg', 3500, 5, '2020-09-20', '【九月】中提琴 - 假日班', '【九月】中提琴 - 假日班', '中提琴', NULL, '2020-05-10 14:18:00', '2020-05-11 14:18:00'),
(70, '課程', '【十月】中提琴 - 假日班', 'Product_20200423164309.jpg', 3500, 5, '2020-10-20', '【十月】中提琴 - 假日班', '【十月】中提琴 - 假日班', '中提琴', NULL, '2020-05-11 14:18:00', '2020-05-12 14:18:00'),
(71, '課程', '【十一月】中提琴 - 假日班', 'Product_20200423164310.jpg', 3500, 5, '2020-11-20', '【十一月】中提琴 - 假日班', '【十一月】中提琴 - 假日班', '中提琴', NULL, '2020-05-12 14:18:00', '2020-05-13 14:18:00'),
(72, '課程', '【十二月】中提琴 - 假日班', 'Product_20200423164311.jpg', 3500, 5, '2020-12-20', '【十二月】中提琴 - 假日班', '【十二月】中提琴 - 假日班', '中提琴', NULL, '2020-05-13 14:18:00', '2020-05-14 14:18:00'),
(73, '課程', '【七月】薩克斯風 - 假日班', 'Product_20200423164312.jpg', 4000, 10, '2020-07-20', '【七月】薩克斯風 - 假日班', '【七月】薩克斯風 - 假日班', '薩克斯風', NULL, '2020-05-14 14:18:00', '2020-05-15 14:18:00'),
(74, '課程', '【八月】薩克斯風 - 假日班', 'Product_20200423164313.jpg', 4000, 10, '2020-08-20', '【八月】薩克斯風 - 假日班', '【八月】薩克斯風 - 假日班', '薩克斯風', NULL, '2020-05-15 14:18:00', '2020-05-16 14:18:00'),
(75, '課程', '【九月】薩克斯風 - 假日班', 'Product_20200423164314.jpg', 4000, 10, '2020-09-20', '【九月】薩克斯風 - 假日班', '【九月】薩克斯風 - 假日班', '薩克斯風', NULL, '2020-05-16 14:18:00', '2020-05-17 14:18:00'),
(76, '課程', '【十月】薩克斯風 - 假日班', 'Product_20200423164315.jpg', 4000, 10, '2020-10-20', '【十月】薩克斯風 - 假日班', '【十月】薩克斯風 - 假日班', '薩克斯風', NULL, '2020-05-17 14:18:00', '2020-05-18 14:18:00'),
(77, '課程', '【十一月】薩克斯風 - 假日班', 'Product_20200423164316.jpg', 4000, 10, '2020-11-20', '【十一月】薩克斯風 - 假日班', '【十一月】薩克斯風 - 假日班', '薩克斯風', NULL, '2020-05-18 14:18:00', '2020-05-19 14:18:00'),
(78, '課程', '【十二月】薩克斯風 - 假日班', 'Product_20200423164317.jpg', 4000, 10, '2020-12-20', '【十二月】薩克斯風 - 假日班', '【十二月】薩克斯風 - 假日班', '薩克斯風', NULL, '2020-05-19 14:18:00', '2020-05-20 14:18:00'),
(79, '課程', '【七月】長笛 - 假日班', 'Product_20200423164318.jpg', 4000, 10, '2020-07-20', '【七月】長笛 - 假日班', '【七月】長笛 - 假日班', '長笛', NULL, '2020-05-20 14:18:00', '2020-05-21 14:18:00'),
(80, '課程', '【八月】長笛 - 假日班', 'Product_20200423164314.jpg', 4000, 10, '2020-08-20', '【八月】長笛 - 假日班', '【八月】長笛 - 假日班', '長笛', NULL, '2020-05-21 14:18:00', '2020-05-22 14:18:00'),
(81, '課程', '【九月】長笛 - 假日班', 'Product_20200423164315.jpg', 4000, 10, '2020-09-20', '【九月】長笛 - 假日班', '【九月】長笛 - 假日班', '長笛', NULL, '2020-05-22 14:18:00', '2020-05-23 14:18:00'),
(82, '課程', '【十月】長笛 - 假日班', 'Product_20200423164316.jpg', 4000, 10, '2020-10-20', '【十月】長笛 - 假日班', '【十月】長笛 - 假日班', '長笛', NULL, '2020-05-23 14:18:00', '2020-05-24 14:18:00'),
(83, '課程', '【十一月】長笛 - 假日班', 'Product_20200423164317.jpg', 4000, 10, '2020-11-20', '【十一月】長笛 - 假日班', '【十一月】長笛 - 假日班', '長笛', NULL, '2020-05-24 14:18:00', '2020-05-25 14:18:00'),
(84, '課程', '【十二月】長笛 - 假日班', 'Product_20200423164318.jpg', 4000, 10, '2020-12-20', '【十二月】長笛 - 假日班', '【十二月】長笛 - 假日班', '長笛', NULL, '2020-05-25 14:18:00', '2020-05-26 14:18:00'),
(85, '課程', '【七月】烏克麗麗 - 假日班', 'Product_20200423164319.jpg', 2000, 20, '2020-07-20', '【七月】烏克麗麗 - 假日班', '【七月】烏克麗麗 - 假日班', '烏克麗麗', NULL, '2020-05-26 14:18:00', '2020-05-27 14:18:00'),
(86, '課程', '【八月】烏克麗麗 - 假日班', 'Product_20200423164320.jpg', 2000, 20, '2020-08-20', '【八月】烏克麗麗 - 假日班', '【八月】烏克麗麗 - 假日班', '烏克麗麗', NULL, '2020-05-27 14:18:00', '2020-05-28 14:18:00'),
(87, '課程', '【九月】烏克麗麗 - 假日班', 'Product_20200423164321.jpg', 2000, 20, '2020-09-20', '【九月】烏克麗麗 - 假日班', '【九月】烏克麗麗 - 假日班', '烏克麗麗', NULL, '2020-05-28 14:18:00', '2020-05-29 14:18:00'),
(88, '課程', '【十月】烏克麗麗 - 假日班', 'Product_20200423164322.jpg', 2000, 20, '2020-10-20', '【十月】烏克麗麗 - 假日班', '【十月】烏克麗麗 - 假日班', '烏克麗麗', NULL, '2020-05-29 14:18:00', '2020-05-30 14:18:00'),
(89, '課程', '【十一月】烏克麗麗 - 假日班', 'Product_20200423164323.jpg', 2000, 20, '2020-11-20', '【十一月】烏克麗麗 - 假日班', '【十一月】烏克麗麗 - 假日班', '烏克麗麗', NULL, '2020-05-30 14:18:00', '2020-05-31 14:18:00'),
(90, '課程', '【十二月】烏克麗麗 - 假日班', 'Product_20200423164324.jpg', 2000, 20, '2020-12-20', '【十二月】烏克麗麗 - 假日班', '【十二月】烏克麗麗 - 假日班', '烏克麗麗', NULL, '2020-05-31 14:18:00', '2020-06-01 14:18:00'),
(91, '課程', '【七月】爵士鼓 - 假日班', 'Product_20200423164325.jpg', 2000, 20, '2020-07-20', '【七月】爵士鼓 - 假日班', '【七月】爵士鼓 - 假日班', '爵士鼓', NULL, '2020-06-01 14:18:00', '2020-06-02 14:18:00'),
(92, '課程', '【八月】爵士鼓 - 假日班', 'Product_20200423164326.jpg', 2000, 20, '2020-08-20', '【八月】爵士鼓 - 假日班', '【八月】爵士鼓 - 假日班', '爵士鼓', NULL, '2020-06-02 14:18:00', '2020-06-03 14:18:00'),
(93, '課程', '【九月】爵士鼓 - 假日班', 'Product_20200423164327.jpg', 2000, 20, '2020-09-20', '【九月】爵士鼓 - 假日班', '【九月】爵士鼓 - 假日班', '爵士鼓', NULL, '2020-06-03 14:18:00', '2020-06-04 14:18:00'),
(94, '課程', '【十月】爵士鼓 - 假日班', 'Product_20200423164328.jpg', 2000, 20, '2020-10-20', '【十月】爵士鼓 - 假日班', '【十月】爵士鼓 - 假日班', '爵士鼓', NULL, '2020-06-04 14:18:00', '2020-06-05 14:18:00'),
(95, '課程', '【十一月】爵士鼓 - 假日班', 'Product_20200423164329.jpg', 2000, 20, '2020-11-20', '【十一月】爵士鼓 - 假日班', '【十一月】爵士鼓 - 假日班', '爵士鼓', NULL, '2020-06-05 14:18:00', '2020-06-06 14:18:00'),
(96, '課程', '【十二月】爵士鼓 - 假日班', 'Product_20200423164330.jpg', 2000, 20, '2020-12-20', '【十二月】爵士鼓 - 假日班', '【十二月】爵士鼓 - 假日班', '爵士鼓', NULL, '2020-06-06 14:18:00', '2020-06-07 14:18:00');

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

-- --------------------------------------------------------

--
-- 資料表結構 `product_instruments`
--

CREATE TABLE `product_instruments` (
  `PId` int(255) NOT NULL COMMENT '商品編號',
  `PCategoryId` varchar(10) NOT NULL COMMENT '商品類別ID',
  `PName` varchar(255) NOT NULL COMMENT '商品名稱',
  `PImg` varchar(1000) NOT NULL COMMENT '圖片檔名',
  `PPrice` int(255) NOT NULL COMMENT '商品價格',
  `PQty` int(255) NOT NULL COMMENT '商品數量/人數',
  `PIntro` varchar(1000) NOT NULL COMMENT '商品簡介',
  `Pdesciption` varchar(1000) NOT NULL COMMENT '商品描述',
  `PInstrumentId` varchar(255) NOT NULL COMMENT '類別編號',
  `PCompanyId` varchar(255) NOT NULL COMMENT '上架廠商',
  `PClick` int(30) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='product_courses';

--
-- 傾印資料表的資料 `product_instruments`
--

INSERT INTO `product_instruments` (`PId`, `PCategoryId`, `PName`, `PImg`, `PPrice`, `PQty`, `PIntro`, `Pdesciption`, `PInstrumentId`, `PCompanyId`, `PClick`, `created_at`, `update_at`) VALUES
(1, '樂器', 'YAMAHA RYDEEN 傳統爵士鼓組 黑色款', 'Product_20200423164420.jpg', 27000, 5, 'YAMAHA RYDEEN 傳統爵士鼓組 黑色款', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '爵士鼓', 'F050', NULL, '2020-07-26 14:18:00', '2020-07-27 14:18:00'),
(2, '樂器', 'YAMAHA RYDEEN 傳統爵士鼓組 酒紅色款', 'Product_20200423164421.jpg', 27000, 5, 'YAMAHA RYDEEN 傳統爵士鼓組 酒紅色款', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '爵士鼓', 'F050', NULL, '2020-07-27 14:18:00', '2020-07-28 14:18:00'),
(3, '樂器', 'YAMAHA RYDEEN 傳統爵士鼓組 雅痞黃色款', 'Product_20200423164422.jpg', 27000, 5, 'YAMAHA RYDEEN 傳統爵士鼓組 雅痞黃色款', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '爵士鼓', 'F050', NULL, '2020-07-28 14:18:00', '2020-07-29 14:18:00'),
(4, '樂器', 'YAMAHA RYDEEN 傳統爵士鼓組 絢麗銀色款', 'Product_20200423164423.jpg', 27000, 5, 'YAMAHA RYDEEN 傳統爵士鼓組 絢麗銀色款', '全新RYDEEN(5件套鼓組)正是任何初學者及玩家會喜愛的一套鼓組。', '爵士鼓', 'F050', NULL, '2020-07-29 14:18:00', '2020-07-30 14:18:00'),
(5, '樂器', 'YAMAHA Stage Custom 爵士鼓組 典雅白色款', 'Product_20200423164424.jpg', 46000, 5, 'YAMAHA Stage Custom 爵士鼓組 典雅白色款', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '爵士鼓', 'F050', NULL, '2020-07-30 14:18:00', '2020-07-31 14:18:00'),
(6, '樂器', 'YAMAHA Stage Custom 爵士鼓組 蜂蜜琥珀色款', 'Product_20200423164425.jpg', 46000, 5, 'YAMAHA Stage Custom 爵士鼓組 蜂蜜琥珀色款', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '爵士鼓', 'F050', NULL, '2020-07-31 14:18:00', '2020-08-01 14:18:00'),
(7, '樂器', 'YAMAHA Stage Custom 爵士鼓組 酒紅木紋色款', 'Product_20200423164426.jpg', 46000, 5, 'YAMAHA Stage Custom 爵士鼓組 酒紅木紋色款', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '爵士鼓', 'F050', NULL, '2020-08-01 14:18:00', '2020-08-02 14:18:00'),
(8, '樂器', 'YAMAHA Stage Custom 爵士鼓組 自然原木色款', 'Product_20200423164427.jpg', 46000, 5, 'YAMAHA Stage Custom 爵士鼓組 自然原木色款', '大鼓踏板+鼓椅+兩隻銅鈸架+一隻Hi-Hat架', '爵士鼓', 'F050', NULL, '2020-08-02 14:18:00', '2020-08-03 14:18:00'),
(9, '樂器', 'DIXON 台灣製 兒童爵士鼓 BK黑色', 'Product_20200423164428.jpg', 14000, 5, 'DIXON 台灣製 兒童爵士鼓 BK黑色', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '爵士鼓', 'F048', NULL, '2020-08-03 14:18:00', '2020-08-04 14:18:00'),
(10, '樂器', 'DIXON 台灣製 兒童爵士鼓 F22銅刷線', 'Product_20200423164429.jpg', 14000, 5, 'DIXON 台灣製 兒童爵士鼓 F22銅刷線', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '爵士鼓', 'F048', NULL, '2020-08-04 14:18:00', '2020-08-05 14:18:00'),
(11, '樂器', 'DIXON 台灣製 兒童爵士鼓 F25藍刷線', 'Product_20200423164430.jpg', 14000, 5, 'DIXON 台灣製 兒童爵士鼓 F25藍刷線', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '爵士鼓', 'F048', NULL, '2020-08-05 14:18:00', '2020-08-06 14:18:00'),
(12, '樂器', 'DIXON 台灣製 兒童爵士鼓 SL銀色', 'Product_20200423164431.jpg', 14000, 5, 'DIXON 台灣製 兒童爵士鼓 SL銀色', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '爵士鼓', 'F048', NULL, '2020-08-06 14:18:00', '2020-08-07 14:18:00'),
(13, '樂器', 'DIXON 台灣製 兒童爵士鼓 WR酒紅', 'Product_20200423164432.jpg', 14000, 5, 'DIXON 台灣製 兒童爵士鼓 WR酒紅', '國內第一組完全按照比例，專供兒童使用的5粒鼓組。', '爵士鼓', 'F048', NULL, '2020-08-07 14:18:00', '2020-08-08 14:18:00'),
(14, '樂器', '標準加厚88鍵 鋰電池充電式 手捲電子琴', 'Product_20200423164433.jpg', 2799, 10, '標準加厚88鍵 鋰電池充電式 手捲電子琴', '超輕便好收納隨時隨地帶著走、可當MIDI鍵盤做電腦編輯、錄音、作詞曲', '電子琴', 'F047', NULL, '2020-08-08 14:18:00', '2020-08-09 14:18:00'),
(15, '樂器', '『YAMAHA NP12』全新機種 61鍵電子琴『黑色款』', 'Product_20200423164434.jpg', 8500, 7, '『YAMAHA NP12』全新機種 61鍵電子琴『黑色款』', 'NP系列是優雅與簡約的絕佳組合、輕薄小巧的鍵盤有著精緻的音色', '電子琴', 'F046', NULL, '2020-08-09 14:18:00', '2020-08-10 14:18:00'),
(16, '樂器', '『YAMAHA NP12』全新機種 61鍵電子琴『白色款』', 'Product_20200423164435.jpg', 8500, 8, '『YAMAHA NP12』全新機種 61鍵電子琴『白色款』', 'NP系列是優雅與簡約的絕佳組合、輕薄小巧的鍵盤有著精緻的音色', '電子琴', 'F046', NULL, '2020-08-10 14:18:00', '2020-08-11 14:18:00'),
(17, '樂器', 'YAMAHA PSR-E463 61鍵自動伴奏電子琴', 'Product_20200423164436.jpg', 13500, 4, 'YAMAHA PSR-E463 61鍵自動伴奏電子琴', 'PSR-E463以包含758種樂器音色的豐富音樂資料庫為特色，讓您盡情享受各種音樂類型。', '電子琴', 'F046', NULL, '2020-08-11 14:18:00', '2020-08-12 14:18:00'),
(18, '樂器', '『YAMAHA 山葉 NP-32』76鍵攜帶式電子琴『黑色款』', 'Product_20200423164437.jpg', 15000, 4, '『YAMAHA 山葉 NP-32』76鍵攜帶式電子琴『黑色款』', '76鍵 標準鍵鍵盤電子琴', '電子琴', 'F046', NULL, '2020-08-12 14:18:00', '2020-08-13 14:18:00'),
(19, '樂器', '台灣JAZZY61鍵數位電子琴，JZ-618', 'Product_20200423164438.jpg', 3115, 6, '台灣JAZZY61鍵數位電子琴，JZ-618', '430種音色/300種節奏', '電子琴', 'F045', NULL, '2020-08-13 14:18:00', '2020-08-14 14:18:00'),
(20, '樂器', 'KAWAI K-400直立式鋼琴', 'Product_20200423164439.jpg', 50000, 1, 'KAWAI K-400直立式鋼琴', '雙重鉸鏈的摔跤板增添了獨特的吸引力。', '鋼琴', 'F044', NULL, '2020-08-14 14:18:00', '2020-08-15 14:18:00'),
(21, '樂器', 'KAWAI K-500直立式鋼琴', 'Product_20200423164440.jpg', 55000, 2, 'KAWAI K-500直立式鋼琴', 'K-500提供了功率，動態範圍和音調豐富度的罕見組合', '鋼琴', 'F044', NULL, '2020-08-15 14:18:00', '2020-08-16 14:18:00'),
(22, '樂器', 'KAWAI  K-30(SNW)直立式鋼琴', 'Product_20200423164441.jpg', 60000, 1, 'KAWAI  K-30(SNW)直立式鋼琴', '採用日本原裝打擊系統、音搥、琴弦，外觀歐洲宮庭型', '鋼琴', 'F044', NULL, '2020-08-16 14:18:00', '2020-08-17 14:18:00'),
(23, '樂器', 'KAWAI K-80W(CA)直立式鋼琴', 'Product_20200423164442.jpg', 60000, 1, 'KAWAI K-80W(CA)直立式鋼琴', '採用日本原裝打擊系統、音搥、琴弦。G曲線響板設計，響板音孔裝置，定弦裝置。', '鋼琴', 'F044', NULL, '2020-08-17 14:18:00', '2020-08-18 14:18:00'),
(24, '樂器', 'KAWAI K-80(E)直立式鋼琴', 'Product_20200423164443.jpg', 60000, 1, 'KAWAI K-80(E)直立式鋼琴', '採用日本原裝打擊系統、音搥、琴弦。G曲線響板設計，響板音孔裝置，定弦裝置。', '鋼琴', 'F044', NULL, '2020-08-18 14:18:00', '2020-08-19 14:18:00'),
(25, '樂器', 'aNueNue AQUA-002 23 吋烏克麗麗', 'Product_20200423164444.jpg', 2800, 5, 'aNueNue AQUA-002 23 吋烏克麗麗', '獨一無二的設計概念，23吋可愛輕巧的琴身、特殊的琴頭造型與簡約的琴身設計', '烏克麗麗', 'F026', NULL, '2020-08-19 14:18:00', '2020-08-20 14:18:00'),
(26, '樂器', 'aNueNue CK3 26吋相思木烏克麗麗', 'Product_20200423164445.jpg', 3900, 3, 'aNueNue CK3 26吋相思木烏克麗麗', '相思木除了木紋優雅漂亮之外，聲音溫暖且豐實', '烏克麗麗', 'F026', NULL, '2020-08-20 14:18:00', '2020-08-21 14:18:00'),
(27, '樂器', 'aNueNue MCM 23吋桃花心木烏克麗麗', 'Product_20200423164446.jpg', 3600, 2, 'aNueNue MCM 23吋桃花心木烏克麗麗', '舒適輕巧手感，讓你彈任何曲風都難不倒它平實的價格，高規格的對待', '烏克麗麗', 'F026', NULL, '2020-08-21 14:18:00', '2020-08-22 14:18:00'),
(28, '樂器', 'aNueNue 900S 21吋桃花心木烏克麗麗', 'Product_20200423164447.jpg', 5800, 1, 'aNueNue 900S 21吋桃花心木烏克麗麗', '新一代U900升級面單桃花心木內部結構升級，聲音較響亮飽滿、顆粒扎實', '烏克麗麗', 'F026', NULL, '2020-08-22 14:18:00', '2020-08-23 14:18:00'),
(29, '樂器', '『PUKA 烏克麗麗』PK-DPS 21吋口輪系列 / 小海豚款', 'Product_20200423164448.jpg', 1980, 5, '『PUKA 烏克麗麗』PK-DPS 21吋口輪系列 / 小海豚款', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '烏克麗麗', 'F027', NULL, '2020-08-23 14:18:00', '2020-08-24 14:18:00'),
(30, '樂器', '『PUKA 烏克麗麗』PK-HBC 23吋口輪系列 / 扶桑花款', 'Product_20200423164449.jpg', 2500, 3, '『PUKA 烏克麗麗』PK-HBC 23吋口輪系列 / 扶桑花款', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '烏克麗麗', 'F027', NULL, '2020-08-24 14:18:00', '2020-08-25 14:18:00'),
(31, '樂器', '『PUKA 烏克麗麗』PU-PEACE-S 21吋口輪系列 / 和平', 'Product_20200423164450.jpg', 2100, 2, '『PUKA 烏克麗麗』PU-PEACE-S 21吋口輪系列 / 和平', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '烏克麗麗', 'F027', NULL, '2020-08-25 14:18:00', '2020-08-26 14:18:00'),
(32, '樂器', '『PUKA 烏克麗麗』PU-LOVE-S 21吋口輪系列 / 愛心款', 'Product_20200423164451.jpg', 2100, 2, '『PUKA 烏克麗麗』PU-LOVE-S 21吋口輪系列 / 愛心款', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '烏克麗麗', 'F027', NULL, '2020-08-26 14:18:00', '2020-08-27 14:18:00'),
(33, '樂器', '『PUKA 烏克麗麗』PK-TFC 23吋口輪系列 / 熱帶魚款', 'Product_20200423164452.jpg', 2500, 1, '『PUKA 烏克麗麗』PK-TFC 23吋口輪系列 / 熱帶魚款', '時下最流行的樂器，適合個人或合奏演出，輕鬆彈奏帶來無限歡樂', '烏克麗麗', 'F027', NULL, '2020-08-27 14:18:00', '2020-08-28 14:18:00'),
(34, '樂器', 'Sebrew 希伯萊 MC-1  入門小提琴', 'Product_20200423164453.jpg', 1600, 10, 'Sebrew 希伯萊 MC-1  入門小提琴', ' 入門小提琴', '小提琴', 'F028', NULL, '2020-08-28 14:18:00', '2020-08-29 14:18:00'),
(35, '樂器', 'Sebrew 希伯萊 MC-2 考級小提琴', 'Product_20200423164454.jpg', 2280, 8, 'Sebrew 希伯萊 MC-2 考級小提琴', '考級小提琴', '小提琴', 'F028', NULL, '2020-08-29 14:18:00', '2020-08-30 14:18:00'),
(36, '樂器', 'Jazzy 台灣品牌 小提琴', 'Product_20200423164455.jpg', 3280, 3, 'Jazzy 台灣品牌 小提琴', 'A級雲杉木 ', '小提琴', 'F028', NULL, '2020-08-30 14:18:00', '2020-08-31 14:18:00'),
(37, '樂器', '專業級 Elegant 605 手工虎背紋小提琴', 'Product_20200423164456.jpg', 18000, 1, '專業級 Elegant 605 手工虎背紋小提琴', '琴採用優質雲杉實木面板、高級楓木側板、背板有虎背紋，手工漆及手工鑲邊', '小提琴', 'F029', NULL, '2020-08-31 14:18:00', '2020-09-01 14:18:00'),
(38, '樂器', '★SEKWANG★SVN-400雲杉實木小提琴', 'Product_20200423164457.jpg', 7000, 2, '★SEKWANG★SVN-400雲杉實木小提琴', '雲衫實木面板、楓木側板及背板、烏木指板烏木配件', '小提琴', 'F029', NULL, '2020-09-01 14:18:00', '2020-09-02 14:18:00'),
(39, '樂器', '德國 Conrad Götz 小提琴 CG-123', 'Product_20200423164458.jpg', 76500, 1, '德國 Conrad Götz 小提琴 CG-123', '德國GOTZ原廠裝配，使用奧地利Thomastik Dominant 尼龍弦', '小提琴', 'F029', NULL, '2020-09-02 14:18:00', '2020-09-03 14:18:00'),
(40, '樂器', 'Abbott SN-300 小提琴', 'Product_20200423164459.jpg', 26000, 1, 'Abbott SN-300 小提琴', '手工刷漆，高級烏木配件，虎背紋路清晰', '小提琴', 'F029', NULL, '2020-09-03 14:18:00', '2020-09-04 14:18:00'),
(41, '樂器', '★嚴選JYC JV-17 亮面虎紋小提琴', 'Product_20200423164500.jpg', 16500, 2, '★嚴選JYC JV-17 亮面虎紋小提琴', '金屬拉弦板', '小提琴', 'F029', NULL, '2020-09-04 14:18:00', '2020-09-05 14:18:00'),
(42, '樂器', '小提琴 BEAUTE ETERNA小提琴', 'Product_20200423164501.jpg', 7890, 2, '小提琴 BEAUTE ETERNA小提琴', '楓木實板，鋁合金拉版，棗木配件', '小提琴', 'F030', NULL, '2020-09-05 14:18:00', '2020-09-06 14:18:00'),
(43, '樂器', 'BEAUTE ETERNA 雲杉木單板 小提琴 FL34', 'Product_20200423164502.jpg', 9200, 4, 'BEAUTE ETERNA 雲杉木單板 小提琴 FL34', '鋁合金拉版，棗木配件，手工刷漆，復古色小提琴', '小提琴', 'F030', NULL, '2020-09-06 14:18:00', '2020-09-07 14:18:00'),
(44, '樂器', 'BEAUTE ETERNA小提琴【FD12染黑配件】', 'Product_20200423164503.jpg', 6590, 3, 'BEAUTE ETERNA小提琴【FD12染黑配件】', '全楓木實板，鋁合金拉版，染黑配件', '小提琴', 'F030', NULL, '2020-09-07 14:18:00', '2020-09-08 14:18:00'),
(45, '樂器', 'BEAUTE ETERNA 雲杉木單板 小提琴 FL12', 'Product_20200423164504.jpg', 9230, 3, 'BEAUTE ETERNA 雲杉木單板 小提琴 FL12', '鋁合金拉版，棗木配件，手工刷漆，復古色小提琴', '小提琴', 'F030', NULL, '2020-09-08 14:18:00', '2020-09-09 14:18:00'),
(46, '樂器', 'YAMAHA YFL-222 長笛', 'Product_20200423164505.jpg', 24710, 1, 'YAMAHA YFL-222 長笛', '音色溫暖有深度，中、高音域集中，易控制，適合第一次使用手工吹頭者', '長笛', 'F034', NULL, '2020-09-09 14:18:00', '2020-09-10 14:18:00'),
(47, '樂器', 'YAMAHA YFL-372 長笛', 'Product_20200423164506.jpg', 54600, 1, 'YAMAHA YFL-372 長笛', '吹口管是決定音色的重要要素', '長笛', 'F034', NULL, '2020-09-10 14:18:00', '2020-09-11 14:18:00'),
(48, '樂器', 'YAMAHA YFL-272 長笛', 'Product_20200423164507.jpg', 41600, 1, 'YAMAHA YFL-272 長笛', '音色溫暖有深度，中、高音域集中，易控制，適合第一次使用手工吹頭者', '長笛', 'F034', NULL, '2020-09-11 14:18:00', '2020-09-12 14:18:00'),
(49, '樂器', '★JYC JV-402A中提琴★雲杉實木頂級音色', 'Product_20200423164508.jpg', 16400, 10, '★JYC JV-402A中提琴★雲杉實木頂級音色', '德國SANDNER學生級琴弦', '中提琴', 'F036', NULL, '2020-09-12 14:18:00', '2020-09-13 14:18:00'),
(50, '樂器', '★JYC JV-404中提琴★嚴選手工清鑲邊漆琴', 'Product_20200423164509.jpg', 18900, 12, '★JYC JV-404中提琴★嚴選手工清鑲邊漆琴', '德國AUBERT一星琴橋', '中提琴', 'F036', NULL, '2020-09-13 14:18:00', '2020-09-14 14:18:00'),
(51, '樂器', 'YAMAHA 山葉 YTS-62 專業級 次中音薩克斯風 ', 'Product_20200423164510.jpg', 130500, 2, 'YAMAHA 山葉 YTS-62 專業級 次中音薩克斯風 ', '不分音樂界限，不被時代考驗，為樂手們一致熱愛及推崇', '薩克斯風', 'F039', NULL, '2020-09-14 14:18:00', '2020-09-15 14:18:00'),
(52, '樂器', 'Zeus Alto 中音薩克斯風/黑金色　Z-A580BG', 'Product_20200423164511.jpg', 37570, 5, 'Zeus Alto 中音薩克斯風/黑金色　Z-A580BG', '德國原銅 / 台灣製造', '薩克斯風', 'F039', NULL, '2020-09-15 14:18:00', '2020-09-16 14:18:00'),
(53, '樂器', 'JUPITER JTS-500Q 次中音 薩克斯風', 'Product_20200423164512.jpg', 38350, 4, 'JUPITER JTS-500Q 次中音 薩克斯風', '喇叭口與身管可拆換，可調拇指靠座', '薩克斯風', 'F039', NULL, '2020-09-16 14:18:00', '2020-09-17 14:18:00'),
(54, '樂器', 'Zeus Alto 中音薩克斯風　Z-A580L', 'Product_20200423164513.jpg', 35100, 2, 'Zeus Alto 中音薩克斯風　Z-A580L', '德國原銅 / 台灣製造', '薩克斯風', 'F039', NULL, '2020-09-17 14:18:00', '2020-09-18 14:18:00'),
(55, '樂器', 'JUPITER JTS-700Q 次中音 薩克斯風', 'Product_20200423164514.jpg', 46800, 3, 'JUPITER JTS-700Q 次中音 薩克斯風', '德國原銅 / 台灣製造', '薩克斯風', 'F039', NULL, '2020-09-18 14:18:00', '2020-09-19 14:18:00');

-- --------------------------------------------------------

--
-- 資料表結構 `product_video`
--

CREATE TABLE `product_video` (
  `PId` int(255) NOT NULL COMMENT '商品編號',
  `PCategoryId` varchar(10) NOT NULL,
  `PName` varchar(255) NOT NULL COMMENT '商品名稱',
  `PImg` varchar(1000) NOT NULL COMMENT '圖片檔名',
  `PVideo` varchar(1000) NOT NULL COMMENT '影片檔名',
  `PPrice` int(255) NOT NULL COMMENT '商品價格',
  `PTime` varchar(255) NOT NULL COMMENT '影片時數',
  `PIntro` varchar(1000) NOT NULL COMMENT '商品簡介',
  `Pdesciption` varchar(1000) NOT NULL COMMENT '商品描述',
  `PInstrumentId` varchar(255) NOT NULL COMMENT '類別編號',
  `PCompanyId` varchar(255) NOT NULL COMMENT '上架廠商',
  `PClick` int(30) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '新增時間',
  `update_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='product_courses';

--
-- 傾印資料表的資料 `product_video`
--

INSERT INTO `product_video` (`PId`, `PCategoryId`, `PName`, `PImg`, `PVideo`, `PPrice`, `PTime`, `PIntro`, `Pdesciption`, `PInstrumentId`, `PCompanyId`, `PClick`, `created_at`, `update_at`) VALUES
(1, '影片', '【10分鐘鋼琴教室】初學者的迷思-01', 'Product_20200423164331.jpg', 'Product_20200622202222.mp4', 100, '10min', '【10分鐘鋼琴教室】初學者的迷思-01', '【10分鐘鋼琴教室】初學者的迷思-01', '鋼琴', 'F010', NULL, '2020-06-07 14:18:00', '2020-06-08 14:18:00'),
(2, '影片', '【10分鐘鋼琴教室】初學者的迷思-02', 'Product_20200423164332.jpg', 'Product_20200622202322.mp4', 100, '10min', '【10分鐘鋼琴教室】初學者的迷思-02', '【10分鐘鋼琴教室】初學者的迷思-02', '鋼琴', 'F010', NULL, '2020-06-08 14:18:00', '2020-06-09 14:18:00'),
(3, '影片', '【10分鐘鋼琴教室】初學者的迷思-03', 'Product_20200423164333.jpg', 'Product_20200622202422.mp4', 100, '10min', '【10分鐘鋼琴教室】初學者的迷思-03', '【10分鐘鋼琴教室】初學者的迷思-03', '鋼琴', 'F010', NULL, '2020-06-09 14:18:00', '2020-06-10 14:18:00'),
(4, '影片', '【10分鐘鋼琴教室】初學者的迷思-04', 'Product_20200423164334.jpg', 'Product_20200622202522.mp4', 100, '10min', '【10分鐘鋼琴教室】初學者的迷思-04', '【10分鐘鋼琴教室】初學者的迷思-04', '鋼琴', 'F010', NULL, '2020-06-10 14:18:00', '2020-06-11 14:18:00'),
(5, '影片', '【10分鐘鋼琴教室】初學者的迷思-05', 'Product_20200423164335.jpg', 'Product_20200622202622.mp4', 100, '11min', '【10分鐘鋼琴教室】初學者的迷思-05', '【10分鐘鋼琴教室】初學者的迷思-05', '鋼琴', 'F010', NULL, '2020-06-11 14:18:00', '2020-06-12 14:18:00'),
(6, '影片', '【10分鐘鋼琴教室】初學者的迷思-06', 'Product_20200423164336.jpg', 'Product_20200622202722.mp4', 100, '12min', '【10分鐘鋼琴教室】初學者的迷思-06', '【10分鐘鋼琴教室】初學者的迷思-06', '鋼琴', 'F010', NULL, '2020-06-12 14:18:00', '2020-06-13 14:18:00'),
(7, '影片', '【烏克麗麗彈奏教學】小星星', 'Product_20200423164337.jpg', 'Product_20200622202822.mp4', 150, '15min', '【烏克麗麗彈奏教學】小星星', '【烏克麗麗彈奏教學】小星星', '烏克麗麗', 'F008', NULL, '2020-06-13 14:18:00', '2020-06-14 14:18:00'),
(8, '影片', '【烏克麗麗彈奏教學】小幸運', 'Product_20200423164338.jpg', 'Product_20200622202922.mp4', 200, '22min', '【烏克麗麗彈奏教學】小幸運', '【烏克麗麗彈奏教學】小幸運', '烏克麗麗', 'F008', NULL, '2020-06-14 14:18:00', '2020-06-15 14:18:00'),
(9, '影片', '【烏克麗麗彈奏教學】小情歌', 'Product_20200423164339.jpg', 'Product_20200622203022.mp4', 200, '25min', '【烏克麗麗彈奏教學】小情歌', '【烏克麗麗彈奏教學】小情歌', '烏克麗麗', 'F008', NULL, '2020-06-15 14:18:00', '2020-06-16 14:18:00'),
(10, '影片', '【烏克麗麗彈奏教學】小蘋果', 'Product_20200423164340.jpg', 'Product_20200622203122.mp4', 180, '22min', '【烏克麗麗彈奏教學】小蘋果', '【烏克麗麗彈奏教學】小蘋果', '烏克麗麗', 'F008', NULL, '2020-06-16 14:18:00', '2020-06-17 14:18:00'),
(11, '影片', '【美美老師長笛小學堂】第一課', 'Product_20200423164341.jpg', 'Product_20200622203222.mp4', 1000, '52min', '【美美老師長笛小學堂】第一課', '【美美老師長笛小學堂】第一課', '長笛', 'F001', NULL, '2020-06-17 14:18:00', '2020-06-18 14:18:00'),
(12, '影片', '【美美老師長笛小學堂】第二課', 'Product_20200423164342.jpg', 'Product_20200622203322.mp4', 1000, '55min', '【美美老師長笛小學堂】第二課', '【美美老師長笛小學堂】第二課', '長笛', 'F001', NULL, '2020-06-18 14:18:00', '2020-06-19 14:18:00'),
(13, '影片', '【美美老師長笛小學堂】第三課', 'Product_20200423164343.jpg', 'Product_20200622203422.mp4', 1000, '57min', '【美美老師長笛小學堂】第三課', '【美美老師長笛小學堂】第三課', '長笛', 'F001', NULL, '2020-06-19 14:18:00', '2020-06-20 14:18:00'),
(14, '影片', '【美美老師長笛小學堂】第四課', 'Product_20200423164344.jpg', 'Product_20200622203522.mp4', 1000, '55min', '【美美老師長笛小學堂】第四課', '【美美老師長笛小學堂】第四課', '長笛', 'F001', NULL, '2020-06-20 14:18:00', '2020-06-21 14:18:00'),
(15, '影片', '【美美老師長笛小學堂】第五課', 'Product_20200423164345.jpg', 'Product_20200622203622.mp4', 1000, '56min', '【美美老師長笛小學堂】第五課', '【美美老師長笛小學堂】第五課', '長笛', 'F001', NULL, '2020-06-21 14:18:00', '2020-06-22 14:18:00'),
(16, '影片', '【美美老師長笛小學堂】第六課', 'Product_20200423164346.jpg', 'Product_20200622237222.mp4', 1000, '62min', '【美美老師長笛小學堂】第六課', '【美美老師長笛小學堂】第六課', '長笛', 'F001', NULL, '2020-06-22 14:18:00', '2020-06-23 14:18:00'),
(17, '影片', '【美美老師長笛小學堂】第七課', 'Product_20200423164347.jpg', 'Product_20200622203822.mp4', 1000, '62min', '【美美老師長笛小學堂】第七課', '【美美老師長笛小學堂】第七課', '長笛', 'F001', NULL, '2020-06-23 14:18:00', '2020-06-24 14:18:00'),
(18, '影片', '【薩克斯風】01', 'Product_20200423164348.jpg', 'Product_20200622203922.mp4', 1000, '65min', '【薩克斯風】01', '【薩克斯風】01', '薩克斯風', 'F022', NULL, '2020-06-24 14:18:00', '2020-06-25 14:18:00'),
(19, '影片', '【薩克斯風】02', 'Product_20200423164349.jpg', 'Product_20200622204022.mp4', 1000, '62min', '【薩克斯風】02', '【薩克斯風】02', '薩克斯風', 'F022', NULL, '2020-06-25 14:18:00', '2020-06-26 14:18:00'),
(20, '影片', '【薩克斯風】03', 'Product_20200423164350.jpg', 'Product_20200622204122.mp4', 1000, '66min', '【薩克斯風】03', '【薩克斯風】03', '薩克斯風', 'F022', NULL, '2020-06-26 14:18:00', '2020-06-27 14:18:00'),
(21, '影片', '【薩克斯風】04', 'Product_20200423164351.jpg', 'Product_20200622204222.mp4', 1000, '62min', '【薩克斯風】04', '【薩克斯風】04', '薩克斯風', 'F022', NULL, '2020-06-27 14:18:00', '2020-06-28 14:18:00'),
(22, '影片', '【薩克斯風】05', 'Product_20200423164352.jpg', 'Product_20200622204322.mp4', 1000, '64min', '【薩克斯風】05', '【薩克斯風】05', '薩克斯風', 'F022', NULL, '2020-06-28 14:18:00', '2020-06-29 14:18:00'),
(23, '影片', '【薩克斯風】06', 'Product_20200423164353.jpg', 'Product_20200622204422.mp4', 1000, '65min', '【薩克斯風】06', '【薩克斯風】06', '薩克斯風', 'F022', NULL, '2020-06-29 14:18:00', '2020-06-30 14:18:00'),
(24, '影片', '【爵士鼓教學】01', 'Product_20200423164354.jpg', 'Product_20200622204522.mp4', 500, '32min', '【爵士鼓教學】01', '【爵士鼓教學】01', '爵士鼓', 'F017', NULL, '2020-06-30 14:18:00', '2020-07-01 14:18:00'),
(25, '影片', '【爵士鼓教學】02', 'Product_20200423164355.jpg', 'Product_20200622204622.mp4', 500, '35min', '【爵士鼓教學】02', '【爵士鼓教學】02', '爵士鼓', 'F017', NULL, '2020-07-01 14:18:00', '2020-07-02 14:18:00'),
(26, '影片', '【爵士鼓教學】03', 'Product_20200423164356.jpg', 'Product_20200622204722.mp4', 500, '34min', '【爵士鼓教學】03', '【爵士鼓教學】03', '爵士鼓', 'F017', NULL, '2020-07-02 14:18:00', '2020-07-03 14:18:00'),
(27, '影片', '【爵士鼓教學】04', 'Product_20200423164357.jpg', 'Product_20200622204822.mp4', 500, '30min', '【爵士鼓教學】04', '【爵士鼓教學】04', '爵士鼓', 'F017', NULL, '2020-07-03 14:18:00', '2020-07-04 14:18:00'),
(28, '影片', '電子琴基礎教學-01', 'Product_20200423164358.jpg', 'Product_20200622204922.mp4', 550, '25min', '電子琴基礎教學-01', '電子琴基礎教學-01', '電子琴', 'F023', NULL, '2020-07-04 14:18:00', '2020-07-05 14:18:00'),
(29, '影片', '電子琴基礎教學-02', 'Product_20200423164359.jpg', 'Product_20200622205022.mp4', 550, '30min', '電子琴基礎教學-02', '電子琴基礎教學-02', '電子琴', 'F023', NULL, '2020-07-05 14:18:00', '2020-07-06 14:18:00'),
(30, '影片', '電子琴基礎教學-03', 'Product_20200423164400.jpg', 'Product_20200622205122.mp4', 550, '35min', '電子琴基礎教學-03', '電子琴基礎教學-03', '電子琴', 'F023', NULL, '2020-07-06 14:18:00', '2020-07-07 14:18:00'),
(31, '影片', '電子琴中級教學-01', 'Product_20200423164401.jpg', 'Product_20200622205222.mp4', 550, '34min', '電子琴中級教學-01', '電子琴中級教學-01', '電子琴', 'F023', NULL, '2020-07-07 14:18:00', '2020-07-08 14:18:00'),
(32, '影片', '電子琴中級教學-02', 'Product_20200423164402.jpg', 'Product_20200622205322.mp4', 550, '25min', '電子琴中級教學-02', '電子琴中級教學-02', '電子琴', 'F023', NULL, '2020-07-08 14:18:00', '2020-07-09 14:18:00'),
(33, '影片', '電子琴中級教學-03', 'Product_20200423164403.jpg', 'Product_20200622205422.mp4', 550, '32min', '電子琴中級教學-03', '電子琴中級教學-03', '電子琴', 'F023', NULL, '2020-07-09 14:18:00', '2020-07-10 14:18:00'),
(34, '影片', '【提琴教室】小提琴-01', 'Product_20200423164404.jpg', 'Product_20200622205522.mp4', 1200, '57min', '【提琴教室】小提琴-01', '【提琴教室】小提琴-01', '小提琴', 'F015', NULL, '2020-07-10 14:18:00', '2020-07-11 14:18:00'),
(35, '影片', '【提琴教室】小提琴-02', 'Product_20200423164405.jpg', 'Product_20200622205622.mp4', 1200, '55min', '【提琴教室】小提琴-02', '【提琴教室】小提琴-02', '小提琴', 'F015', NULL, '2020-07-11 14:18:00', '2020-07-12 14:18:00'),
(36, '影片', '【提琴教室】小提琴-03', 'Product_20200423164406.jpg', 'Product_20200622205722.mp4', 1200, '56min', '【提琴教室】小提琴-03', '【提琴教室】小提琴-03', '小提琴', 'F015', NULL, '2020-07-12 14:18:00', '2020-07-13 14:18:00'),
(37, '影片', '【提琴教室】小提琴-04', 'Product_20200423164407.jpg', 'Product_20200622205822.mp4', 1200, '62min', '【提琴教室】小提琴-04', '【提琴教室】小提琴-04', '小提琴', 'F015', NULL, '2020-07-13 14:18:00', '2020-07-14 14:18:00'),
(38, '影片', '【提琴教室】小提琴-05', 'Product_20200423164408.jpg', 'Product_20200622205922.mp4', 1200, '65min', '【提琴教室】小提琴-05', '【提琴教室】小提琴-05', '小提琴', 'F015', NULL, '2020-07-14 14:18:00', '2020-07-15 14:18:00'),
(39, '影片', '【提琴教室】小提琴-06', 'Product_20200423164409.jpg', 'Product_20200622212222.mp4', 1200, '62min', '【提琴教室】小提琴-06', '【提琴教室】小提琴-06', '小提琴', 'F015', NULL, '2020-07-15 14:18:00', '2020-07-16 14:18:00'),
(40, '影片', '【提琴教室】小提琴-07', 'Product_20200423164410.jpg', 'Product_20200622212322.mp4', 1200, '66min', '【提琴教室】小提琴-07', '【提琴教室】小提琴-07', '小提琴', 'F015', NULL, '2020-07-16 14:18:00', '2020-07-17 14:18:00'),
(41, '影片', '【提琴教室】小提琴-08', 'Product_20200423164411.jpg', 'Product_20200622212422.mp4', 1200, '57min', '【提琴教室】小提琴-08', '【提琴教室】小提琴-08', '小提琴', 'F015', NULL, '2020-07-17 14:18:00', '2020-07-18 14:18:00'),
(42, '影片', '【提琴教室】中提琴-01', 'Product_20200423164412.jpg', 'Product_20200622212522.mp4', 1200, '55min', '【提琴教室】中提琴-01', '【提琴教室】中提琴-01', '中提琴', 'F015', NULL, '2020-07-18 14:18:00', '2020-07-19 14:18:00'),
(43, '影片', '【提琴教室】中提琴-02', 'Product_20200423164413.jpg', 'Product_20200622212622.mp4', 1200, '56min', '【提琴教室】中提琴-02', '【提琴教室】中提琴-02', '中提琴', 'F015', NULL, '2020-07-19 14:18:00', '2020-07-20 14:18:00'),
(44, '影片', '【提琴教室】中提琴-03', 'Product_20200423164414.jpg', 'Product_20200622212722.mp4', 1200, '62min', '【提琴教室】中提琴-03', '【提琴教室】中提琴-03', '中提琴', 'F015', NULL, '2020-07-20 14:18:00', '2020-07-21 14:18:00'),
(45, '影片', '【提琴教室】中提琴-04', 'Product_20200423164415.jpg', 'Product_20200622212822.mp4', 1200, '66min', '【提琴教室】中提琴-04', '【提琴教室】中提琴-04', '中提琴', 'F015', NULL, '2020-07-21 14:18:00', '2020-07-22 14:18:00'),
(46, '影片', '【提琴教室】中提琴-05', 'Product_20200423164416.jpg', 'Product_20200622212922.mp4', 1200, '65min', '【提琴教室】中提琴-05', '【提琴教室】中提琴-05', '中提琴', 'F015', NULL, '2020-07-22 14:18:00', '2020-07-23 14:18:00'),
(47, '影片', '【提琴教室】中提琴-06', 'Product_20200423164417.jpg', 'Product_20200622213022.mp4', 1200, '62min', '【提琴教室】中提琴-06', '【提琴教室】中提琴-06', '中提琴', 'F015', NULL, '2020-07-23 14:18:00', '2020-07-24 14:18:00'),
(48, '影片', '【提琴教室】中提琴-07', 'Product_20200423164418.jpg', 'Product_20200622213122.mp4', 1200, '56min', '【提琴教室】中提琴-07', '【提琴教室】中提琴-07', '中提琴', 'F015', NULL, '2020-07-24 14:18:00', '2020-07-25 14:18:00'),
(49, '影片', '【提琴教室】中提琴-08', 'Product_20200423164419.jpg', 'Product_20200622213222.mp4', 1200, '62min', '【提琴教室】中提琴-08', '【提琴教室】中提琴-08', '中提琴', 'F015', NULL, '2020-07-25 14:18:00', '2020-07-26 14:18:00');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `userID` int(5) NOT NULL COMMENT '會員ID',
  `userName` varchar(30) DEFAULT NULL COMMENT '會員姓名',
  `userPwd` char(40) NOT NULL,
  `userPhone` varchar(10) DEFAULT NULL COMMENT '會員手機',
  `userMail` varchar(40) DEFAULT NULL COMMENT '會員信箱',
  `userBirthday` varchar(20) DEFAULT NULL COMMENT '會員生日',
  `userAddress` varchar(50) DEFAULT NULL COMMENT '會員地址',
  `userImg` varchar(100) DEFAULT NULL COMMENT '會員照片',
  `created_at` datetime NOT NULL DEFAULT current_timestamp() COMMENT '註冊時間',
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT '更新時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`userID`, `userName`, `userPwd`, `userPhone`, `userMail`, `userBirthday`, `userAddress`, `userImg`, `created_at`, `updated_at`) VALUES
(1, '傅振帆', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390001', '001@gmail.com', '1972-04-14', '桃園市龜山區兔坑里017鄰大棟山路５５２號', 'userimg000', '2019-11-25 13:18:46', '2019-11-25 13:18:46'),
(2, '蔡孟洋', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390002', '002@gmail.com', '1950-11-26', '桃園市龜山區樂善里013鄰文武街３２號', 'userimg000', '2019-11-26 13:18:46', '2019-11-25 13:18:47'),
(3, '謝凱成', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390003', '003@gmail.com', '1912-09-22', '桃園市龜山區公西里013鄰文三一街５０之１號', 'userimg000', '2019-11-27 13:18:46', '2019-11-25 13:18:48'),
(4, '鄭志賢', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390004', '004@gmail.com', '1939-06-03', '桃園市龜山區大華里026鄰文七一街１７號', 'userimg000', '2019-11-28 13:18:46', '2019-11-25 13:18:49'),
(5, '劉原花', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390005', '005@gmail.com', '1929-10-12', '桃園市龜山區大華里026鄰文七一街１７號四樓', 'userimg000', '2019-11-29 13:18:46', '2019-11-25 13:18:50'),
(6, '張月亦', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390006', '006@gmail.com', '1930-08-19', '桃園市龜山區大華里026鄰文七一街１７號三樓', 'userimg000', '2019-11-30 13:18:46', '2019-11-25 13:18:51'),
(7, '李家瑜', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390007', '007@gmail.com', '1966-08-02', '桃園市龜山區大華里026鄰文七一街１７號二樓', 'userimg000', '2019-12-01 13:18:46', '2019-11-25 13:18:52'),
(8, '張佳蓉', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390008', '008@gmail.com', '1923-09-09', '桃園市龜山區龜山里025鄰萬壽路二段７９６之１號', 'userimg000', '2019-12-02 13:18:46', '2019-11-25 13:18:53'),
(9, '彭淑玲', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390009', '009@gmail.com ', '2008-02-04', '桃園市龜山區龍華里013鄰萬壽路一段４５８號四樓', 'userimg000', '2019-12-03 13:18:46', '2019-11-25 13:18:54'),
(10, '楊嘉文', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390010', '010@gmail.com ', '1986-01-25', '桃園市龜山區龍華里013鄰萬壽路一段４５８號六樓', 'userimg000', '2019-12-04 13:18:46', '2019-11-25 13:18:55'),
(11, '張怡雯', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390011', '011@gmail.com ', '1907-10-25', '桃園市龜山區龍華里013鄰萬壽路一段４５８號五樓', 'userimg000', '2019-12-05 13:18:46', '2019-11-25 13:18:56'),
(12, '李嬌樂', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390012', '012@gmail.com ', '1999-12-19', '桃園市龜山區龍華里013鄰萬壽路一段４５８號', 'userimg000', '2019-12-06 13:18:46', '2019-11-25 13:18:57'),
(13, '陳佳恭', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390013', '013@gmail.com ', '1989-01-09', '桃園市龜山區龍華里013鄰萬壽路一段４５８號三樓', 'userimg000', '2019-12-07 13:18:46', '2019-11-25 13:18:58'),
(14, '郭裕堅', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390014', '014@gmail.com ', '1984-01-29', '桃園市龜山區龍華里013鄰萬壽路一段４５８號二樓', 'userimg000', '2019-12-08 13:18:46', '2019-11-25 13:18:59'),
(15, '陳宗翰', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390015', '015@gmail.com ', '1960-10-25', '桃園市龜山區兔坑里003鄰大同路８４１巷１６號', 'userimg000', '2019-12-09 13:18:46', '0000-00-00 00:00:00'),
(16, '鄭國榮', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390016', '016@gmail.com ', '1909-06-23', '桃園市龜山區新路里001鄰永和街７號', 'userimg000', '2019-12-10 13:18:46', '0000-00-00 00:00:00'),
(17, '柳阿孜', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390017', '017@gmail.com ', '1967-11-05', '桃園市龜山區大華里027鄰頂湖十一街８號', 'userimg000', '2019-12-11 13:18:46', '0000-00-00 00:00:00'),
(18, '戴宜裕', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390018', '018@gmail.com ', '1927-11-03', '桃園市龜山區樂善里007鄰樂學路１０３號', 'userimg000', '2019-12-12 13:18:46', '0000-00-00 00:00:00'),
(19, '張惠誠', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390019', '019@gmail.com ', '1927-04-30', '桃園市龜山區樂善里007鄰樂學路９９號二樓之１', 'userimg000', '2019-12-13 13:18:46', '0000-00-00 00:00:00'),
(20, '許小亦', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390020', '020@gmail.com ', '1983-09-29', '桃園市龜山區樂善里007鄰樂學路９９號二樓之２', 'userimg000', '2019-12-14 13:18:46', '0000-00-00 00:00:00'),
(21, '王木臻', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390021', '021@gmail.com ', '1922-12-21', '新北市中和區錦和里007鄰圓通路３６９巷３０弄２１號', 'userimg000', '2019-12-15 13:18:46', '0000-00-00 00:00:00'),
(22, '張德昇', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390022', '022@gmail.com ', '1990-07-18', '新北市中和區力行里031鄰中正路２７９之１號', 'userimg000', '2019-12-16 13:18:46', '0000-00-00 00:00:00'),
(23, '謝儒強', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390023', '023@gmail.com ', '1937-01-03', '新北市中和區安平里005鄰宜安路１７３號二樓', 'userimg000', '2019-12-17 13:18:46', '0000-00-00 00:00:00'),
(24, '陳尹州', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390024', '024@gmail.com ', '1942-03-21', '新北市中和區國華里005鄰國光街４８號', 'userimg000', '2019-12-18 13:18:46', '0000-00-00 00:00:00'),
(25, '王志穎', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390025', '025@gmail.com ', '1928-09-28', '新北市中和區國華里005鄰國光街４２號', 'userimg000', '2019-12-19 13:18:46', '0000-00-00 00:00:00'),
(26, '趙佳蓉', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390026', '026@gmail.com ', '1987-01-02', '新北市中和區國華里005鄰國光街４６號', 'userimg000', '2019-12-20 13:18:46', '0000-00-00 00:00:00'),
(27, '金姵福', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390027', '027@gmail.com ', '1917-01-01', '新北市中和區國華里005鄰國光街４８之１號十四樓', 'userimg000', '2019-12-21 13:18:46', '0000-00-00 00:00:00'),
(28, '張合凱', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390028', '028@gmail.com ', '1993-06-19', '新北市中和區國華里005鄰國光街４８之１號十三樓', 'userimg000', '2019-12-22 13:18:46', '0000-00-00 00:00:00'),
(29, '劉名宣', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390029', '029@gmail.com ', '1974-05-13', '新北市中和區國華里005鄰國光街４８之１號十一樓', 'userimg000', '2019-12-23 13:18:46', '0000-00-00 00:00:00'),
(30, '黃力紫', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390030', '030@gmail.com ', '1970-06-20', '新北市中和區國華里005鄰國光街４８之１號十樓', 'userimg000', '2019-12-24 13:18:46', '0000-00-00 00:00:00'),
(31, '黃佳良', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390031', '031@gmail.com ', '1964-12-12', '新北市中和區國華里005鄰國光街４８之１號九樓', 'userimg000', '2019-12-25 13:18:46', '0000-00-00 00:00:00'),
(32, '蔣俊嘉', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390032', '032@gmail.com ', '1953-11-08', '新北市中和區國華里005鄰國光街４８之１號八樓', 'userimg000', '2019-12-26 13:18:46', '0000-00-00 00:00:00'),
(33, '廖育瑩', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390033', '033@gmail.com ', '1951-06-26', '新北市中和區國華里005鄰國光街４８之１號七樓', 'userimg000', '2019-12-27 13:18:46', '0000-00-00 00:00:00'),
(34, '陳昭成', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390034', '034@gmail.com ', '1925-01-05', '新北市中和區國華里005鄰國光街４８之１號六樓', 'userimg000', '2019-12-28 13:18:46', '0000-00-00 00:00:00'),
(35, '陳筱涵', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390035', '035@gmail.com ', '1974-09-03', '新北市中和區國華里005鄰國光街４８之１號五樓', 'userimg000', '2019-12-29 13:18:46', '0000-00-00 00:00:00'),
(36, '蔡信宏', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390036', '036@gmail.com ', '1907-11-06', '新北市中和區國華里005鄰國光街４８之１號二樓', 'userimg000', '2019-12-30 13:18:46', '0000-00-00 00:00:00'),
(37, '錢雅婷', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390037', '037@gmail.com ', '1929-10-28', '新北市中和區國華里005鄰國光街４８之１號四樓', 'userimg000', '2019-12-31 13:18:46', '0000-00-00 00:00:00'),
(38, '楊佳宏', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390038', '038@gmail.com ', '1937-05-07', '新北市中和區國華里005鄰國光街５０號十四樓', 'userimg000', '2020-01-01 13:18:46', '0000-00-00 00:00:00'),
(39, '張怡如', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390039', '039@gmail.com ', '1956-02-13', '新北市中和區國華里005鄰國光街５０號十三樓', 'userimg000', '2020-01-02 13:18:46', '0000-00-00 00:00:00'),
(40, '王俊賢', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390040', '040@gmail.com ', '1951-05-04', '新北市中和區國華里005鄰國光街５０號十二樓', 'userimg000', '2020-01-03 13:18:46', '0000-00-00 00:00:00'),
(41, '賴榮興', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390041', '041@gmail.com ', '1975-04-13', '新北市五股區民義里001鄰民義路一段３０６號之１', 'userimg000', '2020-01-04 13:18:46', '0000-00-00 00:00:00'),
(42, '陳奕郁', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390042', '042@gmail.com ', '1943-01-30', '新北市五股區成泰里003鄰新城一路２１５號', 'userimg000', '2020-01-05 13:18:46', '0000-00-00 00:00:00'),
(43, '侯美玲', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390043', '043@gmail.com ', '1941-11-19', '新北市五股區成泰里008鄰西雲路４２之１號', 'userimg000', '2020-01-06 13:18:46', '0000-00-00 00:00:00'),
(44, '盧宗達', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390044', '044@gmail.com ', '1910-05-26', '新北市五股區興珍里033鄰五權路６６號', 'userimg000', '2020-01-07 13:18:46', '0000-00-00 00:00:00'),
(45, '崔意婷', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390045', '045@gmail.com ', '1967-05-21', '新北市五股區興珍里037鄰五工六路４２之１號', 'userimg000', '2020-01-08 13:18:46', '0000-00-00 00:00:00'),
(46, '鄧可成', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390046', '046@gmail.com ', '1951-07-13', '新北市五股區成功里013鄰成泰路三段３０９之５號', 'userimg000', '2020-01-09 13:18:46', '0000-00-00 00:00:00'),
(47, '謝文劭', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390047', '047@gmail.com ', '1901-11-14', '新北市五股區觀音里017鄰凌雲路三段田埔巷１２號之３', 'userimg000', '2020-01-10 13:18:46', '0000-00-00 00:00:00'),
(48, '陸政翰', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390048', '048@gmail.com ', '1901-10-11', '新北市五股區成泰里002鄰成泰路三段２巷８號', 'userimg000', '2020-01-11 13:18:46', '0000-00-00 00:00:00'),
(49, '孫鈺婷', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390049', '049@gmail.com ', '1910-03-17', '新北市五股區成泰里002鄰成泰路三段２巷６號', 'userimg000', '2020-01-12 13:18:46', '0000-00-00 00:00:00'),
(50, '周佳孝', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390050', '050@gmail.com ', '1944-01-22', '新北市五股區民義里003鄰民義路一段２１０號地下一層', 'userimg000', '2020-01-13 13:18:46', '0000-00-00 00:00:00'),
(51, '謝蘭輝', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390051', '051@gmail.com ', '1915-09-04', '新北市五股區民義里003鄰民義路一段２０８號地下一層', 'userimg000', '2020-01-14 13:18:46', '0000-00-00 00:00:00'),
(52, '陳佳琪', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390052', '052@gmail.com ', '1959-08-19', '新北市五股區德泰里002鄰成泰路一段１０之１號', 'userimg000', '2020-01-15 13:18:46', '0000-00-00 00:00:00'),
(53, '周雅萍', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390053', '053@gmail.com ', '1967-11-03', '新北市五股區興珍里033鄰五權三路３２之１號', 'userimg000', '2020-01-16 13:18:46', '0000-00-00 00:00:00'),
(54, '李俊瑋', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390054', '054@gmail.com ', '1947-10-20', '新北市五股區成泰里029鄰御史路７３號', 'userimg000', '2020-01-17 13:18:46', '0000-00-00 00:00:00'),
(55, '許宇軒', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390055', '055@gmail.com ', '1951-05-30', '新北市五股區成泰里029鄰御史路７５號', 'userimg000', '2020-01-18 13:18:46', '0000-00-00 00:00:00'),
(56, '陳佳穎', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390056', '056@gmail.com ', '1946-03-17', '新北市五股區成泰里029鄰御史路７１號', 'userimg000', '2020-01-19 13:18:46', '0000-00-00 00:00:00'),
(57, '陳初紹', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390057', '057@gmail.com ', '1936-12-04', '新北市五股區成泰里029鄰御史路７７號', 'userimg000', '2020-01-20 13:18:46', '0000-00-00 00:00:00'),
(58, '繆惠玲', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390058', '058@gmail.com ', '1954-05-10', '新北市五股區成泰里004鄰新五路二段２７９號', 'userimg000', '2020-01-21 13:18:46', '0000-00-00 00:00:00'),
(59, '吳品祥', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390059', '059@gmail.com ', '1959-11-09', '新北市五股區觀音里015鄰凌雲路三段８４巷２號之３', 'userimg000', '2020-01-22 13:18:46', '0000-00-00 00:00:00'),
(60, '胡素毓', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390060', '060@gmail.com ', '1962-08-31', '新北市五股區集賢里010鄰成泰路三段５７７巷９２之１號', 'userimg000', '2020-01-23 13:18:46', '0000-00-00 00:00:00'),
(61, '黃惠城', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390061', '061@gmail.com ', '1971-04-27', '新北市板橋區湳興里020鄰南雅東路２９巷３之３號', 'userimg000', '2020-01-24 13:18:46', '0000-00-00 00:00:00'),
(62, '蕭可財', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390062', '062@gmail.com ', '1938-06-05', '新北市板橋區福丘里018鄰中山路一段１３９之６號二樓', 'userimg000', '2020-01-25 13:18:46', '0000-00-00 00:00:00'),
(63, '諸家祥', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390063', '063@gmail.com ', '1961-06-14', '新北市板橋區福丘里018鄰中山路一段１３９之６號四樓', 'userimg000', '2020-01-26 13:18:46', '0000-00-00 00:00:00'),
(64, '黃佩珊', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390064', '064@gmail.com ', '1973-11-18', '新北市板橋區福丘里018鄰中山路一段１３９之６號七樓', 'userimg000', '2020-01-27 13:18:46', '0000-00-00 00:00:00'),
(65, '林昱聖', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390065', '065@gmail.com ', '2001-11-04', '新北市板橋區福丘里018鄰中山路一段１３９之６號', 'userimg000', '2020-01-28 13:18:46', '0000-00-00 00:00:00'),
(66, '張佳宇', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390066', '066@gmail.com ', '1996-03-30', '新北市板橋區華興里005鄰縣民大道一段９０號', 'userimg000', '2020-01-29 13:18:46', '0000-00-00 00:00:00'),
(67, '王允昆', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390067', '067@gmail.com ', '1953-10-29', '新北市板橋區民族里005鄰民族路２２５巷４７號', 'userimg000', '2020-01-30 13:18:46', '0000-00-00 00:00:00'),
(68, '李佳雯', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390068', '068@gmail.com ', '1924-08-03', '新北市板橋區民族里005鄰民族路２２５巷４５號', 'userimg000', '2020-01-31 13:18:46', '0000-00-00 00:00:00'),
(69, '林建舜', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390069', '069@gmail.com ', '1970-02-21', '新北市板橋區幸福里011鄰幸福路６０巷８７號三樓', 'userimg000', '2020-02-01 13:18:46', '0000-00-00 00:00:00'),
(70, '劉盛威', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390070', '070@gmail.com ', '1954-07-19', '新北市板橋區幸福里011鄰幸福路６０巷８７號四樓', 'userimg000', '2020-02-02 13:18:46', '0000-00-00 00:00:00'),
(71, '吳品婷', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390071', '071@gmail.com ', '1947-12-20', '新北市板橋區幸福里011鄰幸福路６０巷８７號六樓', 'userimg000', '2020-02-03 13:18:46', '0000-00-00 00:00:00'),
(72, '張展菁', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390072', '072@gmail.com ', '1984-05-19', '新北市板橋區幸福里011鄰幸福路６０巷８７號五樓', 'userimg000', '2020-02-04 13:18:46', '0000-00-00 00:00:00'),
(73, '曹康玫', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390073', '073@gmail.com ', '2001-12-07', '新北市板橋區幸福里011鄰幸福路６０巷８７號七樓', 'userimg000', '2020-02-05 13:18:46', '0000-00-00 00:00:00'),
(74, '李玫亮', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390074', '074@gmail.com ', '1908-10-01', '新北市板橋區幸福里011鄰幸福路６０巷８７號八樓', 'userimg000', '2020-02-06 13:18:46', '0000-00-00 00:00:00'),
(75, '賴怡士', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390075', '075@gmail.com ', '1998-09-30', '新北市板橋區幸福里011鄰幸福路６０巷８７號二樓', 'userimg000', '2020-02-07 13:18:46', '0000-00-00 00:00:00'),
(76, '王志星', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390076', '076@gmail.com ', '1909-10-08', '新北市板橋區幸福里011鄰幸福路６０巷８７號十樓', 'userimg000', '2020-02-08 13:18:46', '0000-00-00 00:00:00'),
(77, '王佩樺', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390077', '077@gmail.com ', '1949-06-10', '新北市板橋區幸福里011鄰幸福路６０巷８７號十一樓', 'userimg000', '2020-02-09 13:18:46', '0000-00-00 00:00:00'),
(78, '王逸群', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390078', '078@gmail.com ', '1967-10-05', '新北市板橋區幸福里011鄰幸福路６０巷８７號十二樓', 'userimg000', '2020-02-10 13:18:46', '0000-00-00 00:00:00'),
(79, '錢怡君', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390079', '079@gmail.com ', '1992-02-15', '新北市板橋區幸福里011鄰幸福路６０巷８７號十三樓', 'userimg000', '2020-02-11 13:18:46', '0000-00-00 00:00:00'),
(80, '黃俊韻', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390080', '080@gmail.com ', '1998-04-18', '新北市板橋區幸福里011鄰幸福路６０巷８７號十四樓', 'userimg000', '2020-02-12 13:18:46', '0000-00-00 00:00:00'),
(81, '陳玉卿', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390081', '081@gmail.com ', '1961-07-05', '新北市蘆洲區仁義里002鄰集賢路３３６巷２號', 'userimg000', '2020-02-13 13:18:46', '0000-00-00 00:00:00'),
(82, '林勝玟', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390082', '082@gmail.com ', '1999-06-29', '新北市蘆洲區仁義里006鄰集賢路３３６巷６號五樓', 'userimg000', '2020-02-14 13:18:46', '0000-00-00 00:00:00'),
(83, '游耿南', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390083', '083@gmail.com ', '1961-03-25', '新北市蘆洲區仁義里006鄰集賢路３３６巷６號三樓', 'userimg000', '2020-02-15 13:18:46', '0000-00-00 00:00:00'),
(84, '黃嘉芳', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390084', '084@gmail.com ', '1932-11-18', '新北市蘆洲區仁義里006鄰集賢路３３６巷６號四樓', 'userimg000', '2020-02-16 13:18:46', '0000-00-00 00:00:00'),
(85, '邱志意', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390085', '085@gmail.com ', '1951-03-21', '新北市蘆洲區仁義里006鄰集賢路３３６巷６號', 'userimg000', '2020-02-17 13:18:46', '0000-00-00 00:00:00'),
(86, '陳宜利', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390086', '086@gmail.com ', '1916-11-11', '新北市蘆洲區仁義里006鄰集賢路３３６巷６號二樓', 'userimg000', '2020-02-18 13:18:46', '0000-00-00 00:00:00'),
(87, '葉耿雯', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390087', '087@gmail.com ', '1917-02-21', '新北市蘆洲區九芎里007鄰長安街２２巷５之１號', 'userimg000', '2020-02-19 13:18:46', '0000-00-00 00:00:00'),
(88, '夏靖雯', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390088', '088@gmail.com ', '1934-07-29', '新北市蘆洲區水河里016鄰民族路４０８巷８５號', 'userimg000', '2020-02-20 13:18:46', '0000-00-00 00:00:00'),
(89, '邱淑育', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390089', '089@gmail.com ', '1901-10-29', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號十一樓', 'userimg000', '2020-02-21 13:18:46', '0000-00-00 00:00:00'),
(90, '林人容', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390090', '090@gmail.com ', '1930-01-20', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號二樓', 'userimg000', '2020-02-22 13:18:46', '0000-00-00 00:00:00'),
(91, '吳雯婷', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390091', '091@gmail.com ', '1907-12-29', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號六樓', 'userimg000', '2020-02-23 13:18:46', '0000-00-00 00:00:00'),
(92, '陳冠欣', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390092', '092@gmail.com ', '2008-03-25', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號四樓', 'userimg000', '2020-02-24 13:18:46', '0000-00-00 00:00:00'),
(93, '趙湘婷', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390093', '093@gmail.com ', '1955-05-05', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號七樓', 'userimg000', '2020-02-25 13:18:46', '0000-00-00 00:00:00'),
(94, '江佳伸', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390094', '094@gmail.com ', '1929-06-22', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號五樓', 'userimg000', '2020-02-26 13:18:46', '0000-00-00 00:00:00'),
(95, '廖雅萍', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390095', '095@gmail.com ', '2013-12-27', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號三樓', 'userimg000', '2020-02-27 13:18:46', '0000-00-00 00:00:00'),
(96, '陳俊宇', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390096', '096@gmail.com ', '2020-04-18', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號十二樓', 'userimg000', '2020-02-28 13:18:46', '0000-00-00 00:00:00'),
(97, '張慈康', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390097', '097@gmail.com ', '1948-11-15', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號九樓', 'userimg000', '2020-02-29 13:18:46', '0000-00-00 00:00:00'),
(98, '舒淑真', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390098', '098@gmail.com ', '1978-09-17', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號十樓', 'userimg000', '2020-03-01 13:18:46', '0000-00-00 00:00:00'),
(99, '賁俊賢', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390099', '099@gmail.com ', '1963-05-29', '新北市蘆洲區正義里025鄰長榮路１６８巷１０號八樓', 'userimg000', '2020-03-02 13:18:46', '0000-00-00 00:00:00'),
(100, '王淑君', 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', '0919390100', '100@gmail.com ', '1961-06-24', '新北市蘆洲區正義里003鄰光榮路１２０巷２２弄２６號十樓', 'userimg000', '2020-03-03 13:18:46', '0000-00-00 00:00:00');

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
-- 資料表索引 `forumabout`
--
ALTER TABLE `forumabout`
  ADD PRIMARY KEY (`ForumId`);

--
-- 資料表索引 `manu_instrument`
--
ALTER TABLE `manu_instrument`
  ADD PRIMARY KEY (`Mid`);

--
-- 資料表索引 `manu_video`
--
ALTER TABLE `manu_video`
  ADD PRIMARY KEY (`Mid`);

--
-- 資料表索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`NewsID`);

--
-- 資料表索引 `news_category`
--
ALTER TABLE `news_category`
  ADD PRIMARY KEY (`NewsCategoryID`);

--
-- 資料表索引 `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`orderItem`);

--
-- 資料表索引 `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`orderId`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`PId`);

--
-- 資料表索引 `product_courses`
--
ALTER TABLE `product_courses`
  ADD PRIMARY KEY (`PId`);

--
-- 資料表索引 `product_favorite`
--
ALTER TABLE `product_favorite`
  ADD PRIMARY KEY (`FavId`);

--
-- 資料表索引 `product_instruments`
--
ALTER TABLE `product_instruments`
  ADD PRIMARY KEY (`PId`);

--
-- 資料表索引 `product_video`
--
ALTER TABLE `product_video`
  ADD PRIMARY KEY (`PId`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `userMail` (`userMail`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `cart`
--
ALTER TABLE `cart`
  MODIFY `cartItem` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '購物車明細編號', AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `forumabout`
--
ALTER TABLE `forumabout`
  MODIFY `ForumId` int(4) NOT NULL AUTO_INCREMENT COMMENT '討論區ID', AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `manu_instrument`
--
ALTER TABLE `manu_instrument`
  MODIFY `Mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `manu_video`
--
ALTER TABLE `manu_video`
  MODIFY `Mid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `NewsID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `orderItem` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單明細編號', AUTO_INCREMENT=17;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `orderId` tinyint(10) NOT NULL AUTO_INCREMENT COMMENT '訂單編號', AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `PId` int(255) NOT NULL AUTO_INCREMENT COMMENT '商品編號', AUTO_INCREMENT=201;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_courses`
--
ALTER TABLE `product_courses`
  MODIFY `PId` int(255) NOT NULL AUTO_INCREMENT COMMENT '商品編號', AUTO_INCREMENT=97;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_favorite`
--
ALTER TABLE `product_favorite`
  MODIFY `FavId` int(255) NOT NULL AUTO_INCREMENT COMMENT '最愛編號', AUTO_INCREMENT=19;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_instruments`
--
ALTER TABLE `product_instruments`
  MODIFY `PId` int(255) NOT NULL AUTO_INCREMENT COMMENT '商品編號', AUTO_INCREMENT=56;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_video`
--
ALTER TABLE `product_video`
  MODIFY `PId` int(255) NOT NULL AUTO_INCREMENT COMMENT '商品編號', AUTO_INCREMENT=50;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user`
--
ALTER TABLE `user`
  MODIFY `userID` int(5) NOT NULL AUTO_INCREMENT COMMENT '會員ID', AUTO_INCREMENT=101;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2020-07-02 07:28:05
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
  `NewsContent` varchar(3000) NOT NULL,
  `NewsClick` int(255) NOT NULL COMMENT '點擊次數'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='News資料表';

--
-- 傾印資料表的資料 `news`
--

INSERT INTO `news` (`NewsID`, `NewsCategory`, `NewsTitle`, `NewsDate`, `NewsDateTitle`, `NewsAddress`, `NewsImg`, `NewsLink`, `NewsContent`, `NewsClick`) VALUES
(1, '活動', '古典管絃樂團2020夏季音樂會', '2020-07-05', '109年7月5號 (日) 14:30', '臺中市中山堂', 'news_001.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0CKGT93', '古典管絃樂團創立於1998年，創辦人兼藝術總監為小提琴家曾慶然先生(前國立臺灣交響樂團首席)，樂團目標在於培養台灣音樂表演、創作之教育專業人才為主要目標，讓這些年輕的音樂家們具有音樂藝術專業技術及專業知能，多年來我們在台北國家音樂廳、台中中興堂、中山堂等專業場地表演已超過百餘場次，目前古典管絃樂團已經是台灣青少年樂團中最具代表性且最大樂團之一。\n\n本次音樂會的內容包括:優美的羅西尼 : 絃樂奏鳴曲及葛利格 : 民歌組曲，藉由團員輕巧的雙手將輕快美妙的音符，傳遞四方。另外由八位團員聯合演出演出作曲家韋瓦第四支小提琴協奏曲，韋瓦第是巴洛克時期器樂作曲技巧之寶，欣賞年輕團員的演出，將會留下深刻而美好的迴響。\n\n壓軸節目是，邀請知小提琴家吳庭毓及曾慶然聯袂演出維瓦第: 四季小提琴協奏曲，吳庭毓是現任國家交響樂團首席，曾慶然是前國立台灣交響樂團首席與國內首屈一指的音樂家合作演出，更能讓中部地區的廣大音樂愛好者，無距離的體會音樂之美，並能感受到一場細緻而磅礡的古典盛宴。\n\n演出曲目\n\n維瓦第：四季小提琴協奏曲\n　　　　小提琴：吳庭毓-春、夏\n　　　　小提琴：曾慶然-秋、冬\n\n維瓦第：四支小提琴協奏曲\n\n羅西尼：絃樂奏鳴曲\n\n葛利格：民歌組曲', 0),
(2, '活動', '2020新竹縣東興國小第四屆擊樂音樂會', '2020-07-08', '109年7月8號 (三) 19:30', '新竹縣政府文化局演藝廳', 'news_002.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0CP4M3V', '從青澀懵懂　到氣定自信　再到大將風範\n\n這些年　我們手握琴槌　腳踩節奏\n\n共度了精彩的孩提歲月\n\n \n　　新竹縣東興國小打擊樂團成軍邁入第六年，團員從低年級打練習板、數節奏開始，走入擊樂的世界，到高年級時手握四隻琴槌、腳踩爵士大鼓，練就了十八般武藝和扎實的打擊技巧。背著琴槌袋上學是我們的日常，默契在經年累月的合奏中培養到極致；目光交會、點頭聳肩，是樂曲的點綴；solo也好、陪襯也罷，只要全員站在舞台上，就是動人的畫面。\n\n　　「我們是這樣敲敲打打地長大」，從無敵鐵金剛到大黃蜂，從兒童話劇到百老匯音樂劇，從經典曲目到自創曲，我們大膽嘗試、勤奮苦練，轉眼間已長大成為獨領風騷的樂手。這些年，我們不僅敲敲打打地長大，也在一場場音樂會中茁壯；每年夏季的音樂會，是我們擦亮招牌的時候，東興擊樂不畏外頭風雨，使盡渾身解數，挑戰嶄新風貌。連續第四年，邀請舊雨新知闔家共賞，見證東興擊樂如何從稚氣轉變成獨當一面。', 0),
(3, '活動', '2020馬聿明小提琴獨奏會', '2020-07-11', '109年7月11號 (六) 19:30', '衛武營國家藝術文化中心表演廳', 'news_003.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0DFGZJ7', '2020 馬聿明小提琴獨奏會 Yu-Ming Ma Violin Recital\r\n\r\n馬聿明，1997年出生於臺灣，從小就展露對藝術的熱愛及天份，先後師事安那多里、張睿洲、Todor Pelev, Ivan Zenaty, Jinjoo Cho, Jan Sloman, Jaime Laredo, 等大師，2015畢業於Idyllwild Arts Academy音樂系，2019年取得Cleveland Institute of Music學士學位，目前獲得全額獎學金，於美國Rice Univirsity攻讀研究所，與Paul Kantor教授學習，欲藉由舉辦個人獨奏會，傳頌內心深層的感動，與聽眾一同享受音樂世界的美好\r\n\r\n演出曲目\r\nBach - Sonata No. 2 in A minor, BWV1003\r\n巴哈：A小調第二號小提琴奏鳴曲，BWV1003\r\n\r\nPaganini - Caprice No. 10\r\n\r\n帕格尼尼：第十號小提琴隨想曲\r\n\r\nKreisler - Recitativo and Scherzo-Caprice, Op. 6\r\n\r\n克萊斯勒：宣敘調與詼諧曲，作品六\r\n\r\nStrauss - Violin Sonata in E-flat major, Op. 18\r\n\r\n史特勞斯：降E大調小提琴奏鳴曲，作品十八\r\n\r\n★主辦單位保留節目更動權\r\n\r\n演出者簡介\r\n\r\n馬聿明 MA,YU-MING\r\n\r\n   馬聿明，1997年出生於台灣，五歲啟蒙於前高市交首席安那多里老師，先後師事現任國台交首席張睿洲、Todor Pelev, Ivan Zenaty, Jinjoo Cho, Jan Sloman, Jaime Laredo, 等老師，並曾接受胡乃元教授、歐陽慧剛教授、1986年柴可夫斯基大賽小提琴冠軍得主 Movses Pogossian, Henry Gronnier, Aranovskaya, Zvonnikov, Lynn Chang, Augustin Hadelich, Vadim Gluzman, Almita Vamos, 等多位國際大師指導。十四歲赴美國 Idyllwild Arts Academy 深造，擔任IAA orchestra 首席，大學畢業於Cleveland Institute of Music，目前獲得全額獎學金，於美國Rice Univirsity攻讀研究所，與Paul Kantor教授學習，主修小提琴。\r\n\r\n   2009年至2011年擔任由周安瑞老師所指揮高雄市交響樂團附設青少年管弦樂團首席，並分別於2009、2011、2012、2014、2016、2017及2018舉辦個人小提琴獨奏會，2017和國台交首席張睿洲、李百佳和呂孟君老師共同演出室內樂，深受好評。2013年贏得IAA協奏曲比賽，與IAA Orchestra 合作演出，擔任柴可夫斯基小提琴協奏曲獨奏。2014年贏得Inland Velly Young Artist Concerto Competition 第三名。室內樂獲邀於全美廣播電台聯播節目\"From the Top\"，現場採訪演出，2016年獲得New York String Orchestra全額獎學金，2018年再度受邀於紐約卡內基音樂廳演出，並擔任二提首席。2017年參加Aspen音樂節，2019年參加Kneisel室內樂音樂節皆獲得全額獎學金。2017年3月在克里弗蘭音樂學院的協奏曲比賽中贏得honorable mention，於2017年秋季與CIM Orchestra合作演出Chausson Poeme。2018年由簡文彬大師指揮與雄頌管弦樂團合作，擔任獨奏演出德弗札克小提琴協奏曲，2019年與弦樂四重奏 Quartet Avanzare 晉級 Fischoff 室內樂大賽的半決賽，2020年二月受邀至韓國統營國際音樂節擔任guess artist，並與Jinjoo Cho, Mathieu Herzog, Eric Wong, Brannon Cho, 及 Karol Marianowski 同台演出弦樂六重奏。', 0),
(4, '活動', '《40.續》2020陳怡君單簧管獨奏會', '2020-07-19', '109年7月19號 (日) 14:30', '花蓮郭子究音樂文化館 二館表演廳', 'news_004.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N07QU9ZU', '《40.續》2020陳怡君單簧管獨奏會 \r\n\r\n享受、探索與追求40人生的精彩，續～ \r\n\r\n年滿40的這一年，經歷許多徬徨、欣喜、振奮之後，少了激情，多了沉穩；少了放任，多了責任，《40.續》獻給在事業、家庭間打拼的女人，讓我們繼續探索生活的美好。這場演出挑選了不同樂派的樂曲，更特別委託新銳作曲家 周宣宏創作《願》一曲，象徵著人在不同階段都會有願望，無論人生如何轉變，內心原始的「願」始終維持著最核心的自己，也支持著自己持續向前。\r\n\r\n \r\n\r\nEnjoy, explore and pursue the wonderful life of 40. SHE (continue~)\r\n\r\n“40-she” meaning to keep exploring the beauty of life, continue to pursue the beauty of music, and encourage many women who are struggling between their careers and families.“Vow” written by Hsuan-Hung Chou, a young talented Taiwanese composer, dedicated to a hard woman, whether you are about to turn forty, or have already experienced the time. In the year of no doubt, we have the beauty of music and continue to enjoy the music !\r\n\r\n \r\n\r\n【演奏者】\r\n\r\n單簧管｜陳怡君（Clarinet｜I-Chun Chen）\r\n\r\n鋼琴｜于汶蕙（Piano｜Wen-Hui Yu）', 0),
(5, '活動', '黃采羚琴笛獨奏會', '2020-07-24', '109年7月24號 (五) 19:30', '高雄市音樂館', 'news_005.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0D17AF2', '黃采羚\n\n2001年出生於台灣高雄市。6歲開始學習鋼琴，9歲學習長笛，畢業於加昌國小、新興國中音樂班、高雄中學音樂班，鋼琴師事張雅舜老師、長笛師事林玲如老師。2017年以副修長笛榮獲105學年度全國學生音樂大賽長笛國中A組特優第一名，保送高雄中學音樂班；同年榮獲台灣扶輪教育基金會獎學金。高中時期以鋼琴、長笛為雙主修，並於今年以長笛主修考取國立高雄師範大學音樂系。\n\n \n\n鋼琴現師事 張雅舜老師，曾師事 陳芝羽老師，在學期間曾參加國內外音樂營，並曾接受 范姜毅、郭姿妤、陳必先、陳俐慧、Christian Wilm Müller、Kirill Monorosi ，等教授大師班指導。\n\n長笛現師事 林玲如老師，也曾多次參加國內外音樂營，並曾接受劉慧謹、林薏蕙、黃貞瑛、馬曉珮、吳思芳、林鴻君、陳怡婷、Philippe Bernold 、 Gaby Pas-Van Riet 、 Jim Walker、 Andrea Oliva、Vincent Lucas、Walter Auer、Karl-Heinz Schütz，等教授大師班指導。\n\n \n\n本場音樂會是我人生中第一場的個人獨奏會，感謝一路在身旁為我加油打氣的人，一次帶給觀眾兩種不同樂器的音樂饗宴，作為自己一路學習音樂的一場成果展，也是即將邁入大學前的一場啟程序幕。\n\n \n\n指導老師：鋼琴∕張雅舜老師 . 長笛∕林玲如老師  鋼琴合作：陳柏豪老師\n\n \n\n演出曲目:\n\n \n\nPiano:\n\n \n\nBach:Prelude and Fugue No.9 in E Major, BWV 854   \n\n \n\nMozart: Piano Sonata No. 12 in F Major, K. 332  \n\n \n\nLiszt:Rigoletto Paraphrase\n\n \n\nFlute:\n\n \n\nC.P.E.Bach: Hamburger Sonata No.133in G Major\n\n \n\nH. Dutilleux: Sonatine for Flute and Piano\n\n \n\nF. Borne: Carmen Fantasy for Flute and Piano\n\n \n\n全長90分鐘，含中場休息15分鐘\n', 0),
(6, '活動', '柯嘉惠、楊妮蓉雙鋼琴音樂會', '2020-07-25', '109年7月25號 (六) 19:30', '大東文化藝術中心 演藝廳', 'news_006.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0DX46LC', '節目介紹 \r\n\r\n此場音樂會將由兩位鋼琴家柯嘉惠與楊妮蓉攜手演出多首經典雙鋼琴曲作品，並以多元的音樂風格與充滿異國風情的樣貌呈現，曲目類型選自作曲家原創作品、改編為雙鋼琴版本以及主題變奏曲等創作，演出作品包含耳熟能詳古典時期作曲家莫札特唯一的雙鋼琴奏鳴曲創作，浪漫時期有鋼琴詩人之稱蕭邦改編其鋼琴獨奏作品的雙鋼琴版本C大調輪旋曲，以及三位民族音樂代表作曲家雙鋼琴作品，如西班牙作曲家阿爾班尼士《伊貝利亞》組曲中，最為知名且極具西班牙民俗舞蹈特色的《特里亞納》，柴可夫斯基自經典芭蕾舞劇《胡桃鉗》創作中選曲為雙鋼琴而作的《胡桃鉗組曲》，以及盧托斯拉夫斯基以帕格尼尼《第二十四號隨想曲》的主題改編具炫技性的《帕格尼尼雙鋼琴主題變奏曲》。\r\n\r\n此場雙鋼琴音樂會期待能帶給愛樂者聽覺的享受之外，藉由多元的音樂曲目與型態，一探古典作曲家在創作中欲傳達的意涵，進而引領聽眾感受雙鋼琴音樂之美，同時也提升社會大眾藝術文化之素養。\r\n\r\n演出人員\r\n\r\n鋼琴 / 柯嘉惠\r\n\r\n畢業於美國俄亥俄州立大學音樂研究所，鋼琴演奏博士(Doctor of Musical Arts)，國內畢業於國立台灣師範大學音樂系，曾師事李金里，王穎。1992年赴美，主修鋼琴演奏，師事Dr. Harper, Dr. Platt & Mr. Glaser。曾榮獲OSU 校內管弦樂協奏曲首獎，並隨團巡迴演出。 在校期間擔任音樂助教，除教授大學部音樂基礎訓練外，並擔任各項室內樂專屬伴奏。曾在美舉辦多場鋼琴獨奏會、室內樂音樂會。並榮獲兩年Dr. Haddack 獎學金。1998獲選為全美榮譽組織Phi Kappa Phi會員。取得鋼琴演奏博士學位歸國後，相繼於各縣市文化局演藝廳等地舉辦鋼琴獨奏會與室內樂音樂會。也曾於台中，高雄，台東等地講辦多次音樂講座與「亞歷山大放鬆技巧」等。曾任教台南應用科技大學，台東大學，國立屏東教育大學等大專院校。目前專任於高雄市立空中大學，國立中山大學與高雄中學音樂班。\r\n\r\n鋼琴 / 楊妮蓉\r\n\r\n畢業於光仁中學音樂班、國立台灣藝術專科學校音樂科(現國立台灣藝術大學)、東吳大學音樂系、國立中山大學音樂研究所，主修鋼琴演奏，曾師事張靜枝、李文修、施勝譽、蔡奎一、陳俐慧及李美文教授。取得碩士學位後榮獲鋼琴伴奏助教全額獎學金，赴美密西根州立大學(Michigan State University)攻讀音樂藝術博士學位(Doctor of Musical Arts)，主修鋼琴演奏，師事美國范•克萊本鋼琴大賽銀牌得主Mr. PanayisLyras教授。就讀密西根州立大學期間於音樂廳 Music Auditorium舉辦多場鋼琴獨奏會、室內樂音樂會以及解說音樂會，並榮獲全額獎學金擔任專任鋼琴伴奏助教，除器樂伴奏外，亦受聲樂教授Richard Fracker (Area Chair of Vocal Arts at MSU)之邀，獲榮譽獎學金擔任聲樂伴奏。\r\n\r\n取得鋼琴演奏博士學位歸國後，相繼於國家演奏廳、多縣市文化局演藝廳等地舉辦鋼琴獨奏會，受邀參與巴洛克協奏曲與多重室內樂組合之音樂會演出。國內演出外，亦於2009年7月赴捷克布拉格參與室內樂音樂節「Ameropa Chamber Music Festival」，於Kaiserstejn Palace、Theresian Hall、Jan HanusMusic School Concert Hall等多處音樂廳巡迴演奏。除了密集的音樂演出與教學，亦投入進行學術研究，曾擔任國立嘉義大學駐校藝術家以及國立中山大學音樂學系博士後研究人員，相繼受邀於國立中山大學、台北教育大學及台灣藝術大學舉辦之國際學術研討會發表論文，探討議題分別為「消失的傳統–從Clementi到Chopin的開放式踏板」、「巴爾托克鋼琴踏板技巧與教學應用」、「淺談十九世紀具代表性鋼琴演奏家之炫技風格與詮釋探討」。曾任教國立臺灣藝術大學音樂系暨研究所、台北基督書院及多所國高中音樂班，目前任教於高雄醫學大學通識教育中心與國立中山大學音樂學系。\r\n\r\n\r\n全長75分鐘，含中場休息15分鐘', 0),
(7, '公告', '衛生福利部疾病管制署【武漢肺炎】防疫宣導', '2020-07-01', '', '依公告為準', 'news_007.jpg', 'http://www.westgarden.com.tw/2020/01/09/%E8%A1%9B%E7%94%9F%E7%A6%8F%E5%88%A9%E9%83%A8%E7%96%BE%E7%97%85%E7%AE%A1%E5%88%B6%E7%BD%B2%E3%80%90%E6%AD%A6%E6%BC%A2%E8%82%BA%E7%82%8E%E3%80%91%E9%98%B2%E7%96%AB%E5%AE%A3%E5%B0%8E/', '若您近期曾去過武漢，且出現身體不適的狀況...\r\n\r\n一、請撥打防疫專線1922，並戴口罩盡快就醫。\r\n二、就醫時告知醫師武漢旅遊史，接觸史及不適症狀等。\r\n三、生病在家休息不出門，減少或避免與他人接觸。\r\n四、咳嗽打噴嚏時，以紙巾或衣袖掩口鼻。\r\n五、有呼吸道症狀應持續戴口罩。', 0),
(8, '活動', '高雄女中合唱成果發表音樂會《颺 I will rise》', '2020-07-15', '109年7月15號 (日) 19:30', '高雄市音樂館演奏廳', 'news_008.jpg', 'https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0EH18QR', 'https://www.facebook.com/KGCR110 高雄女中合唱團粉絲專頁\r\n\r\n \r\n\r\n高雄女中合唱團每年不管在全國學生音樂比賽或是鄉土歌謠比賽都拿到優秀的成績，並且也曾受邀參加多次聯合演出，因此希望能將今年的努力做一次完整的發表。\r\n\r\n \r\n\r\n演出節目選自不同國家語言及風格，呈現合唱多元的文化，除此之外，亦橫跨古典音樂至近代流行音樂，展現出各音樂時期不同的風貌，使觀眾們也能感受合唱藝術的層次與美好。\r\n\r\n \r\n\r\n全長70分鐘，含中場休息10分鐘', 0);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`NewsID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `NewsID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

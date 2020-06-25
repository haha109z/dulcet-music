import React,{Component} from 'react'
// import '../../../../styles/custom.scss'
//第一區塊
// import AboutImgBackground1 from '../../../img/About小圖片1.jpg'
import Carousel from '../../text/Carousel'
import AOS from 'aos';


class AboutList extends Component {

  componentDidMount(){

    AOS.init({
        duration : 1000, // 持續時間
        easing: 'ease-out-back',
    })

}

render(){
//   <div className="App">
//   <Carousel cols={3} gap={10}>
//     <Carousel.Item>
//       <div className="item"><img src={require('../../../img/About/女生001.jpg')}/></div>
//     </Carousel.Item>
//     <Carousel.Item>
//       <div className="item">12</div>
//     </Carousel.Item>
//     <Carousel.Item>
//       <div className="item">13</div>
//     </Carousel.Item>
//     <Carousel.Item>
//       <div className="item">21</div>
//     </Carousel.Item>
//     <Carousel.Item>
//       <div className="item">22</div>
//     </Carousel.Item>
//     <Carousel.Item>
//       <div className="item">23</div>
//     </Carousel.Item>
//   </Carousel>
// </div>
  return (
    <>
    <div className="AboutAll">
      <div className="AboutContainer">
        {/* 第一區塊 */}

        <h2 className="AboutH2">關於我們</h2>
        <div className="AboutList1">
          <p className="AboutP">
            庸庸碌碌的平淡生活有時總不免讓你陷入迷茫，若是失去了持續堅持的動力，不妨暫時借助音樂的力量吧!悠然動人的節奏，總是能撫慰每顆疲憊的心靈。隨著流瀉而出的動聽旋律，翩然起舞，彷彿就能暫時拋下生活中的紛紛擾擾、那些讓你感到不如意的小事，再次喚醒你心中那股對生命的熱情與活力。
            <br></br>
            這樣的感動與撫慰，為許多人的生命帶來源源不絕的力量。在每個令你感到悲傷難堪的時刻，音樂永遠都不會背棄你。
            <br></br>
            <br></br>
            Dulcet
            Music是由一群熱愛音樂的夥伴所創立，將音樂美學發揚光大就是Dulcet
            Music
            成立的初衷。我們相信音樂可以感動人心，更可以豐富每個人的生命。為了將音樂的感動帶給更多人，我們成立了
            Dulcet Music 這個網站，並致力於推廣音樂美學教育。<br></br>
            <br></br>
            誠摯邀請您和我們一起，徜徉在樂句之間，讓我們一起將這樣的感動帶給更多人。
          </p>
          
          <img
            className="AboutImgPicture1"
            src={require('../../../img/About/About小圖片1.jpg') } 
            alt="AboutImgBackground1"
          />
         
        </div>
        {/* 第二區塊 */}
        <div className="AboutList2">
          {/* 第二區塊左邊*/}
          <div className="About2Left">
            <h2 className="AboutNorthH2">北部上課地點</h2>
            <p className="AboutP2Left">
              營業時間：平日09:00-22:00/六日 09:00-1800
            </p>
            <p className="AboutP2Left">店家電話：(02)2222-2222 </p>
            <p className="AboutP2Left AboutP2LeftBottom">
              店家地址：台北市南港區忠孝東路八段100巷
            </p>
            <a href="https://goo.gl/maps/PAS9FGoYtjVnARou8">
            <img
              className="AboutImgPicture2"
              src={require('../../../img/About/地圖圖片1.png')}
              alt="AboutImgBackground2"
            />
            </a>
          </div>
          {/* 第二區塊右邊 */}
          <div className="About2Right">
            <img
              className="About2ImgBackground About2ImgBackground1"
              src={require('../../../img/About/環境圖片1.jpg')}
              alt="About2ImgBackground1"
            />
            <img
              className="About2ImgBackground About2ImgBackground2"
              src={require('../../../img/About/環境圖片2.jpg')}
              alt="About2ImgBackground2"
            />
            <img
              className="About2ImgBackground About2ImgBackground3"
              src={require('../../../img/About/環境圖片3.jpg')}
              alt="About2ImgBackground3"
            />
            <img
              className="About2ImgBackground About2ImgBackground4"
              src={require('../../../img/About/環境圖片4.jpg')}
              alt="About2ImgBackground4"
            />
            <img
              className="About2ImgBackground About2ImgBackground5"
              src={require('../../../img/About/環境圖片5.jpg')}
              alt="About2ImgBackground5"
            />
          </div>
        </div>

        {/* 第三區塊 */}
        <div className="About3List">
          {/* 第三區塊左邊*/}
          <div className="About3Left">
            <h2 className="AboutNorthH3">南部上課地點</h2>
            <p className="AboutP3Left">
              營業時間：平日09:00-22:00/六日 09:00-1800
            </p>
            <p className="AboutP3Left">店家電話：(02)2222-2222 </p>
            <p className="AboutP3Left AboutP3LeftBottom">
              店家地址：台北市南港區忠孝東路八段100巷
            </p>
            <a href="https://goo.gl/maps/eLAmk9EmoTkEnzTq8">
            <img
              className="AboutImgPicture3"
              src={require('../../../img/About/地圖圖片2.png')}
              alt="AboutImgBackground3"
            />
            </a>
          </div>
          {/* 第三區塊右邊 */}
          <div className="About3Right">
            <img
              className="About2ImgBackground About3ImgBackground6"
              src={require('../../../img/About/環境圖片6.jpg')}
              alt="About3ImgBackground6"
            />
            <img
              className="About2ImgBackground About3ImgBackground7"
              src={require('../../../img/About/環境圖片7.jpg')}
              alt="About3ImgBackground7"
            />
            <img
              className="About2ImgBackground About3ImgBackground8"
              src={require('../../../img/About/環境圖片8.jpg')}
              alt="About3ImgBackground8"
            />
            <img
              className="About2ImgBackground About3ImgBackground9"
              src={require('../../../img/About/環境圖片9.jpg')}
              alt="About3ImgBackground9"
            />
            <img
              className="About2ImgBackground About3ImgBackground10"
              src={require('../../../img/About/環境圖片10.jpg')}
              alt="About3ImgBackground10"
            />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
}
export default AboutList

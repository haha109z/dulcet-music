import React, { Component } from 'react'
// import '../../../../styles/custom.scss'
//第一區塊
// import AboutImgBackground1 from '../../../img/About小圖片1.jpg'
import AOS from 'aos'
// import { Map, GoogleApiWrapper } from 'google-maps-react';

class AboutList extends Component {
  componentDidMount() {
    AOS.init({
      duration: 1000, // 持續時間
      easing: 'ease-out-back',
    })
  }

  handle_click = () => {
    let t = this
    fetch('http://localhost:3030/forum', { method: 'GET' }).then(function (
      res
    ) {
      console.log(res)
      res.json().then(function (data) {
        console.log(data)
        t.setState({
          news: data,
        })
      })
    })
  }

  render() {
    return (
      <>
        <div className="AboutAll">
          <div className="AboutContainer">
            {/* 第一區塊 */}

            <h2 className="AboutH2" data-aos="fade-right">關於我們</h2>

            <div className="AboutList1">
              <p className="AboutP"  data-aos="fade-right">
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
                className="AboutImgPicture1" data-aos="fade-left"
                // data-aos-easing="linear" 
                // data-aos-duration="1000"
                // data-aos-offset="1000" 
                src={require('../../../img/About/About小圖片1.jpg')}
                alt="AboutImgBackground1"
              />
            </div>
            {/* 第二區塊 */}
            <div className="AboutList2">
              {/* 第二區塊左邊*/}
              <div className="About2Left">
                <h2 className="AboutNorthH2" data-aos="fade-right">北部上課地點</h2>
                <p className="AboutP2Left" data-aos="fade-right">
                  營業時間：平日09:00-22:00/六日 09:00-1800
                </p>
                <p className="AboutP2Left" data-aos="fade-right">店家電話：(02)2222-2222 </p>
                <p className="AboutP2Left AboutP2LeftBottom" data-aos="fade-right">
                  店家地址：台北市南港區忠孝東路八段100巷
                </p>
                <iframe
                data-aos="fade-right"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903.7512771439361!2d121.54285102921996!3d25.03390069899826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd3781b82e1%3A0x236cb0c3abec563b!2z5Y-w54Gj6LKh5a-M566h55CG6KaP5YqD6aGn5ZWP6KqN6K2J5Y2U5pyD!5e0!3m2!1szh-TW!2stw!4v1593613278549!5m2!1szh-TW!2stw"
                  width="600"
                  height="450"
                  frameborder="0"
                  className="AboutImgPicture2"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
                {/* <img
              className="AboutImgPicture2" 
              src={require('../../../img/About/地圖圖片1.png')}
              alt="AboutImgBackground2"
            /> */}
              </div>
              {/* 第二區塊右邊 */}
              <div className="About2Right">
                <img
                data-aos="fade-left"
                  className="About2ImgBackground About2ImgBackground1"
                  src={require('../../../img/About/環境圖片1.jpg')}
                  alt="About2ImgBackground1"
                />
                <img
                data-aos="fade-left"
                  className="About2ImgBackground About2ImgBackground2"
                  src={require('../../../img/About/環境圖片2.jpg')}
                  alt="About2ImgBackground2"
                />
                <img
                data-aos="fade-right"
                  className="About2ImgBackground About2ImgBackground3"
                  src={require('../../../img/About/環境圖片3.jpg')}
                  alt="About2ImgBackground3"
                />
                <img
                data-aos="fade-right"
                  className="About2ImgBackground About2ImgBackground4"
                  src={require('../../../img/About/環境圖片4.jpg')}
                  alt="About2ImgBackground4"
                />
                <img
                data-aos="fade-left"
                  className="About2ImgBackground About2ImgBackground5"
                  src={require('../../../img/About/環境圖片5.jpg')}
                  alt="About2ImgBackground5"
                />
              </div>
            </div>

            {/* 第三區塊 */}
            <div className="About3List">
              {/* 第三區塊左邊*/}
              <div className="About3Left" data-aos="fade-right">
                <h2 className="AboutNorthH3"  data-aos="fade-right">南部上課地點</h2>
                <p className="AboutP3Left" data-aos="fade-right">
                  營業時間：平日09:00-22:00/六日 09:00-1800
                </p>
                <p className="AboutP3Left" data-aos="fade-right">店家電話：(02)2222-2222 </p>
                <p className="AboutP3Left AboutP3LeftBottom" data-aos="fade-right">
                  店家地址：台北市南港區忠孝東路八段100巷
                </p>
                <iframe
                 data-aos="fade-right"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.4718176140286!2d120.30055825818086!3d22.61857989628977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04810aa47f45%3A0x2e4d5da398a08ad1!2zODAy6auY6ZuE5biC6IuT6ZuF5Y2A5LuB576p6KGXMTMx5be3MeW8hDHomZ8!5e0!3m2!1szh-TW!2stw!4v1593613748204!5m2!1szh-TW!2stw"
                  width="600"
                  height="450"
                  frameborder="0"
                  className="AboutImgPicture3"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
              {/* 第三區塊右邊 */}
              <div className="About3Right">
                <img
                 data-aos="fade-right"
                  className="About2ImgBackground About3ImgBackground6"
                  src={require('../../../img/About/環境圖片6.jpg')}
                  alt="About3ImgBackground6"
                />
                <img
                 data-aos="fade-right"
                  className="About2ImgBackground About3ImgBackground7"
                  src={require('../../../img/About/環境圖片7.jpg')}
                  alt="About3ImgBackground7"
                />
                <img
                 data-aos="fade-left"
                  className="About2ImgBackground About3ImgBackground8"
                  src={require('../../../img/About/環境圖片8.jpg')}
                  alt="About3ImgBackground8"
                />
                <img
                 data-aos="fade-left"
                  className="About2ImgBackground About3ImgBackground9"
                  src={require('../../../img/About/環境圖片9.jpg')}
                  alt="About3ImgBackground9"
                />
                <img
                 data-aos="fade-right"
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
// export default GoogleApiWrapper({
//   apiKey: 'TOKEN HERE'
// })(MapContainer);

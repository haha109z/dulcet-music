import React, { Component } from 'react'

//從localStorage抓user(他是一個陣列)
const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}
const userL =()=>{
  return JSON.parse(localStorage.getItem('user'))
}
export default class UserVideo extends Component {
  // 建立一個空狀態準備放抓出來的資料
  state = {
    user: []
  };
  constructor() {
    super() // => 記得呼叫 parent 的 constructor，很重要
    if(userL()==null){
      window.location = '/';
     }
    }
  // 在這個生命週期中渲染資料
  componentDidMount() {
if(getUserInfo()){
  let user = getUserInfo()
    // JSON.parse(localStorage.getItem('user'));
    // console.log("user", user[0])
    // alert(`${user[0].userID}歡迎您～！` )
      this.setState({user: user[0]}) 
}else{
  this.setState({user: ""}) 
}
    
  }

  render() {
    return (
      <>
        <div className="UserVideo-main">
          <h3 className="font-size-142rem UserVideo-top-titleName user-font-ch">
          {/* //顯示資料 */}
            我的影片{this.state.user.username}
          </h3>
          <form className="UserVideo-search" action="">
            <input
              className="UserVideo-search-input user-font-ch "
              placeholder="請輸入關鍵字"
              type="text"
            />
            <p className="user-font-ch UserVideo-search-404title">
              請輸入商品或訂單關鍵字
            </p>
            <input className="UserVideo-search-button" type="button" value="送出" />
          </form>

          <hr className="UserVideo-divider" />

          <div className="UserVideo-order">
            <div className="UserVideo-order-item">
              <div className="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserVideo-order-item-text">
                <p className="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p className="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>

              <button
                type="button"
                className="UserVideo-order-item-button user-font-ch"
              >
                立即觀看
              </button>
            </div>
            <div className="UserVideo-order-item">
              <div className="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserVideo-order-item-text">
                <p className="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p className="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p className=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                className="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div className="UserVideo-order-item">
              <div className="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserVideo-order-item-text">
                <p className="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p className="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p className=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                className="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div className="UserVideo-order-item">
              <div className="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserVideo-order-item-text">
                <p className="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p className="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p className=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                className="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div className="UserVideo-order-item">
              <div className="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserVideo-order-item-text">
                <p className="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p className="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p className=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                className="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div className="UserVideo-order-item">
              <div className="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="UserVideo-order-item-text">
                <p className="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p className="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！他的你規劃了完全入門的團他的你規劃了完全入門的團他的你規劃了完全入門的團v
                </p>
              </div>
              <p className=" UserVideo-order-item-more">More...</p>

              <button
                type="button"
                className="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
          </div>
          <div className="user-page">
            <a className="user-page-Rarrow">
              <i className="fas fa-sort-up"></i>
            </a>
            <button className="user-page-number">1</button>
            <button className="user-page-number">2</button>
            <button className="user-page-number">3</button>
            <button className="user-page-number">4</button>
            <button className="user-page-x">...</button>
            <a className="user-page-Larrow">
              <i className="fas fa-sort-up"></i>
            </a>
          </div>
          <div className="userRwd-dropdown ">
            <button type="button" className="userRwd-dropbtn">
              頁數
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="userRwd-dropdown-content">
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

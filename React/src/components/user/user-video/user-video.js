import React, { Component } from 'react'

//從localStorage抓user(他是一個陣列)
const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}
let userID = ''
if (getUserInfo()) {
  userID = getUserInfo()[0].userID
}

export default class UserVideo extends Component {
  // 建立一個空狀態準備放抓出來的資料
  state = {
    videoData: [],
  }
  getVideoData() {
    fetch('http://localhost:3030/user/UserVideo', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ userID }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then((response) => {
        this.setState({ videoData: response.data })
      })
  }

  async componentDidMount() {
    await this.getVideoData()
  }
  constructor() {
    super() // => 記得呼叫 parent 的 constructor，很重要
    if (getUserInfo() == null) {
      window.location = '/'
    }
  }

  render() {
    console.log(this.state.videoData)

    return (
      <>
        <div className="UserVideo-main">
          <h3 className="font-size-142rem UserVideo-top-titleName user-font-ch">
            {/* //顯示資料 */}
            我的影片
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
            <input
              className="UserVideo-search-button"
              type="button"
              value="送出"
            />
          </form>

          <hr className="UserVideo-divider" />

          <div className="UserVideo-order">
            {this.state.videoData.map((item, index) => (
              <>
                <div className="UserVideo-order-item">
                  <div className="UserVideo-order-item-img">
                    <img src="" alt="" dataimg={item.PImg} />
                  </div>
                  <div className="UserVideo-order-item-text">
                    <p className="user-font-ch UserVideo-order-item-text-name">
                      {item.PName}
                    </p>
                    <p className="user-font-ch UserVideo-order-item-text-specification">
                      {item.Pdesciption}
                    </p>
                  </div>
                  <a
                    href=""
                    className="UserVideo-order-item-button user-font-ch"
                  >
                  立即觀看
                  </a>
                </div>
              </>
            ))}
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

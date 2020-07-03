import React, { Component } from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)
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
    videoData: [], //全部資料
    showVideoData: [],
    pageNum: 1,
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
        this.showData()
      })
  }
  lookVideo(PVideo, PName) {
    MySwal.fire({
      type: 'warning', // 彈框類型
      title: PName, //標題
      text: '', //顯示內容
      icon: '', //icon圖示
      // grow:"fullscreen",
      width: '70%',
      confirmButtonColor: '#141414', // 確定按鈕的 顏色
      confirmButtonText: '返回', // 確定按鈕的 文字
      html: `<video src=http://localhost:3030/images/product/${PVideo} controls="true" controlslist="nodownload" width="80%" height="80%">
        
        </video>`,
      focusCancel: true, // 是否聚焦 取消按鈕
      reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
    })
  }
  changePage(e) {
    console.log(e)
    this.setState({pageNum:Number(e)})
    this.showData()
  }
  showData() {
    const { videoData, pageNum } = this.state
    let showVideoData = videoData.slice((pageNum - 1) * 5, pageNum * 5)
    this.setState({ showVideoData: showVideoData })
  }

  componentDidMount() {
    this.getVideoData()
  }
  constructor() {
    super()
    if (getUserInfo() == null) {
      window.location = '/'
    }
  }

  render() {
    let page = []
    console.log(Math.ceil(this.state.videoData.length / 5))
    for (let i = 1; i <= Math.ceil(this.state.videoData.length / 5); i++) {
      page.push(i)
    }
    console.log(page)

    // console.log(this.state.showVideoData)

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
            {this.state.showVideoData.map((item, index) => (
              <>
                <div className="UserVideo-order-item">
                  <div className="UserVideo-order-item-img">
                    <img
                      src={`http://localhost:3030/images/product/${item.PImg}`}
                      alt=""
                    />
                  </div>
                  <div className="UserVideo-order-item-text">
                    <p className="user-font-ch UserVideo-order-item-text-name">
                      {item.PName}
                    </p>
                    <p className="user-font-ch UserVideo-order-item-text-specification">
                      {item.Pdesciption}
                    </p>
                  </div>
                  <button
                    href=""
                    className="UserVideo-order-item-button user-font-ch"
                    onClick={() => this.lookVideo(item.PVideo, item.PName)}
                  >
                    立即觀看
                  </button>
                </div>
              </>
            ))}
          </div>
          <div className="user-page">
            <a className="user-page-Rarrow">
              <i className="fas fa-sort-up"></i>
            </a>
            {page.map((e) => (
              <button
                onClick={() => this.changePage(e)}
                className="user-page-number"
              >
                {e}
              </button>
            ))}

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
              {page.map((e) => (
                <button onClick={() => this.changePage(e)}>{e}</button>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

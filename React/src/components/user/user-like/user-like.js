import React, { Component } from 'react'

export default class UserLike extends Component {
  state = {
    likeData: [],
    showLikeData: [],
    pageNum: 1,
  }
  getOrder() {
    // 先取出localStorage 裡的ＩＤ準備傳給後端判斷要取誰的資料
    if(localStorage.getItem('user')){
      const userID = JSON.parse(localStorage.getItem('user'))[0].userID

    
    fetch('http://localhost:3030/user/UserLike', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({ userID }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.likeData);
        // 回傳回來後放到預設狀態中
        this.setState((state, props) => ({
          likeData: json.likeData,
        }))
        // 在呼叫控制顯示在換面上筆數的fun
        this.showData()
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
}
  // 控制每頁顯示幾筆
  showData() {
    // console.log(this.state.likeData);
    let { likeData, pageNum } = this.state

    this.setState({
      showLikeData: likeData.slice((pageNum - 1) * 5, pageNum * 5),
    })
  }

  constructor() {
    super()
    // 呼叫主fun
    this.getOrder()
  }

  render() {
    let showLikeData = this.state.showLikeData
    // console.log(likeOrder)
    return (
      <>
        {}
        <div className="UserLike-main">
          <h3 className="font-size-142rem UserLike-top-titleName user-font-ch">
            我的最愛
          </h3>

          <form className="UserLike-search" action="">
            <input
              className="UserLike-search-input user-font-ch"
              placeholder="請輸入關鍵字"
              type="text"
            />

            <p className="user-font-ch UserLike-search-404title user-font-ch">
              請輸入商品或訂單關鍵字
            </p>

            <input
              className="UserLike-search-button user-font-ch"
              type="button"
              value="送出"
            />
          </form>
          <hr className="UserLike-divider" />
          {showLikeData.map((item, index) => (
            <>
              <div className="UserLike-order">
                <div className="UserLike-order-item">
                  <div className="UserLike-order-item-img">
                    <img
                      src={require('../../../img/home_logo_方.png')}
                      alt=""
                    />
                  </div>
                  <div className="UserLike-order-item-text">
                    <p className="user-font-ch UserLike-order-item-text-name user-font-ch">
                      {item.PName}
                    </p>
                    <p className="user-font-ch UserLike-order-item-text-specification">
                      分類：{item.PCategoryId}
                    </p>

                    <div className="d-flex UserLike-order-item-text-money">
                      <p className="user-font-ch UserLike-order-item-text-money-1">
                        價格
                      </p>{' '}
                      <p className="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                        $
                      </p>
                      <p className="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                        {item.PPrice}
                      </p>{' '}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="UserLike-order-item-button user-font-ch "
                  >
                    前往商品頁面
                  </button>
                </div>
                <hr className="UserLike-order-divider" />
              </div>
            </>
          ))}

          {/* 電腦page */}

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
          {/* 手機版page */}
          <div className="userRwd-dropdown ">
            <button type="button" className="userRwd-dropbtn">
              頁數
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="userRwd-dropdown-content">
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

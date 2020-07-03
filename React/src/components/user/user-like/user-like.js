import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
const userL = () => {
  return JSON.parse(localStorage.getItem('user'))
}
export default class UserLike extends Component {
  state = {
    likeData: [],
    showLikeData: [],
    pageNum: 1,
    pageList: [],
    pageStyle: '1',
    pageRwd: false,
  }
  changePageL = () => {
    console.log('L')
    let { pageNum } = this.state
    // console.log(pageNum)
  }
  changePageR = () => {
    let { likeData } = this.state
    // 目前頁數
    let { pageNum } = this.state
    // 目前頁數＋1
    let pageNumR = Number(pageNum) + 1
    // 總共幾頁
    if (pageNumR <= Math.ceil(likeData.length / 5)) {
      this.setState({ pageNum: pageNumR })
      setTimeout(() => {
        this.showData()
        this.setState({ pageStyle: pageNumR + '' })
      }, 100)
      this.bokTop()
    }
  }
  changePageR = () => {
    let { likeData } = this.state
    // 目前頁數
    let { pageNum } = this.state
    // 目前頁數＋1
    let pageNumR = Number(pageNum) + 1
    // 總共幾頁
    if (pageNumR <= Math.ceil(likeData.length / 5)) {
      this.setState({ pageNum: pageNumR })
      setTimeout(() => {
        this.showData()
        this.setState({ pageStyle: pageNumR + '' })
      }, 100)
      this.bokTop()
    }
  }
  changePageL = () => {
    let { likeData } = this.state
    // 目前頁數
    let { pageNum } = this.state
    // 目前頁數＋1
    let pageNumR = Number(pageNum) - 1
    // 總共幾頁
    if (pageNumR >= 1) {
      this.setState({ pageNum: pageNumR })
      setTimeout(() => {
        this.showData()
        this.setState({ pageStyle: pageNumR + '' })
      }, 100)
      this.bokTop()
    }
  }
  showPageRwd = () => {
    this.setState({ pageRwd: true })
  }
  getOrder = () => {
    // 先取出localStorage 裡的ＩＤ準備傳給後端判斷要取誰的資料
    if (localStorage.getItem('user')) {
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
          this.setState({ likeData: json.likeData })
          // 在呼叫控制顯示在換面上筆數的fun
          this.showData()
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }

  // 控制每頁顯示幾筆
  showData = () => {
    // console.log(this.state.likeData);
    let { likeData, pageNum } = this.state
    this.setState({
      showLikeData: likeData.slice((pageNum - 1) * 5, pageNum * 5),
    })
    // // 決定分幾頁
    // let page = Math.ceil(
    //   this.state.likeData.length / this.state.showLikeData.length
    // )
    // let pageNumArry = []
    // for (let i = 1; i <= page; i++) {
    //   pageNumArry.push(i)
    // }
    // this.setState((state, props) => ({
    //   pageList: pageNumArry,
    // }))
  }

  chagePage = (e) => {
    e = e.currentTarget.textContent
    this.setState({ pageNum: Number(e) })

    setTimeout(() => {
      let { likeData, pageNum } = this.state
      this.setState({
        showLikeData: likeData.slice((pageNum - 1) * 5, pageNum * 5),
      })
      this.setState({
        pageStyle: pageNum,
      })
      this.setState({ pageRwd: false })
    }, 0)

    document.documentElement.scrollTop = 0
  }
  bokTop() {
    document.documentElement.scrollTop = 0
  }

  constructor() {
    super()
    // 呼叫主fun
    this.getOrder()
    let { showLikeData, likeData } = this.state
    let { pageList } = this.state
    if (userL() == null) {
      window.location = '/'
    }
  }

  render() {
    let { showLikeData, likeData } = this.state
    let { pageList } = this.state
    // console.log('likeData', likeData)
    // console.log('showLikeData', showLikeData)

    let num = Math.ceil(this.state.likeData.length / 5)
    let page = []

    for (let i = 1; i <= num; i++) {
      page.push(i)
    }
    // console.log(page)

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
              <div key={index} className="UserLike-order">
                <div className="UserLike-order-item">
                  <div className="UserLike-order-item-img">
                    <img
                      src={`http://localhost:3030/images/product/${item.PImg}`}
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
                    onClick={() => (window.location = `/${item.PCategoryId == '影片' ? item.PCategoryId = 'video' : (item.PCategoryId  == '課程' ? item.PCategoryId  = 'course' : item.PCategoryId = 'instrument')}/${item.PId}`)}
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
            <button className="user-page-Rarrow" onClick={this.changePageL}>
              <i className="fas fa-sort-up"></i>
            </button>
            {page.map((item, index) => (
              <button
                className={
                  this.state.pageStyle == item
                    ? 'user-page-number user-page-numberHover'
                    : 'user-page-number'
                }
                key={index}
                onClick={this.chagePage}
              >
                {item}
              </button>
            ))}

            <button className="user-page-Larrow" onClick={this.changePageR}>
              <i className="fas fa-sort-up"></i>
            </button>
          </div>
          {/* 手機版page */}
          <div className="userRwd-dropdown" onClick={this.showPageRwd}>
            <button type="button" className="userRwd-dropbtn">
              第&nbsp;{this.state.pageNum}&nbsp;頁
              <i className="fas fa-sort-down"></i>
            </button>
            <div
              className={
                this.state.pageRwd
                  ? 'userRwd-dropdown-content'
                  : 'userRwd-dropdown-content-none'
              }
            >
              {page.map((item, index) => (
                <button
                  id={`btn${item}`}
                  className={
                    this.state.pageStyle == item ? 'user-page-numberHover' : ''
                  }
                  key={index}
                  onClick={this.chagePage}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </>
    )
  }
}

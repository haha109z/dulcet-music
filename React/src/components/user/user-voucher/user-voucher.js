import React, { Component } from 'react'
const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('coupon'))
}
var couponlist = ''
if (getUserInfo()) {
  let coupon = getUserInfo()
  if (coupon[0].coupon) {
    let now = new Date()
    const date = `${now.getFullYear()}-${now.getMonth() + 3}-${now.getDate()}`
    var couponlist = { coupon: coupon[0].coupon, coupondate: date }
    // console.log(date)
  }
}

export default class UserVoucher extends Component {
  constructor() {
    super()
    this.state = {
      count: [couponlist],
    }
  }

  render() {
    let { count } = this.state
    // console.log(count)
    let listPage = []
    let listPageRWD = []
    let countLenght = Math.ceil(count.length / 8)
    console.log(countLenght)

    for (let i = 1; i <= countLenght; i++) {
      console.log('i' + i)
      //記得在JSX中使用JS變數要用花括號包著
      listPageRWD.push(
        <>
          <a href="#">{i}</a>
        </>
      )
    }

    for (let i = 1; i <= countLenght; i++) {
      console.log('i' + i)
      //記得在JSX中使用JS變數要用花括號包著
      listPage.push(
        <>
          {' '}
          <button className="user-page-number">{i}</button>
        </>
      )
    }

    return (
      <>
        <div className="userVoucher-main">
          <h3 className="font-size-142rem userVoucher-top-titleName user-font-ch">
            我的優惠卷
          </h3>

          <form className="userVoucher-search" action="">
            <input
              className="userVoucher-search-input user-font-ch "
              placeholder="請輸入關鍵字"
              type="text"
            />

            <p className="user-font-ch userVoucher-search-404title"></p>

            <input
              className="userVoucher-search-button user-font-ch "
              type="button"
              value="送出"
            />
          </form>

          <hr className="userVoucher-divider" />

          <div className="userVoucher-item">
            <div className="userVoucher-item-card">
              <div className="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="userVoucher-item-card-divider"></div>
              <p className="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p className=" userVoucher-item-card-num user-color-red">
                {this.state.count[0].coupon}
              </p>
              <p className="user-font-ch userVoucher-item-card-date">
                到期日期 {this.state.count[0].coupondate}
              </p>
              <p className="user-font-ch userVoucher-item-card-copy">
                複製折扣碼
              </p>
            </div>
          </div>

          <div className="user-page">
            <a className="user-page-Rarrow">
              <i className="fas fa-sort-up"></i>
            </a>
            {listPage}
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
            <div className="userRwd-dropdown-content">{listPageRWD}</div>
          </div>
        </div>
      </>
    )
  }
}

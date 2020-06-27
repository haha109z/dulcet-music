import React, { Component } from 'react'
const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('coupon'))
}
if (getUserInfo()) {
  let coupon = getUserInfo()
  if (coupon[0].coupon) {
    var coupon1 = coupon[0].coupon
  }
}
export default class UserVoucher extends Component {

  constructor() {
    super()
    this.state = {
      count:coupon1,
    }
  }
 

  render() {   
    console.log(this.state.count)
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
            <p className="user-font-ch userVoucher-search-404title">
              請輸入商品或訂單關鍵字
            </p>

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
                aaa12398
              </p>
              <p className="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p className="user-font-ch userVoucher-item-card-copy">
                複製折扣碼
              </p>
            </div>

            <div className="userVoucher-item-card">
              <div className="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="userVoucher-item-card-divider"></div>
              <p className="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p className=" userVoucher-item-card-num user-color-red">
                aaa12398
              </p>
              <p className="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p className="user-font-ch userVoucher-item-card-copy">
                複製折扣碼
              </p>
            </div>
            <div className="userVoucher-item-card">
              <div className="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="userVoucher-item-card-divider"></div>
              <p className="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p className=" userVoucher-item-card-num user-color-red">
                aaa12398
              </p>
              <p className="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p className="user-font-ch userVoucher-item-card-copy">
                複製折扣碼
              </p>
            </div>
            <div className="userVoucher-item-card">
              <div className="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="userVoucher-item-card-divider"></div>
              <p className="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p className=" userVoucher-item-card-num user-color-red">
                aaa12398
              </p>
              <p className="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p className="user-font-ch userVoucher-item-card-copy">
                複製折扣碼
              </p>
            </div>
            <div className="userVoucher-item-card">
              <div className="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="userVoucher-item-card-divider"></div>
              <p className="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p className=" userVoucher-item-card-num user-color-red">
                aaa12398
              </p>

              <p className="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p className="user-font-ch userVoucher-item-card-copy">
                複製折扣碼
              </p>
            </div>
            <div className="userVoucher-item-card">
              <div className="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="userVoucher-item-card-divider"></div>
              <p className="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p className=" userVoucher-item-card-num user-color-red">
                aaa12398
              </p>
              <p className="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
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

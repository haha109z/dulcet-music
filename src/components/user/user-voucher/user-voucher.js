import React, { Component } from 'react'

export default class UserVoucher extends Component {
  render() {
    return (
      <>
      
        <div class="userVoucher-main">
          <h3 class="font-size-142rem userVoucher-top-titleName">我的優惠卷</h3>

          <form class="userVoucher-search" action="">
            <input
              class="userVoucher-search-input"
              placeholder="請輸入關鍵字"
              type="text"
            />
            <input
              class="userVoucher-search-button"
              type="button"
              value="送出"
            />
          </form>
          <p class="userVoucher-search-404title">請輸入商品或訂單關鍵字</p>

          <hr class="userVoucher-divider" />
          <div class="userVoucher-item">
            <div class="userVoucher-item-card">
            <div class="userVoucher-item-card-img"><img src="./logo.png" alt=""/></div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="userVoucher-item-card-title">結帳金額減免200元</p>
              <p class="userVoucher-item-card-date">到期日期2020-00-00</p>
              <p class="userVoucher-item-card-now">立即使用</p>
            </div>
            <div class="userVoucher-item-card">
            <div class="userVoucher-item-card-img"><img src="./logo.png" alt=""/></div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="userVoucher-item-card-title">結帳金額減免200元</p>
              <p class="userVoucher-item-card-date">到期日期2020-00-00</p>
              <p class="userVoucher-item-card-now">立即使用</p>
            </div>
            <div class="userVoucher-item-card">
            <div class="userVoucher-item-card-img"><img src="./logo.png" alt=""/></div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="userVoucher-item-card-title">結帳金額減免200元</p>
              <p class="userVoucher-item-card-date">到期日期2020-00-00</p>
              <p class="userVoucher-item-card-now">立即使用</p>
            </div>
            <div class="userVoucher-item-card">
            <div class="userVoucher-item-card-img"><img src="./logo.png" alt=""/></div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="userVoucher-item-card-title">結帳金額減免200元</p>
              <p class="userVoucher-item-card-date">到期日期2020-00-00</p>
              <p class="userVoucher-item-card-now">立即使用</p>
            </div>
            <div class="userVoucher-item-card">
            <div class="userVoucher-item-card-img"><img src="./logo.png" alt=""/></div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="userVoucher-item-card-title">結帳金額減免200元</p>
              <p class="userVoucher-item-card-date">到期日期2020-00-00</p>
              <p class="userVoucher-item-card-now">立即使用</p>
            </div>
            <div class="userVoucher-item-card">
            <div class="userVoucher-item-card-img"><img src="./logo.png" alt=""/></div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="userVoucher-item-card-title">結帳金額減免200元</p>
              <p class="userVoucher-item-card-date">到期日期2020-00-00</p>
              <p class="userVoucher-item-card-now">立即使用</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

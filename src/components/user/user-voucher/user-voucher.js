import React, { Component } from 'react'

export default class UserVoucher extends Component {
  render() {
    return (
      <>
        <div class="userVoucher-main">
          <h3 class="font-size-142rem userVoucher-top-titleName user-font-ch">
            我的優惠卷
          </h3>

          <form class="userVoucher-search" action="">
            <input
              class="userVoucher-search-input user-font-ch "
              placeholder="請輸入關鍵字"
              type="text"
            />
            <p class="user-font-ch userVoucher-search-404title">
              請輸入商品或訂單關鍵字
            </p>

            <input
              class="userVoucher-search-button user-font-ch "
              type="button"
              value="送出"
            />
          </form>

          <hr class="userVoucher-divider" />
          <div class="userVoucher-item">
            <div class="userVoucher-item-card">
              <div class="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p class=" userVoucher-item-card-num user-color-red">aaa12398</p>
              <p class="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p class="user-font-ch userVoucher-item-card-copy">複製折扣碼</p>
            </div>
            <div class="userVoucher-item-card">
              <div class="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p class=" userVoucher-item-card-num user-color-red">aaa12398</p>
              <p class="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p class="user-font-ch userVoucher-item-card-copy">複製折扣碼</p>
            </div>
            <div class="userVoucher-item-card">
              <div class="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p class=" userVoucher-item-card-num user-color-red">aaa12398</p>
              <p class="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p class="user-font-ch userVoucher-item-card-copy">複製折扣碼</p>
            </div>
            <div class="userVoucher-item-card">
              <div class="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p class=" userVoucher-item-card-num user-color-red">aaa12398</p>
              <p class="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p class="user-font-ch userVoucher-item-card-copy">複製折扣碼</p>
            </div>
            <div class="userVoucher-item-card">
              <div class="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p class=" userVoucher-item-card-num user-color-red">aaa12398</p>

              <p class="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p class="user-font-ch userVoucher-item-card-copy">複製折扣碼</p>
            </div>
            <div class="userVoucher-item-card">
              <div class="userVoucher-item-card-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="userVoucher-item-card-divider"></div>
              <p class="user-font-ch userVoucher-item-card-title">
                結帳金額減免200元
              </p>
              <p class=" userVoucher-item-card-num user-color-red">aaa12398</p>
              <p class="user-font-ch userVoucher-item-card-date">
                到期日期2020-00-00
              </p>
              <p class="user-font-ch userVoucher-item-card-copy">複製折扣碼</p>
            </div>
          </div>
          <div class="user-page">
            <a class="user-page-Rarrow">
              <i class="fas fa-sort-up"></i>
            </a>
            <button class="user-page-number">1</button>
            <button class="user-page-number">2</button>
            <button class="user-page-number">3</button>
            <button class="user-page-number">4</button>
            <button class="user-page-x">...</button>
            <a class="user-page-Larrow">
              <i class="fas fa-sort-up"></i>
            </a>
          </div>
        </div>
      </>
    )
  }
}

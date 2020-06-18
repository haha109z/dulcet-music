import React, { Component } from 'react'

export default class UserVideo extends Component {
  render() {
    return (
      <>
        <div class="UserVideo-main">
          <h3 class="font-size-142rem UserVideo-top-titleName user-font-ch">
            我的影片
          </h3>
          <form class="UserVideo-search" action="">
            <input
              class="UserVideo-search-input user-font-ch "
              placeholder="請輸入關鍵字"
              type="text"
            />
            <input class="UserVideo-search-button" type="button" value="送出" />
          </form>
          <p class="user-font-ch UserVideo-search-404title">
            請輸入商品或訂單關鍵字
          </p>
          <hr class="UserVideo-divider" />

          <div class="UserVideo-order">
            <div class="UserVideo-order-item">
              <div class="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserVideo-order-item-text">
                <p class="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p class="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p class=" UserVideo-order-item-more">More...</p>

              <button
                type="button"
                class="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div class="UserVideo-order-item">
              <div class="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserVideo-order-item-text">
                <p class="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p class="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p class=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                class="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div class="UserVideo-order-item">
              <div class="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserVideo-order-item-text">
                <p class="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p class="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p class=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                class="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div class="UserVideo-order-item">
              <div class="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserVideo-order-item-text">
                <p class="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p class="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p class=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                class="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div class="UserVideo-order-item">
              <div class="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserVideo-order-item-text">
                <p class="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p class="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！
                </p>
              </div>
              <p class=" UserVideo-order-item-more">More...</p>
              <button
                type="button"
                class="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <div class="UserVideo-order-item">
              <div class="UserVideo-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserVideo-order-item-text">
                <p class="user-font-ch UserVideo-order-item-text-name">
                  從0開始學習吉他
                </p>
                <p class="user-font-ch UserVideo-order-item-text-specification">
                  我們為每一個想學吉他的你規劃了完全入門的團體課程和更有
                  效率的一對一專屬課程讓您學習既有效率又有趣！他的你規劃了完全入門的團他的你規劃了完全入門的團他的你規劃了完全入門的團v
                </p>
              </div>
              <p class=" UserVideo-order-item-more">More...</p>

              <button
                type="button"
                class="UserVideo-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

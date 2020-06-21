import React, { Component } from 'react'
export default class UserLike extends Component {
  render() {
    return (
      <>
        <div class="UserLike-main">
          <h3 class="font-size-142rem UserLike-top-titleName user-font-ch">
            我的最愛
          </h3>

          <form class="UserLike-search" action="">
            <input
              class="UserLike-search-input user-font-ch"
              placeholder="請輸入關鍵字"
              type="text"
            />

            <p class="user-font-ch UserLike-search-404title user-font-ch">
              請輸入商品或訂單關鍵字
            </p>

            <input
              class="UserLike-search-button user-font-ch"
              type="button"
              value="送出"
            />
          </form>
          <hr class="UserLike-divider" />

          <div class="UserLike-order">
            <div class="UserLike-order-item">
              <div class="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserLike-order-item-text">
                <p class="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div class="d-flex UserLike-order-item-text-money">
                  <p class="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p class="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p class="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                class="UserLike-order-item-button user-font-ch "
              >
                前往商品頁面
              </button>
            </div>

            <hr class="UserLike-order-divider" />
          </div>
          <div class="UserLike-order">
            <div class="UserLike-order-item">
              <div class="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserLike-order-item-text">
                <p class="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div class="d-flex UserLike-order-item-text-money">
                  <p class="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p class="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p class="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                class="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr class="UserLike-order-divider" />
          </div>
          <div class="UserLike-order">
            <div class="UserLike-order-item">
              <div class="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserLike-order-item-text">
                <p class="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div class="d-flex UserLike-order-item-text-money">
                  <p class="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p class="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p class="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                class="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr class="UserLike-order-divider" />
          </div>
          <div class="UserLike-order">
            <div class="UserLike-order-item">
              <div class="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserLike-order-item-text">
                <p class="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div class="d-flex UserLike-order-item-text-money">
                  <p class="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p class="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p class="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                class="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr class="UserLike-order-divider" />
          </div>
          <div class="UserLike-order">
            <div class="UserLike-order-item">
              <div class="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserLike-order-item-text">
                <p class="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div class="d-flex UserLike-order-item-text-money">
                  <p class="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p class="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p class="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                class="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>

            <hr class="UserLike-order-divider" />
          </div>
          <div class="UserLike-order">
            <div class="UserLike-order-item">
              <div class="UserLike-order-item-img">
                <img src={require('../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="UserLike-order-item-text">
                <p class="user-font-ch UserLike-order-item-text-name user-font-ch">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="user-font-ch UserLike-order-item-text-specification">
                  分類：樂器
                </p>

                <div class="d-flex UserLike-order-item-text-money">
                  <p class="user-font-ch UserLike-order-item-text-money-1">
                    價格
                  </p>{' '}
                  <p class="user-color-red UserLike-order-item-text-money-2 user-font-eg">
                    $
                  </p>
                  <p class="user-color-red UserLike-order-item-text-money-3 user-font-eg">
                    999
                  </p>{' '}
                </div>
              </div>
              <button
                type="button"
                class="UserLike-order-item-button user-font-ch"
              >
                前往商品頁面
              </button>
            </div>
            <hr class="UserLike-order-divider" />
          </div>
          
          {/* 電腦page */}

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
          {/* 手機版page */}
          <div class="userRwd-dropdown ">
            <button type="button" class="userRwd-dropbtn">
              頁數
              <i class="fas fa-sort-down"></i>
            </button>
            <div class="userRwd-dropdown-content">
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

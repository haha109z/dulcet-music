import React from 'react'

class VideoOrder extends React.Component {
  render() {
    return (
      <div class="video-order-page">
          <h3 class="font-size-142rem video-top-titleName ">
            購買清單
          </h3>
          <div
            class="btn-group video-main-buttons"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              class="btn btn-white video-menu "
            >
              全部
            </button>
            <button
              type="button"
              class="btn btn-white video-menu "
            >
              待付款
            </button>
            <button
              type="button"
              class="btn btn-white video-menu "
            >
              待出貨
            </button>
            <button
              type="button"
              class="btn btn-white video-menu "
            >
              待收貨
            </button>
            <button
              type="button"
              class="btn btn-white video-menu "
            >
              完成
            </button>
            <button
              type="button"
              class="btn btn-white video-menu "
            >
              取消
            </button>
          </div>
          <form class="video-search" action="">
            <div class="video-dropdown">
              <button type="button" class="video-dropbtn">
                訂單狀態
                <i class="fas fa-sort-down"></i>
              </button>
              <div class="video-dropdown-content">
                <a href="#">全部</a>
                <a href="#">待付款</a>
                <a href="#">待出貨</a>
                <a href="#">待收貨</a>
                <a href="#">完成</a>
                <a href="#">取消</a>
              </div>
            </div>
            <input
              class="video-search-input "
              placeholder="請輸入關鍵字"
              type="text"
            />
            <p class="video-search-404title ">
              請輸入商品或訂單關鍵字
            </p>
            <input
              class="video-search-button "
              type="button"
              value="送出"
            />
          </form>

          <hr class="video-divider" />
          <div class="video-order">
            <div class="video-order-title">
              <p class="video-order-number ">
                訂單編號：001
              </p>
              <p class="video-order-status ">
                訂單狀態：完成
              </p>
            </div>
            <hr class="video-order-divider" />
            <div class="video-order-item">
              <div class="video-order-item-img">
                <img src={require('../../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="video-order-item-text">
                <p class="video-order-item-text-name ">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="video-order-item-text-specification  d-flex">
                  <p>分類：樂器</p>
                  <p>數量：2</p>
                </p>
                <p class="video-order-item-text-number ">
                  廠商編號：95279527
                </p>
                <div class="d-flex video-order-item-text-money">
                  <p class="video-order-item-text-money-1 ">
                    價格
                  </p>{' '}
                  <p class="video-order-item-text-money-2 video-font-eg video-color-red">
                    $
                  </p>
                  <p class="video-order-item-text-money-3 video-font-eg video-color-red">
                    999
                  </p>{' '}
                </div>
              </div>
            </div>
            <div class="video-order-item">
              <div class="video-order-item-img">
                <img src={require('../../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="video-order-item-text">
                <p class="video-order-item-text-name ">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="video-order-item-text-specification ">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p class="video-order-item-text-number ">
                  廠商編號：95279527
                </p>
                <div class="d-flex video-order-item-text-money">
                  <p class="video-order-item-text-money-1 ">
                    價格
                  </p>{' '}
                  <p class="video-order-item-text-money-2 video-font-eg video-color-red">
                    $
                  </p>
                  <p class="video-order-item-text-money-3 video-font-eg video-color-red ">
                    999
                  </p>{' '}
                </div>
              </div>
            </div>
            <div class="video-order-total">
              <p class="video-order-total-1 ">訂單總價</p>{' '}
              <p class="video-order-total-2 video-font-eg video-color-red">
                $
              </p>
              <p class="video-order-total-3 video-font-eg video-color-red">
                999
              </p>{' '}
            </div>
            <hr class="video-item-divider" />
          </div>
          <div class="video-order">
            <div class="video-order-title">
              <p class="video-order-number ">
                訂單編號：001
              </p>
              <p class="video-order-status ">
                訂單狀態：完成
              </p>
            </div>
            <hr class="video-order-divider" />
            <div class="video-order-item">
              <div class="video-order-item-img">
                <img src={require('../../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="video-order-item-text">
                <p class="video-order-item-text-name ">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="video-order-item-text-specification ">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p class="video-order-item-text-number ">
                  廠商編號：95279527
                </p>
                <div class="d-flex video-order-item-text-money">
                  <p class="video-order-item-text-money-1 ">
                    價格
                  </p>{' '}
                  <p class="video-order-item-text-money-2 video-font-eg video-color-red">
                    $
                  </p>
                  <p class="video-order-item-text-money-3 video-font-eg video-color-red">
                    999
                  </p>{' '}
                </div>
              </div>
            </div>
            <div class="video-order-item">
              <div class="video-order-item-img">
                <img src={require('../../../../img/home_logo_方.png')} alt="" />
              </div>
              <div class="video-order-item-text">
                <p class="video-order-item-text-name ">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p class="video-order-item-text-specification ">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p class="video-order-item-text-number ">
                  廠商編號：95279527
                </p>
                <div class="d-flex video-order-item-text-money">
                  <p class="video-order-item-text-money-1 ">
                    價格
                  </p>{' '}
                  <p class="video-order-item-text-money-2 video-font-eg video-color-red">
                    $
                  </p>
                  <p class="video-order-item-text-money-3 video-font-eg video-color-red">
                    999
                  </p>{' '}
                </div>
              </div>
            </div>
            <div class="video-order-total">
              <p class="video-order-total-1 ">訂單總價</p>{' '}
              <p class="video-order-total-2 video-font-eg video-color-red">
                $
              </p>
              <p class="video-order-total-3 video-font-eg video-color-red">
                999
              </p>{' '}
            </div>
            <hr class="video-item-divider" />
          </div>
          <div class="video-page">
            <a class="video-page-Rarrow">
              <i class="fas fa-sort-up"></i>
            </a>
            <button class="video-page-number">1</button>
            <button class="video-page-number">2</button>
            <button class="video-page-number">3</button>
            <button class="video-page-number">4</button>
            <button class="video-page-x">...</button>
            <a class="video-page-Larrow">
              <i class="fas fa-sort-up"></i>
            </a>
          </div>
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
    )
  }
}

export default VideoOrder

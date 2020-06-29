import React from 'react'

class VideoOrder extends React.Component {
  render() {
    return (
      <div className="video-order-page">
        <h3 className="font-size-142rem video-top-titleName ">訂單列表</h3>
        <div
          className="btn-group video-main-buttons"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-white video-menu-btn" >
            全部
          </button>
          <button type="button" className="btn btn-white video-menu-btn ">
            待付款
          </button>
          <button type="button" className="btn btn-white video-menu-btn ">
            待出貨
          </button>
          <button type="button" className="btn btn-white video-menu-btn ">
            待收貨
          </button>
          <button type="button" className="btn btn-white video-menu-btn ">
            完成
          </button>
          <button type="button" className="btn btn-white video-menu-btn ">
            取消
          </button>
        </div>
        <form className="video-search" action="">
          <div className="video-dropdown">
            <button type="button" className="video-dropbtn">
              訂單狀態
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="video-dropdown-content">
              <a href="#">全部</a>
              <a href="#">待付款</a>
              <a href="#">待出貨</a>
              <a href="#">待收貨</a>
              <a href="#">完成</a>
              <a href="#">取消</a>
            </div>
          </div>
          <input
            className="video-search-input "
            placeholder="請輸入關鍵字"
            type="text"
          />
          <p className="video-search-404title ">請輸入商品或訂單關鍵字</p>
          <input className="video-search-button " type="button" value="送出" />
        </form>

        <hr className="video-divider" />
        <div className="video-order">
          <div className="video-order-title">
          <div className="video-order-text">
            <p>購買人 : 曾國瑋</p>
            <p>手機 : 0911111111</p>
          </div>
          <div className="video-order-state">
            <p>訂單編號:001</p>
            <p>訂單狀態:完成</p>
            <p>訂單時間:2020/06/29</p>
          </div>
          </div>
          <hr className="video-order-divider" />
          <div className="video-order-item">
            <div className="video-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="video-order-item-text">
              <p className="video-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="video-order-item-text-specification  d-flex">
              <p>類別：吉他</p>
                <p>數量：2</p>
              </p>
              
              <div className="d-flex video-order-item-text-money">
                <p className="video-order-item-text-money-1 ">價格</p>{' '}
                <p className="video-order-item-text-money-2 manufacturer-font-eg manufacturer-color-red">
                  $
                </p>
                <p className="video-order-item-text-money-3 manufacturer-font-eg manufacturer-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="video-order-item">
            <div className="video-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="video-order-item-text">
              <p className="video-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="video-order-item-text-specification d-flex">
                <p>類別 : 吉他</p>
                <p>數量：2</p>
              </p>
              
              <div className="d-flex video-order-item-text-money">
                <p className="video-order-item-text-money-1 ">價格</p>{' '}
                <p className="video-order-item-text-money-2 manufacturer-font-eg manufacturer-color-red">
                  $
                </p>
                <p className="video-order-item-text-money-3 manufacturer-font-eg manufacturer-color-red ">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="video-order-total">
            <p className="video-order-total-1 ">訂單總價</p>{' '}
            <p className="video-order-total-2 manufacturer-font-eg manufacturer-color-red">$</p>
            <p className="video-order-total-3 manufacturer-font-eg manufacturer-color-red">
              999
            </p>{' '}
          </div>
          <hr className="video-item-divider" />
        </div>
        <div className="video-order">
        <div className="video-order-title">
        <div className="video-order-text">
            <p>購買人 : 曾國瑋</p>
            <p>手機 : 0911111111</p>
          </div>
          <div className="video-order-state">
            <p>訂單編號 : 001</p>
            <p>訂單狀態 : 完成</p>
            <p>訂單時間 : 2020/06/29</p>
          </div>
          </div>
          <hr className="video-order-divider" />
          <div className="video-order-item">
            <div className="video-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="video-order-item-text">
              <p className="video-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="video-order-item-text-specification d-flex">
              <p>類別：吉他</p>
                <p>數量：2</p>
              </p>
              
              <div className="d-flex video-order-item-text-money">
                <p className="video-order-item-text-money-1 ">價格</p>{' '}
                <p className="video-order-item-text-money-2 manufacturer-font-eg manufacturer-color-red">
                  $
                </p>
                <p className="video-order-item-text-money-3 manufacturer-font-eg manufacturer-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="video-order-item">
            <div className="video-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="video-order-item-text">
              <p className="video-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="video-order-item-text-specification d-flex">
              <p>類別：吉他</p>
                <p>數量：2</p>
              </p>
              
              <div className="d-flex video-order-item-text-money">
                <p className="video-order-item-text-money-1 ">價格</p>{' '}
                <p className="video-order-item-text-money-2 manufacturer-font-eg manufacturer-color-red">
                  $
                </p>
                <p className="video-order-item-text-money-3 manufacturer-font-eg manufacturer-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="video-order-total">
            <p className="video-order-total-1 ">訂單總價</p>{' '}
            <p className="video-order-total-2 manufacturer-font-eg manufacturer-color-red">$</p>
            <p className="video-order-total-3 manufacturer-font-eg manufacturer-color-red">
              999
            </p>{' '}
          </div>
          <hr className="video-item-divider" />
        </div>
        <div className="video-order">
          <div className="video-order-title">
          <div className="video-order-text">
            <p>購買人 : 曾國瑋</p>
            <p>手機 : 0911111111</p>
          </div>
          <div className="video-order-state">
            <p>訂單編號:001</p>
            <p>訂單狀態:完成</p>
            <p>訂單時間:2020/06/29</p>
          </div>
          </div>
          <hr className="video-order-divider" />
          <div className="video-order-item">
            <div className="video-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="video-order-item-text">
              <p className="video-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="video-order-item-text-specification  d-flex">
              <p>類別：吉他</p>
                <p>數量：2</p>
              </p>
              
              <div className="d-flex video-order-item-text-money">
                <p className="video-order-item-text-money-1 ">價格</p>{' '}
                <p className="video-order-item-text-money-2 manufacturer-font-eg manufacturer-color-red">
                  $
                </p>
                <p className="video-order-item-text-money-3 manufacturer-font-eg manufacturer-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="video-order-item">
            <div className="video-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="video-order-item-text">
              <p className="video-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="video-order-item-text-specification d-flex">
                <p>類別 : 吉他</p>
                <p>數量：2</p>
              </p>
              
              <div className="d-flex video-order-item-text-money">
                <p className="video-order-item-text-money-1 ">價格</p>{' '}
                <p className="video-order-item-text-money-2 manufacturer-font-eg manufacturer-color-red">
                  $
                </p>
                <p className="video-order-item-text-money-3 manufacturer-font-eg manufacturer-color-red ">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="video-order-total">
            <p className="video-order-total-1 ">訂單總價</p>{' '}
            <p className="video-order-total-2 manufacturer-font-eg manufacturer-color-red">$</p>
            <p className="video-order-total-3 manufacturer-font-eg manufacturer-color-red">
              999
            </p>{' '}
          </div>
          <hr className="video-item-divider" />
        </div>
        <div className="video-page">
            <a className="video-page-Rarrow">
              <i className="fas fa-sort-up"></i>
            </a>
            <button className="video-page-number">1</button>
            <button className="video-page-number">2</button>
            <button className="video-page-number">3</button>
            <button className="video-page-number">4</button>
            <button className="video-page-x">...</button>
            <a className="video-page-Larrow">
              <i className="fas fa-sort-up"></i>
            </a>
          </div>
          <div className="videoRwd-page-dropdown">
            <button type="button" className="videoRwd-page-dropbtn">
              頁數
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="videoRwd-page-dropdown-content">
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

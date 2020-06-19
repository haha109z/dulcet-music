import React from 'react'



class VideoOrder extends React.Component{
    render(){
    return (
        <div className="video-order-page">
          <h3 className="font-size-142rem video-order-title">購買清單</h3>
          <div
            className="btn-group video-order-all-item"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-white video-order-item-btn">
              全部
            </button>
            <button type="button" className="btn btn-white video-order-item-btn">
              待付款
            </button>
            <button type="button" className="btn btn-white video-order-item-btn">
              待出貨
            </button>
            <button type="button" className="btn btn-white video-order-item-btn">
              待收貨
            </button>
            <button type="button" className="btn btn-white video-order-item-btn">
              完成
            </button>
            <button type="button" className="btn btn-white video-order-item-btn">
              取消
            </button>
          </div>
          <form className="video-order-form" action="">
            <input
              className="video-order-search"
              placeholder="請輸入關鍵字"
              type="text"
            />
            <input
              className="video-order-send-button"
              type="button"
              value="送出"
            />
          </form>
          <p className="video-order-seacrh-message">
            請輸入商品或訂單關鍵字
          </p>

          <hr className="video-order-hr" />
          <div className="video-order-form-content">
            <div className="video-order-content-title">
              <p className="video-order-content-number">訂單編號：001</p>
              <p className="video-order-content-status">訂單狀態：完成</p>
            </div>
            <hr className="video-order-content-hr" />
            <div className="video-order-pro">
              <div className="video-order-pro-img">
                <img src={require('../../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="video-order-pro-text">
                <p className="video-order-pro-item-text">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="video-order-pro-message">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p className="video-order-pro-number">
                  廠商編號：95279527
                </p>
                <div className="d-flex video-order-pro-money">
                  <p className="video-order-pro-money-1">價格</p>{' '}
                  <p className="video-order-pro-money-2 Manufacturer-color-red Manufacturer-font-eg">$</p>
                  <p className="video-order-pro-money-3 Manufacturer-color-red Manufacturer-font-eg">999</p>{' '}
                </div>
              </div>
            </div>
            <div className="video-order-pro">
              <div className="video-order-pro-img">
                <img src={require('../../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="video-order-pro-text">
                <p className="video-order-pro-item-text">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="video-order-pro-message">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p className="video-order-pro-number">
                  廠商編號：95279527
                </p>
                <div className="d-flex video-order-pro-money">
                  <p className="video-order-pro-money-1">價格</p>{' '}
                  <p className="video-order-pro-money-2 Manufacturer-color-red Manufacturer-font-eg">$</p>
                  <p className="video-order-pro-money-3 Manufacturer-color-red Manufacturer-font-eg">999</p>{' '}
                </div>
              </div>
            </div>
            <div className="video-order-total-money">
              <p className="video-order-total-money-1">訂單總價</p>{' '}
              <p className="video-order-total-money-2 Manufacturer-color-red Manufacturer-font-eg">$</p>
              <p className="video-order-total-money-3 Manufacturer-color-red Manufacturer-font-eg">999</p>{' '}
            </div>
            <hr className="video-order-item-hr" />
          </div>
          <div className="video-order-form-content">
            <div className="video-order-content-title">
              <p className="video-order-content-number">訂單編號：001</p>
              <p className="video-order-content-status">訂單狀態：完成</p>
            </div>
            <hr className="video-order-content-hr" />
            <div className="video-order-pro">
              <div className="video-order-pro-img">
                <img src={require('../../../../img/home_logo_方.png')} alt="" />
              </div>
              <div className="video-order-pro-text">
                <p className="video-order-pro-item-text">
                  現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                  散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                  筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                  金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                  筆電架電腦架 筆電散熱 金屬支架
                </p>
                <p className="video-order-pro-message">
                  分類：樂器&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;數量：2
                </p>
                <p className="video-order-pro-number">
                  廠商編號：95279527
                </p>
                <div className="d-flex video-order-pro-money">
                  <p className="video-order-pro-money-1">價格</p>{' '}
                  <p className="video-order-pro-money-2 Manufacturer-color-red Manufacturer-font-eg">$</p>
                  <p className="video-order-pro-money-3 Manufacturer-color-red Manufacturer-font-eg">999</p>{' '}
                </div>
              </div>
            </div>
            <div className="video-order-total-money">
              <p className="video-order-total-money-1">訂單總價</p>{' '}
              <p className="video-order-total-money-2 Manufacturer-color-red Manufacturer-font-eg">$</p>
              <p className="video-order-total-money-3 Manufacturer-color-red Manufacturer-font-eg">999</p>{' '}
            </div>
            <hr className="video-order-item-hr" />
          </div>
           </div>
           
    )
    }
}

export default VideoOrder
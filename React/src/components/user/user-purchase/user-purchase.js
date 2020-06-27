import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

export default class UserPurchase extends Component {
  state = {
    UserPurchase: [],
  }

  constructor() {
    super()
    const getUserInfo = () => {
      return JSON.parse(localStorage.getItem('user'))
    }
    if (getUserInfo()) {
      let user = getUserInfo()
      if (user[0].userID) {
        var userID = user[0].userID
        // console.log('userID:' + userID)
      }
    }

    fetch('http://localhost:3030/user/UserPurchase', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        userID,
      }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.data)
        this.setState({ UserPurchase: json.data })
        // localStorage.setItem('user', JSON.stringify(json.data))
        // console.log(json.data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  render() {
    let UserPurchase = this.state.UserPurchase
    console.log(UserPurchase)

    return (
      <>
        
        <div className="UserPurchase-main">
          <h3 className="font-size-142rem UserPurchase-top-titleName user-font-ch">
            購買清單
          </h3>
          <div
            className="btn-group UserPurchase-main-buttons"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-white UserPurchase-menu user-font-ch"
            >
              全部
            </button>
            <button
              type="button"
              className="btn btn-white UserPurchase-menu user-font-ch"
            >
              待付款
            </button>
            <button
              type="button"
              className="btn btn-white UserPurchase-menu user-font-ch"
            >
              待出貨
            </button>
            <button
              type="button"
              className="btn btn-white UserPurchase-menu user-font-ch"
            >
              待收貨
            </button>
            <button
              type="button"
              className="btn btn-white UserPurchase-menu user-font-ch"
            >
              完成
            </button>
            <button
              type="button"
              className="btn btn-white UserPurchase-menu user-font-ch"
            >
              取消
            </button>
          </div>
          <form className="UserPurchase-search" action="">
            <div className="user-dropdown">
              <button type="button" className="user-dropbtn">
                訂單狀態
                <i className="fas fa-sort-down"></i>
              </button>
              <div className="user-dropdown-content">
                <a href="#">全部</a>
                <a href="#">待付款</a>
                <a href="#">待出貨</a>
                <a href="#">待收貨</a>
                <a href="#">完成</a>
                <a href="#">取消</a>
              </div>
            </div>
            <input
              className="UserPurchase-search-input user-font-ch"
              placeholder="請輸入關鍵字"
              type="text"
            />
            <p className="UserPurchase-search-404title user-font-ch">
              請輸入商品或訂單關鍵字
            </p>
            <input
              className="UserPurchase-search-button user-font-ch"
              type="button"
              value="送出"
            />
          </form>
          <hr className="UserPurchase-divider" />
          {UserPurchase.map((item, index) => (
          <>
            <div className="UserPurchase-order">
              <div className="UserPurchase-order-title">
                <p className="UserPurchase-order-number user-font-ch">
                  訂單編號：{item.orderId}
                </p>
                <p className="UserPurchase-order-status user-font-ch">
                  訂單狀態：{item.orderState}
                </p>
              </div>
              <hr className="UserPurchase-order-divider" />
              <div className="UserPurchase-order-item">
                <div className="UserPurchase-order-item-img">
                  <img src={require('../../../img/home_logo_方.png')} alt="" />
                </div>
                <div className="UserPurchase-order-item-text">
                  <p className="UserPurchase-order-item-text-name user-font-ch">
                    現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                    散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                    筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                    金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                    筆電架電腦架 筆電散熱 金屬支架
                  </p>
                  <p className="UserPurchase-order-item-text-specification user-font-ch d-flex">
                    <p>分類：樂器</p>
                    <p>數量：2</p>
                  </p>
                  <p className="UserPurchase-order-item-text-number user-font-ch">
                  廠商名稱：95279527
                  </p>
                  <div className="d-flex UserPurchase-order-item-text-money">
                    <p className="UserPurchase-order-item-text-money-1 user-font-ch">
                      價格
                    </p>{' '}
                    <p className="UserPurchase-order-item-text-money-2 user-font-eg user-color-red">
                      $
                    </p>
                    <p className="UserPurchase-order-item-text-money-3 user-font-eg user-color-red">
                      999
                    </p>{' '}
                  </div>
                </div>
              </div>
              <div className="UserPurchase-order-item">
                <div className="UserPurchase-order-item-img">
                  <img src={require('../../../img/home_logo_方.png')} alt="" />
                </div>
                <div className="UserPurchase-order-item-text">
                  <p className="UserPurchase-order-item-text-name user-font-ch">
                    現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                    散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                    筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                    金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                    筆電架電腦架 筆電散熱 金屬支架
                  </p>
                  <p className="UserPurchase-order-item-text-specification user-font-ch d-flex">
                    <p>分類：樂器</p>
                    <p>數量：2</p>
                  </p>
                  <p className="UserPurchase-order-item-text-number user-font-ch">
                    廠商名稱：95279527
                  </p>
                  <div className="d-flex UserPurchase-order-item-text-money">
                    <p className="UserPurchase-order-item-text-money-1 user-font-ch">
                      價格
                    </p>{' '}
                    <p className="UserPurchase-order-item-text-money-2 user-font-eg user-color-red">
                      $
                    </p>
                    <p className="UserPurchase-order-item-text-money-3 user-font-eg user-color-red">
                      999
                    </p>{' '}
                  </div>
                </div>
              </div>
           
              <div className="UserPurchase-order-total">
                <p className="UserPurchase-order-total-1 user-font-ch">
                  訂單總價
                </p>{' '}
                <p className="UserPurchase-order-total-2 user-font-eg user-color-red">
                  $
                </p>
                <p className="UserPurchase-order-total-3 user-font-eg user-color-red">
                {item.orderPrice}
                </p>{' '}
              </div>
              <hr className="UserPurchase-item-divider" />
            </div>
          </>
        ))}
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

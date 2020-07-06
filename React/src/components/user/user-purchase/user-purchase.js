import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom'
import ScrollToTop from '../../../container/scrollToTop'
const userL = () => {
  return JSON.parse(localStorage.getItem('user'))
}
if (JSON.parse(localStorage.getItem('user'))) {
  const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('user'))
  }
  var userID = getUserInfo()[0].userID
  // this.setState({userID:userID})
}

export default class UserPurchase extends Component {
  state = {
    userID: userID,
    pageNum: 1, // 目前頁數
    status: '全部',
    user: {},
    AllUserPurchase: [], // 所有訂單
    AllUserPurchaseDetail: [], // 所有訂單明細
    AllUserPurchase_status: [], // 狀態all訂單
    AllUserPurchaseDetail_status: [], // 狀態all訂單明細
    UserPurchase: [], // 顯示訂單
    UserPurchaseDetail: [], // 顯示訂單明細
    totalCount: 0, // 總比數
    btn: '全部',
    menu: true,
    purchaseMenuTitle: '全部',
    userPageSelect: '1',
    userRwdPage: false,
    pageItemLength: 0,
  }

  bokTop() {
    document.documentElement.scrollTop = 0
  }

  filterStatusOpen = () => {
    this.setState({ menu: false })
    this.setState({ userRwdPage: false })
  }
  
  showPage = () => {
    this.setState({ userRwdPage: true })
    // console.log("123")
  }
  closeRwdPage = () => {
    this.setState({ userRwdPage: false })
  }
  changePageL = () => {
    let plusNum = Number(this.state.pageNum) - 1
    if (plusNum >= 1) {
      this.setState({ pageNum: Number(this.state.pageNum) - 1 })
      setTimeout(() => {
        this.showData()
      }, 0)
      this.setState({ userPageSelect: Number(this.state.pageNum) - 1 + '' })
      this.bokTop()
    }
  }
  // 右邊切頁
  changePageR = () => {
    let plusNum = Number(this.state.pageNum) + 1
    if (plusNum <= Math.ceil(this.state.totalCount / 3)) {
      this.setState({ pageNum: Number(this.state.pageNum) + 1 })
      setTimeout(() => {
        this.showData()
      }, 0)
      this.setState({ userPageSelect: Number(this.state.pageNum) + 1 + '' })
      this.bokTop()
    } else {
    }
  }
  // 換頁事件
  changePageNum = (event) => {
    let num = event.currentTarget.textContent
    this.setState({ pageNum: num })
    setTimeout(() => {
      this.showData()
    }, 100)
    this.setState({ userPageSelect: num })
    this.bokTop()
    this.closeRwdPage()
  }
  
  getOrder = () => {
    // console.log('this.state.user', this.state.user)
    fetch('http://localhost:3030/user/UserPurchase', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        userID: this.state.userID,
      }), // data can be `string` or {object}!
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data)
        let order = [],
          flag = {}
        json.data.forEach((v) => {
          if (flag[v.orderId] == null) {
            order.push(v)
            flag[v.orderId] = true
          }
        })
        // console.log('order', order)
        // console.log('json.data', json.data)

        this.setState({ AllUserPurchase: order })
        this.setState({ AllUserPurchase_status: order })
        this.setState({ totalCount: order.length })
        this.setState({ AllUserPurchaseDetail: json.data })
        this.setState({ AllUserPurchaseDetail_status: order })
        // localStorage.setItem('user', JSON.stringify(json.data))
        // console.log(json.data)
        setTimeout(() => {
          this.showData()
        }, 0)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  filterStatus = (event) => {
    let select = event.currentTarget.textContent
    this.setState({ purchaseMenuTitle: select })
    this.setState({ status: select })
    this.setState({ pageNum: 1 })
    // console.log('select', event.currentTarget.textContent)
    this.setState({ btn: select })
    this.setState({ menu: true })
    this.setState({ userPageSelect: '1' })

    if (select == '全部') {
      this.setState({ UserPurchase: this.state.AllUserPurchase })
      this.setState({ UserPurchaseDetail: this.state.AllUserPurchaseDetail })
      this.setState({ totalCount: this.state.AllUserPurchase.length })

      setTimeout(() => {
        this.showData()
      }, 0)
      this.bokTop()

      return
    }
    let AllUserPurchase = this.state.AllUserPurchase.filter(
      (v) => v.orderState == select
    )
    let AllUserPurchaseDetail = this.state.AllUserPurchaseDetail.filter(
      (v) => v.orderState == select
    )
    this.setState({ AllUserPurchase_status: AllUserPurchase })
    this.setState({ AllUserPurchaseDetail_status: AllUserPurchaseDetail })
    this.setState({ totalCount: AllUserPurchase.length })
    setTimeout(() => {
      this.showData()
    }, 0)
    this.bokTop()
  }


  showData() {
    let AllUserPurchase, AllUserPurchaseDetail
    let pageNum = this.state.pageNum
    if (this.state.status !== '全部') {
      AllUserPurchase = this.state.AllUserPurchase_status.filter(
        (v) => v.orderState == this.state.status
      )
      AllUserPurchaseDetail = this.state.AllUserPurchaseDetail_status.filter(
        (v) => v.orderState == this.state.status
      )
    } else {
      AllUserPurchaseDetail = this.state.AllUserPurchaseDetail
      AllUserPurchase = this.state.AllUserPurchase
    }
    // console.log()
    this.setState({
      UserPurchase: AllUserPurchase.slice((pageNum - 1) * 3, pageNum * 3),
    })
    this.setState({ UserPurchaseDetail: AllUserPurchaseDetail })
    this.bokTop()
  }
  constructor() {
    super()

    if (userL() == null) {
      window.location = '/'
    }

    this.getOrder()
  }

  render() {
    
    let UserPurchase = this.state.UserPurchase
    let UserPurchaseDetail = this.state.UserPurchaseDetail

    // console.log(this.state.userID)
    var pageItem = []
    for (let i = 1; i <= Math.ceil(this.state.totalCount / 3); i++) {
      pageItem.push(
        <button
          onClick={this.changePageNum}
          className={
            this.state.userPageSelect === i + ''
              ? 'user-page-number user-page-numberHover'
              : 'user-page-number'
          }
        >
          {i}
        </button>
      )
    }
    // console.log(this.setState.pageItemLength)

    return (
      <>
        <div className="UserPurchase-main">
          <h3 className="font-size-142rem UserPurchase-top-titleName user-font-ch">
            購買清單{' '}
          </h3>
          <div
            className="btn-group UserPurchase-main-buttons"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className={
                this.state.btn === '全部'
                  ? 'btn btn-white UserPurchase-menu user-font-ch UserPurchase-menu-ck '
                  : 'btn btn-white UserPurchase-menu user-font-ch'
              }
              onClick={this.filterStatus}
            >
              全部
            </button>
            <button
              type="button"
              className={
                this.state.btn === '待付款'
                  ? 'btn btn-white UserPurchase-menu user-font-ch UserPurchase-menu-ck '
                  : 'btn btn-white UserPurchase-menu user-font-ch'
              }
              onClick={this.filterStatus}
            >
              待付款
            </button>
            <button
              type="button"
              className={
                this.state.btn === '待出貨'
                  ? 'btn btn-white UserPurchase-menu user-font-ch UserPurchase-menu-ck '
                  : 'btn btn-white UserPurchase-menu user-font-ch'
              }
              onClick={this.filterStatus}
            >
              待出貨
            </button>
            <button
              type="button"
              className={
                this.state.btn === '待收貨'
                  ? 'btn btn-white UserPurchase-menu user-font-ch UserPurchase-menu-ck '
                  : 'btn btn-white UserPurchase-menu user-font-ch'
              }
              onClick={this.filterStatus}
            >
              待收貨
            </button>
            <button
              type="button"
              className={
                this.state.btn === '完成'
                  ? 'btn btn-white UserPurchase-menu user-font-ch UserPurchase-menu-ck '
                  : 'btn btn-white UserPurchase-menu user-font-ch'
              }
              onClick={this.filterStatus}
            >
              完成
            </button>
            <button
              type="button"
              className={
                this.state.btn === '取消'
                  ? 'btn btn-white UserPurchase-menu user-font-ch UserPurchase-menu-ck '
                  : 'btn btn-white UserPurchase-menu user-font-ch'
              }
              onClick={this.filterStatus}
            >
              取消
            </button>
          </div>
          <form className="UserPurchase-search" action="">
            <div className="user-dropdown">
              <button
                type="button"
                className="user-dropbtn"
                onClick={this.filterStatusOpen}
              >
                狀態：{this.state.purchaseMenuTitle}
                <i className="fas fa-sort-down"></i>
              </button>
              <div
                className={
                  this.state.menu === true
                    ? 'user-dropdown-content user-dropdown-none '
                    : 'user-dropdown-content'
                }
              >
                <Link href="#" onClick={this.filterStatus}>
                  全部
                </Link>
                <Link href="#" onClick={this.filterStatus}>
                  待付款
                </Link>
                <Link href="#" onClick={this.filterStatus}>
                  待出貨
                </Link>
                <Link href="#" onClick={this.filterStatus}>
                  待收貨
                </Link>
                <Link href="#" onClick={this.filterStatus}>
                  完成
                </Link>
                <Link href="#" onClick={this.filterStatus}>
                  取消
                </Link>
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

                {UserPurchaseDetail.filter(
                  (v) => v.orderId == item.orderId
                ).map((itemD, index) => (
                  <>
                    <div className="UserPurchase-order-item">
                      <div className="UserPurchase-order-item-img">
                        <img
                          src={`http://localhost:3030/images/product/${itemD.PImg}`}
                          alt=""
                        />
                      </div>
                      <div className="UserPurchase-order-item-text">
                        <p className="UserPurchase-order-item-text-name user-font-ch">
                          {itemD.PName}
                          {/* {itemD.Pdesciption} */}
                        </p>
                        <p className="UserPurchase-order-item-text-specification user-font-ch d-flex">
                          <p>分類：{itemD.productCategory}</p>
                          <p>數量：{itemD.cartNumber ? itemD.cartNumber : '1'}</p>

                          {/* <p>數量：{itemD.q ? itemD.q : '1'}</p> */}
                        </p>

                        <div className="d-flex UserPurchase-order-item-text-money">
                          <p className="UserPurchase-order-item-text-money-1 user-font-ch">
                            價格
                          </p>{' '}
                          <p className="UserPurchase-order-item-text-money-2 user-font-eg user-color-red">
                            $
                          </p>
                          <p className="UserPurchase-order-item-text-money-3 user-font-eg user-color-red">
                            {itemD.PPrice}
                          </p>{' '}
                        </div>
                      </div>
                    </div>
                  </>
                ))}

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
            <Link className="user-page-Rarrow" onClick={this.changePageL}>
              <i className="fas fa-sort-up"></i>
            </Link>

            {pageItem}

            <Link className="user-page-Larrow" onClick={this.changePageR}>
              <i className="fas fa-sort-up"></i>
            </Link>
          </div>
          <div className="userRwd-dropdown ">
            <button
              type="button"
              className="userRwd-dropbtn"
              onClick={this.showPage}
            >
              第&nbsp;{this.state.pageNum}&nbsp;頁
              <i className="fas fa-sort-down"></i>
            </button>
            <div
              className={
                this.state.userRwdPage
                  ? 'userRwd-dropdown-content'
                  : 'userRwd-dropdown-content-none'
              }
            >
              {pageItem}
            </div>
          </div>
        </div>
      </>
    )
  }
}

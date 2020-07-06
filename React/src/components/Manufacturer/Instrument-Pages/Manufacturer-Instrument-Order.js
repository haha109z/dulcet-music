import React from 'react'
import {BrowserRouter,Router,Route,Link,Switch,withRouter,} from 'react-router-dom'

if (JSON.parse(localStorage.getItem('user'))) {
  const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('user'))
  }
  var Mid = getUserInfo()[0].Mid
  // this.setState({userID:userID})
}
class InstrumentOrder extends React.Component {
  state = {
    Mid: Mid,
    search: '',
    btn: '全部',
    ManuOrder: [
      {
        Mid: '',
        orderId: '',
        orderState: '',
        address: '',
        phone: '',
        name: '',
        create_at: '',
        cartNumber: '',
        productCategory: '',
        PCategoryId: '',
        PName: '',
        PImg: '',
        PPrice: '',
        PCompanyId: '',
        PId: '',
      },
    ],
    AllMPurchase: [], //所有訂單比數 訂單list 從資料庫撈回來的訂單
    AllMPurchaseitem: [], //所有訂單明細
    AllOrderStatus: [], // 判斷完後的訂單比數 btn
    AllOrderStatusitem: [], // 判斷完後的訂單明細比數
  }
  constructor() {
    super()
  }

  componentDidMount() {
    fetch('http://localhost:3030/ManufacturerInstrument/InstrumentOrder', {
      method: 'POST',
      body: JSON.stringify({
        Mid,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        let order = [],
          flag = {}
        json.forEach((e) => {
          // console.log(e.orderId);
          if (flag[e.orderId] == null) {
            order.push(e)
            flag[e.orderId] = true
          }
          // console.log('order', order)
          this.setState({
            AllMPurchase: order,
            AllMPurchaseitem: json,
          })
          this.setState({
            AllOrderStatus: this.state.AllMPurchase,
            AllOrderStatusitem: this.state.AllMPurchaseitem,
          })
        })
      })

    this.sendsearch = () => {
      let search = document.querySelector('.ins-search-input').value
      this.setState({ search: search })
    }
    this.statusbtn = (e) => {
      let btn = e.currentTarget.textContent
      console.log(btn)
      setTimeout(() => {
        this.setState({ btn: btn })
        if (this.state.btn == '全部') {
          setTimeout(() => {
            this.setState({ AllOrderStatus: this.state.AllMPurchase })
            this.setState({ AllOrderStatusitem: this.state.AllMPurchaseitem })
          }, 10)

          console.log(this.state.AllMPurchase)
          console.log(this.state.AllMPurchaseitem)
          return
        } else {
          let list = this.state.AllMPurchase.filter((v) => v.orderState == btn)
          this.setState({ AllOrderStatus: list })
          let item = this.state.AllMPurchaseitem.filter(
            (v) => v.orderState == btn
          )
          this.setState({ AllOrderStatusitem: item })
          console.log(this.state.AllOrderStatusitem)
          return
        }
      })
    }
  }

  render() {
    let pageItem = []
    for (let i = 1; i <= Math.ceil(this.state.AllMPurchase.length / 10); i++){
      pageItem.push(
        <button
        onClick={this.PageNum}
        className="ins-page-number"
        >
          {i}
        </button>
      )
    }

    var OrderStatus = this.state.AllOrderStatus
    var OrderStatusitem = this.state.AllOrderStatusitem

    return (
      <div className="ins-order-page">
        <h3 className="font-size-142rem ins-top-titleName ">訂單列表</h3>
        <div
          className="btn-group ins-main-buttons"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.statusbtn}
          >
            全部
          </button>
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.statusbtn}
          >
            待付款
          </button>
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.statusbtn}
          >
            待出貨
          </button>
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.statusbtn}
          >
            待收貨
          </button>
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.statusbtn}
          >
            完成
          </button>
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.statusbtn}
          >
            取消
          </button>
        </div>
        <form className="ins-search" action="">
          <div className="ins-dropdown">
            <button type="button" className="ins-dropbtn">
              訂單 : {this.state.btn}
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="ins-dropdown-content">
                <Link href="#" onClick={this.statusbtn}>
                  全部
                </Link>
                <Link href="#" onClick={this.statusbtn}>
                  待付款
                </Link>
                <Link href="#" onClick={this.statusbtn}>
                  待出貨
                </Link>
                <Link href="#" onClick={this.statusbtn}>
                  待收貨
                </Link>
                <Link href="#" onClick={this.statusbtn}>
                  完成
                </Link>
                <Link href="#" onClick={this.statusbtn}>
                  取消
                </Link>
            </div>
          </div>
          <input
            className="ins-search-input "
            placeholder="請輸入關鍵字"
            type="text"
          />
          <p className="ins-search-404title ">請輸入商品或訂單關鍵字</p>
          <input
            className="ins-search-button "
            type="button"
            value="送出"
            onClick={this.sendsearch}
          />
        </form>

        <hr className="ins-divider" />

        {OrderStatus.map((listItem, index) => (
          <>
            <div className="ins-order">
              <div className="ins-order-title">
                <div>
                  <p className="ins-order-text">購買人 :{listItem.name}</p>
                  <p className="ins-order-text">手機 : {listItem.phone}</p>
                  <p className="ins-order-text">地址 : {listItem.address}</p>
                </div>
                <div>
                  <p className="ins-order-text">
                    訂單編號 : {listItem.orderId}
                  </p>
                  <p className="ins-order-text">
                    訂單狀態 : {listItem.orderState}
                  </p>
                  <p className="ins-order-text">
                    訂單時間 : {listItem.created_at.substring(0, 10)}
                  </p>
                </div>
              </div>

              <hr className="ins-order-divider" />

              {OrderStatusitem.filter((v) => v.orderId == listItem.orderId).map(
                (itemI, index) => (
                  <>
                    <div className="ins-order-item">
                      <div className="ins-order-item-img">
                        <img
                          dataimg={itemI.PImg}
                          src={`http://localhost:3030/images/product/${itemI.PImg}`}
                          alt=""
                        />
                      </div>
                      <div className="ins-order-item-text">
                        <p className="ins-order-item-text-name ">
                          {itemI.PName}
                        </p>
                        <p className="ins-order-item-text-specification d-flex">
                          <p>類別 : {itemI.PInstrumentId}</p>
                          <p>數量 : {itemI.cartNumber}</p>
                        </p>

                        <div className="d-flex ins-order-item-text-money">
                          <p className="ins-order-item-text-money-1 ">價格</p>{' '}
                          <p className="ins-order-item-text-money-2 ins-font-eg ins-color-red">
                            $
                          </p>
                          <p className="ins-order-item-text-money-3 ins-font-eg ins-color-red ">
                            {itemI.PPrice}
                          </p>{' '}
                        </div>
                      </div>
                    </div>
                  </>
                )
              )}

              {/* <div className="ins-order-total">
                <p className="ins-order-total-1 ">訂單總價</p>{' '}
                <p className="ins-order-total-2 ins-font-eg ins-color-red">$</p>
                <p className="ins-order-total-3 ins-font-eg ins-color-red">
                  {listItem.orderPrice}
                </p>{' '}
              </div> */}
              <hr className="ins-item-divider" />
            </div>
          </>
        ))}

        <div className="ins-page">
          <Link className="ins-page-Rarrow">
            <i className="fas fa-sort-up"></i>
          </Link>
          <button className="ins-page-number">1</button>
          <button className="ins-page-number">2</button>
          <button className="ins-page-number">3</button>
          <button className="ins-page-number">4</button>
          <button className="ins-page-x">...</button>
          <a className="ins-page-Larrow">
            <i className="fas fa-sort-up"></i>
          </a>
        </div>
        <div className="insRwd-page-dropdown">
          <button type="button" className="insRwd-page-dropbtn">
            頁數
            <i className="fas fa-sort-down"></i>
          </button>
          <div className="insRwd-page-dropdown-content">
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

export default InstrumentOrder

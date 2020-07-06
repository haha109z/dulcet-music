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
    selectPage:'1',
    PageNum:1,
    Mid: Mid,
    search: '',
    btn: '全部',
    menu: true,
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
    AllPageOrder:[],
    AllPageOrderItem:[],
  }

  bokTop() {
    document.documentElement.scrollTop = 0
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
          setTimeout(()=>{
            this.showData()
          },10)
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
        this.setState({ PageNum : 1})
        this.setState({ selectPage : '1'})
        if (this.state.btn == '全部') {
          setTimeout(() => {
            this.setState({ AllOrderStatus: this.state.AllMPurchase })
            this.setState({ AllOrderStatusitem: this.state.AllMPurchaseitem })
            
          }, 10)
          setTimeout(() => {
            this.showData()
          }, 0)
          this.bokTop()
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
          setTimeout(() => {
            this.showData()
          }, 0)
          this.bokTop()
          return
        }
      })
    }
  }
  PageNumRight = () => {
    let total = Math.ceil(this.state.AllOrderStatus.length / 3)
    
    if(this.state.PageNum < total ){
    this.setState({ PageNum : Number(this.state.PageNum) + 1})
    
    setTimeout(() => {
      this.showData()
    }, 0)
    this.setState({ selectPage : Number(this.state.PageNum) + 1 + ''})
    this.bokTop()
    }
  }

  PageNumLeft = () => {
    let total = Math.ceil(this.state.AllOrderStatus.length / 3)
    
    if(this.state.PageNum > 1 ){
    this.setState({ PageNum : Number(this.state.PageNum) - 1})
    
    setTimeout(() => {
      this.showData()
    }, 0)
    this.setState({ selectPage : Number(this.state.PageNum) - 1 + ''})
    this.bokTop()
    }
  }

  changePageNum = (e) => {
    
    let num = e.currentTarget.textContent
    this.setState({ PageNum : num})
    setTimeout(()=>{
      this.showData()
    },100)
    this.setState({ selectPage : num })
    this.bokTop()
  }

  showData () {
    let OrderList , OrderListItem
    let PageNum = this.state.PageNum
    this.setState({ AllPageOrder : this.state.AllOrderStatus.slice((PageNum - 1) * 3, PageNum * 3),
    })
    this.setState({ AllPageOrderItem : this.state.AllOrderStatusitem })
    this.bokTop()
  }

  render() {
    let PageItem = []
    for (let i = 1; i <= Math.ceil(this.state.AllOrderStatus.length / 3); i++){
      PageItem.push(
        <button
        onClick={this.changePageNum}
        className={
          this.state.selectPage === i + ''
              ? 'ins-page-number ins-page-numberHover'
              : 'ins-page-number'}
        >
          {i}
        </button>
      )
      
    }
    
    var OrderStatus = this.state.AllPageOrder
    var OrderStatusitem = this.state.AllPageOrderItem
    // console.log(OrderStatusitem)
    
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
                <div className="ins-order-div-text1">
                  <p className="ins-order-text" title={listItem.name}>購買人 : {listItem.name}</p>
                  <p className="ins-order-text">手機 : {listItem.phone}</p>
                  <p className="ins-order-text">地址 : {listItem.address}</p>
                </div>
                <div className="ins-order-div-text2">
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
          <Link className="ins-page-Rarrow" onClick={this.PageNumLeft}>
            <i className="fas fa-sort-up"></i>
          </Link>
          {PageItem}
          <Link className="ins-page-Larrow" onClick={this.PageNumRight}>
            <i className="fas fa-sort-up"></i>
          </Link>
        </div>
        <div className="insRwd-page-dropdown">
          <button type="button" className="insRwd-page-dropbtn">
            頁數
            <i className="fas fa-sort-down"></i>
          </button>
          <div className="insRwd-page-dropdown-content">
          {PageItem}
          </div>
        </div>
      </div>
    )
  }
}

export default InstrumentOrder

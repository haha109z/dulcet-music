import React from 'react'
if(JSON.parse(localStorage.getItem('user'))){
  const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}
var Mid = getUserInfo()[0].Mid
// this.setState({userID:userID})
}
class InstrumentOrder extends React.Component {
  state = {
    Mid: Mid,
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
      
    })

     
  }

  render() {
    return (
      <div className="ins-order-page">
        <h3 className="font-size-142rem ins-top-titleName ">訂單列表</h3>
        <div
          className="btn-group ins-main-buttons"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-white ins-menu-btn">
            全部
          </button>
          <button type="button" className="btn btn-white ins-menu-btn ">
            待付款
          </button>
          <button type="button" className="btn btn-white ins-menu-btn ">
            待出貨
          </button>
          <button type="button" className="btn btn-white ins-menu-btn ">
            待收貨
          </button>
          <button type="button" className="btn btn-white ins-menu-btn ">
            完成
          </button>
          <button type="button" className="btn btn-white ins-menu-btn ">
            取消
          </button>
        </div>
        <form className="ins-search" action="">
          <div className="ins-dropdown">
            <button type="button" className="ins-dropbtn">
              訂單狀態
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="ins-dropdown-content">
              <a href="#">全部</a>
              <a href="#">待付款</a>
              <a href="#">待出貨</a>
              <a href="#">待收貨</a>
              <a href="#">完成</a>
              <a href="#">取消</a>
            </div>
          </div>
          <input
            className="ins-search-input "
            placeholder="請輸入關鍵字"
            type="text"
          />
          <p className="ins-search-404title ">請輸入商品或訂單關鍵字</p>
          <input className="ins-search-button " type="button" value="送出" />
        </form>

        <hr className="ins-divider" />
        <div className="ins-order">
          <div className="ins-order-title">
            <div>
              <p className="ins-order-text">
                購買人 : 
              </p>
              <p className="ins-order-text">手機 : 0911111111</p>
              <p className="ins-order-text">
                運送地址 : 台北市大安區復興南路160號
              </p>
            </div>
            <div>
              <p className="ins-order-text">訂單編號 : 001</p>
              <p className="ins-order-text">訂單狀態 : 完成</p>
              <p className="ins-order-text">訂單時間 : 2020/06/29</p>
            </div>
          </div>
          <hr className="ins-order-divider" />
          <div className="ins-order-item">
            <div className="ins-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="ins-order-item-text">
              <p className="ins-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="ins-order-item-text-specification  d-flex">
                <p>類別 : 吉他</p>
                <p>數量 : 2</p>
              </p>

              <div className="d-flex ins-order-item-text-money">
                <p className="ins-order-item-text-money-1 ">價格</p>{' '}
                <p className="ins-order-item-text-money-2 ins-font-eg ins-color-red">
                  $
                </p>
                <p className="ins-order-item-text-money-3 ins-font-eg ins-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="ins-order-item">
            <div className="ins-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="ins-order-item-text">
              <p className="ins-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="ins-order-item-text-specification d-flex">
                <p>類別 : 吉他</p>
                <p>數量 : 2</p>
              </p>

              <div className="d-flex ins-order-item-text-money">
                <p className="ins-order-item-text-money-1 ">價格</p>{' '}
                <p className="ins-order-item-text-money-2 ins-font-eg ins-color-red">
                  $
                </p>
                <p className="ins-order-item-text-money-3 ins-font-eg ins-color-red ">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="ins-order-total">
            <p className="ins-order-total-1 ">訂單總價</p>{' '}
            <p className="ins-order-total-2 ins-font-eg ins-color-red">$</p>
            <p className="ins-order-total-3 ins-font-eg ins-color-red">
              999
            </p>{' '}
          </div>
          <hr className="ins-item-divider" />
        </div>
        <div className="ins-order">
          <div className="ins-order-title">
            <div>
              <p className="ins-order-text">購買人 : 曾國瑋</p>
              <p className="ins-order-text">手機 : 0911111111</p>
              <p className="ins-order-text">
                運送地址 : 台北市大安區復興南路160號
              </p>
            </div>
            <div>
              <p className="ins-order-text">訂單編號 : 001</p>
              <p className="ins-order-text">訂單狀態 : 完成</p>
              <p className="ins-order-text">訂單時間 : 2020/06/29</p>
            </div>
          </div>
          <hr className="ins-order-divider" />
          <div className="ins-order-item">
            <div className="ins-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="ins-order-item-text">
              <p className="ins-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="ins-order-item-text-specification d-flex">
                <p>類別 : 吉他</p>
                <p>數量 : 2</p>
              </p>

              <div className="d-flex ins-order-item-text-money">
                <p className="ins-order-item-text-money-1 ">價格</p>{' '}
                <p className="ins-order-item-text-money-2 ins-font-eg ins-color-red">
                  $
                </p>
                <p className="ins-order-item-text-money-3 ins-font-eg ins-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="ins-order-item">
            <div className="ins-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="ins-order-item-text">
              <p className="ins-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="ins-order-item-text-specification d-flex">
                <p>類別 : 吉他</p>
                <p>數量 : 2</p>
              </p>

              <div className="d-flex ins-order-item-text-money">
                <p className="ins-order-item-text-money-1 ">價格</p>{' '}
                <p className="ins-order-item-text-money-2 ins-font-eg ins-color-red">
                  $
                </p>
                <p className="ins-order-item-text-money-3 ins-font-eg ins-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="ins-order-total">
            <p className="ins-order-total-1 ">訂單總價</p>{' '}
            <p className="ins-order-total-2 ins-font-eg ins-color-red">$</p>
            <p className="ins-order-total-3 ins-font-eg ins-color-red">
              999
            </p>{' '}
          </div>
          <hr className="ins-item-divider" />
        </div>
        <div className="ins-order">
          <div className="ins-order-title">
            <div>
              <p className="ins-order-text">購買人 : 曾國瑋</p>
              <p className="ins-order-text">手機 : 0911111111</p>
              <p className="ins-order-text">
                運送地址 : 台北市大安區復興南路160號
              </p>
            </div>
            <div>
              <p className="ins-order-text">訂單編號 : 001</p>
              <p className="ins-order-text">訂單狀態 : 完成</p>
              <p className="ins-order-text">訂單時間 : 2020/06/29</p>
            </div>
          </div>
          <hr className="ins-order-divider" />
          <div className="ins-order-item">
            <div className="ins-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="ins-order-item-text">
              <p className="ins-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="ins-order-item-text-specification d-flex">
                <p>類別 : 吉他</p>
                <p>數量 : 2</p>
              </p>

              <div className="d-flex ins-order-item-text-money">
                <p className="ins-order-item-text-money-1 ">價格</p>{' '}
                <p className="ins-order-item-text-money-2 ins-font-eg ins-color-red">
                  $
                </p>
                <p className="ins-order-item-text-money-3 ins-font-eg ins-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="ins-order-item">
            <div className="ins-order-item-img">
              <img src={require('../../../img/home_logo_方.png')} alt="" />
            </div>
            <div className="ins-order-item-text">
              <p className="ins-order-item-text-name ">
                現貨 免運費！11段角度調節】鋁合金筆電支架 筆電散熱架 散熱器
                散熱墊 筆電架電腦架 筆電散熱 金屬支架度調節】鋁合金筆電支架
                筆電散熱架 散熱器 散熱墊 筆電架電腦架 筆電散熱
                金屬支架度調節】鋁合金筆電支架 筆電散熱架 散熱器 散熱墊
                筆電架電腦架 筆電散熱 金屬支架
              </p>
              <p className="ins-order-item-text-specification d-flex">
                <p>類別 : 吉他</p>
                <p>數量 : 2</p>
              </p>

              <div className="d-flex ins-order-item-text-money">
                <p className="ins-order-item-text-money-1 ">價格</p>{' '}
                <p className="ins-order-item-text-money-2 ins-font-eg ins-color-red">
                  $
                </p>
                <p className="ins-order-item-text-money-3 ins-font-eg ins-color-red">
                  999
                </p>{' '}
              </div>
            </div>
          </div>
          <div className="ins-order-total">
            <p className="ins-order-total-1 ">訂單總價</p>{' '}
            <p className="ins-order-total-2 ins-font-eg ins-color-red">$</p>
            <p className="ins-order-total-3 ins-font-eg ins-color-red">
              999
            </p>{' '}
          </div>
          <hr className="ins-item-divider" />
        </div>
        <div className="ins-page">
          <a className="ins-page-Rarrow">
            <i className="fas fa-sort-up"></i>
          </a>
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

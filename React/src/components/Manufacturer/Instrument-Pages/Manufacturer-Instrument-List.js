import React from 'react'
import {
  BrowserRouter,
  Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

class InstrumentList extends React.Component {
  state = {
    btn: '全部',
    Mid: '',
    PageNum:1,
    selectPage:'1',
    ManuProduct: [
      {
        Pid: '',
        PState: '',
        PClick: '',
        PcategoryId: '',
        Pimg: '',
        Pname: '',
        PInstrumentId: '',
        PQty: '',
        PIntro: '',
        Pdesciption: '',
        PCompanyId: '',
        PPrice: '',
        create_at: '',
        update_at: '',
      },
    ],
    AllManuProduct: [], //原始資料庫資料
    Allcheckboxcontent: [], //全選抓資料
    AllProductStatus: [], // 裝切換狀態的資料
    AllPageData:[],// 頁數內資料
    
  }

  bokTop() {
    document.documentElement.scrollTop = 0
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem('user'))) {
      const getUserInfo = () => {
        return JSON.parse(localStorage.getItem('user'))
      }
      var Mid = getUserInfo()[0].Mid
      this.setState({
        Mid: Mid,
      })
    }
    fetch('http://localhost:3030/ManufacturerInstrument/InstrumentList', {
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
        this.setState({
          AllManuProduct: json,
          AllProductStatus: json,
        })
        setTimeout(()=>{
          this.showData()
        },10)
      })

    this.handleputon = (e) => {
      let PId = e
      let PState = '上架'
      MySwal.fire({
        icon: 'success',
        title: '上架成功',
        confirmButtonText: '確定', // 確定按鈕的 文字
        // showCancelButton: true, // 是否顯示取消按鈕
        // cancelButtonColor: '#dadada', // 取消按鈕的 顏色
        // cancelButtonText: '取消', // 取消按鈕的 文字
      }).then(function () {
        fetch('http://localhost:3030/ManufacturerInstrument/InstrumentList', {
          method: 'POST',
          body: JSON.stringify({
            PId,
            PState,
          }),
          headers: new Headers({
            'Content-type': 'application/json',
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              AllManuProduct: json,
            })
            this.setState({ AllProductStatus: this.state.AllManuProduct })
          })
        window.location.reload(true)
      })
    }

    this.handledown = (e) => {
      let PId = e
      let PState = '下架'
      MySwal.fire({
        icon: 'success',
        title: '下架成功',
        confirmButtonText: '確定', // 確定按鈕的 文字
        // showCancelButton: true, // 是否顯示取消按鈕
        // cancelButtonColor: '#dadada', // 取消按鈕的 顏色
        // cancelButtonText: '取消', // 取消按鈕的 文字
      }).then(function () {
        fetch('http://localhost:3030/ManufacturerInstrument/InstrumentList', {
          method: 'POST',
          body: JSON.stringify({
            PId,
            PState,
          }),
          headers: new Headers({
            'Content-type': 'application/json',
          }),
        })
          .then((res) => res.json())
          .then((json) => {
            this.setState({
              AllManuProduct: json,
            })
          })
        window.location.reload(true)
      })
    }

    this.handledel = (e, d) => {
      let PId = e
      if (d == '下架') {
        MySwal.fire({
          icon: 'question',
          title: '確定要刪除?',
          confirmButtonText: '確定', // 確定按鈕的 文字
          showCancelButton: true, // 是否顯示取消按鈕
          cancelButtonColor: '#dadada', // 取消按鈕的 顏色
          cancelButtonText: '取消', // 取消按鈕的 文字
        }).then(function (isConfirm) {
          if (isConfirm.value) {
            fetch(
              'http://localhost:3030/ManufacturerInstrument/InstrumentListDel',
              {
                method: 'POST',
                body: JSON.stringify({
                  PId,
                }),
                headers: new Headers({
                  'Content-type': 'application/json',
                }),
              }
            )
              .then((res) => res.json())
              .then((json) => {
                //   this.setState({
                //     AllManuProduct : json
                // })
              })
            window.location.reload(true)
          } else {
            MySwal.fire('取消刪除', '', 'error')
          }
        })
      } else {
        MySwal.fire('請先下架後再刪除', '', 'error')
      }
    }

    this.handlealldel = () => {
      let check = document.querySelectorAll('.ins-list-content-chk')
      let content = document.querySelector('.ins-list-product').length

      let total = 0
      for (var i = 0; i < check.length; i++) {
        if (check[i].checked) {
          total += 1

        }
      }
      alert(total)
      console.log(content)
    }

    
    this.handleinto = (
      Mid,
      PId,
      PName,
      PImg,
      PInstrumentId,
      PState,
      PQty,
      PPrice,
      PIntro,
      Pdesciption
    ) => {
      let ManuProData = []
      ManuProData.push({
        Mid: Mid,
        PId: PId,
        PName: PName,
        PImg: PImg,
        PInstrumentId: PInstrumentId,
        PState: PState,
        PQty: PQty,
        PPrice: PPrice,
        PIntro: PIntro,
        Pdesciption: Pdesciption,
      })
      localStorage.setItem('ManuProData', JSON.stringify(ManuProData))
    }

    this.filterStates = (e) => {
      let status = e.currentTarget.textContent

      setTimeout(() => {
        this.setState({ btn: status })
        this.setState({ PageNum : 1})
        this.setState({ selectPage : '1'})
        if (status == '全部') {
          setTimeout(() => {
            this.setState({ AllProductStatus: this.state.AllManuProduct })
          }, 10)

          setTimeout(() => {
            this.showData()
          }, 0)
          this.bokTop()
          console.log(this.state.AllProductStatus)
          return
        } else {
          let data = this.state.AllManuProduct.filter((v) => v.PState == status)
          console.log(data)
          this.setState({ AllProductStatus: data })
          console.log(this.state.AllProductStatus)
          setTimeout(() => {
            this.showData()
          }, 0)
          this.bokTop()
          return
        }
      })
    }
    
    // this.SendSearch = e =>{
    //   let search = document.querySelector('.ins-list-inp').value
    //   // alert(search)
    //   const name = this.state.AllManuProduct.map(
    //     (v) => v.PName).indexOf(search)

    //     console.log(name)
    //     this.setState({ AllProductStatus : name})
    // }
  }
  PageNumRight = () => {
    let total = Math.ceil(this.state.AllProductStatus.length / 3)
    
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
    // let total = Math.ceil(this.state.AllProductStatus.length / 3)
    
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
    this.setState({ AllPageData : this.state.AllProductStatus.slice((PageNum - 1) * 5, PageNum * 5),
    })
    
    this.bokTop()
  }

  // handlecheck = (e) => {
  //   const check = document.querySelectorAll('.ins-list-content-chk')
  //   const allchk = document.querySelector('.ins-list-tool-chk')
  //   if (allchk.checked) {
  //     for (var i = 0; i < check.length; i++) {
  //       check[i].checked = true
       
  //     }
  //   } else {
  //     for (var i = 0; i < check.length; i++) {
  //       check[i].checked = false
  //     }
  //   }
  // }

  render() {

    let PageItem = []
    for (let i = 1; i <= Math.ceil(this.state.AllProductStatus.length / 5); i++){
      PageItem.push(
        <button
        onClick={this.changePageNum}
        className={
          this.state.selectPage === i + ''
              ? 'ins-page-number ins-page-numberHover'
              : 'ins-page-number'
        }
        >
          {i}
        </button>
      )
    }
    let AllPageData = this.state.AllPageData
    // let { AllProductStatus } = this.state
    // console.log(this.state.AllProductStatus)
    return (
      <div className="ins-list-page">
        <h3 className="ins-list-title font-size-142rem">樂器列表</h3>
        <div
          className="btn-group ins-main-buttons"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.filterStates}
          >
            全部
          </button>
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.filterStates}
          >
            上架
          </button>
          <button
            type="button"
            className="btn btn-white ins-menu-btn"
            onClick={this.filterStates}
          >
            下架
          </button>
        </div>
        <form className="ins-list-search">
          <div className="ins-dropdown">
            <button type="button" className="ins-dropbtn">
              商品 : {this.state.btn}
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="ins-dropdown-content">
              <Link href="#" onClick={this.filterStates}>
                全部
              </Link>
              <Link href="#" onClick={this.filterStates}>
                上架
              </Link>
              <Link href="#" onClick={this.filterStates}>
                下架
              </Link>
            </div>
          </div>
          <label className="ins-list-search-label">
            <input
              type="text"
              className="ins-list-inp"
              placeholder="請輸入關鍵字"
            />
            <p>請輸入商品關鍵字</p>
            <button type="button" className="ins-list-search-btn">
              送出
            </button>
          </label>
        </form>
        <hr className="ins-list-hr" />
        <Link
          to="/ManufacturerInstrument/InstrumentPutOn"
          className="ins-list-add-btn"
        >
          新增影片
        </Link>
        <div className="ins-list-tools">
          <div className="ins-list-option">
            <input
              type="checkbox"
              onClick={this.handlecheck}
              className="ins-list-tool-chk"
            />
            <p>全選</p>
            <a onClick={this.handlealldel}>刪除</a>
            <a onClick={this.handleallputon}>上架</a>
            <a onClick={this.handlealldown}>下架</a>
          </div>
          <Link
            to="/ManufacturerInstrument/InstrumentPutOn"
            className="ins-list-tool-btn"
          >
            新增樂器
          </Link>
        </div>
        <div className="ins-product-amount">
          <p>目前所有商品數量為 : {this.state.AllManuProduct.length} 筆</p>
        </div>
        {AllPageData.map((product, index) => (
          <form className="ins-list-product">
            <div className="ins-list-state">
              <p className="font-size-185rem">商品編號 : {product.PId}</p>
              <p className="font-size-185rem">商品狀態 : {product.PState}</p>
            </div>
            <div className="ins-list-content">
              <input
                type="checkbox"
                className="ins-list-content-chk"
                
              />
              <div className="ins-list-content-movie">
                <img
                  src={`http://localhost:3030/images/product/${product.PImg}`}
                />
              </div>
              <Link
                to="/ManufacturerInstrument/InstrumentEdit"
                className="ins-list-content-text"
                onClick={() =>
                  this.handleinto(
                    this.state.Mid,
                    product.PId,
                    product.PName,
                    product.PImg,
                    product.PInstrumentId,
                    product.PState,
                    product.PQty,
                    product.PPrice,
                    product.PIntro,
                    product.Pdesciption
                  )
                }
              >
                <h3 className="font-size-142rem">{product.PName}</h3>
                <p className="font-size-1rem">類別 : {product.PInstrumentId}</p>
                <p className="font-size-1rem">更新時間 : {product.update_at}</p>
                <p className="font-size-1rem">庫存數量 : {product.PQty}</p>
                <span className="ins-list-pro-money-1 font-size-1rem">
                  價格
                </span>
                <span className="ins-list-pro-money-2 font-size-114rem ins-color-red ins-font-eg">
                  {product.PPrice}
                </span>
              </Link>
              <div className="ins-list-content-btns">
                <button
                  type="button"
                  onClick={() => this.handleputon(product.PId)}
                >
                  上架
                </button>
                <button
                  type="button"
                  onClick={() => this.handledown(product.PId)}
                >
                  下架
                </button>
                <button
                  type="button"
                  onClick={() => this.handledel(product.PId, product.PState)}
                >
                  刪除
                </button>
              </div>
            </div>
          </form>
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

export default InstrumentList

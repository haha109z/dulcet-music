import React from 'react'
import {BrowserRouter,Router,Route,Link,Switch,withRouter,} from 'react-router-dom'


if(JSON.parse(localStorage.getItem('user'))){
  const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}
var Mid = getUserInfo()[0].Mid
// this.setState({userID:userID})
}
class InstrumentList extends React.Component {
    constructor(){
      super()
      this.state={
        
        Mid:Mid,
        ManuProduct:[
          {
            Pid:'',
            Pstate:'',
            PClick:'',
            PcategoryId:'',
            Pimg:'',
            Pname:'',
            PInstrumentId:'',
            PQty:'',
            PIntro:'',
            Pdesciption:'',
            PCompanyId:'',
            PPrice:'',
            create_at:'',
            update_at:'',
          }
        ],
        AllManuProduct : [],
      }
      
    }


    componentDidMount(){
      console.log(this.state.Mid)
      fetch('http://localhost:3030/ManufacturerInstrument/InstrumentList',{
        method:'POST',
        body:JSON.stringify({
            Mid,
        }),
        headers: new Headers({
          'Content-type': 'application/json',
        }),
      })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          AllManuProduct : json
        })
        console.log(this.state.AllManuProduct)
      })
    }
    handleputon=(e)=>{
      console.log(e)

    }
    handledown = (e,v) =>{
      console.log(e)
      // fetch('http://localhost:3030/ManufacturerInstrument/InstrumentList',{
      //   method:'POST',
      //   body:JSON.stringify({
      //       PId,
      //       PState
      //   }),
      //   headers: new Headers({
      //     'Content-type': 'application/json',
      //   }),
      // })
      // .then((res) => res.json())
      // .then((json) => {
      //   this.setState({
      //     AllManuProduct : json
      //   })
      //   console.log(this.state.AllManuProduct)
      // })
    }

    handlecheck = e => {
      const check = document.querySelectorAll(".ins-list-content-chk")
      const allchk = document.querySelector(".ins-list-tool-chk")
      if(allchk.checked){
        for(var i = 0; i < check.length; i++){
          check[i].checked = true
        }
      }else{
        for(var i = 0; i < check.length; i++){
          check[i].checked = false
        }
      }
    }
    
  render() {

    console.log(this.state.AllManuProduct)
    return (
      
      <div className="ins-list-page">
        <h3 className="ins-list-title font-size-142rem">樂器列表</h3>
        <div
          className="btn-group ins-main-buttons"
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className="btn btn-white ins-menu-btn" >
            全部
          </button>
          <button type="button" className="btn btn-white ins-menu-btn ">
            上架中
          </button>
          <button type="button" className="btn btn-white ins-menu-btn ">
            下架中
          </button>
          
        </div>
        <form className="ins-list-search">
        <div className="ins-dropdown">
            <button type="button" className="ins-dropbtn">
              商品狀態
              <i className="fas fa-sort-down"></i>
            </button>
            <div className="ins-dropdown-content">
              <a href="#">全部</a>
              <a href="#">上架中</a>
              <a href="#">下架中</a>
            </div>
          </div>
          <label className="ins-list-search-label">
            <input
              type="text"
              className="ins-list-inp"
              placeholder="請輸入關鍵字"
            />
            <p>請輸入商品關鍵字</p>
            <button type="submit" className="ins-list-search-btn">
              送出
            </button>
          </label>
        </form>
        <hr className="ins-list-hr" />
        <Link to="/ManufacturerInstrument/InstrumentPutOn" className="ins-list-add-btn">
          新增影片
        </Link>
        <div className="ins-list-tools">
          <div className="ins-list-option">
            <input type="checkbox" onClick={this.handlecheck} className="ins-list-tool-chk"/>
            <p>全選</p>
            <a href="">刪除</a>
            <a href="">上架</a>
            <a href="">下架</a>
          </div>
          <Link to="/ManufacturerInstrument/InstrumentPutOn" className="ins-list-tool-btn">新增影片</Link>
        </div>
        <div>
          <p></p>
        </div>

        {this.state.AllManuProduct.map((product,index) => (
        <form className="ins-list-product">
          <div className="ins-list-state">
            <p className="font-size-185rem">商品編號 : {product.PId}</p>
            <p className="font-size-185rem">商品狀態 : {product.PState}</p>
          </div>
          <div className="ins-list-content">
            <input type="checkbox" checked={false} className="ins-list-content-chk"/>
            <div className="ins-list-content-movie">
              <img src={require('../../../img/home_violin_m_8.jpg')}/>
            </div>
            <Link
              to="/ManufacturerInstrument/InstrumentEdit"
              className="ins-list-content-text">
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
              <button type="button" onClick={() => this.handleputon(product.PId)}>上架</button>
              <button type="button" onClick={this.handledown}>下架</button>
              <button type="button" onClick={this.handledel}>刪除</button>
            </div>
          </div>
        </form>
        ))}
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

export default InstrumentList

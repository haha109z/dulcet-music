import React from 'react'
import {BrowserRouter,Router,Route,Link,Switch,withRouter,} from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

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
            PState:'',
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
      this.handleputon=(e)=>{
        
        let PId = e
        let PState = '上架'
        MySwal.fire({
          icon: 'success',
          title: '上架成功',
          confirmButtonText: '確定', // 確定按鈕的 文字
          // showCancelButton: true, // 是否顯示取消按鈕
          // cancelButtonColor: '#dadada', // 取消按鈕的 顏色
          // cancelButtonText: '取消', // 取消按鈕的 文字
        }).then(function(){
        fetch('http://localhost:3030/ManufacturerInstrument/InstrumentList',{
          method:'POST',
          body:JSON.stringify({
              PId,
              PState
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
        })
        window.location.reload(true)
      })
      }



      this.handledown = (e) =>{
        let PId = e
        let PState = '下架'
        MySwal.fire({
          icon: 'success',
          title: '下架成功',
          confirmButtonText: '確定', // 確定按鈕的 文字
          // showCancelButton: true, // 是否顯示取消按鈕
          // cancelButtonColor: '#dadada', // 取消按鈕的 顏色
          // cancelButtonText: '取消', // 取消按鈕的 文字
        }).then(function(){
          
        fetch('http://localhost:3030/ManufacturerInstrument/InstrumentList',{
          method:'POST',
          body:JSON.stringify({
              PId,
              PState
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
        })
        window.location.reload(true)
      })
      }


      this.handledel = (e,d) =>{
        let PId = e
        if(d == '下架'){
        MySwal.fire({
          icon: 'question',
          title: '確定要刪除?',
          confirmButtonText: '確定', // 確定按鈕的 文字
          showCancelButton: true, // 是否顯示取消按鈕
          cancelButtonColor: '#dadada', // 取消按鈕的 顏色
          cancelButtonText: '取消', // 取消按鈕的 文字
        }).then(function(isConfirm){
          if (isConfirm.value) {
          fetch('http://localhost:3030/ManufacturerInstrument/InstrumentListDel',{
              method:'POST',
              body:JSON.stringify({
                  PId,
              }),
              headers: new Headers({
                'Content-type': 'application/json',
              }),
          })
            .then((res) => res.json())
            .then((json) => {
            //   this.setState({
            //     AllManuProduct : json
            // })
          })
          window.location.reload(true)
        }else{
          MySwal.fire('取消刪除', '', 'error')
        }
        })
        }else{
          MySwal.fire('請先下架後再刪除', '', 'error')
        }
      }

      this.handlealldel = () => {
        let check = document.querySelectorAll('.ins-list-content-chk').       
        alert(check)
      }




      this.handleinto = (Mid,PId,PName,PInstrumentId,PState,PQty,PPrice,PIntro,Pdesciption) => {
        let ManuProData = []
        ManuProData.push({
          'Mid':Mid,
          'PId':PId,
          'PName':PName,
          'PInstrumentId':PInstrumentId,
          'PState':PState,
          'PQty':PQty,
          'PPrice':PPrice,
          'PIntro':PIntro,
          'Pdesciption':Pdesciption
        })
        localStorage.setItem('ManuProData',JSON.stringify(ManuProData))
      }
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
            <a onClick={this.handlealldel}>刪除</a>
            <a onClick={this.handleallputon}>上架</a>
            <a onClick={this.handlealldown}>下架</a>
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
            <input type="checkbox" checked={false} className="ins-list-content-chk" />
            <div className="ins-list-content-movie">
              <img src={require('../../../img/home_violin_m_8.jpg')}/>
            </div>
            <Link
              to="/ManufacturerInstrument/InstrumentEdit"
              className="ins-list-content-text" onClick={() => this.handleinto(this.state.Mid,product.PId,product.PName,product.PInstrumentId,product.PState,product.PQty,product.PPrice,product.PIntro,product.Pdesciption)}>
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
              <button type="button" onClick={() => this.handledown(product.PId)}>下架</button>
              <button type="button" onClick={() => this.handledel(product.PId,product.PState)}>刪除</button>
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

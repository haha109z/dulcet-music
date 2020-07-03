import React from 'react'
import { FaPlus, FaCommentsDollar } from 'react-icons/fa'
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
const getproductInfo = () => {
  return JSON.parse(localStorage.getItem('ManuProData'))
}
class InstrumentEdit extends React.Component {
  state = {
    ManuData: [],
    Mid:Mid,
    img: '',
    PId:'',
    changePName:'',
    changePQty:'',
    changePPrice:'',
    changePState:'',
    changePInstrumentId:'',
    changePIntro:'',
    changePdesciption:'', 
  }
  constructor() {
    super()

  }
  componentDidMount() {
    if (getproductInfo()) {
      let manu = getproductInfo()
      console.log(manu)
      if (manu[0].Mid) {
        this.setState({ 
          PId:manu[0].PId,
          changePName:manu[0].PName,
          changePQty:manu[0].PQty,
          changePPrice:manu[0].PPrice,
          changePState:manu[0].PState,
          changePInstrumentId:manu[0].PInstrumentId,
          changePIntro:manu[0].PIntro,
          changePdesciption:manu[0].Pdesciption, 
        })
      } else {
        this.setState({ 
          PId:'',
          changePName:'',
          changePQty:'',
          changePPrice:'',
          changePState:'',
          changePInstrumentId:'',
          changePIntro:'',
          changePdesciption:'', 
        })
      }
    } else {
      this.setState({ 
        PId:'',
        changePName:'',
        changePQty:'',
        changePPrice:'',
        changePState:'',
        changePInstrumentId:'',
        changePIntro:'',
        changePdesciption:'',  
      })
    }
  }

    handlename = e =>{
      this.setState({
          changePName:e.target.value
      })
      
  }
  handleoption = e =>{ 
      this.setState({
          changePInstrumentId:e.target.value
      },()=>{
      console.log(this.state.changePInstrumentId)
      })
  }
  handleamount = e =>{
      this.setState({
          changePQty:e.target.value
      })
      
  }
  handleprice = e =>{
      this.setState({
          changePPrice:e.target.value
      })
      
  }
  handlestate = e =>{
      this.setState({
          changePState:e.target.value
      },() => {
          console.log(this.state.newPState)
      })
      
  }
  handletext1 = e =>{
      this.setState({
          changePIntro:e.target.value
      })
      
  }
  handletext2 = e =>{
      this.setState({
          changePdesciption:e.target.value
      })
      
  }
  
  handleUpload = (e) => {
    //抓取上傳檔案按鈕元素
    const uploadfile = document.querySelector('.ins-edit-file-img')
    //抓取預覽圖片元素
    const preview = document.querySelector('.ins-edit-pre-img')
    //建立file obj
    const filereader = new FileReader()
    // 抓取預覽圖片的父元素及裡面的子元素
    const del = document.querySelector('.ins-edit-add')
    const h3 = document.querySelector('.ins-edit-file-text')
    const div = document.querySelector('.ins-edit-icon-div')

    // 追蹤上傳按鈕事件
    uploadfile.addEventListener('change', (e) => {
      // 抓到值放入 變數file
      const file = e.target.files[0]
      // 轉成base46碼
      filereader.readAsDataURL(file)
      // 刪除預覽圖片的子元素

      h3.style.display = 'none'
      div.style.display = 'none'
    })
    // 追蹤事件載入
    filereader.addEventListener('load', function () {
      // 把base46碼放入變數 dataURL
      const dataURL = filereader.result
      console.log(dataURL)
      // 把值傳入預覽圖片元素顯示
      preview.src = dataURL
      alert('上傳成功')
    })
  }
  handlesend = () =>{
    let {
      Mid,
      PId,
      changePName,
      changePQty,
      changePPrice,
      changePState,
      changePInstrumentId,
      changePIntro,
      changePdesciption, 
    } = this.state

    fetch('http://localhost:3030/ManufacturerInstrument/InstrumentEdit',{
            method : 'POST',
            body:JSON.stringify({
                Mid,
                PId,
                changePName,
                changePQty,
                changePPrice,
                changePState,
                changePInstrumentId,
                changePIntro,
                changePdesciption, 
            }),
            headers:new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then((res) => {
          console.log(res)
      })
  }
  

  render() {

    return (
      <div className="ins-edit-page">
        <h3 className="font-size-142rem">編輯商品</h3>
        <form className="ins-edit-form">
          <div className="ins-edit-add" controls>
            <h3 className="ins-edit-file-text font-size-142rem">圖片預覽</h3>
            <div className="ins-edit-icon-div">
              <FaPlus className="ins-edit-icon" />
            </div>
            <img className="ins-edit-pre-img"></img>
          </div>
          <div className="ins-edit-file-btn">
            <label htmlFor="file" onClick={this.handleUpload}>
              選擇圖片
            </label>
            <input
              type="file"
              id="file"
              multiple
              accept="image/png, image/jpeg ,image/jpg"
              className="ins-edit-file-img"
            />
          </div>

          <div className="ins-edit-content">
            <label htmlFor="mid" className="ins-edit-label font-size-1rem">
              廠商編號
              <input
                id="mid"
                type="text"
                className="font-size-114rem"
                readOnly
                value={this.state.Mid}
              />
            </label>
            <label htmlFor="name" className="ins-edit-label font-size-1rem">
              名稱
              <input id="name" type="text" className="font-size-114rem" defaultValue={this.state.changePName} onChange={this.handlename}/>
            </label>
            <label className="ins-edit-label font-size-1rem" htmlFor="option">
              類別
              <div className="ins-edit-select-value">
                <select
                  className="font-size-114rem"
                  id="option"
                  onChange={this.handleoption}
                >
                  <option>{this.state.changePInstrumentId}</option>
                  <option value="小提琴">小提琴</option>
                  <option value="中提琴">中提琴</option>
                  <option value="薩克斯風">薩克斯風</option>
                  <option value="鋼琴">鋼琴</option>
                  <option value="電子琴">電子琴</option>
                  <option value="爵士鼓">爵士鼓</option>
                  <option value="吉他">吉他</option>
                  <option value="烏克莉莉">烏克莉莉</option>
                  <option value="長笛">長笛</option>
                </select>
              </div>
            </label>
            <label htmlFor="state" className="ins-edit-label font-size-1rem">
              狀態
              <div className="ins-edit-select-value">
                <select id="state" className="font-size-114rem" onChange={this.handlestate}>
                  <option>{this.state.changePState}</option>
                  <option value="上架">上架</option>
                  <option value="下架">下架</option>
                </select>
              </div>
            </label>
            <label htmlFor="amount" className="ins-edit-label font-size-1rem">
              數量
              <input id="amount" type="text" className="font-size-114rem" defaultValue={this.state.changePQty} onChange={this.handleamount}/>
            </label>
            <label htmlFor="price" className="ins-edit-label font-size-1rem">
              價格
              <input id="price" type="text" className="font-size-114rem" defaultValue={this.state.changePPrice} onChange={this.handleprice}/>
            </label>
            <label htmlFor="text1" className="ins-edit-label font-size-1rem">
              簡介
              <input id="text1" type="text" className="font-size-114rem" defaultValue={this.state.changePIntro} onChange={this.handletext1}/>
            </label>
            <label
              htmlFor="text2"
              className="ins-edit-content-text font-size-1rem"
            >
              介紹<textarea id="text2" className="font-size-114rem" defaultValue={this.state.changePdesciption} onChange={this.handletext2}></textarea>
            </label>
            <button type="button" className="ins-edit-add-btn" onClick={this.handlesend}>
              確認
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default InstrumentEdit

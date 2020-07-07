import React from 'react'
import { FaPlus, FaCommentsDollar } from "react-icons/fa"
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
class InstrumentPutOn extends React.Component{
        state = {
            Mid : Mid,
            PId:'',
            newPName:'',
            newPCategoryId:'樂器',
            newPQty:'',
            newPPrice:'',
            newPState:'',
            newPInstrumentId:'',
            newPIntro:'',
            newPdesciption:'',
            newPimg:'',              
        } 

    componentDidMount(){
        if(JSON.parse(localStorage.getItem('user'))){
            const getUserInfo = () => {
            return JSON.parse(localStorage.getItem('user'))
          }
          var Mid = getUserInfo()[0].Mid
          // this.setState({userID:userID})
          this.setState({
            Mid: Mid,
          })
          }
    }
   

    handleUpload = e =>{
        //抓取上傳檔案按鈕元素
        const uploadfile = document.querySelector('.ins-puton-file-img'); 
        //抓取預覽圖片元素
        const preview = document.querySelector('.ins-pre-img') 
        //建立file obj 
        const filereader = new FileReader() 
        // 抓取預覽圖片的父元素及裡面的子元素
        const del = document.querySelector('.ins-puton-add')
        const h3 = document.querySelector('.ins-puton-file-text')
        const div = document.querySelector('.ins-puton-icon-div')

        // 追蹤上傳按鈕事件
        uploadfile.addEventListener('change', e => {
            // 抓到值放入 變數file
            const file = e.target.files[0]

            this.setState({
                newPimg : file
            })
            console.log(this.state.newPimg)
            // 轉成base46碼
            filereader.readAsDataURL(file)
            // 刪除預覽圖片的子元素

            h3.style.display = 'none'
            div.style.display = 'none'



            console.log("file",file);
        
        const formData = new FormData()
        // 这里的 image 是字段，根据具体需求更改
        formData.append('image', file)
        // 这里的 fetch 引用了 isomorphic-fetch 包
        // console.log("this.state.user", this.state.user)
        // return
        fetch(`http://localhost:3030/manuI_putonimg/product`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    PId : json
                })
                console.log(this.state.PId)
            })
        })
        // 追蹤事件載入
        filereader.addEventListener('load',function(){
            // 把base46碼放入變數 dataURL
            const dataURL = filereader.result
            console.log(dataURL)
            // 把值傳入預覽圖片元素顯示
            preview.src = dataURL;
            // alert('上傳成功')
        })

        
        
      
    }

    handlename = e =>{
        this.setState({
            newPName:e.target.value
        })
        
    }
    handleoption = e =>{ 
        this.setState({
            newPInstrumentId:e.target.value
        },()=>{
        console.log(this.state.newPInstrumentId)
        })
    }
    handleamount = e =>{
        this.setState({
            newPQty:e.target.value
        })
        
    }
    handleprice = e =>{
        this.setState({
            newPPrice:e.target.value
        })
        
    }
    handlestate = e =>{
        this.setState({
            newPState:e.target.value
        },() => {
            console.log(this.state.newPState)
        })
        
    }
    handletext1 = e =>{
        this.setState({
            newPIntro:e.target.value
        })
        
    }
    handletext2 = e =>{
        this.setState({
            newPdesciption:e.target.value
        })
        
    }



    handlesend = () => {
    
        let {
            Mid,
            newPName,
            newPCategoryId,
            newPQty,
            newPPrice,
            newPState,
            newPInstrumentId,
            newPIntro,
            newPdesciption,
            PId,
        } = this.state
        if(
            this.state.Mid && 
            this.state.newPQty && 
            this.state.newPPrice && 
            this.state.newPState && 
            this.state.newPInstrumentId && 
            this.state.newPIntro &&
            this.state.newPdesciption){
        fetch('http://localhost:3030/ManufacturerInstrument/InstrumentPutOn',{
            method : 'POST',
            body:JSON.stringify({
                Mid,
                newPName,
                newPCategoryId,
                newPQty,
                newPPrice,
                newPState,
                newPInstrumentId,
                newPIntro,
                newPdesciption,
                PId,
            }),
            headers:new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then((res) => {
            console.log(res)
        })
        MySwal.fire({
            icon:'success',
            title:'新增成功',
            confirmButtonText: '確定', // 確定按鈕的 文字,
        }).then(function(){
            window.location.assign("http://localhost:3000/ManufacturerInstrument/InstrumentList")
        })
    }else{
        MySwal.fire({
            icon:'error',
            title:'欄位不可為空',
            confirmButtonText: '確定', // 確定按鈕的 文字,
        })
    }
    }
        
       


    
    render(){
        console.log(Mid)
    return(
        <div className="ins-puton-page">
        <h3 className="font-size-142rem">新增商品</h3>
        <form className="ins-puton-form">
            <div className="ins-puton-add" controls>
                <h3 className="ins-puton-file-text font-size-142rem">圖片預覽</h3>
                    <div className="ins-puton-icon-div">
                        <FaPlus className="ins-puton-icon"/>
                    </div>
                <img className="ins-pre-img"></img>
            </div>
            <div className="ins-puton-file-btn">
                <label htmlFor="file" onClick={this.handleUpload}>選擇圖片</label>
                <input type="file" id="file" multiple
                 accept="image/png, image/jpeg ,image/jpg" className="ins-puton-file-img"/>
            </div>
            
          
            <div className="ins-puton-content">
                <label htmlFor="mid" className="ins-puton-label font-size-1rem">廠商編號<input id="mid" type="text" className="font-size-114rem" readOnly value={this.state.Mid}/></label>
                <label htmlFor="name" className="ins-puton-label font-size-1rem">名稱<input id="name" type="text" className="font-size-114rem" onChange={this.handlename} value={this.state.newPName}/></label>
                <label className="ins-puton-label font-size-1rem" htmlFor="option">類別
                <div className="ins-select-value">
                    <select className="font-size-114rem" id="option" onChange={this.handleoption} value={this.state.newPInstrumentId}>
                        <option value="">請選擇類別</option>
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
                <label htmlFor="state" className="ins-puton-label font-size-1rem">狀態
                <div className="ins-select-value">
                <select id="state" className="font-size-114rem" onChange={this.handlestate}>
                    <option>請選擇狀態</option>
                    <option value="上架">上架</option>
                    <option value="下架">下架</option>
                </select>
                </div>
                </label>
                <label htmlFor="amount" className="ins-puton-label font-size-1rem">數量<input id="amount" type="text" className="font-size-114rem" onChange={this.handleamount}/></label>
                <label htmlFor="price" className="ins-puton-label font-size-1rem">價格<input id="price" type="text" className="font-size-114rem" onChange={this.handleprice}/></label>
                <label htmlFor="text1" className="ins-puton-label font-size-1rem">簡介<input id="text1" type="text" className="font-size-114rem" onChange={this.handletext1}/></label>
                <label htmlFor="text2" className="ins-puton-content-text font-size-1rem">介紹<textarea id="text2" className="font-size-114rem" onChange={this.handletext2}></textarea></label>
                <button type="button" className="ins-puton-add-btn" onClick={this.handlesend}>確認</button>
            </div>
        </form>
        </div>
    )
    }
   
}

export default InstrumentPutOn


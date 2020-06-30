import React from 'react'
import { FaPlus, FaCommentsDollar } from "react-icons/fa"



class InstrumentEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            img : '',
            
        }
    }
    handlechange(event){
        const v = event.target.value
        console.log(v)
    }
    handleUpload = e =>{
        //抓取上傳檔案按鈕元素
        const uploadfile = document.querySelector('.ins-edit-file-img'); 
        //抓取預覽圖片元素
        const preview = document.querySelector('.ins-edit-pre-img') 
        //建立file obj 
        const filereader = new FileReader() 
        // 抓取預覽圖片的父元素及裡面的子元素
        const del = document.querySelector('.ins-edit-add')
        const h3 = document.querySelector('.ins-edit-file-text')
        const div = document.querySelector('.ins-edit-icon-div')

        // 追蹤上傳按鈕事件
        uploadfile.addEventListener('change', e => {
            // 抓到值放入 變數file
            const file = e.target.files[0]
            // 轉成base46碼
            filereader.readAsDataURL(file)
            // 刪除預覽圖片的子元素

            h3.style.display = 'none'
            div.style.display = 'none'
        })
        // 追蹤事件載入
        filereader.addEventListener('load',function(){
            // 把base46碼放入變數 dataURL
            const dataURL = filereader.result
            console.log(dataURL)
            // 把值傳入預覽圖片元素顯示
            preview.src = dataURL;
            alert('上傳成功')
        })
    }
    
   
    render(){
        
    return(
        <div className="ins-edit-page">
        <h3 className="font-size-142rem">編輯商品</h3>
        <form className="ins-edit-form">
            <div className="ins-edit-add" controls>
                <h3 className="ins-edit-file-text font-size-142rem">圖片預覽</h3>
                    <div className="ins-edit-icon-div">
                        <FaPlus className="ins-edit-icon"/>
                    </div>
                <img className="ins-edit-pre-img"></img>
            </div>
            <div className="ins-edit-file-btn">
                <label htmlFor="file" onClick={this.handleUpload}>選擇圖片</label>
                <input type="file" id="file" multiple
                 accept="image/png, image/jpeg ,image/jpg" className="ins-edit-file-img"/>
            </div>
            
          
            <div className="ins-edit-content">
                <label htmlFor="name" className="ins-edit-label font-size-1rem">名稱<input id="name" type="text" className="font-size-114rem"/></label>
                <label className="ins-edit-label font-size-1rem" htmlFor="option">類別
                <div className="ins-edit-select-value">
                    <select className="font-size-114rem" id="option" onChange={this.handlechange}>
                        <option value=""></option>
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
                
                <label htmlFor="amount" className="ins-edit-label font-size-1rem">數量<input id="amount" type="text" className="font-size-114rem"/></label>
                <label htmlFor="price" className="ins-edit-label font-size-1rem">價格<input id="price" type="text" className="font-size-114rem"/></label>
                <label htmlFor="text1" className="ins-edit-label font-size-1rem">簡介<input id="text1" type="text" className="font-size-114rem"/></label>
                <label htmlFor="text2" className="ins-edit-content-text font-size-1rem">介紹<textarea id="text2" className="font-size-114rem"></textarea></label>
                <button type="submit" className="ins-edit-add-btn">確認</button>
            </div>
        </form>
        </div>
    )
    }
   
}

export default InstrumentEdit


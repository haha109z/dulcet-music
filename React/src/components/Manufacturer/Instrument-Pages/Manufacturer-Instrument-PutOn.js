import React from 'react'
import { FaPlus, FaCommentsDollar } from "react-icons/fa"



class InstrumentPutOn extends React.Component{
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
            // 轉成base46碼
            filereader.readAsDataURL(file)
            // 刪除預覽圖片的子元素
            del.removeChild(h3)
            del.removeChild(div)
        })
        // 追蹤事件載入
        filereader.addEventListener('load',function(){
            // 把base46碼放入變數 dataURL
            const dataURL = filereader.result
            // 把值傳入預覽圖片元素顯示
            preview.src = dataURL;
            alert('上傳成功')
        })

        
    }
    
    // fileLoad = e =>{
    //     this.setState({
    //         img : e.target.result
    //     })
    //     console.log(img);
    // }

    render(){
        
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
            <form className="ins-puton-file-btn">
                <label htmlFor="file" onClick={this.handleUpload}>選擇圖片</label>
                <input type="file" id="file" multiple
                 accept="image/png, image/jpeg ,image/jpg" className="ins-puton-file-img"/>
            </form>
            
          
            <div className="ins-puton-content">
                <label htmlFor="name" className="ins-puton-label font-size-1rem">樂器名稱<input id="name" type="text" className="font-size-114rem"/></label>
                <label className="ins-puton-label font-size-1rem" htmFor="option">樂器類型
                <div className="ins-select-value">
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
                
                <label htmlFor="price" className="ins-puton-label font-size-1rem">樂器價格<input id="price" type="text" className="font-size-114rem"/></label>
                <label htmlFor="text1" className="ins-puton-label font-size-1rem">樂器簡介<input id="text1" type="text" className="font-size-114rem"/></label>
                <label htmlFor="text2" className="ins-puton-content-text font-size-1rem">樂器介紹<textarea id="text2" className="font-size-114rem"></textarea></label>
                <button type="submit" className="ins-puton-add-btn">確認</button>
            </div>
        </form>
        </div>
    )
    }
   
}

export default InstrumentPutOn


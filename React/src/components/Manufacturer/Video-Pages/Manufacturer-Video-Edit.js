import React from 'react'
import { FaPlus } from "react-icons/fa"
import ReactPlayer from 'react-player'




class VideoEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            value : "",
            // videofile :"",
        }
        
    }
    handlechange(event){
        const v = event.target.value
        console.log(v)
    }

    handleUploadimage = e =>{
         //抓取上傳檔案按鈕元素
         const uploadfile = document.querySelector('.video-edit-file-i'); 
         //抓取預覽圖片元素
         const preview = document.querySelector('.video-edit-i-preview') 
         //建立file obj 
         const filereader = new FileReader() 
         // 抓取預覽圖片的父元素及裡面的子元素
        //  const del = document.querySelector('.ins-puton-add')
         const h3 = document.querySelector('.video-edit-file-i-text')
         const div = document.querySelector('.video-edit-i-div')
 
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

    handleUploadvideo = e => {
        const uploadfile = document.querySelector('.video-edit-file-v')
        const preview = document.querySelector('.video-edit-v-preview')
        const filereader = new FileReader()

        const h3 = document.querySelector('.video-edit-file-v-text')
        const div = document.querySelector('.video-edit-v-div')

        uploadfile.addEventListener('change', e => {
            const file = e.target.files[0]

            filereader.readAsDataURL(file)
            preview.style.display = 'block'
            h3.style.display = 'none'
            div.style.display = 'none'
            
        })

        filereader.addEventListener('load',function(){
            const dataURL = filereader.result
            console.log(dataURL)
            preview.src = dataURL;
            alert('上傳成功')
        })
        // uploadfile.addEventListener('change' , e =>{
        //     const file = e.target.files[0]
        //     console.log(file)

        //     const videofile = URL.createObjectURL(file)
        //     console.log(videofile)
        //     preview.src = videofile
        //     preview.style.display = 'block'
        //     h3.style.display = 'none'
        //     div.style.display = 'none'
        // })

    }

    render(){
    return(
        <div className="video-edit-page">
        <h3 className="font-size-142rem">編輯影片</h3>
        <form className="video-edit-form">
        <div className="video-edit-all-file">
            <div className="video-edit-file-v">
                <div className="video-edit-add" >
                    <h3 className="video-edit-file-v-text font-size-142rem">影片預覽</h3>
                    <div className="video-edit-v-div">
                        <FaPlus className="video-edit-icon-v"/>
                    </div>
                    <video className="video-edit-v-preview" width={480} height={320} controls></video>
                </div>
                <div className="video-edit-file-v-div">
                <label className="video-edit-new-btn" htmlFor="v-file" onClick={this.handleUploadvideo}>選擇影片</label>
                <input type="file" className="video-edit-file-v" id="v-file" accept="video/*"/>
                </div>
            </div>
            <div className="video-edit-file-i">
                <div className="video-edit-add-img">
                    <h3 className="video-edit-file-i-text font-size-142rem">圖片預覽</h3>
                    <div className="video-edit-i-div">
                        <FaPlus className="video-edit-icon-i"/>
                    </div>
                    <img className="video-edit-i-preview"></img>
                </div>
                <div className="video-edit-file-i-div">
                <label htmlFor="i-file" onClick={this.handleUploadimage}>選擇圖片</label>
                <input type="file" id="i-file" className="video-edit-file-i"/>
                </div>
            </div>
        </div>
            <div className="video-edit-content">
                <label htmlFor="videoname" className="video-edit-label font-size-1rem">名稱<input id="videoname" type="text" className="font-size-114rem"/></label>
                <label className="video-edit-label font-size-1rem" htmlFor="option">類別
                    <select className="video-value font-size-114rem" id="option" onChange={this.handlechange}>
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
                </label>
                <label htmlFor="videotime" className="video-edit-label font-size-1rem">長度<input id="videotime" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videoprice" className="video-edit-label font-size-1rem">價格<input id="videoprice" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videotext1" className="video-edit-label font-size-1rem">簡介<input id="videotext1" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videotext2" className="video-edit-content-text font-size-1rem">介紹<textarea id="videotext2" className="font-size-114rem"></textarea></label>
                <button type="submit" className="video-edit-add-btn">確認</button>
            </div>
        </form>
        </div>
    )
    }
   
}

export default VideoEdit
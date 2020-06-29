import React from 'react'
import { FaPlus } from "react-icons/fa"
import ReactPlayer from 'react-player'




class VideoPutOn extends React.Component{
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

    handleUpload = e => {
        const uploadfile = document.querySelector('.video-puton-file-v')
        const preview = document.querySelector('.video-puton-preview')
        const filereader = new FileReader()

        const h3 = document.querySelector('.video-puton-file-text')
        const div = document.querySelector('.video-puton-icon-div')

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
        <div className="video-puton-page">
        <h3 className="font-size-142rem">新增影片</h3>
        <form className="video-puton-form">
        <div className="video-puton-all-file">
            <div className="video-puton-file-v">
                <div className="video-puton-add" >
                    <h3 className="video-puton-file-text font-size-142rem">影片預覽</h3>
                    <div className="video-puton-icon-div">
                        <FaPlus className="video-puton-icon"/>
                    </div>
                    <video className="video-puton-preview" width={480} height={320} controls></video>
                </div>
                <div className="video-puton-file-v-div">
                <label className="video-puton-new-btn" htmlFor="v-file" onClick={this.handleUpload}>選擇影片</label>
                <input type="file" className="video-puton-file-v" id="v-file" accept="video/*"/>
                </div>
            </div>
            <div className="video-puton-file-i">
                <div className="video-puton-add-img">
                    <h3 className="video-puton-file-text font-size-142rem">圖片預覽</h3>
                    <div className="video-puton-icon-div">
                        <FaPlus className="video-puton-icon"/>
                    </div>
                    <img></img>
                </div>
                <div className="video-puton-file-i-div">
                <label htmlFor="i-file">選擇圖片</label>
                <input type="file" id="i-file" className="video-puton-file-i"/>
                </div>
            </div>
        </div>
            <div className="video-puton-content">
                <label htmlFor="videoname" className="video-puton-label font-size-1rem">名稱<input id="videoname" type="text" className="font-size-114rem"/></label>
                <label className="video-puton-label font-size-1rem" htmlFor="option">類別
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
                <label htmlFor="videotime" className="video-puton-label font-size-1rem">長度<input id="videotime" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videoprice" className="video-puton-label font-size-1rem">價格<input id="videoprice" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videotext1" className="video-puton-label font-size-1rem">簡介<input id="videotext1" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videotext2" className="video-puton-content-text font-size-1rem">介紹<textarea id="videotext2" className="font-size-114rem"></textarea></label>
                <button type="submit" className="video-puton-add-btn">確認</button>
            </div>
        </form>
        </div>
    )
    }
   
}

export default VideoPutOn
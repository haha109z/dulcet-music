import React from 'react'
import { FaPlus } from "react-icons/fa"


class VideoPutOn extends React.Component{
    constructor(){
        super()
        this.state = {
            value :""
        }
    }
    handlechange(event){
        const v = event.target.value
        console.log(v)
    }

    render(){
    return(
        <div className="video-puton-page">
        <h3>新增影片</h3>
        <form className="video-puton-form">
            <div className="video-puton-add" controls>
                <h3 className="video-puton-file-text">將檔案拖曳到這裡</h3>
                <div className="video-puton-icon-div">
                    <FaPlus className="video-puton-icon"/>
                </div>
            </div>
            <div className="video-puton-content">
            <label htmlFor="videoname" className="video-puton-label">影片名稱<input id="videoname" type="text"/></label>
            <label className="video-puton-label">影片類型
            <select className="video-value" onChange={this.handlechange}>
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
            <label htmlFor="videotime" className="video-puton-label">影片長度<input id="videotime" type="text"/></label>
            <label htmlFor="videoprice" className="video-puton-label">影片價格<input id="videoprice" type="text"/></label>
            <label htmlFor="videotext" className="video-puton-content-text">影片簡介<textarea id="videotext"></textarea></label>
            <div>
            <button type="submit" className="video-add-button">確認</button>
            </div>
            </div>
        </form>
        </div>
    )
    }
   
}

export default VideoPutOn
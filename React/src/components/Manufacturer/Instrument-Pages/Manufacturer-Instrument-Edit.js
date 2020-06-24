import React from 'react'
import { FaPlus } from "react-icons/fa"



class InstrumentEdit extends React.Component{
    constructor(){
        super()
        this.state = {
            value : ""
        }
        
    }
    handlechange(event){
        const v = event.target.value
        console.log(v)
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
                <img></img>
            </div>
            <div className="ins-edit-file-btn">
                <button type="submit">選擇圖片</button>
            </div>
            <div className="ins-edit-content">
                <label htmlFor="insname" className="ins-edit-label font-size-1rem">影片名稱<input id="insname" type="text" className="font-size-114rem"/></label>
                <label className="ins-edit-label font-size-1rem" htmFor="option">影片類型
                    <select className="ins-value font-size-114rem" id="option" onChange={this.handlechange}>
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
                <label htmlFor="instime" className="ins-edit-label font-size-1rem">影片長度<input id="instime" type="text" className="font-size-114rem"/></label>
                <label htmlFor="insprice" className="ins-edit-label font-size-1rem">影片價格<input id="insprice" type="text" className="font-size-114rem"/></label>
                <label htmlFor="instext1" className="ins-edit-label font-size-1rem">影片簡介<input id="instext1" type="text" className="font-size-114rem"/></label>
                <label htmlFor="instext2" className="ins-edit-content-text font-size-1rem">影片介紹<textarea id="instext2" className="font-size-114rem"></textarea></label>
                <button type="submit" className="ins-edit-add-btn">確認</button>
            </div>
        </form>
        </div>
    )
    }
   
}

export default InstrumentEdit
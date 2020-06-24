import React from 'react'
import { FaPlus } from "react-icons/fa"



class InstrumentPutOn extends React.Component{
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
        <div className="ins-puton-page">
        <h3 className="font-size-142rem">新增商品</h3>
        <form className="ins-puton-form">
            <div className="ins-puton-add" controls>
                <h3 className="ins-puton-file-text font-size-142rem">圖片預覽</h3>
                <div className="ins-puton-icon-div">
                    <FaPlus className="ins-puton-icon"/>
                </div>
                <img></img>
            </div>
            <div className="ins-puton-file-btn">
                <button type="submit">選擇圖片</button>
            </div>
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
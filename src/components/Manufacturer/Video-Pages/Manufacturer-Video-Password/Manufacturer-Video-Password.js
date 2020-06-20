import React from 'react'
import {FaEye} from 'react-icons/fa'



class VideoEditPassword extends React.Component{

    render(){
    return(
        <div className="videoPassword-page">
                <h3 className="videoPassword-title font-size-142rem">修改密碼</h3>
                <div className="videoPassword-top">
                    <div className="videoPassword-sticker">
                    <img className="videoPassword-icon"/>
                    </div>

                    <hr className="videoPassword-hr" />
                </div>
                <form className="videoPassword-form">
                    <label htmlFor="id">
                    <p>廠商編號</p>
                    <div className="videoPassword-inp">
                        <input id="id" type="text" value="M001" readonly="readonly"/>
                    </div>
                    </label>
                    <label htmlFor="oldPassword">
                    <p>舊密碼</p>
                    <div className="videoPassword-inp">
                            <input id="oldPassword" type="password" />
                            <div className="videoPassword-eyes">
                            <FaEye/>
                        </div>
                            </div>
                        
                    </label>
                    <label htmlFor="newPassword">新密碼
                        <input id="newPassword" type="password" />
                    </label>
                    <label htmlFor="checkNewPassword">確認新密碼
                        <input id="checkNewPassword" type="password" />
                    </label>
                    <button type="submit" className="videoPassword-button">修改資料</button>
                </form>
            </div>
    )
    }
}


export default VideoEditPassword
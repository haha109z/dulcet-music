import React from 'react'
import '../../../../Styles/Manufacturer/Manufacturer-Video-Styles/Manufacturer-Video-Password.scss'

class VideoEditPassword extends React.Component{

    render(){
    return(
        <div className="video-password-page">
                <h3 className="video-password-title">廠商資料</h3>
                <div className="video-password-top">
                    <div className="video-password-sticker"><img className="video-password-icon"/></div>
                    <div className="video-password-number">
                        <span>廠商編號</span>
                        <span>M001</span>
                    </div>
                    <hr className="video-password-hr" />
                </div>
                <div className="video-password-form">
                <form className="video-edit-form">
                    <label htmlFor="oldpassword">舊密碼<input id="oldpassword" type="password" /></label>
                    <label htmlFor="newpassword">新密碼<input id="newpassword" type="password" /></label>
                    <label htmlFor="checknewpassword">確認新密碼<input id="checknewpassword" type="password" /></label>
                    <button type="submit" className="video-password-button">修改資料</button>
                </form>
                </div>
            </div>
    )
    }
}


export default VideoEditPassword
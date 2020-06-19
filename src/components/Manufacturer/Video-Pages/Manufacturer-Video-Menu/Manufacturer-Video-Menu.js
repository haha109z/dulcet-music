import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from "react-router-dom"
import { FaVideo } from "react-icons/fa";



class VideoMenu extends React.Component{
   render(){
    return(
            <div className="video-menu-page">
                <FaVideo className="video-icon"/>
                <p>廠商管理</p>
                    <Link to="/VideoHome" className="video-menu-link">
                    <div className="video-menu-div-left"></div>
                    廠商資料
                    <div className="video-menu-div-right"></div>
                    </Link>
                    <Link to="/VideoEditPassword" className="video-menu-link">
                    <div className="video-menu-div-left"></div>
                    密碼修改
                    <div className="video-menu-div-right"></div>
                    </Link>
                    <Link to="/VideoOrder" className="video-menu-link">
                    <div className="video-menu-div-left"></div>
                    訂單列表
                    <div className="video-menu-div-right"></div>
                    </Link>
                    <Link to="/VideoList" className="video-menu-link">
                    <div className="video-menu-div-left"></div>
                    影片列表
                    <div className="video-menu-div-right"></div>
                    </Link>
                    <Link to="/VideoPutOn" className="video-menu-link">
                    <div className="video-menu-div-left"></div>
                    新增影片
                    <div className="video-menu-div-right"></div>
                    </Link>
                <div className="video-menu-logout">
                <p className="video-menu-link">登出</p>
                </div>
            </div>
    )
   }
 }

export default VideoMenu
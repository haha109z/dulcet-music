import React from 'react'
import { BrowserRouter, Router, Route, Link, Switch, withRouter} from "react-router-dom"
import { FaVideo } from "react-icons/fa";



class VideoMenu extends React.Component{
   render(){
    return(
        <div className="video-menu-page">
        <ul className="list-unstyled video-logo ">
        <FaVideo/>
        </ul>
        <div className="video-title font-size-15rem ">廠商管理</div>
        <ul className="video-menu-content list-unstyled content">
          <Link to="/ManufacturerVideo/VideoHome" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            <p>廠商資料</p>
            <div className="video-menu-li-right"></div>
          </Link>
          <Link to="/ManufacturerVideo/VideoPassword" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            <p>密碼修改</p>
            <div className="video-menu-li-right"></div>
          </Link>

          <Link to="/ManufacturerVideo/VideoOrder" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            <p>訂單列表</p>
            <div className="video-menu-li-right"></div>
          </Link>
          <Link to="/ManufacturerVideo/VideoList" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            <p>影片列表</p>
            <div className="video-menu-li-right"></div>
          </Link>
          <Link to="/ManufacturerVideo/VideoPutOn" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            <p>新增影片</p>
            <div className="video-menu-li-right"></div>
          </Link>
          <div className="video-menu-out font-size-142rem ">
            <Link to="">登出</Link>
          </div>
        </ul>
      </div>
    )
   }
 }

export default VideoMenu
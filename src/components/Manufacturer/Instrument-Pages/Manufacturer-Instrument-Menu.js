import React from 'react'
import { BrowserRouter, Router, Route, Link, Switch, withRouter} from "react-router-dom"
import { FaGuitar } from "react-icons/fa";



class VideoMenu extends React.Component{
   render(){
    return(
        <div className="video-menu-page">
        <ul className="list-unstyled video-logo ">
        <FaGuitar/>
        </ul>
        <div className="video-title font-size-15rem ">廠商管理</div>
        <ul className="video-menu-content list-unstyled content">
          <Link to="/InstrumentHome" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            廠商資料
            <div className="video-menu-li-right"></div>
          </Link>
          <Link to="/InstrumentPassword" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            密碼修改
            <div className="video-menu-li-right"></div>
          </Link>

          <Link to="/InstrumentOrder" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            訂單列表
            <div className="video-menu-li-right"></div>
          </Link>
          <Link to="/InstrumentList" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            樂器列表
            <div className="video-menu-li-right"></div>
          </Link>
          <Link to="/InstrumentPutOn" className="video-menu-li font-size-142rem ">
            <div className="video-menu-li-left"></div>
            新增樂器
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
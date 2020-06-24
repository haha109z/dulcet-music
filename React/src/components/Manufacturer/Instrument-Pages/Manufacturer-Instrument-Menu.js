import React from 'react'
import { BrowserRouter, Router, Route, Link, Switch, withRouter} from "react-router-dom"
import { FaGuitar } from "react-icons/fa";



class InstrumentMenu extends React.Component{
   render(){
    return(
        <div className="ins-menu-page">
        <ul className="list-unstyled ins-logo ">
        <FaGuitar/>
        </ul>
        <div className="ins-title font-size-15rem ">廠商管理</div>
        <ul className="ins-menu-content list-unstyled content">
          <Link to="/ManufacturerInstrument/InstrumentHome" className="ins-menu-li font-size-142rem ">
            <div className="ins-menu-li-left"></div>
            <p>廠商資料</p>
            <div className="ins-menu-li-right"></div>
          </Link>
          <Link to="/ManufacturerInstrument/InstrumentPassword" className="ins-menu-li font-size-142rem ">
            <div className="ins-menu-li-left"></div>
            <p>密碼修改</p>
            <div className="ins-menu-li-right"></div>
          </Link>

          <Link to="/ManufacturerInstrument/InstrumentOrder" className="ins-menu-li font-size-142rem ">
            <div className="ins-menu-li-left"></div>
            <p>訂單列表</p>
            <div className="ins-menu-li-right"></div>
          </Link>
          <Link to="/ManufacturerInstrument/InstrumentList" className="ins-menu-li font-size-142rem ">
            <div className="ins-menu-li-left"></div>
            <p>樂器列表</p>
            <div className="ins-menu-li-right"></div>
          </Link>
          <Link to="/ManufacturerInstrument/InstrumentPutOn" className="ins-menu-li font-size-142rem ">
            <div className="ins-menu-li-left"></div>
            <p>新增樂器</p>
            <div className="ins-menu-li-right"></div>
          </Link>
          <div className="ins-menu-out font-size-142rem ">
            <Link to="">登出</Link>
          </div>
        </ul>
      </div>
    )
   }
 }

export default InstrumentMenu
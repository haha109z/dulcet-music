import React, { Component } from 'react'
import { Link,NavLink} from 'react-router-dom'


export default class UserSideBar extends Component {
  render() {
    return (
      <>
        <div className="user-sideBar">
          <ul className="list-unstyled user-sideBar-logo ">
          <i className="fas fa-user "></i>
          </ul>
          <div className="user-sideBar-title font-size-15rem user-font-ch">會員管理</div>
          <ul className="user-sidebar-menu list-unstyled content">
            <Link to="/user/UserData" href="" className="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div className="user-sidebar-menu-li-left"></div>
              會員資料
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserPwd" href="" className="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div className="user-sidebar-menu-li-left"></div>
              密碼修改
              <div className="user-sidebar-menu-li-right"></div>
            </Link>

            <Link to="/user/UserPurchase" href="" className="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div className="user-sidebar-menu-li-left"></div>
              購買清單
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserLike" href="" className="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div className="user-sidebar-menu-li-left"></div>
              我的最愛
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserVideo" href="" className="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div className="user-sidebar-menu-li-left"></div>
              我的影片
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserVoucher" href="" className="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div className="user-sidebar-menu-li-left"></div>
              我的優惠卷
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <div className="user-sidebar-menu-out font-size-142rem user-font-ch">
          
              <Link href="">登出</Link>
            </div>
          </ul>
        </div>
      </>
    )
  }
}

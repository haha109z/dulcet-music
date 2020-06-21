import React, { Component } from 'react'
import { Link,NavLink} from 'react-router-dom'


export default class UserSideBar extends Component {
  render() {
    return (
      <>
        <div class="user-sideBar">
          <ul class="list-unstyled user-sideBar-logo ">
          <i class="fas fa-user "></i>
          </ul>
          <div class="user-sideBar-title font-size-15rem user-font-ch">會員管理</div>
          <ul class="user-sidebar-menu list-unstyled content">
            <Link to="/user/UserData" href="" class="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div class="user-sidebar-menu-li-left"></div>
              會員資料
              <div class="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserPwd" href="" class="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div class="user-sidebar-menu-li-left"></div>
              密碼修改
              <div class="user-sidebar-menu-li-right"></div>
            </Link>

            <Link to="/user/UserPurchase" href="" class="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div class="user-sidebar-menu-li-left"></div>
              購買清單
              <div class="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserLike" href="" class="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div class="user-sidebar-menu-li-left"></div>
              我的最愛
              <div class="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserVideo" href="" class="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div class="user-sidebar-menu-li-left"></div>
              我的影片
              <div class="user-sidebar-menu-li-right"></div>
            </Link>
            <Link to="/user/UserVoucher" href="" class="user-sidebar-menu-li font-size-142rem user-font-ch">
              <div class="user-sidebar-menu-li-left"></div>
              我的優惠卷
              <div class="user-sidebar-menu-li-right"></div>
            </Link>
            <div class="user-sidebar-menu-out font-size-142rem user-font-ch">
          
              <Link href="">登出</Link>
            </div>
          </ul>
        </div>
      </>
    )
  }
}

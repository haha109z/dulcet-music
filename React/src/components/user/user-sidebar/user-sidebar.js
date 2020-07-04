import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)
const userL = () => {
  return JSON.parse(localStorage.getItem('user'))
}
export default class UserSideBar extends Component {
  goForum=()=>{
    setTimeout(()=>{
      window.location = '/Forum'

    },300)

  }
  signOut = () => {
    MySwal.fire({
      position: 'top-center',
      icon: 'success',
      title: '登出',
      showConfirmButton: false,
      timer: 2000,
    })

    setTimeout(() => {
      window.location = '/'
      localStorage.clear('user')
    }, 1900)
  }
  constructor() {
    super() // => 記得呼叫 parent 的 constructor，很重要
    if (userL() == null) {
      window.location = '/'
    }
  }
  render() {
    return (
      <>
        <div className="user-sideBar">
          <ul className="list-unstyled user-sideBar-logo ">
            <i className="fas fa-user "></i>
          </ul>
          <div className="user-sideBar-title font-size-15rem user-font-ch">
            會員管理
          </div>

          <ul className="user-sidebar-menu list-unstyled content">
          
            <Link
              onClick={this.signOut}
              to=""
              href=""
              className="user-sidebar-menu-li font-size-142rem user-font-ch rwd-user-out"
            >
              <div className="user-sidebar-menu-li-left"></div>
              <p className="user-sidebar-hover"></p>登出
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to="/user/UserData"
              href=""
              className="user-sidebar-menu-li font-size-142rem user-font-ch"
            >
              <div className="user-sidebar-menu-li-left"></div>
              <p className="user-sidebar-hover"></p>會員資料
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to="/user/UserPwd"
              href=""
              className="user-sidebar-menu-li font-size-142rem user-font-ch"
            >
              <div className="user-sidebar-menu-li-left"></div>
              密碼修改<p className="user-sidebar-hover"></p>
              <div className="user-sidebar-menu-li-right"></div>
            </Link>

            <Link
              to="/user/UserPurchase"
              href=""
              className="user-sidebar-menu-li font-size-142rem user-font-ch"
            >
              <div className="user-sidebar-menu-li-left"></div>
              <p className="user-sidebar-hover"></p>購買清單
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to="/user/UserLike"
              href=""
              className="user-sidebar-menu-li font-size-142rem user-font-ch"
            >
              <div className="user-sidebar-menu-li-left"></div>
              <p className="user-sidebar-hover"></p>我的最愛
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to="/user/UserVideo"
              href=""
              className="user-sidebar-menu-li font-size-142rem user-font-ch"
            >
              <div className="user-sidebar-menu-li-left"></div>
              <p className="user-sidebar-hover"></p>我的影片
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            <Link
              to="/user/UserVoucher"
              href=""
              className="user-sidebar-menu-li font-size-142rem user-font-ch"
            >
              <div className="user-sidebar-menu-li-left"></div>
              <p className="user-sidebar-hover"></p>我的優惠卷
              <div className="user-sidebar-menu-li-right"></div>
            </Link>

            <Link
              onClick={this.goForum}
              className="user-sidebar-menu-li font-size-142rem user-font-ch rwd-user-out"
            >
              <div className="user-sidebar-menu-li-left"></div>
              <p className="user-sidebar-hover"></p>討論區
              <div className="user-sidebar-menu-li-right"></div>
            </Link>
            
            <div
              className="user-sidebar-menu-out font-size-142rem user-font-ch"
              onClick={this.signOut}
            >
              <Link href="">
                <p className="user-sidebar-hover"></p>
                登出
              </Link>
            </div>
          </ul>
        </div>
      </>
    )
  }
}

import React, { Component } from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const MySwal = withReactContent(Swal)

const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export default class UserData extends Component {
  state = {
    user: [],
  }
  changData = () => {
    MySwal.fire({
      type: 'warning', // 彈框類型
      title: '確定修改資料嗎？', //標題
      text: '', //顯示內容
      icon: '', //icon圖示
      confirmButtonColor: '#141414', // 確定按鈕的 顏色
      confirmButtonText: '確定', // 確定按鈕的 文字
      showCancelButton: true, // 是否顯示取消按鈕
      cancelButtonColor: '#dadada', // 取消按鈕的 顏色
      cancelButtonText: '取消', // 取消按鈕的 文字
      html:
      '<input id="swal-input1" class="swal2-input"value="111">' +
      '<input id="swal-input2" class="swal2-input">'+
      '<input id="swal-input3" class="swal2-input">'+
      '<input id="swal-input4" class="swal2-input">'+
      '<input id="swal-input5" class="swal2-input">',
      focusCancel: true, // 是否聚焦 取消按鈕
      reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
    }).then((isConfirm) => {
      try {
        //判斷 是否 點擊的 確定按鈕
        if (isConfirm.value) {
          MySwal.fire('修改成功', '', 'success')
        } else {
          MySwal.fire('取消修改', '', 'error')
        }
      } catch (e) {
        alert(e)
      }
    })
  }
  // 在這個生命週期中渲染資料
  componentDidMount() {
    if(getUserInfo()){
       let user = getUserInfo()
    // JSON.parse(localStorage.getItem('user'));
    // console.log("user", user[0])
    // alert(`${user[0].userID}歡迎您～！` )

    this.setState({ user: user[0] })
    }else{
      this.setState({ user: "" })

    }
   
  }

  render() {
    return (
      <>
        <div className="userData-main">
          <h3 className="font-size-142rem userData-top-titleName">會員資料</h3>
          <div className="userData-top-Img">
            <img src="" alt="" />
          </div>

          <hr className="userData-top-hr" />

          <htmlFor className="userData-form" action="">
            <label className="userData-form-input " for="name">
              <p>會員編號</p>
              <div className="UserData-inp ">
                <input
                  className="user-id"
                  id="id"
                  type="text"
                  value={this.state.user.userID}
                  readonly="readonly"
                />
              </div>
            </label>

            <label className="userData-form-input " for="name">
              <p>姓名</p>
              <div className="UserData-inp">
                <input
                  id="name"
                  type="text"
                  autocomplete="off"
                  value={this.state.user.username}
                />
              </div>
            </label>

            <label className="userData-form-input " for="email">
              <p>信箱</p>
              <div className="UserData-inp">
                <input
                  id="email"
                  type="text"
                  autocomplete="off"
                  value={this.state.user.userMail}
                />
              </div>
            </label>
            <label className="userData-form-input " for="birthday">
              <p>生日</p>
              <div className="UserData-inp" autocomplete="off">
                <input
                  id="birthday"
                  type="text"
                  autocomplete="off"
                  value={this.state.user.userBirthday}
                />
              </div>
            </label>

            <label className="userData-form-input " for="add">
              <p>地址</p>
              <div className="UserData-inp">
                <input
                  id="add"
                  type="text"
                  autocomplete="off"
                  value={this.state.user.userAddress}
                />
              </div>
            </label>

            <label className="userData-form-input " for="phone">
              <p>手機號碼</p>
              <div className="UserData-inp">
                <input
                  id="phone"
                  type="text"
                  autocomplete="off"
                  value={this.state.user.userPhone}
                />
              </div>
            </label>

            <input
              type="submit"
              onClick={this.changData}
              className="userData-form-button"
              value="修改資料"
            />
          </htmlFor>
        </div>
      </>
    )
  }
}

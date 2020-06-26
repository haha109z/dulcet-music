import React, { Component } from 'react'

import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const MySwal = withReactContent(Swal)

export default class UserData extends Component {
  state = {
    userData: [],
    user: [
      {
        userID: '',
        userName: '',
        userMail: '',
        userBirthday: '',
        userAddress: '',
        userPhone: '',
      },
    ],
  }

  // 在這個生命週期中渲染資料
  componentDidMount() {
    this.changData = () => {
      const {
        userID,
        userName,
        userMail,
        userBirthday,
        userAddress,
        userPhone,
      } = this.state.user

      const userGoData = [
        userName,
        userMail,
        userBirthday,
        userAddress,
        userPhone,
      ]

      // console.log(userID)
      MySwal.fire({
        type: 'warning', // 彈框類型
        title: '修改資料？', //標題
        text: '', //顯示內容
        icon: '', //icon圖示
        confirmButtonColor: '#141414', // 確定按鈕的 顏色
        confirmButtonText: '確定', // 確定按鈕的 文字
        showCancelButton: true, // 是否顯示取消按鈕
        cancelButtonColor: '#dadada', // 取消按鈕的 顏色
        cancelButtonText: '取消', // 取消按鈕的 文字
        html:
          `<p class="userdata-alert-p">姓名</p>` +
          `<input id="swal-input1" class="swal2-input" value=${userName}>` +
          `<p class="userdata-alert-p">電子信箱</p>` +
          `<input id="swal-input2" class="swal2-input" value=${userMail}>` +
          `<p class="userdata-alert-p">生日</p>` +
          `<input id="swal-input3" class="swal2-input" type="date" value=${userBirthday}>` +
          `<p class="userdata-alert-p">地址</p>` +
          `<input id="swal-input4" class="swal2-input" value=${userAddress}>` +
          `<p class="userdata-alert-p">手機號碼</p>` +
          `<input id="swal-input5" class="swal2-input" value=${userPhone}>`,
        focusCancel: true, // 是否聚焦 取消按鈕
        reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
      }).then((isConfirm) => {
        try {
          let changUsername = document.getElementById('swal-input1').value
          let changUserMail = document.getElementById('swal-input2').value
          let changUserBirthday = document.getElementById('swal-input3').value
          let changUserAddress = document.getElementById('swal-input4').value
          let changUserPhone = document.getElementById('swal-input5').value

          // console.log(userGoData)
          // console.log(changData)
          //判斷 是否 點擊的 確定按鈕
          if (isConfirm.value) {
            // console.log(userGoData)

            MySwal.fire({
              type: 'warning', // 彈框類型
              title: '確定修改資料？', //標題
              text: '', //顯示內容
              icon: 'question', //icon圖示
              confirmButtonColor: '#141414', // 確定按鈕的 顏色
              confirmButtonText: '確定', // 確定按鈕的 文字
              showCancelButton: true, // 是否顯示取消按鈕
              cancelButtonColor: '#dadada', // 取消按鈕的 顏色
              cancelButtonText: '取消', // 取消按鈕的 文字
              focusCancel: true, // 是否聚焦 取消按鈕
              reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
            }).then((isConfirm) => {
              if (isConfirm.value) {
                fetch('http://localhost:3030/user/UserData', {
                  method: 'POST', // or 'PUT'
                  body: JSON.stringify({
                    userID,
                    changUsername,
                    changUserMail,
                    changUserBirthday,
                    changUserAddress,
                    changUserPhone,
                  }), // data can be `string` or {object}!
                  headers: new Headers({
                    'Content-Type': 'application/json',
                  }),
                })
                  .then((res) => res.json())
                  .then((json) => {
                    console.log(json.code)
                    if (json.code === 3) {
                      MySwal.fire('信箱已經註冊過請換一個信箱試試', '', 'error')
                    } else if (json.data) {
                      localStorage.setItem('user', JSON.stringify(json.data))
                    }
                    // localStorage.setItem('user', JSON.stringify(json.data))
                    // console.log(json.data)
                  })
                  .catch((error) => {
                    console.error('Error:', error)
                  })
                // localStorage.setItem('user', JSON.stringify(userData))

                MySwal.fire('修改完成', '', 'success')
              } else {
                MySwal.fire('取消修改', '', 'error')
              }
            })

            // MySwal.fire('修改成功', '', 'success')
          } else {
            MySwal.fire('取消修改', '', 'error')
          }
        } catch (e) {
          alert(e)
        }
      })
    }
    const getUserInfo = () => {
      return JSON.parse(localStorage.getItem('user'))
    }
    if (getUserInfo()) {
      let user = getUserInfo()
      if (user[0].userID) {
        this.setState({ user: user[0] })
      } else {
        this.setState({ user: '' })
      }
    } else {
      this.setState({ user: '' })
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

          <form className="userData-form" action="">
            <label className="userData-form-input " htmlFor="name">
              <p>會員編號</p>
              <div className="UserData-inp ">
                <input
                  className="user-id"
                  id="id"
                  type="text"
                  value={this.state.user.userID}
                  readOnly="readOnly"
                />
              </div>
            </label>

            <label className="userData-form-input " htmlFor="name">
              <p>姓名</p>
              <div className="UserData-inp">
                <input
                  id="name"
                  type="text"
                  autoComplete="off"
                  readOnly="readOnly"
                  value={this.state.user.userName}
                />
              </div>
            </label>

            <label className="userData-form-input " htmlFor="email">
              <p>信箱</p>
              <div className="UserData-inp">
                <input
                  id="email"
                  type="text"
                  autoComplete="off"
                  readOnly="readOnly"
                  value={this.state.user.userMail}
                />
              </div>
            </label>
            <label className="userData-form-input " htmlFor="birthday">
              <p>生日</p>
              <div className="UserData-inp" autoComplete="off">
                <input
                  id="birthday"
                  type="text"
                  autoComplete="off"
                  readOnly="readOnly"
                  value={this.state.user.userBirthday}
                />
              </div>
            </label>

            <label className="userData-form-input " htmlFor="add">
              <p>地址</p>
              <div className="UserData-inp">
                <input
                  id="add"
                  type="text"
                  autoComplete="off"
                  readOnly="readOnly"
                  value={this.state.user.userAddress}
                />
              </div>
            </label>

            <label className="userData-form-input " htmlFor="phone">
              <p>手機號碼</p>
              <div className="UserData-inp">
                <input
                  id="phone"
                  type="text"
                  autoComplete="off"
                  readOnly="readOnly"
                  value={this.state.user.userPhone}
                />
              </div>
            </label>

            <input
              type="button"
              onClick={this.changData}
              className="userData-form-button"
              value="修改資料"
            />
          </form>
        </div>
      </>
    )
  }
}

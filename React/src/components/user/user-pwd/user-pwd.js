import React, { Component } from 'react'

import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
var sha1 = require('sha1')

const MySwal = withReactContent(Swal)
const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export default class UserPwd extends Component {
  state = {
    user: [],
    lookOldPwd: false,
    lookNewPwd: false,
    lookNewPwd2: false,
    oldPwd: '',
    newPwd: '',
    changePwd: '',
    style: { backgroundImage: '', backgroundColor: 'rgb(134, 134, 152)' },
  }

  // constructor() {
  //   super() // => 記得呼叫 parent 的 constructor，很重要
  //   this.state = {
  //     // => 幫 App 加上 state
  //     lookOldPwd: false,
  //     lookNewPwd:false,
  //     lookNewPwd2:false,
  //   }}

  // 取得輸入文字放到狀態中
  logChange = (e) => {
    // console.log({ [e.target.name]: e.target.value })
    this.setState({ [e.target.name]: e.target.value })
  }

  // 發送請求
  sendUpdatePwd = () => {
    // 取出localStorage中的user
    let user = getUserInfo()
    // 放入預設的狀態中(第13行)
    this.setState({ user: user[0] })
    // console.log({user: user[0].userID})
    // 在fun中先變數取出好方便傳送值到後端
    // 用戶輸入的
    let { oldPwd, newPwd, changePwd } = this.state
    // localStorage裡的
    let { userID, userPwd } = this.state.user
    oldPwd = sha1(oldPwd)
    newPwd = sha1(newPwd)
    changePwd = sha1(changePwd)
    MySwal.fire({
      type: 'warning', // 彈框類
      title: '確定要更換密碼嗎？', //標題
      icon: 'question', //icon圖示
      confirmButtonColor: '#141414', // 確定按鈕的 顏色
      confirmButtonText: '確定', // 確定按鈕的 文字
      showCancelButton: true, // 是否顯示取消按鈕
      cancelButtonColor: '#dadada', // 取消按鈕的 顏色
      cancelButtonText: '取消', // 取消按鈕的 文字
      focusCancel: true, // 是否聚焦 取消按鈕
      reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
    }).then((isConfirm) => {
      // 如果輸入兩次確認密碼相同才做發送的請求否則就擋掉掉出錯誤視窗

      if (isConfirm.value) {
        // console.log(
        //   `newPwd:${newPwd}, changePwd:${changePwd} ,userPwd:${userPwd},oldPwd: ${oldPwd}`
        // )
        if (newPwd == changePwd) {
          // 將要傳送的新密碼加密記得引入sha1插件
          // newPwd=sha1(newPwd)
          // console.log(newPwd)
          fetch('http://localhost:3030/user/UserPwd', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
              // 發送id 舊密碼和新密碼過去後端
              oldPwd,
              userID,
              newPwd,
            }), // data can be `string` or {object}!
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
          })
            .then((res) => res.json())
            .then((json) => {
              // console.log("json", json)
              // 錯誤
              if ((json.code = 1)) {
                // console.log(json)
                MySwal.fire('密碼錯誤請再輸入一次', '', 'warning')
                return
              }
            })
            .catch((error) => console.error('Error:', error))
            
          MySwal.fire('修改成功', '', 'success')
          this.setState({
            oldPwd: '',
            newPwd: '',
            changePwd: '',
            lookOldPwd: false,
            lookNewPwd: false,
            lookNewPwd2: false,
          })

          return
        } else if (newPwd !== changePwd) {
          MySwal.fire('兩次密碼不相符，請再確認', '', 'warning')
        }
      } else {
        MySwal.fire('取消修改', '', 'warning')
      }
    })
  }

  // 在這個生命週期中渲染資料
  componentDidMount() {
    this.onChange = (e) => {
      e.preventDefault()
      const file = e.target.files[0]
      const formData = new FormData()
      // 这里的 image 是字段，根据具体需求更改
      formData.append('image', file)
      // 这里的 fetch 引用了 isomorphic-fetch 包
      // console.log("this.state.user", this.state.user)
      // return
      fetch(`http://localhost:3030/img-upload/user/${this.state.user.userID}`, {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((json) => {
          if ((json.status = 1)) {
            this.state.user.userImg = json.imgName
            console.log(this.state.user)
            this.setState({ user: this.state.user })
            localStorage.setItem('user', JSON.stringify([this.state.user]))
          } else {
            alert('上傳失敗')
          }
        })
    }
    if (getUserInfo()) {
      let user = getUserInfo()
      // JSON.parse(localStorage.getItem('user'));
      // console.log("user", user[0])
      // alert(`${user[0].userID}歡迎您～！` )
      this.setState({ user: user[0] })
    } else {
      this.setState({ user: '' })
    }
  }

  render() {
    const eyeshow = this.state.lookOldPwd
      ? 'svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' svg-eye svg-inline--fa fa-eye fa-w-18'
    const eyeshow1 = this.state.lookNewPwd
      ? 'svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' svg-eye svg-inline--fa fa-eye fa-w-18'
    const eyeshow2 = this.state.lookNewPwd2
      ? 'svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' svg-eye svg-inline--fa fa-eye fa-w-18'
    // console.log(this.state.user.userMail)
    var style = {}
    if (this.state.user.userImg) {
      // this.setState({style: {backgroundImage: `url(http://localhost:3030/images/user/${this.state.user.userImg})`}})
      style.backgroundImage = `url(http://localhost:3030/images/user/${this.state.user.userImg})`
    } else {
      // this.setState({style: {backgroundColor: `rgb(134, 134, 152)`}})
      style.backgroundColor = `rgb(134, 134, 152)`
    }
    return (
      <>
        <div className="userPwd-main">
          <h3 className="font-size-142rem userPwd-top-titleName user-font-ch">
            密碼修改
          </h3>
          <div
            className="userData-top-Img userData-top-Img-default "
            style={style}
          >
            <label for="gogo" className="upload-container">
              <input
                type="file"
                name="image"
                className="upload-input"
                onChange={this.onChange}
                id="gogo"
              />
              <input
                type="primary"
                className="upload-button"
                value="上传图片"
              />
            </label>
          </div>

          <hr className="userPwd-top-hr" />

          <form className="userPwd-form" action="">
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
            <label className="userPwd-form-input font-size-1rem" for="oldPwd">
              <p className="user-font-ch">請輸入舊密碼</p>

              <div className="userPwd-inp">
                <input
                  id="oldPwd font-size-114rem user-font-ch"
                  name="oldPwd"
                  type={`${this.state.lookOldPwd ? 'text' : 'password'}`}
                  onChange={this.logChange}
                  value={this.state.oldPwd}
                  pattern="[a-zA-Z]"
                  minlength="8"
                  maxlength="12"
                />
                <svg
                  onClick={() => {
                    const { lookOldPwd } = this.state
                    const change = !lookOldPwd
                    this.state.test
                      ? this.setState({ test: false })
                      : this.setState({ test: true })
                    this.setState({ lookOldPwd: change })
                    //  this.state.test ? this.setState.test(false) : this.setState.test(true)
                  }}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  key="pwd1"
                  className={eyeshow}
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
              </div>
            </label>

            <label className="userPwd-form-input font-size-1rem" for="newPwd">
              <p className="user-font-ch">輸入新密碼</p>
              <div className="userPwd-inp">
                <input
                  id="newPwd font-size-114rem user-font-ch"
                  name="newPwd"
                  type={`${this.state.lookNewPwd ? 'text' : 'password'}`}
                  onChange={this.logChange}
                  value={this.state.newPwd}
                />
                <svg
                  onClick={() => {
                    const { lookNewPwd } = this.state
                    const change = !lookNewPwd
                    this.state.test2
                      ? this.setState({ test2: false })
                      : this.setState({ test2: true })
                    this.setState({ lookNewPwd: change })
                    //  this.state.test ? this.setState.test(false) : this.setState.test(true)
                  }}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  className={eyeshow1}
                  key="pwd2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
              </div>
            </label>
            <label
              className="userPwd-form-input font-size-1rem"
              for="changePwd"
            >
              <p className="user-font-ch">確認新密碼</p>
              <div className="userPwd-inp">
                <input
                  name="changePwd"
                  id="changePwd font-size-114rem user-font-ch"
                  type={`${this.state.lookNewPwd2 ? 'text' : 'password'}`}
                  onChange={this.logChange}
                  value={this.state.changePwd}
                />
                <svg
                  onClick={() => {
                    const { lookNewPwd2 } = this.state
                    const change = !lookNewPwd2
                    this.state.test3
                      ? this.setState({ test3: false })
                      : this.setState({ test3: true })
                    this.setState({ lookNewPwd2: change })
                    //  this.state.test ? this.setState.test(false) : this.setState.test(true)
                  }}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="eye"
                  className={eyeshow2}
                  role="img"
                  key="pwd3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
              </div>
            </label>

            <input
              type="button"
              className="userPwd-form-button user-font-ch"
              value="修改密碼"
              onClick={this.sendUpdatePwd}
            />
          </form>
        </div>
      </>
    )
  }
}

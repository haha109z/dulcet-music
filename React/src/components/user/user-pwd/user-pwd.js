import React, { Component } from 'react'

const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}
export default class UserPwd extends Component {
  state = {
    user: [],
    changOldPwd: false,
   changNewPwd:false,
   changNewPwd2:false,
  };

  // constructor() {
  //   super() // => 記得呼叫 parent 的 constructor，很重要
  //   this.state = {
  //     // => 幫 App 加上 state      
  //     changOldPwd: false,
  //     changNewPwd:false,
  //     changNewPwd2:false,
  //   }}

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
    const eyeshow = this.state.changOldPwd
      ? 'svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' svg-eye svg-inline--fa fa-eye fa-w-18'
      const eyeshow1 = this.state.changNewPwd
      ? 'svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' svg-eye svg-inline--fa fa-eye fa-w-18'
      const eyeshow2 = this.state.changNewPwd2
      ? 'svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' svg-eye svg-inline--fa fa-eye fa-w-18'
      // console.log(this.state.user.userMail)
    return (
      <>
        <div className="userPwd-main">
          <h3 className="font-size-142rem userPwd-top-titleName user-font-ch">
            密碼修改
          </h3>
          <div className="userPwd-top-Img">
            <img src="" alt="" />
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
                  type={`${this.state.test ? 'text' : 'password'}`}
                />
                <svg
                  onClick={() => {
                    const { changOldPwd } = this.state
                    const change = !changOldPwd
                    this.state.test
                      ? this.setState({ test: false })
                      : this.setState({ test: true })
                    this.setState({ changOldPwd: change })
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
                  type={`${this.state.test2 ? 'text' : 'password'}`}
                  
                />
                <svg
                  onClick={() => {
                    const { changNewPwd } = this.state
                    const change = !changNewPwd
                    this.state.test2
                      ? this.setState({ test2: false })
                      : this.setState({ test2: true })
                    this.setState({ changNewPwd: change })
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
                  id="changePwd font-size-114rem user-font-ch"
                  type={`${this.state.test3 ? 'text' : 'password'}`}
                />
                <svg
                  onClick={() => {
                    const { changNewPwd2 } = this.state
                    const change = !changNewPwd2
                    this.state.test3
                      ? this.setState({ test3: false })
                      : this.setState({ test3: true })
                    this.setState({ changNewPwd2: change })
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
              type="submit"
              className="userPwd-form-button user-font-ch"
              value="修改密碼"
            />
          </form>
        </div>
      </>
    )
  }
}


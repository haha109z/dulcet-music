import React from 'react'
import {FaEye} from 'react-icons/fa'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
var sha1 = require('sha1')
const MySwal = withReactContent(Swal)
const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}

class InstrumentPassword extends React.Component{
  constructor() {
    super() // => 記得呼叫 parent 的 constructor，很重要
    this.state = {
      ManuData : [],
      oldPwd : '',
      newPwd : '',
      changePwd : '',
      // => 幫 App 加上 state      
      changeOldPwd: false,
      changeNewPwd:false,
      changeNewPwd2:false,
    }
  }

  // handlesend = e =>{
  //   const newpwd = this.state.newPwd
  //   const oldpwd = this.state.oldPwd
  //   const changepwd = this.state.changePwd
  //   this.state.newPwd == this.state.changePwd ? 
  //   alert('newpassword' + newpwd + ' oldpassword' + oldpwd + ' changepassword' + changepwd)
  //   : alert('密碼不一致')
  //   e.preventDefault()
  // }

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
    this.setState({ ManuData : user[0] })
    // console.log({user: user[0].userID})
    // 在fun中先變數取出好方便傳送值到後端
    // 用戶輸入的
    let { oldPwd, newPwd, changePwd } = this.state
    // localStorage裡的
    let { Mid, Mpwd } = this.state.ManuData
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
          fetch('http://localhost:3030/ManufacturerInstrument/InstrumentPassword', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
              // 發送id 舊密碼和新密碼過去後端
              oldPwd,
              Mid,
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
            changeOldPwd: false,
            changeNewPwd: false,
            changeNewPwd2: false,
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

  componentDidMount(){
    if (getUserInfo()) {
      let user = getUserInfo()
      // JSON.parse(localStorage.getItem('user'));
      // console.log("user", user[0])
      // alert(`${user[0].userID}歡迎您～！` )
      this.setState({ ManuData : user[0] })
    } else {
      this.setState({ ManuData : '' })
    }
    
  }


  

    render(){
      const eyeshow = this.state.changeOldPwd
      ? 'ins-svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' ins-svg-eye svg-inline--fa fa-eye fa-w-18'
      const eyeshow1 = this.state.changeNewPwd
      ? 'ins-svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' ins-svg-eye svg-inline--fa fa-eye fa-w-18'
      const eyeshow2 = this.state.changeNewPwd2
      ? 'ins-svg-eye-close svg-inline--fa fa-eye fa-w-18'
      : ' ins-svg-eye svg-inline--fa fa-eye fa-w-18'
    return(
      <div className="insPassword-main">
      <h3 className="font-size-142rem insPassword-top-titleName ">
        密碼修改
      </h3>
      <div className="insPassword-top-Img">
      <label htmlFor="gogo" className="ins-upload-container">
      <img className="ins-upload-preview" src={`http://localhost:3030/images/manu_user/${this.state.ManuData.Mimg}`}></img>
      <p className="ins-upload-text">點擊更換圖片</p>
      </label>
      
              <input
                type="file"
                name="image"
                className="ins-upload-input"
                onChange={this.onChange}
                id="gogo"
              />
              <input
                type="primary"
                className="ins-upload-button"
                value="上传图片"
              />
            
      </div>

      <hr className="insPassword-top-hr" />

      <form className="insPassword-form" action="" onSubmit={this.handlesend}>
        <label className="ins-home-label" for="name">
          <p>廠商編號</p>
          <div className="ins-home-inp ">
            <input
              className="ins-user-id"
              id="id"
              type="text"
              value={this.state.ManuData.Mid}
              readonly="readonly"
            />
          </div>
        </label>
        <label className="insPassword-form-input font-size-1rem" htmlFor="oldPwd">
          <p className="">請輸入舊密碼</p>
          <div className="insPassword-inp">
            <input
              id="oldPwd font-size-114rem "
              name="oldPwd"
              type={`${this.state.changeOldPwd ? 'text' : 'password'}`}
              onChange={this.logChange}
              value={this.state.oldPwd}
              pattern="[a-zA-Z]"
              minlength="8"
              maxlength="12"
            />
            <svg
              onClick={() => {
                const { changeOldPwd } = this.state
                const change = !changeOldPwd
                this.state.test
                  ? this.setState({ test: false })
                  : this.setState({ test: true })
                this.setState({ changeOldPwd: change })
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

        <label className="insPassword-form-input font-size-1rem" htmlFor="newPwd">
          <p className="">輸入新密碼</p>
          <div className="insPassword-inp">
            <input
              id="newPwd font-size-114rem "
              name="newPwd"
              type={`${this.state.changeNewPwd ? 'text' : 'password'}`}
              onChange={this.logChange}
              value={this.state.newPwd}
            />
            <svg
              onClick={() => {
                const { changeNewPwd } = this.state
                const change = !changeNewPwd
                this.state.test2
                  ? this.setState({ test2: false })
                  : this.setState({ test2: true })
                this.setState({ changeNewPwd: change })
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
          className="insPassword-form-input font-size-1rem"
          htmlFor="changePwd"
        >
          <p className="">確認新密碼</p>
          <div className="insPassword-inp">
            <input
              name="changePwd"
              id="changePwd font-size-114rem "
              type={`${this.state.changeNewPwd2 ? 'text' : 'password'}`}
              onChange={this.logChange}
              // value={this.state.changePwd}
              value={this.state.changePwd}
            />
            <svg
              onClick={() => {
                const { changeNewPwd2 } = this.state
                const change = !changeNewPwd2
                this.state.test3
                  ? this.setState({ test3: false })
                  : this.setState({ test3: true })
                this.setState({ changeNewPwd2: change })
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
          className="insPassword-form-button "
          value="修改密碼"
          onClick={this.sendUpdatePwd}
        />
      </form>
    </div>
    )
    }
}


export default InstrumentPassword
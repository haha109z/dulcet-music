import React, { Component } from 'react'

const getUserInfo = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export default class UserData extends Component {
  state = {
    user: []
  };
  // 在這個生命週期中渲染資料
  componentDidMount() {

    let user = getUserInfo()
    // JSON.parse(localStorage.getItem('user'));
    // console.log("user", user[0])
    // alert(`${user[0].userID}歡迎您～！` )
      // this.setState({user: user[0]}) 
  }
  
  render() {
    return (
      <>
        <div className="userData-main">
            <h3 className="font-size-142rem userData-top-titleName">會員資料</h3>
              <div className="userData-top-Img">
                <img src="" alt="" />
              </div>
              
              <hr className="userData-top-hr"/>
              
              <htmlFor className="userData-form" action="">
              <label className="userData-form-input " for="name">
                <p>會員編號</p>
                <div className="UserData-inp ">
                  <input className="user-id" id="id" type="text" value={this.state.user.userID} readonly="readonly" />
                </div>
              </label>

              <label className="userData-form-input " for="name">
                <p>姓名</p>
                <div className="UserData-inp">
                  <input id="name" type="text" autocomplete="off" value={this.state.user.username}/>
                </div>
              </label>

              <label className="userData-form-input " for="email">
                <p>信箱</p>
                <div className="UserData-inp">
                  <input  id="email" type="text"  autocomplete="off" value={this.state.user.userMail}/>
                </div>
              </label>
              <label className="userData-form-input " for="birthday">
                <p>生日</p>
                <div className="UserData-inp" autocomplete="off">
                  <input  id="birthday" type="text"  autocomplete="off" value={this.state.user.userBirthday}/>
                </div>
              </label>

              <label className="userData-form-input " for="add">
                <p>地址</p>
                <div className="UserData-inp">
                  <input id="add" type="text" autocomplete="off"  value={this.state.user.userAddress}/>
                </div>
              </label>

              <label className="userData-form-input " for="phone">
                <p>手機號碼</p>
                <div className="UserData-inp">
                  <input id="phone" type="text" autocomplete="off" value={this.state.user.userPhone}/>
                </div>
              </label>

              <input type="submit" className="userData-form-button" value="修改資料"/>
                
             
            </htmlFor>
          
        </div>
      </>
    )
  }
}

import React, { Component } from 'react'

export default class UserData extends Component {
  render() {
    return (
      <>
        <div className="userData-main">
            <h3 className="font-size-142rem userData-top-titleName">會員資料</h3>
              <div className="userData-top-Img">
                <img src="" alt="" />
              </div>
              
              <hr className="userData-top-hr"/>
              
              <form className="userData-form" action="">
              <label className="userData-form-input " for="name">
                <p>會員編號</p>
                <div className="UserData-inp ">
                  <input className="user-id" id="id" type="text" value="001" readonly="readonly"/>
                </div>
              </label>

              <label className="userData-form-input " for="name">
                <p>姓名</p>
                <div className="UserData-inp">
                  <input id="name" type="text" autocomplete="off"/>
                </div>
              </label>

              <label className="userData-form-input " for="email">
                <p>信箱</p>
                <div className="UserData-inp">
                  <input  id="email" type="text"  autocomplete="off"/>
                </div>
              </label>
              <label className="userData-form-input " for="birthday">
                <p>生日</p>
                <div className="UserData-inp" autocomplete="off">
                  <input  id="birthday" type="date"  autocomplete="off"/>
                </div>
              </label>

              <label className="userData-form-input " for="add">
                <p>地址</p>
                <div className="UserData-inp">
                  <input id="add" type="text" autocomplete="off" />
                </div>
              </label>

              <label className="userData-form-input " for="phone">
                <p>手機號碼</p>
                <div className="UserData-inp">
                  <input id="phone" type="text" autocomplete="off" />
                </div>
              </label>

              <input type="submit" className="userData-form-button" value="修改資料"/>
                
             
            </form>
          
        </div>
      </>
    )
  }
}

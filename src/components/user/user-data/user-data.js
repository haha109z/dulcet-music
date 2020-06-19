import React, { Component } from 'react'

export default class UserData extends Component {
  render() {
    return (
      <>
        <div class="userData-main">
            <h3 class="font-size-142rem userData-top-titleName">會員資料</h3>
              <div class="userData-top-Img">
                <img src="" alt="" />
              </div>
              
              <hr class="userData-top-hr"/>
              
              <form class="userData-form" action="">
              <label class="userData-form-input " for="name">
                <p>會員編號</p>
                <div class="UserData-inp ">
                  <input className="user-id" id="id" type="text" value="001" readonly="readonly"/>
                </div>
              </label>

              <label class="userData-form-input " for="name">
                <p>姓名</p>
                <div class="UserData-inp">
                  <input id="name" type="text" />
                </div>
              </label>

              <label class="userData-form-input " for="email">
                <p>信箱</p>
                <div class="UserData-inp">
                  <input  id="email" type="text" />
                </div>
              </label>
              <label class="userData-form-input " for="birthday">
                <p>生日</p>
                <div class="UserData-inp">
                  <input id="birthday" type="text" />
                </div>
              </label>

              <label class="userData-form-input " for="add">
                <p>地址</p>
                <div class="UserData-inp">
                  <input id="add" type="text" />
                </div>
              </label>

              <label class="userData-form-input " for="phone">
                <p>手機號碼</p>
                <div class="UserData-inp">
                  <input id="phone" type="text" />
                </div>
              </label>

              <input type="submit" class="userData-form-button" value="修改資料"/>
                
             
            </form>
          
        </div>
      </>
    )
  }
}

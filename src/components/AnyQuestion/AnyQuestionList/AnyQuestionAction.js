import React from 'react'
// import '../../../../styles/custom.scss'
function AnyQuestionAction() {
  return <><div className="AnyQuestionActionContainer">
    <div className="Text123"></div>
    <div style={{display:'flex'}}>
    <div className="AnyQuestionActionCard AnyQuestionActionCardLeft">
            <i className="far fa-user AnyQuestionActionCardIcon"></i>
            <h2 className="AnyQuestionActionCardIconH2">會員問題</h2>
          </div>
          <table class="AnyQuestionActionTable">
            <thead>
              <tr>
                <td><input type="submit" value="忘記帳號"/></td>
              </tr>
              <tr>
                <td><input type="submit" value="忘記密碼"/></td>
              </tr>
              <tr >
                <td><input type="submit" value="帳號綁定"/></td>
              </tr>
              <tr>
                <td><input type="submit" value="帳號問題"/></td>
              </tr>
              <tr>
                <td><input type="submit" value="信箱認證"/></td>
              </tr>
              <tr>
                <td><input type="submit" value="優惠卷使用方法"/></td>
              </tr>
              <tr>
                <td><input type="submit" value="帳號遺失密碼怎麼辦"/></td>
              </tr>
            </thead>
          </table>
          </div>
  </div></>
}

export default AnyQuestionAction

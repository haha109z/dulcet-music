import React, { useState } from 'react';
import { Link,withRouter } from 'react-router-dom';

// import '../../../styles/login/user-facturer-login-page.scss';

var sha1 = require('sha1');

function UserLoginPage(props) {

    const [userMail,setUserMail] = useState('');
    const [userPwd,setUserPwd] = useState('');
    const [userData,setUserData] = useState([]);    

    // 錯誤訊息陣列
    const [loginErrors, setLoginErrors] = useState([]);

    async function getData(userMail, userPwd) {
        // return
        fetch(`http://localhost:3030/login/user/`, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify({userPwd, userMail}), // data can be `string` or {object}!
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })
        .then(res => res.json())
        .then(json => {
          console.log("json", json)
          // 錯誤
          if(json.code > 0 ){
            //顯示錯誤 json.msg
            setLoginErrors([json.msg])
            return
          }
    
          setUserData(json.data)
          return userData
        })
    }

    // 處理會員登入
    const loginProcess = (loginSuccessCallback) => {
        const errors = []
        // 檢查錯誤    
        if(userMail === ''){
          errors.push('前:請輸入Email帳號');
        }else if( userPwd === ''){
            errors.push('前:請輸入密碼');                 
        }else{
            getData(userMail, userPwd);  
            if(userData.length === 0){
                errors.push('前:Email帳號不存在');
              }else{
                if(sha1(userPwd) != userData[0].userPwd) errors.push('前:123密碼錯誤');
              }             
        }
    
        if(errors.length > 0){
          setLoginErrors(errors);
          return         
        }
        
        // 登入後清空錯誤訊息陣列
        // 清空錯誤訊息陣列為必要
        setLoginErrors([])
    
        // 執行成功的callback(來自MemberLogin)
        loginSuccessCallback()
        
      }    

      // login成功時的callback
    const loginSuccessCallback = () => {
        localStorage.setItem('user', JSON.stringify(userData))
        alert('登入成功，跳轉至首頁')
        props.history.push('/user/userData', { from: '從登入頁來的' })
    }   

     // 錯誤訊息陣列的呈現
    const displayErrors = loginErrors.length ? (
        <div className="alert alert-danger" role="alert">
        <ul className="list-unstyled">
            {loginErrors.map((v, i) => (
            <li key={i}>{v}</li>
            ))}
        </ul>
        </div>
    ) : (
        ''
    )    

    return (
        <>
            <form>
                <div className="form-group">
                {displayErrors}
                    <label htmlFor="userEmail" className="col-md-12 control-label" autofocus>電子郵件</label>
                    <input type="email" name="username" className="form-control col-md-12" id="userEmail" placeholder="請輸入電子郵件" 
                    onChange={(event) => {
                        setUserMail(event.target.value)
                      }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="col-md-12 control-label">密碼</label>
                    <input type="password" name="userPassword" className="form-control" id="userPassword" placeholder="請輸入密碼"  required
                    onChange={(event) => {
                        setUserPwd(event.target.value)
                      }}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="user-check-input" id="userCheckMe" />
                    <label className="user-check-label" htmlFor="userCheckMe">記住我</label>
                </div>
                <button type="button" className="all-login-btn" required
                onClick={() => {
                    loginProcess(loginSuccessCallback)
                  }}
                >登入</button>
                <div className="col-md-12 all-login-register-btn">
                    <Link to="/register/user">立即註冊</Link>
                </div>
                <div className="col-md-12 all-login-resetpwd">
                    <Link to="">忘記密碼</Link>
                </div>
                <p className="all-login-cookie">我們通過Cookie改進我們的網站和您的體驗，繼續瀏覽網站即表示您接受我們的Cookie政策。</p>
            </form>
        </>
    )

}

export default withRouter(UserLoginPage);
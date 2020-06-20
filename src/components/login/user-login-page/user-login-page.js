import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';

// import '../../../styles/login/user-facturer-login-page.scss';

function UserLoginPage(props) {

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="userEmail" className="col-md-12 control-label" autofocus>電子郵件</label>
                    <input type="email" name="username" className="form-control col-md-12" id="userEmail" placeholder="請輸入電子郵件" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="col-md-12 control-label">密碼</label>
                    <input type="password" name="userPassword" className="form-control" id="userPassword" placeholder="請輸入密碼"  />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="user-check-input" id="userCheckMe" />
                    <label className="user-check-label" htmlFor="userCheckMe">記住我</label>
                </div>
                <button type="button" className="all-login-btn">登入</button>
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
import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../navbar/navbar';
// import '../../styles/register/user-register.scss';

class UserRegistered extends Component{

    state = {
        showPwd:false,
        showComPwd:false,
    }

    handleClick = () =>{
        const {showPwd} = this.state;
        const pwdToggle = !showPwd;
        this.setState({showPwd:pwdToggle});
    }

    handleClickCom = () =>{
        const {showComPwd} = this.state;
        const pwdToggle = !showComPwd;
        this.setState({showComPwd:pwdToggle});
    }


    render(){

        const {showPwd,showComPwd} = this.state;

        const showPwdDisplay = showPwd ? 'block':'none';
        const showPwdDisplay2 = showPwd ? 'none':'block';

        const showComPwdDisplay = showComPwd ? 'block':'none';
        const showComPwdDisplay2 = showComPwd ? 'none':'block';

        const pwdType = showPwd ? 'text' : 'password';
        const pwdComType = showComPwd ? 'text' : 'password';

        return(
            <>
            <Navbar />
            <div className="container user-register-wrap">
                <div className="user-register-body row">
                    <div className="user-register-txt col-md-12">
                        <h1 className="user-register-title">Dulcet Music</h1>
                        <h3 className="user-register-h3">會員註冊</h3>
                    </div>
                </div>
                <div className="user-register-body row">
                    <form onSubmit={this.handleSubmit} className="col-md-6 register-form-wrap">
                        <div className="form-group">
                            <label htmlFor="userRegisterName" className="col-md-12 control-label">姓名</label>
                            <input type="text" name="userRegisterName" className="form-control col-md-12" id="userRegisterName" placeholder="請輸入姓名" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userRegisterEmail" className="col-md-12 control-label">電子郵件</label>
                            <input type="email" name="userRegisterEmail" className="form-control col-md-12" id="userRegisterEmail" placeholder="請輸入電子郵件" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userRegisterBir" className="col-md-12 control-label">生日</label>
                            <input type="text" name="userRegisterBir" className="form-control col-md-12" id="userRegisterBir" placeholder="請輸入出生年月日" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userRegisterAddress" className="col-md-12 control-label">地址</label>
                            <input type="text" name="userRegisterAddress" className="form-control col-md-12" id="userRegisterAddress" placeholder="請輸入地址" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userRegisterMobile" className="col-md-12 control-label">手機號碼</label>
                            <input type="text" name="userRegisterMobile" className="form-control col-md-12" id="userRegisterMobile" placeholder="請輸入手機號碼" />
                        </div>
                        <div className="form-group user-pw-form">
                            <label htmlFor="userRegisterPassword" className="col-md-12 control-label">密碼</label>
                            <input type={pwdType} name="userRegisterPassword" className="form-control" id="userRegisterPassword" placeholder="請輸入密碼" />
                            <div onClick={this.handleClick}>
                                <div className="user-register-eye" style={{display:showPwdDisplay}} >
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div className="user-register-eye" style={{display:showPwdDisplay2}}>
                                <i className="fas fa-eye-slash"></i>
                                </div>
                            </div>
                        </div>
                        <div className="form-group user-pwCom-form">
                            <label htmlFor="userRegisterPasswordComfirm" name="userRegisterPasswordComfirm" className="col-md-12 control-label">確認密碼</label>
                            <input type={pwdComType} className="form-control" id="userRegisterPasswordComfirm" placeholder="請確認密碼" />
                            <div onClick={this.handleClickCom}>
                                <div className="user-register-eye" style={{display:showComPwdDisplay}} >
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div className="user-register-eye" style={{display:showComPwdDisplay2}}>
                                <i className="fas fa-eye-slash"></i>
                                </div>
                            </div>
                        </div>
                        <div className="form-group form-check col-md-12">
                            <input type="checkbox" className="register-check-input " id="userCheckMe" />
                            <label className="register-check-label" htmlFor="userCheckMe">我接受<Link to="">服務條款&隱私政策</Link></label>
                        </div>
                        <button type="button" className="user-register-btn">登入</button>
                    </form>
                </div>
            </div>
            </>
        )
    }
}

export default UserRegistered;
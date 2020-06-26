import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


import Navbar from '../navbar/navbar';
// import '../../styles/register/user-register.scss';

var sha1 = require('sha1');
const MySwal = withReactContent(Swal);

class UserRegistered extends Component{

    state = {
        userRegisterName: "",
        userRegisterEmail: "",
        userRegisterBir: "",
        userRegisterAddress: "",
        userRegisterMobil: "",
        userRegisterPassword: "",
        userRegisterPasswordComfirm: "",
        userData:[],
        msg: {},
        errors: {},
        showPwd:false,
        showComPwd:false,
        checkProvision:false,
        checkPwd:true,
        emailReg:true,
        phoneReg:true,
        registerSuccess:false
    }

    logChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    handleSignUpSubmit = async e => {
    //   alert("s")
        e.preventDefault();

    // const errors = await this.signupValidate();
    // await this.setState({ errors: errors || {} });
    // if (errors) return;

    // req.body
    let {userRegisterName, userRegisterEmail, userRegisterBir, userRegisterAddress, userRegisterMobile, userRegisterPassword,userRegisterPasswordComfirm } = this.state;

    if(userRegisterPassword !== userRegisterPasswordComfirm){
        this.setState({checkPwd:false});
        return
    }else{
        this.setState({checkPwd:true});
    }

    let userRegisterPwd = sha1(userRegisterPassword);

    let data = {
        userRegisterName, userRegisterEmail, userRegisterBir, userRegisterAddress, userRegisterMobile, userRegisterPwd
    };

    // console.log(data);
    // console.log("request", data)

    fetch("http://localhost:3030/register/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(json => {

    console.log("res", json)
        if (json.code === 0) {
          const {registerSuccess} = this.state;
          this.setState({registerSuccess:true});
          setTimeout(()=>{
            window.location = "/";
          },2000);
        } else {
          const state = { ...this.state };
          state.msg.signUpMsg = data.msg;
          state.msg.type = "alert alert-danger";
          this.setState(state);
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    };

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

    handelClickProvision = ()=>{
        const {checkProvision} = this.state;
        const toggle = !checkProvision;
        this.setState({checkProvision:toggle});
    }

    emailBlur = (e)=>{
        const reg = /^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/;
        const value = e.target.value;
        if(!value.match(reg)){
            this.setState({emailReg:false})
            return
        }else{
            this.setState({emailReg:true})
        }
    }

    phoneBlur = (e)=>{
        const reg = /^09\d{2}-?\d{3}-?\d{3}$/;
        const value = e.target.value;
        if(!value.match(reg)){
            this.setState({phoneReg:false})
            return
        }else{
            this.setState({phoneReg:true})
        }
    }

    registerSuccess = ()=>{
        MySwal.fire({
            position: 'top-center',
            icon: 'success',
            title: '註冊成功',
            showConfirmButton: false,
            timer: 2000
        })
    }


    render(){

        const {showPwd,showComPwd,checkProvision,checkPwd,phoneReg,registerSuccess,emailReg} = this.state;

        const showPwdDisplay = showPwd ? 'block':'none';
        const showPwdDisplay2 = showPwd ? 'none':'block';

        const showComPwdDisplay = showComPwd ? 'block':'none';
        const showComPwdDisplay2 = showComPwd ? 'none':'block';

        const pwdType = showPwd ? 'text' : 'password';
        const pwdComType = showComPwd ? 'text' : 'password';

        const checkProvisionBox = checkProvision ? "" : "disabled";

        const checkPwddobule = checkPwd ? '' : (
            <div className="user-register-dobluecheckPwd">兩次密碼不相符，請再確認</div>
        );

        const checkPhone = phoneReg ? '' : (
            <div className="user-register-dobluecheckPhone">請輸入正確的手機格式 09xx-xxx-xxx </div>
        )

        const checkEmail = emailReg ? '' : (
            <div className="user-register-dobluecheckPhone">請輸入正確的Email格式 (包含@) </div>
        )

        const regSuccess = registerSuccess ? this.registerSuccess():'';

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
                    <form onSubmit={this.handleSignUpSubmit} className="col-md-6 register-form-wrap">
                        <div className="form-group">
                            <label htmlFor="userRegisterName" className="col-md-12 control-label">姓名</label>
                            <input type="text" name="userRegisterName" className="form-control col-md-12" id="userRegisterName" placeholder="請輸入姓名"
                            onChange={this.logChange}
                            />
                        </div>
                        <div className="form-group">
                            {checkEmail}
                            <label htmlFor="userRegisterEmail" className="col-md-12 control-label">電子郵件</label>
                            <input type="email" name="userRegisterEmail" className="form-control col-md-12" id="userRegisterEmail" placeholder="請輸入電子郵件"
                            onBlur={this.emailBlur}
                            onChange={this.logChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="userRegisterBir" className="col-md-12 control-label">生日</label>
                            <input type="text" name="userRegisterBir" className="form-control col-md-12" id="userRegisterBir" placeholder="請輸入出生年月日"
                            onChange={this.logChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="userRegisterAddress" className="col-md-12 control-label">地址</label>
                            <input type="text" name="userRegisterAddress" className="form-control col-md-12" id="userRegisterAddress" placeholder="請輸入地址"
                            onChange={this.logChange}/>
                        </div>
                        <div className="form-group">
                            {checkPhone}
                            <label htmlFor="userRegisterMobile" className="col-md-12 control-label" >手機號碼</label>
                            <input type="tel" name="userRegisterMobile" className="form-control col-md-12" id="userRegisterMobile" placeholder="請輸入手機號碼" maxLength="10"
                            onBlur = {this.phoneBlur}
                            onChange={this.logChange}
                            />
                        </div>
                        <div className="form-group user-pw-form">
                            <label htmlFor="userRegisterPassword" className="col-md-12 control-label">密碼</label>
                            <input type={pwdType} name="userRegisterPassword" className="form-control" id="userRegisterPassword" placeholder="請輸入密碼" maxLength="15" minLength="4"
                             onChange={this.logChange}/>
                            <div onClick={this.handleClick}
                            >
                                <div className="user-register-eye" style={{display:showPwdDisplay}} >
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div className="user-register-eye" style={{display:showPwdDisplay2}}>
                                <i className="fas fa-eye-slash"></i>
                                </div>
                            </div>
                        </div>
                        <div className="form-group user-pwCom-form">
                            {checkPwddobule}
                            <label htmlFor="userRegisterPasswordComfirm"  className="col-md-12 control-label">確認密碼</label>
                            <input type={pwdComType} className="form-control" name="userRegisterPasswordComfirm" id="userRegisterPasswordComfirm" placeholder="請確認密碼" maxLength="15" minLength="4"
                            onChange={this.logChange}/>
                            <div onClick={this.handleClickCom}
                            >
                                <div className="user-register-eye" style={{display:showComPwdDisplay}} >
                                    <i className="fas fa-eye"></i>
                                </div>
                                <div className="user-register-eye" style={{display:showComPwdDisplay2}}>
                                <i className="fas fa-eye-slash"></i>
                                </div>
                            </div>
                        </div>
                        <div className="form-group form-check col-md-12">
                            <input type="checkbox" className="register-check-input " id="userCheckMe"
                            onClick={this.handelClickProvision}
                            onChange={this.logChange}
                            />
                            <label className="register-check-label" htmlFor="userCheckMe">我接受<Link to="">服務條款&隱私政策</Link></label>
                        </div>
                        <button type="submit" disabled={checkProvisionBox} className="user-register-btn"
                        onClick={regSuccess}
                        >註冊</button>
                    </form>
                </div>
            </div>
            </>
        )
    }
}

export default UserRegistered;
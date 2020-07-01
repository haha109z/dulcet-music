import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../navbar/navbar';

class ManufacturerRegistered extends Component{
    state = {
        showPwd:false,
        showComPwd:false,    
        Mname:'',
        Memail:'',
        Maddress:'',
        Mphone:'',
        Muser:'',
        Mtelephone:'',
        Mimg:'廠商001.jpg',
        Mpwd:'',
        Mcategory:'',
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
    handleMname = (event)=>{
        this.setState({Mname:event.target.value})
        console.log(event.target.value)
      }
      handleMemail= (event)=>{
        this.setState({Memail:event.target.value})
        console.log(event.target.value)
      }
      handleMaddress= (event)=>{
        this.setState({Maddress:event.target.value})
        console.log(event.target.value)
      }
      handleMphone= (event)=>{
        this.setState({Mphone:event.target.value})
        console.log(event.target.value)
      }
      handleMuser= (event)=>{
        this.setState({Muser:event.target.value})
        console.log(event.target.value)
      }
      handleMtelephone=(event)=>{
        this.setState({Mtelephone:event.target.value})
        console.log(event.target.value)
      }
      handleMpwd=(event)=>{
        this.setState({Mpwd:event.target.value})
        console.log(event.target.value)
      }
      handleM=(event)=>{
        this.setState({Mpwd:event.target.value})
        console.log(event.target.value)
      }
      
      handleMpwdCheck=(event)=>{
          if(this.state.Mpwd===event.target.value){
              console.log('正確')
          }
        else{
            console.log('不正確')
        }
      }
      handleMcategory=(event)=>{
        // const selectindex = event.target.value
        this.setState({Mcategory:event.target.value})
        console.log(event.target.value)

      }
      CompantyBtn=()=>{
let {
    Mname,
    Memail,
    Maddress,
    Mphone,
    Muser,
    Mtelephone,
    Mimg,
    Mpwd,
    Mcategory,
}=this.state
fetch('http://localhost:3030/register/manufacturer', {
                  method: 'POST', // or 'PUT'
                  body: JSON.stringify({
                    Mname,
                    Memail,
                    Maddress,
                    Mphone,
                    Muser,
                    Mtelephone,
                    Mimg,
                    Mpwd,
                    Mcategory,
                  }), 
                  headers: new Headers({
                    'Content-Type': 'application/json',
                  }),  
                })
                  .then((res) => res.json())
                  .then((json) => {  
                    this.setState({news123:json})
                    console.log(this.state)
                  })
                  .catch((error) => {
                    console.error('Error:', error)
                  })
  this.setState({ Mname: this.state.Mname })
  this.setState({ Memail: this.state.Memail })
  this.setState({ Maddress: this.state.Maddress })
  this.setState({ Mphone: this.state.Mphone })
  this.setState({ Muser: this.state.Muser })
  this.setState({ Mtelephone: this.state.Mtelephone })
  this.setState({ Mpwd: this.state.Mpwd })
  this.setState({ Mimg: this.state.Mimg })
  this.setState({ Mcategory: this.state.Mcategory })
  alert('新增成功')
  console.log(this.state)
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
            <div className="container facturer-register-wrap">
                <div className="facturer-register-body row">
                    <div className="facturer-register-txt col-md-12">
                        <h1 className="facturer-register-title">Dulcet Music</h1>
                        <h3 className="facturer-register-h3">廠商註冊</h3>
                    </div>
                </div>
                <div className="facturer-register-body row">
                <form onSubmit={this.handleSubmit} className="col-md-6 register-form-wrap">
                    <div className="form-group">
                        <label htmlFor="facturerRegisterName" className="col-md-12 control-label">廠商名稱</label>
                        <input type="text" name="facturerRegisterName" className="form-control col-md-12" id="facturerRegisterName" placeholder="請輸入姓名" 
                                    
                        onChange={this.handleMname}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterEmail" className="col-md-12 control-label">電子信箱</label>
                        <input type="email" name="facturerRegisterEmail" className="form-control col-md-12" id="facturerRegisterEmail" placeholder="請輸入電子信箱" 
                            onChange={this.handleMemail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterAddress" className="col-md-12 control-label">地址</label>
                        <input type="text"  name="facturerRegisterAddress" className="form-control col-md-12" id="facturerRegisterAddress" placeholder="請輸入地址"
                        onChange={this.handleMaddress}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterPhon" className="col-md-12 control-label">公司電話</label>
                        <input type="text" name="facturerRegisterPhon" className="form-control col-md-12" id="facturerRegisterPhon" placeholder="請輸入公司電話" 
                            onChange={this.handleMphone}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterPrincipal" className="col-md-12 control-label">負責人</label>
                        <input type="text"  name="facturerRegisterPrincipal" className="form-control col-md-12" id="facturerRegisterPrincipal" placeholder="請輸入負責人姓名" 
                            onChange={this.handleMuser}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="facturerRegisterMobile" className="col-md-12 control-label">負責人手機號碼</label>
                        <input type="text" name="facturerRegisterMobile" className="form-control col-md-12" id="facturerRegisterMobile" placeholder="請輸入負責人手機號碼" 
                            onChange={this.handleMtelephone}
                        />
                    </div>
                    <div className="form-group facturer-pw-form">
                        <label htmlFor="facturerRegisterPassword" className="col-md-12 control-label">密碼</label>
                        <input type={pwdType}  name="facturerRegisterPassword" className="form-control" id="facturerRegisterPassword" placeholder="請輸入密碼" 
                            onChange={this.handleMpwd}
                        />
                        <div onClick={this.handleClick}>
                            <div className="facturer-register-eye" style={{display:showPwdDisplay}} >
                                <i className="fas fa-eye"></i>
                            </div>
                            <div className="facturer-register-eye" style={{display:showPwdDisplay2}}>
                            <i className="fas fa-eye-slash"></i>
                            </div>
                        </div>
                    </div>
                    <div className="form-group facturer-pwCom-form">
                        <label htmlFor="facturerRegisterPasswordComfirm" className="col-md-12 control-label">確認密碼</label>
                        <input type={pwdComType} name="facturerRegisterPasswordComfirm"  className="form-control" id="facturerRegisterPasswordComfirm" placeholder="請確認密碼" 
                            onChange={this.handleMpwdCheck}
                        />
                        
                        <div onClick={this.handleClickCom}>
                            <div className="facturer-register-eye" style={{display:showComPwdDisplay}} >
                                <i className="fas fa-eye"></i>
                            </div>
                            <div className="facturer-register-eye" style={{display:showComPwdDisplay2}}>
                            <i className="fas fa-eye-slash"></i>
                            </div>  
                        </div>
                    </div>
                    {/* 選擇樂器以及廠商 */}
                    <select className="col-md-12 control-label" name="cars" id="cars" onChange={this.handleMcategory}>
      <option value="樂器" id="option1" >樂器</option>
      <option className="col-md-12 control-label" id="option1" value="影片">影片</option>
      </select>
                    <div className="form-group form-check col-md-12">
                        <input type="checkbox" className="register-check-input " id="userCheckMe" />
                        <label className="register-check-label" htmlFor="userCheckMe">我接受<Link to="">服務條款&隱私政策</Link></label>
                    </div>
                    <button type="button" className="facturer-register-btn" onClick={this.CompantyBtn}>登入</button>
                </form>
            </div>
            </div>
            </>
        )
    }
}

export default ManufacturerRegistered;
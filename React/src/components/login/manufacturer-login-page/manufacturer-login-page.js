import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import AOS from 'aos'
// import '../../../styles/login/user-facturer-login-page.scss';
// var sha1 = require('sha1');
// const MySwal = withReactContent(Swal);
class Company extends Component{
    constructor(props) {
        super(props)
        const {Memail,Mpwd}=this.state
        fetch('http://localhost:3030/login/manufacturer', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify({
                Memail,
                Mpwd,
            }), 
            
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
            
          })
            .then((res) => res.json())
            .then((json) => {
              this.setState({new:json})
              console.log(this.state)
              // localStorage.setItem('user', JSON.stringify(json.data))
              // console.log(json.data)
            })
            .catch((error) => {
              console.error('Error:', error)
            })
   

        }
        
        state = {
           
            Memail:'',
            Mpwd:'',
            
           
          }
          componentDidUpdate(e) {
            // const handleForumAboutTitle = this.state
            // console.log(handleForumAboutTitle)
            AOS.init({
              duration: 1000, // 持續時間
              easing: 'ease-out-back',
            })
          }
          HandleEmail=(event)=>{
            this.setState({Memail:event.target.value})
            console.log(event.target.value)
                }
                HandlePwd=(event)=>{
                    this.setState({Mpwd:event.target.value})
                    console.log(event.target.value)
                        }
                        HandleCheckBox=()=>{
                            if()
                        }
                // Text=()=>{
                //     console.log(this.target)
                // }

       // login成功時的callback
    // const loginSuccessCallback = () => {
    //     localStorage.setItem('user', JSON.stringify(userData))
    //     // alert('登入成功，跳轉至首頁')
    //     setTimeout(()=>{
    //       props.history.push('/user/userData', { from: '從登入頁來的' })
    //     },2000)

    // }


     // 錯誤訊息陣列的呈現
    // const displayErrors = loginErrors.length ? (
    //     <div className="alert alert-danger" role="alert">
    //     <ul className="list-unstyled">
    //         {loginErrors.map((v, i) => (
    //         <li key={i}>{v}</li>
    //         ))}
    //     </ul>
    //     </div>
    // ) : (
    //     ''
    // )
  


    render() {
    return(
        <>
        <div>
            <div className="form-group">
                <label htmlFor="facturerEmail" className="col-md-12 control-label">電子郵件</label>
                <input type="email"  name="email" className="form-control col-md-12" id="facturerEmail"
                placeholder="請輸入電子郵件" 
                    onChange={this.HandleEmail}
                    
                />
            </div>
            <div className="form-group">
                <label htmlFor="facturerPassword" className="col-md-12 control-label">密碼</label>
                <input type="password" name="password" className="form-control" id="facturerPassword" placeholder="請輸入密碼"
                onChange={this.HandlePwd} />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="user-check-input" id="userCheckMe" />
                <label className="user-check-label" htmlFor="userCheckMe">記住我</label>
            </div>
            <button type="button" className="all-login-btn" onClick={this.HandleCheckBox}>登入</button>
            <div className="col-md-12 all-login-register-btn">
                <Link to="/register/manufacturer">立即註冊</Link>
            </div>
            <div className="col-md-12 all-login-resetpwd">
                <Link to="">忘記密碼</Link>
            </div>
            <p className="all-login-cookie">我們通過Cookie改進我們的網站和您的體驗，繼續瀏覽網站即表示您接受我們的Cookie政策。</p>
        </div>
        </>
    )
}
}
export default Company

import withReactContentM from 'sweetalert2-react-content';
import Swal from 'sweetalert2'
import React, { useState } from 'react';
import { Link,withRouter } from 'react-router-dom';
// import '../../../styles/login/user-facturer-login-page.scss';

var sha1 = require('sha1');
const MySwal = withReactContentM(Swal);
function MLoginPage(props) {

    const [Memail,setMemail] = useState('');
    const [Mpwd,setMpwd] = useState('');
    const [MData,setMData] = useState([]);
    const [MLogin,setMLogin] = useState(false);

    // 錯誤訊息陣列
    const [MloginErrors, setMLoginErrors] = useState([]);

    async function getData(Memail, Mpwd) {
        // return
        const res = await fetch(`http://localhost:3030/login/manufacturer`, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify({Mpwd, Memail}), // data can be `string` or {object}!
          
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        });
        const json = await res.json();
        if(json.code > 0 ){
          //顯示錯誤 json.msg
          setMLoginErrors([json.msg])
          return
        }
        setMData(json.data)   
        localStorage.setItem('user', JSON.stringify(json.data))
        // console.log("userData: ",json.data);
        // console.log("userData: ",userData);
        
        return MData         
    }
     // 處理會員登入
    const MloginProcess = async() => {
        const errors = []
        // 檢查錯誤
        if(Memail === ''){
          errors.push('請輸入Email帳號');
        }else if( Mpwd === ''){
            errors.push('請輸入密碼');
        }else{
          await getData(Memail, Mpwd);
        }
          // console.log(userData);   
            

        if(errors.length > 0){
            setMLoginErrors(errors);
          return
        }

        // 登入後清空錯誤訊息陣列
        // 清空錯誤訊息陣列為必要
        setMLoginErrors([])

        setMLogin(true);

        // 執行成功的callback(來自MemberLogin)
        MloginSuccessCallback()

      }

      // login成功時的callback
    const MloginSuccessCallback = () => {
        // localStorage.setItem('user', JSON.stringify(MData))
        // alert('登入成功，跳轉至首頁')
        setTimeout(()=>{
          props.history.push('/ManufacturerInstrument/Instrument', { from: '從登入頁來的' })
        },2000)

    }

    const MloginSuccessBox = ()=>{
      MySwal.fire({
          position: 'top-center',
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 2000
      })
    }

     // 錯誤訊息陣列的呈現
    const displayErrors = MloginErrors.length ? (
        <div className="alert alert-danger" role="alert">
        <ul className="list-unstyled">
            {MloginErrors.map((v, i) => (
            <li key={i}>{v}</li>
            ))}
        </ul>
        </div>
    ) : (
        ''
    )

    const loginSuccessMsg = MLogin ? MloginSuccessBox(): '';

    return(
        <>
        <form>
            <div className="form-group">
            {MloginErrors}
                <label htmlFor="facturerEmail" className="col-md-12 control-label" autoFocus>電子郵件</label>
                <input type="email"  name="email" className="form-control col-md-12" id="facturerEmail"
                placeholder="請輸入電子郵件" 
                onChange={(event) => {
                        setMemail(event.target.value)
                      }}
                    
                />
            </div>
            <div className="form-group">
                <label htmlFor="facturerPassword" className="col-md-12 control-label">密碼</label>
                <input type="password" name="password" className="form-control" id="facturerPassword" placeholder="請輸入密碼" minLength="4" required
                    onChange={(event) => {
                        setMpwd(event.target.value)
                      }}
 />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="user-check-input" id="userCheckMe" />
                <label className="user-check-label" htmlFor="userCheckMe">記住我</label>
            </div>
            <button type="button" className="all-login-btn" 
            onClick={() => {
                MloginProcess(MloginSuccessCallback)
                  }}
                  >登入</button>
            <div className="col-md-12 all-login-register-btn">
                <Link to="/register/manufacturer">立即註冊</Link>
            </div>
            <div className="col-md-12 all-login-resetpwd">
                <Link to="">忘記密碼</Link>
            </div>
            <p className="all-login-cookie">我們通過Cookie改進我們的網站和您的體驗，繼續瀏覽網站即表示您接受我們的Cookie政策。</p>
        </form>
        
        </>
    )
    }

    export default withRouter(MLoginPage);

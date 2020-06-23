import React from 'react'
import {FaEye} from 'react-icons/fa'



class VideoEditPassword extends React.Component{

    render(){
    return(
        <div className="videoPassword-main">
          <h3 className="font-size-142rem videoPassword-top-titleName user-font-ch">密碼修改</h3>
          <div className="videoPassword-top-Img">
            <img src="" alt="" />
          </div>
        
          <hr className="videoPassword-top-hr" />

          <form className="videoPassword-form" action="">
          <label className="userData-form-input " htmlFor="name">
                <p>廠商編號</p>
                <div className="UserData-inp ">
                  <input className="user-id" id="id" type="text" value="M0001" readOnly="readonly"/>
                </div>
              </label>
            <label className="videoPassword-form-input font-size-1rem" htmlFor="oldPwd">
              <p className="user-font-ch">請輸入舊密碼</p>
              <div className="videoPassword-inp">
                <input id="oldPwd font-size-114rem user-font-ch" type="text" />
                <div className="videoPassword-eyes">
                    <FaEye/>
                </div>
              </div>
            </label>

            <label className="videoPassword-form-input font-size-1rem" htmlFor="newPwd">
              <p className='user-font-ch'>輸入新密碼</p>
              <div className="videoPassword-inp">
                <input id="newPwd font-size-114rem user-font-ch" type="text" />
                <div className="videoPassword-eyes">
                    <FaEye/>
                </div>
              </div>
            </label>
            <label className="videoPassword-form-input font-size-1rem" htmlFor="changePwd">
              <p className="user-font-ch">確認新密碼</p>
              <div className="videoPassword-inp">
                <input id="changePwd font-size-114rem user-font-ch" type="text" />
                <div className="videoPassword-eyes">
                    <FaEye/>
                </div>
              </div>
            </label>

            <input type="submit" className="videoPassword-form-button user-font-ch" value="修改密碼" />
          </form>
        </div>
    )
    }
}


export default VideoEditPassword
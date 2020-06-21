import React from 'react'
import {FaEye} from 'react-icons/fa'



class VideoEditPassword extends React.Component{

    render(){
    return(
        <div class="videoPassword-main">
          <h3 class="font-size-142rem videoPassword-top-titleName user-font-ch">密碼修改</h3>
          <div class="videoPassword-top-Img">
            <img src="" alt="" />
          </div>
        
          <hr class="videoPassword-top-hr" />

          <form class="videoPassword-form" action="">
          <label class="userData-form-input " for="name">
                <p>廠商編號</p>
                <div class="UserData-inp ">
                  <input className="user-id" id="id" type="text" value="M001" readonly="readonly"/>
                </div>
              </label>
            <label class="videoPassword-form-input font-size-1rem" for="oldPwd">
              <p className="user-font-ch">請輸入舊密碼</p>
              <div class="videoPassword-inp">
                <input id="oldPwd font-size-114rem user-font-ch" type="text" />
                <div className="videoPassword-eyes">
                    <FaEye/>
                </div>
              </div>
            </label>

            <label class="videoPassword-form-input font-size-1rem" for="newPwd">
              <p className='user-font-ch'>輸入新密碼</p>
              <div class="videoPassword-inp">
                <input id="newPwd font-size-114rem user-font-ch" type="text" />
                <div className="videoPassword-eyes">
                    <FaEye/>
                </div>
              </div>
            </label>
            <label class="videoPassword-form-input font-size-1rem" for="changePwd">
              <p className="user-font-ch">確認新密碼</p>
              <div class="videoPassword-inp">
                <input id="changePwd font-size-114rem user-font-ch" type="text" />
                <div className="videoPassword-eyes">
                    <FaEye/>
                </div>
              </div>
            </label>

            <input type="submit" class="videoPassword-form-button user-font-ch" value="修改密碼" />
          </form>
        </div>
    )
    }
}


export default VideoEditPassword
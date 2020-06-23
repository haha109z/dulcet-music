import React from 'react'


class VideoHome extends React.Component{
    render(){
    return(
      <div className="video-home-page">
      <h3 className="font-size-142rem video-home-title">廠商資料</h3>
        <div className="video-home-img">
          <img src="" alt="" />
        </div>
        
        <hr className="video-home-hr"/>
        
        <form className="video-home-form" action="">
        <label className="video-home-label " htmlFor="mid">
          <p>廠商編號</p>
          <div className="video-home-inp ">
            <input className="video-user-id" id="mid" type="text" value="M0001" readOnly="readonly"/>
          </div>
        </label>

        <label className="video-home-label " htmlFor="id">
          <p>廠商名稱</p>
          <div className="video-home-inp">
            <input id="id" type="text" />
          </div>
        </label>

        <label className="video-home-label " htmlFor="email">
          <p>電子信箱</p>
          <div className="video-home-inp">
            <input  id="email" type="text" />
          </div>
        </label>

        <label className="video-home-label " htmlFor="address">
          <p>廠商地址</p>
          <div className="video-home-inp">
            <input id="address" type="text" />
          </div>
        </label>

        <label className="video-home-label " htmlFor="name">
          <p>負責人</p>
          <div className="video-home-inp">
            <input id="name" type="text" />
          </div>
        </label>

        <label className="video-home-label " htmlFor="telephone">
          <p>廠商電話</p>
          <div className="video-home-inp">
            <input id="telephone" type="text" />
          </div>
        </label>

        <label className="video-home-label " htmlFor="phone">
          <p>手機號碼</p>
          <div className="video-home-inp">
            <input id="phone" type="text" />
          </div>
        </label>

        <input type="submit" className="video-home-form-btn" value="修改資料"/>
          
       
      </form>
    
  </div>
    )
    }
}

export default VideoHome
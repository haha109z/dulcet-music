import React from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

class VideoHome extends React.Component{
  constructor() {
    super()
    fetch('http://localhost:3030/ManufacturerVideo/VideoHome', {
       method: 'GET',
       headers: new Headers({
        'Content-Type': 'application/json',
      }),
      })
        .then((res) => {
          console.log(res)
          return res.json()
        })
        .then((res) => {
          
          this.setState({
            ManuUser : res
          })
        })
    
    }
  
  state = {
    ManuUser : [
      {
        Mid : '',
        Mname : '',
        Memail : '',
        Maddress : '',
        Muser : '',
        Mtelephone : '',
        Mphone : '',
    }
    ]
    
  }
  
    render(){
    return(
      <div className="video-home-page">
      <h3 className="font-size-142rem video-home-title">廠商資料</h3>
        <div className="video-home-img">
        <label for="gogo" className="video-upload-container">
              <input
                type="file"
                name="image"
                className="video-upload-input"
                onChange={this.onChange}
                id="gogo"
              />
              <input
                type="primary"
                className="video-upload-button"
                value="上传图片"
              />
            </label>
        </div>
        
        <hr className="video-home-hr"/>
        
        <form className="video-home-form" action="">
        <label className="video-home-label " htmlFor="mid">
          <p>廠商編號</p>
          <div className="video-home-inp ">
            <input className="video-user-id" id="mid" type="text" value={this.state.ManuUser.Mid} readOnly="readonly"/>
          </div>
        </label>

        <label className="video-home-label " htmlFor="id">
          <p>廠商名稱</p>
          <div className="video-home-inp">
            <input id="id" type="text" value={this.state.ManuUser.Mname}/>
          </div>
        </label>

        <label className="video-home-label " htmlFor="email">
          <p>電子信箱</p>
          <div className="video-home-inp">
            <input  id="email" type="text" value={this.state.ManuUser.Memail}/>
          </div>
        </label>

        <label className="video-home-label " htmlFor="address">
          <p>廠商地址</p>
          <div className="video-home-inp">
            <input id="address" type="text" value={this.state.ManuUser.Maddress}/>
          </div>
        </label>

        <label className="video-home-label " htmlFor="name">
          <p>負責人</p>
          <div className="video-home-inp">
            <input id="name" type="text" value={this.state.ManuUser.Muser}/>
          </div>
        </label>

        <label className="video-home-label " htmlFor="telephone">
          <p>廠商電話</p>
          <div className="video-home-inp">
            <input id="telephone" type="text" value={this.state.ManuUser.Mtelephone}/>
          </div>
        </label>

        <label className="video-home-label " htmlFor="phone">
          <p>手機號碼</p>
          <div className="video-home-inp">
            <input id="phone" type="text" value={this.state.ManuUser.Mphone}/>
          </div>
        </label>

        <input type="submit" className="video-home-form-btn" value="修改資料"/>
          
       
      </form>
    
  </div>
    )
    }
}

export default VideoHome
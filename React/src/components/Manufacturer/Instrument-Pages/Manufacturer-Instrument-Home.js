import React from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)
const ID = "1"
fetch('http://localhost:3030/ManufacturerInstrument/InstrumentHome', {
  method: 'POST', // or 'PUT'
  body: JSON.stringify({
    ID,
    
  }), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json',
  }),
})
  .then((res) => res.json())
  .then((json) => {
    console.log(json)
    if (json.data) {
      localStorage.setItem('Muser', JSON.stringify(json.data))
    } 
      // Muser 名稱要跟做登入的人喬好
    // localStorage.setItem('user', JSON.stringify(json.data))
    // console.log(json.data)
  })
  .catch((error) => {
    console.error('Error:', error)
  })

 

class InstrumentHome extends React.Component{
  constructor(){
    super()
    this.state={
      MFTuser : [
      {
        Mid : '',
        Mname : '',
        Maddress : '',
        Muser : '',
        Mphone : '',
        Mtelephone : '',
        Memail : '',
        Mimg : '',
      }]
    }
  }
  componentDidMount(){
    const getUserInfo = () => {
      return JSON.parse(localStorage.getItem('Muser'))
    }
    if (getUserInfo()) {
      let Muser = getUserInfo()
      if (Muser[0].Mid) {
        this.setState({ MFTuser: Muser[0] })
      } else {
        this.setState({ MFTuser: '' })
      }
    } else {
      this.setState({ MFTuser: '' })
    }
  }
    render(){
    return(
      <div className="ins-home-page">
      <h3 className="font-size-142rem ins-home-title">廠商資料</h3>
        <div className="ins-home-img">
          <img src="" alt="" />
        </div>
        
        <hr className="ins-home-hr"/>
        
        <form className="ins-home-form" action="">
        <label className="ins-home-label " htmlFor="mid">
          <p>廠商編號</p>
          <div className="ins-home-inp ">
            <input className="ins-user-id" id="mid" type="text" value={this.state.MFTuser.Mid} readOnly="readonly"/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="id">
          <p>廠商名稱</p>
          <div className="ins-home-inp">
            <input id="id" type="text" value={this.state.MFTuser.Mname} />
          </div>
        </label>

        <label className="ins-home-label " htmlFor="email">
          <p>電子信箱</p>
          <div className="ins-home-inp">
            <input  id="email" type="text" value={this.state.MFTuser.Memail}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="address">
          <p>廠商地址</p>
          <div className="ins-home-inp">
            <input id="address" type="text" value={this.state.MFTuser.Maddress}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="name">
          <p>負責人</p>
          <div className="ins-home-inp">
            <input id="name" type="text" value={this.state.MFTuser.Muser}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="telephone">
          <p>廠商電話</p>
          <div className="ins-home-inp">
            <input id="telephone" type="text" value={this.state.MFTuser.Mtelephone}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="phone" >
          <p>手機號碼</p>
          <div className="ins-home-inp">
            <input id="phone" type="text" value={this.state.MFTuser.Mphone}/>
          </div>
        </label>

       
        <input type="submit" className="ins-home-form-btn" value="修改資料"/>
          
       
      </form>
    
  </div>
    )
    }
}

export default InstrumentHome
import React from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)


class InstrumentHome extends React.Component{
  constructor() {
    super()
    fetch('http://localhost:3030/ManufacturerInstrument/InstrumentHome', {
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

//   changeData = () =>{
//     const {
//       Mid,
//       Mname,
//       Memail,
//       Maddress,
//       Muser,
//       Mtelephone,
//       Mphone,
//     } = this.state.ManuUser
  
//   const muserGoData = [
//       Mname,
//       Memail,
//       Maddress,
//       Muser,
//       Mtelephone,
//       Mphone,
//   ]

//   MySwal.fire({
//       type: 'warning', // 彈框類型
//       title: '修改資料？', //標題
//       text: '', //顯示內容
//       icon: '', //icon圖示
//       confirmButtonColor: '#141414', // 確定按鈕的 顏色
//       confirmButtonText: '確定', // 確定按鈕的 文字
//       showCancelButton: true, // 是否顯示取消按鈕
//       cancelButtonColor: '#dadada', // 取消按鈕的 顏色
//       cancelButtonText: '取消', // 取消按鈕的 文字
//       html:
//           `<p class="insdata-alert-p">廠商名稱</p>` +
//           `<input id="swal-input1" class="swal2-input" value=${Mname}>` +
//           `<p class="insdata-alert-p">電子信箱</p>` +
//           `<input id="swal-input2" class="swal2-input" value=${Memail}>` +
//           `<p class="insdata-alert-p">廠商地址</p>` +
//           `<input id="swal-input3" class="swal2-input" type="date" value=${Maddress}>` +
//           `<p class="insdata-alert-p">負責人</p>` +
//           `<input id="swal-input4" class="swal2-input" value=${Muser}>` +
//           `<p class="insdata-alert-p">廠商電話</p>` +
//           `<input id="swal-input5" class="swal2-input" value=${Mtelephone}>` +
//           `<p class="insdata-alert-p">手機號碼</p>` +
//           `<input id="swal-input5" class="swal2-input" value=${Mphone}>`,
//         focusCancel: true, // 是否聚焦 取消按鈕
//         reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
//   }).then((isConfirm) => {
//     try {
//       let Mname = document.getElementById('swal-input1').value
//       let Memail = document.getElementById('swal-input2').value
//       let Maddress = document.getElementById('swal-input3').value
//       let Muser = document.getElementById('swal-input4').value
//       let Mtelephone = document.getElementById('swal-input5').value
//       let Mphone = document.getElementById('swal-input6').value
//       // console.log(userGoData)
//       // console.log(changData)
//       //判斷 是否 點擊的 確定按鈕
//       if (isConfirm.value) {
//         // console.log(userGoData)
//         MySwal.fire({
//           type: 'warning', // 彈框類型
//           title: '確定修改資料？', //標題
//           text: '', //顯示內容
//           icon: 'question', //icon圖示
//           confirmButtonColor: '#141414', // 確定按鈕的 顏色
//           confirmButtonText: '確定', // 確定按鈕的 文字
//           showCancelButton: true, // 是否顯示取消按鈕
//           cancelButtonColor: '#dadada', // 取消按鈕的 顏色
//           cancelButtonText: '取消', // 取消按鈕的 文字
//           focusCancel: true, // 是否聚焦 取消按鈕
//           reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
//         }).then((isConfirm) => {
//           if (isConfirm.value) {
//             fetch('http://localhost:3030/ManufacturerInstrument/InstrumentHome', {
//               method: 'POST', // or 'PUT'
//               body: JSON.stringify({
//                 Mid,
//                 Mname,
//                 Memail,
//                 Maddress,
//                 Muser,
//                 Mtelephone,
//                 Mphone,
//               }), // data can be `string` or {object}!
//               headers: new Headers({
//                 'Content-Type': 'application/json',
//               }),
//             })
//               .then((res) => res.json())
//               .then((json) => {
//                 if (json.code === 3) {
//                   MySwal.fire('信箱已經註冊過請換一個信箱試試', '', 'error')
//                 } else if (json.data) {
//                   localStorage.setItem('user', JSON.stringify(json.data))
//                   console.log(JSON.stringify(json.data))
//                   this.setState({ user: json.data[0] })

//                 }
//                 // localStorage.setItem('user', JSON.stringify(json.data))
//                 // console.log(json.data)
//               })
//               .catch((error) => {
//                 console.error('Error:', error)
//               })
//             // localStorage.setItem('user', JSON.stringify(userData))
//             MySwal.fire('修改完成', '', 'success')
//           } else {
//             MySwal.fire('取消修改', '', 'error')
//           }
//         })
//         // MySwal.fire('修改成功', '', 'success')
//       } else {
//         MySwal.fire('取消修改', '', 'error')
//       }
//     } catch (e) {
//       alert(e)
//     }
//   })

// }

  
  render() {
    return(
      <div className="ins-home-page">
      <h3 className="font-size-142rem ins-home-title">廠商資料</h3>
        <div className="ins-home-img">
        <label for="gogo" className="ins-upload-container">
              <input
                type="file"
                name="image"
                className="ins-upload-input"
                onChange={this.onChange}
                id="gogo"
              />
              <input
                type="primary"
                className="ins-upload-button"
                value="上传图片"
              />
            </label>
        </div>
        
        <hr className="ins-home-hr"/>
        
        <form className="ins-home-form" action="">
        <label className="ins-home-label " htmlFor="mid">
          <p>廠商編號</p>
          <div className="ins-home-inp ">
            <input className="ins-user-id " id="mid" type="text" value={this.state.ManuUser.Mid} readOnly="readonly"/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="id">
          <p>廠商名稱</p>
          <div className="ins-home-inp">
            <input id="id" type="text" value={this.state.ManuUser.Mname}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="email">
          <p>電子信箱</p>
          <div className="ins-home-inp">
            <input  id="email" type="text" value={this.state.ManuUser.Memail}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="address">
          <p>廠商地址</p>
          <div className="ins-home-inp">
            <input id="address" type="text" value={this.state.ManuUser.Maddress}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="name">
          <p>負責人</p>
          <div className="ins-home-inp">
            <input id="name" type="text" value={this.state.ManuUser.Muser}/>
          </div>
        </label>

        <label className="ins-home-label " htmlFor="telephone">
          <p>廠商電話</p>
          <div className="ins-home-inp">
            <input id="telephone" type="text" value={this.state.ManuUser.Mtelephone}/>
          </div>
        </label>

        <label className="ins-home-label" htmlFor="phone" >
          <p>手機號碼</p>
          <div className="ins-home-inp">
            <input id="phone" type="text" value={this.state.ManuUser.Mphone}/>
          </div>
        </label>
        
        <input type="button" className="ins-home-form-btn" onClick={this.changeData} value="修改資料" onClick={this.changData}/>
          
       
      </form>
    
  </div>
    )
    }
  }

export default InstrumentHome
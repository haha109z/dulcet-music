import React from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

class InstrumentHome extends React.Component {
  state = {
    ManuData:[],
    ManuUser: [
      {
        Mid: '',
        Mname: '',
        Memail: '',
        Maddress: '',
        Muser: '',
        Mtelephone: '',
        Mphone: '',
      },
    ],
  }
  constructor() {
    super()

    // fetch('http://localhost:3030/ManufacturerInstrument/InstrumentHome', {
    //    method: 'GET',
    //    headers: new Headers({
    //     'Content-Type': 'application/json',
    //   }),
    //   })
    //     .then((res) => {
    //       console.log(res)
    //       return res.json()
    //     })
    //     .then((res) => {

    //       this.setState({
    //         ManuUser : res
    //       })
    //     })
  }

  componentDidMount() {
    this.changeData = () => {
      console.log('123')
      const {
        Mid,
        Mname,
        Memail,
        Maddress,
        Muser,
        Mtelephone,
        Mphone,
      } = this.state.ManuData
      const manuIGoData = [Mname, Memail, Maddress, Muser, Mtelephone, Mphone]

      MySwal.fire({
        type: 'warning', // 彈框類型
        title: '修改資料？', //標題
        text: '', //顯示內容
        icon: '', //icon圖示
        confirmButtonColor: '#141414', // 確定按鈕的 顏色
        confirmButtonText: '確定', // 確定按鈕的 文字
        showCancelButton: true, // 是否顯示取消按鈕
        cancelButtonColor: '#dadada', // 取消按鈕的 顏色
        cancelButtonText: '取消', // 取消按鈕的 文字
        html:
          `<p>廠商名稱</p>` +
          `<input id="swal-input1" value=${Mname}>` +
          `<p>電子信箱</p>` +
          `<input id="swal-input2" value=${Memail}>` +
          `<p>廠商地址</p>` +
          `<input id="swal-input3" value=${Maddress}>` +
          `<p>負責人</p>` +
          `<input id="swal-input4" value=${Muser}>` +
          `<p>聯絡電話</p>` +
          `<input id="swal-input5" value=${Mtelephone}>` +
          `<p>手機號碼</p>` +
          `<input id="swal-input6" value=${Mphone}>`,
        focusCancel: true, // 是否聚焦 取消按鈕
        reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
      }).then((isConfirm) => {
        try {
          let changeMname = document.getElementById('swal-input1').value
          let changeMemail = document.getElementById('swal-input2').value
          let changeMaddress = document.getElementById('swal-input3').value
          let changeMuser = document.getElementById('swal-input4').value
          let changeMtelephone = document.getElementById('swal-input5').value
          let changeMphone = document.getElementById('swal-input6').value
          //判斷 是否 點擊的 確定按鈕
          if (isConfirm.value) {
            MySwal.fire({
              type: 'warning', // 彈框類型
              title: '確定修改資料？', //標題
              text: '', //顯示內容
              icon: 'question', //icon圖示
              confirmButtonColor: '#141414', // 確定按鈕的 顏色
              confirmButtonText: '確定', // 確定按鈕的 文字
              showCancelButton: true, // 是否顯示取消按鈕
              cancelButtonColor: '#dadada', // 取消按鈕的 顏色
              cancelButtonText: '取消', // 取消按鈕的 文字
              focusCancel: true, // 是否聚焦 取消按鈕
              reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
            }).then((isConfirm) => {
              if (isConfirm.value) {
                fetch(
                  'http://localhost:3030/ManufacturerInstrument/InstrumentHome',
                  {
                    method: 'POST',
                    body: JSON.stringify({
                      Mid,
                      changeMname,
                      changeMemail,
                      changeMaddress,
                      changeMuser,
                      changeMtelephone,
                      changeMphone,
                    }),
                    headers: new Headers({
                      'Content-type': 'application/json',
                    }),
                  }
                )
                  .then((res) => res.json())
                  .then((json) => {
                    if (json.code === 3) {
                      MySwal.fire('信箱已經註冊過請換一個信箱試試', '', 'error')
                    } else if (json.data) {
                      localStorage.setItem(
                        'ManuUser',
                        JSON.stringify(json.data)
                      )
                      console.log(JSON.stringify(json.data))
                      this.setState({ ManuUser: json.data[0] })
                    }
                  })
                  .catch((error) => {
                    console.log.error('Error:', error)
                  })

                MySwal.fire('修改完成', '', 'success')
              } else {
                MySwal.fire('取消修改', '', 'error')
              }
            })
          } else {
            MySwal.fire('取消修改', '', 'error')
          }
        } catch (e) {
          alert(e)
        }
      })
    }

    
    const getUserInfo = () => {
      return JSON.parse(localStorage.getItem('user'))
    }

    if (getUserInfo()) {
      let user = getUserInfo()

      if (user[0].Mid) {
        this.setState({ ManuData: user[0] })
      } else {
        this.setState({ ManuData: '' })
      }
    } else {
      this.setState({ ManuData: '' })
    }
  }

  render() {
    console.log(this.state.ManuData)
    return (
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

        <hr className="ins-home-hr" />

        <form className="ins-home-form" action="">
          <label className="ins-home-label " htmlFor="mid">
            <p>廠商編號</p>
            <div className="ins-home-inp ">
              <input
                className="ins-user-id "
                id="mid"
                type="text"
                value={this.state.ManuData.Mid}
                readOnly="readonly"
              />
            </div>
          </label>

          <label className="ins-home-label " htmlFor="id">
            <p>廠商名稱</p>
            <div className="ins-home-inp">
              <input id="id" type="text" value={this.state.ManuData.Mname} />
            </div>
          </label>

          <label className="ins-home-label " htmlFor="email">
            <p>電子信箱</p>
            <div className="ins-home-inp">
              <input
                id="email"
                type="text"
                value={this.state.ManuData.Memail}
              />
            </div>
          </label>

          <label className="ins-home-label " htmlFor="address">
            <p>廠商地址</p>
            <div className="ins-home-inp">
              <input
                id="address"
                type="text"
                value={this.state.ManuData.Maddress}
              />
            </div>
          </label>

          <label className="ins-home-label " htmlFor="name">
            <p>負責人</p>
            <div className="ins-home-inp">
              <input id="name" type="text" value={this.state.ManuData.Muser} />
            </div>
          </label>

          <label className="ins-home-label " htmlFor="telephone">
            <p>廠商電話</p>
            <div className="ins-home-inp">
              <input
                id="telephone"
                type="text"
                value={this.state.ManuData.Mtelephone}
              />
            </div>
          </label>

          <label className="ins-home-label" htmlFor="phone">
            <p>手機號碼</p>
            <div className="ins-home-inp">
              <input
                id="phone"
                type="text"
                value={this.state.ManuData.Mphone}
              />
            </div>
          </label>

          <input
            type="button"
            className="ins-home-form-btn"
            value="修改資料"
            onClick={this.changeData}
          />
        </form>
      </div>
    )
  }
}

export default InstrumentHome

import React, { Component } from 'react'
import AOS from 'aos'
// const getUserInfo = () => {

//   return JSON.parse(this.state.news)
// }
class ForumCard extends Component {
  constructor(props) {
    super(props)
    let t = this
    fetch('http://localhost:3030/forum', { method: 'GET' }).then(function (
      res
    ) {
      // console.log(res);
      res.json().then(function (data) {
        console.log(data)
        t.setState({
          news: data,
        })
      })
    })
  }

  state = {
    boxShow: false,
    boxShowBtn: false,
    userId: '',
    username: '',
    userImg: '',
    ForumAboutTitle: '', //樂器類型
    ForumTitleId: '', //主題
    ForumMemo: '', //內容
    news: [
      {
        ForumId: '',
        TitleMusic: '',
        TitleId: '',
        Memo: '',
        NewsDate: '',
      },
    ],
  }

  componentDidMount(e) {
    const handleForumAboutTitle = this.state
    console.log(handleForumAboutTitle)

    const getUserInfo = () => {
      return JSON.parse(localStorage.getItem('user'))
    }
    if (getUserInfo()) {
      let user = getUserInfo()
      if (user[0].userID) {
        this.setState({ userId: user[0].userId })
        this.setState({ username: user[0].username })
      } else {
        this.setState({ userId: '' })
      }
    } else {
      this.setState({ userId: '' })
    }
  }
  componentDidUpdate(e) {
    // const handleForumAboutTitle = this.state
    // console.log(handleForumAboutTitle)
    AOS.init({
      duration: 1000, // 持續時間
      easing: 'ease-out-back',
    })
  }

  // function 鉤子
  // const [boxshow,setboxshow] = useState
  handleBtn = () => {
    const { boxShowBtn } = this.state
    const toggle = !boxShowBtn
    this.setState({ boxShowBtn: toggle })
    // console.log(boxShow);
  }
  handleClick = () => {
    const { boxShow } = this.state
    const toggle = !boxShow
    this.setState({ boxShow: toggle })
    // console.log(boxShow);
  }
  handleUserNameId = (event) => {
    const UserName = event.target.name
    console.log(UserName)
    this.setState({ UserName })
  }

  handleForumAboutTitle = (event) => {
    const state = this.state

    console.log(state)

    //  console.log(ForumAboutTitle)
    this.setState({ news: state.news.ForumId })
    console.log(state)
  }

  handleSubmit = (event) => {
    //收集數據
    // const comment = this.state
    //更新狀態
    // this.props.addComment(comment)
    //清除輸入數據
    // this.state({
    // userId : ''
    // })
    //alert

    //sql語法
    // SELECT ForumAbout.userID,user.userName,ForumAbout.TitleMusic,ForumAbout.TitleId,ForumAbout.Memo FROM ForumAbout left JOIN user ON ForumAbout.userID = user.userID
    let t = this
    fetch('http://localhost:3030/forum', { method: 'GET' }).then(function (
      res
    ) {
      // console.log(res);
      res.json().then(function (data) {
        console.log(data)
        t.setState({
          news: data,
        })
      })
    })

    alert('新增成功')
    this.setState({ boxShow: false })
  }

  render() {
    const { boxShow, userId, boxShowBtn } = this.state
    //看回答的新增欄位
    const boxBtn = boxShowBtn ? (
      <div className="ForumCardDiv">
        <p className="ForumCardP2">
          鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你
        </p>
        <div className="ForumCardTeacherImg"></div>
      </div>
    ) : (
      ''
    )

    //我要發問的新增欄位
    const box = boxShow ? (
      <div className="ForumBtn01">
        <div>
          <div>
            發問會員：
            <input
              type="text"
              name="name"
              value={this.handleUserNameId}
              disabled
              onChange={this.handleUserNameId}
            />
            <button style={{ float: 'right' }} onClick={this.handleClick}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div>
            問題類別：
            <input type="text" placeholder="您的問題是" name="Action" />
          </div>
          <textarea name="comment" className="ForumBtnAction" />
          <input
            type="submit"
            value="送出"
            className="ForumButton"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    ) : (
      ''
    )

    return (
      <div className="ForumAll">
        <div className="BackgroundForum"></div>
        <div className="ForumContainer">
          {box}

          <div className="ForumTitle">
            <button
              className="ForumButton"
              data-aos="fade-down"
              onClick={this.handleClick}
            >
              我要發問
            </button>
          </div>

          {/* card1 */}
          <div className="ForumCardFlex">
            {this.state.news.map((item, i) => {
              return (
                <div key={i} className="ForumCard">
                  <div className="ForumCardTitle">
                    <div className="ForumCardImg"></div>
                    <div>
                      <h3 className="ForumCardH3">發問會員：{item.userName}</h3>
                      <h3 className="ForumCardH3">
                        問題類別：{item.TitleMusic}
                      </h3>
                    </div>
                    <button className="ComprehensiveButton">綜合</button>
                  </div>
                  <div className="ForumCardDiv">
                    <p className="ForumCardP">{item.Memo}</p>
                    <button className="ForumBtnAns" onClick={this.handleBtn}>
                      看回答
                    </button>
                  </div>
                  {/* 看回答的button顯示 */}
                  {boxBtn}
                </div>
              )
            })}
          </div>

          {/* card2 */}
          {/* <action className="ForumAction">
               <div className="ForumCardTitle">
                <div className="ForumCardImg"></div>
                <div>
                  <h3 className="ForumCardH3">發問會員：王采潔</h3>
                  <h3 className="ForumCardH3">問題類別：小提琴</h3>
                </div>

                <button className="ComprehensiveButton">綜合</button>
              </div>
              <div className="ForumCardDiv">
                <p className="ForumCardP">
                  你好！我現在大一，想學琴，但什麼樂理的都是零基礎，想買一本關於樂理的書，謝謝！！
                  你好！我現在大一，想學琴，但什麼樂理的都是零基礎，想買一本關於樂理的書，謝謝！！
                </p>
                <button className="ForumBtnAns">看回答</button>
              </div>
            </action>
          </div>
          <div className="ForumCard"> */}
          {/* card3 */}
          {/* <action className="ForumAction">
              <div className="ForumCardTitle">
                <div className="ForumCardImg"></div>
                <div>
                  <h3 className="ForumCardH3">發問會員：王采潔</h3>
                  <h3 className="ForumCardH3">問題類別：小提琴</h3>
                </div>
                <button className="ComprehensiveButton">綜合</button>
              </div>
              <div className="ForumCardDiv">
                <p className="ForumCardP">
                  你好！我現在大一，想學琴，但什麼樂理的都是零基礎，想買一本關於樂理的書，謝謝！！
                  你好！我現在大一，想學琴，但什麼樂理的都是零基礎，想買一本關於樂理的書，謝謝！！
                </p>
                <button className="ForumBtnAns">看回答</button>
              </div>
            </action> */}
          {/* card4 */}
          {/* <action className="ForumAction">
              <div className="ForumCardTitle">
                <div className="ForumCardImg"></div>
                <div>
                  <h3 className="ForumCardH3">發問會員：王采潔</h3>
                  <h3 className="ForumCardH3">問題類別：小提琴</h3>
                </div>
                <button className="ComprehensiveButton">綜合</button>
              </div>
              <div className="ForumCardDiv">
                <p className="ForumCardP">
                  你好！我現在大一，想學琴，但什麼樂理的都是零基礎，想買一本關於樂理的書，謝謝！！
                  你好！我現在大一，想學琴，但什麼樂理的都是零基礎，想買一本關於樂理的書，謝謝！！
                </p>
                <button className="ForumBtnAns">看回答</button>
              </div>
            </action> */}

          <div className="ForumChecked">
            <button type="checked" style={{ width: 30, height: 30 }}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button type="checked" style={{ width: 30, height: 30 }}>
              1
            </button>
            <button type="checked" style={{ width: 30, height: 30 }}>
              2
            </button>
            <button type="checked" style={{ width: 30, height: 30 }}>
              3
            </button>
            <button type="checked" style={{ width: 30, height: 30 }}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}
// ReactDOM.render(<ForumCard /> ,document.getElementById('root'))
export default ForumCard

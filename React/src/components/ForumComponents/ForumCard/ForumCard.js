import React, { Component } from 'react'
import AOS from 'aos'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
const MySwal = withReactContent(Swal)
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
    boxShowBtn: '',
    boxShowBtn2: false,
    // userID: '',
    Memo: '',

    news: [
      {
        ForumId: '',
        TitleMusic: '',
        TitleId: '',
        Memo: '',
        NewsDate: '',
        ForumTitle: '',
        ForumAction: '',
        // ForumActionAns:'',
      },
    ],
  }

  componentDidMount(e) {
    const handleForumAboutTitle = this.state
    // console.log(handleForumAboutTitle)

    const getUserInfo = () => {
      return JSON.parse(localStorage.getItem('user'))
    }
    if (getUserInfo()) {
      let user = getUserInfo()
      // console.log(user[0].userID)

      if (user[0].userID) {
        // localStorage.getItem('user')
        // const NewImg = this.state.NewImg
        // this.setState({ NewImg: user[0].NewImg })
        this.setState({ userID: user[0].userID })
        this.setState({ username: user[0].userName })
        
        // console.log(this.state.username)
      } else {
        this.setState({ userID: '' })
      }
    } else {
      this.setState({ userID: '' })
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
  handleBtn = (i) => {
    const { boxShowBtn2 } = this.state
    const toggle = !boxShowBtn2
    this.setState({ boxShowBtn2: toggle })
    console.log(toggle)
    this.setState({ boxShowBtn: i })
    if (boxShowBtn2) {
      const box001 = document.getElementById(`abc${i}`)
    }
    //   console.log(this.state.news[i].Memo)
    // console.log(document.getElementById(`abc${i}`))
  }

  handleClick = () => {
    const { boxShow } = this.state
    const toggle = !boxShow
    this.setState({ boxShow: toggle })
    // console.log(boxShow);

    //input裡面的資料抓取功能
    localStorage.getItem('user')
    const UserName = this.state.username
    // UserName.value = this.state.news.userID
    this.setState({ userName: UserName })
    // console.log(this.state)
   
  }

  handleForumAboutTitle = (event) => {
    const state = this.state
    // console.log(state)
    //  console.log(ForumAboutTitle)
    this.setState({ news: state.news.ForumId })
    // console.log(state)
  }

  //抓取input的value值
  handleForumTitle = (event) => {
    this.setState({ ForumTitle: event.target.value })
    // console.log(event.target.value)
  }
  handleForumAction = (event) => {
    this.setState({ ForumAction: event.target.value })
    // console.log(event.target.value)
  }
  // handleForumActionAns = (event)=>{
  //   this.setState({ForumActionAns:event.target.value})
  //   console.log(event.target.value)
  // }
  //送出之後把它存進資料庫
  handleSubmit = (event) => {
    let {
      ForumTitle,
      ForumAction,
      // ForumActionAns,
      // userName
      userID,
    } = this.state
    // console.log(this.state.ForumTitle)
    // console.log(this.state.userID)
    if(this.state.ForumTitle===undefined||this.state.ForumAction===undefined){
      MySwal.fire('不得為空值', '', 'error')
      
      setTimeout(()=>{
        window.location = "/forum"
      },1000)
      // console.log(this.state)
      // this.location.reload()
      this.setState({ boxShow: false })
    }
    else{
      fetch('http://localhost:3030/forum/123', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({
          ForumTitle,
          ForumAction,
          userID,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ news123: json })
          console.log(this.state)
          // localStorage.setItem('user', JSON.stringify(json.data))
          // console.log(json.data)
          
        })
        .catch((error) => {
          console.error('Error:', error)
        })
  
      this.setState({ boxShow: false })
      this.setState({ ForumTitle: this.state.ForumTitle })
      this.setState({ ForumAction: this.state.ForumAction })
      this.setState({ userID: this.state.userID })
      // this.setState({ ForumActionAns: this.state.ForumActionAns })
      
     
    
    
      console.log(this.state.ForumTitle)
      MySwal.fire('新增成功', '', 'success')
      setTimeout(()=>{
        window.location = "/forum"
      },1000)
      // console.log(this.state)
      // this.location.reload()
      this.setState({ boxShow: false })
    }
  }
  handleSubmitBack = (event) => {
    MySwal.fire('已取消', '', 'error')
    setTimeout(()=>{
      window.location = "/forum"
    },1000)
    this.setState({ boxShow: false })
  }
  render() {
    const { boxShow, boxShowBtn, boxShowBtn2 } = this.state
    //看回答的新增欄位
    // const ForumMemo = Memo ? (<>
    // <div>
    //   {ForumMemo}
    //   </div>
    //   </>
    // ):('')

    //我要發問的新增欄位
    const box = boxShow ? (
      <div className="ForumBtn01">
        <div style={{ textAlign: 'center' }}>
          <p>發問會員</p>

          <input
            type="text"
            name="name"
            value={this.state.userName}
            disabled
            onChange={this.handleUserNameId}
          />
          <button onClick={this.handleSubmitBack}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>問題類別</p>
          <select onChange={this.handleForumTitle}>
  <option value =""></option>
  <option value ="小提琴">小提琴</option>
  <option value="中提琴">中提琴</option>
  <option value="薩克斯風">薩克斯風</option>
  <option value="鋼琴">鋼琴</option>
  <option value="電子琴">電子琴</option>
  <option value="爵士鼓">爵士鼓</option>
  <option value="吉他">吉他</option>
  <option value="烏克莉莉">烏克莉莉</option>
  <option value="長笛">長笛</option>
  <option value="其他">其他</option>
</select>
          {/* <input
            type="text"
            placeholder="樂器類別是？"
            name="ForumTitle"
            onChange={this.handleForumTitle}
          /> */}
        </div>
        <div style={{ textAlign: 'center' }}>
          <p>您的問題</p>
          <textarea
            type="text"
            placeholder="您的問題是？"
            name="ForumAction"
            onChange={this.handleForumAction}
          />
        </div>
        <div className="ButtonSend" style={{ display: 'flex' }}>
          <input
            type="button"
            value="取消"
            className="ForumBtnBack"
            onClick={this.handleSubmitBack}
          />
          <input
            type="button"
            value="送出"
            className="ForumBtnSend"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    ) : (
      ''
    )
    // const boxBtn = boxShowBtn ==? (
    //   <div className="ForumCardDiv">
    //   {/* 用function的方法做完每個按鈕都顯示不同的Memo值 */}
    //             <>
    //             <div>
    //             <p className="ForumCardP2">
    //             {this.state.news.Memo}
    //               </p>
    //     {/* <div className="ForumCardTeacherImg"></div> */}
    //     </div>
    //           </>
    //   </div>
    // ) : (
    //   ''
    // )

    const box001 = boxShowBtn2 ? 'block' : 'none'
    return (
      <div className="ForumAll">
        <div className="BackgroundForum"></div>
        <div className="ForumContainer">
          {box}

          <div className="ForumTitle">
            <button
              className="ForumButton"
              data-aos="fade-left"
              onClick={this.handleClick}
            >
              我要發問
            </button>
          </div>

          {/* card1 */}
          <div className="ForumCardFlex">
            {this.state.news.map((item, i) => {
              {/* console.log(item) */}
              return (
                <div key={i} className="ForumCard" data-aos="fade-up">
                  <div className="ForumCardTitle">
                    <img
                      className="ForumCardImg"
                      // src={`${item.userImg}`}
                      // src={`http://localhost:3030/images/news/${item.userImg}`}
                      // src={this.state.news.userImg}
                      // src={this.state.NewImg}
                      src={`http://localhost:3030/images/user/${item.userImg}`}
                    />
                    <div>
                      <h3 className="ForumCardH3">發問會員：{item.userName}</h3>
                      <h3 className="ForumCardH3">
                        問題類別：{item.TitleMusic}
                      </h3>
                    </div>
                    {/* <button className="ComprehensiveButton">綜合</button> */}
                  </div>
                  <div className="ForumCardDiv">
                    <p className="ForumCardP">{item.TitleId}</p>
                    <button
                      className="ForumBtnAns"
                      onClick={() => {
                        this.handleBtn(i)
                      }}
                      onChange={this.onChange1}
                    >
                      看回答
                    </button>
                  </div>
                  {/* 看回答的button顯示 */}
                  <div className="ForumCardDiv" style={{ display: box001 }}>
                    {/* 用function的方法做完每個按鈕都顯示不同的Memo值 */}

                    <div>
                      {/* <p className="ForumCardP2"> */}

                      <p
                        id={`abc${i}`}
                        className={
                          this.state.boxShowBtn === i
                            ? 'ForumCardP2'
                            : 'ForumCardP002'
                        }
                      >
                        {this.state.news[i].Memo}
                      </p>
                      {/* <div className="ForumCardTeacherImg"></div> */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
// ReactDOM.render(<ForumCard /> ,document.getElementById('root'))
export default ForumCard

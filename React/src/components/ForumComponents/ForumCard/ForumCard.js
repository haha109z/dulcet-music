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
    // userID: '',
    Memo:'',
    news: [
      {
        ForumId: '',
        TitleMusic: '',
        TitleId: '',
        Memo: '',
        NewsDate: '',
        ForumTitle:'',
        ForumAction:'',
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
  handleBtn = () => {
    const { boxShowBtn } = this.state
    const toggle = !boxShowBtn
    this.setState({ boxShowBtn: toggle })
    // console.log(boxShow);
    // for(let j =0 ;j<this.state.news.length;j++){
    //   const i = this.state.news[j].Memo
    // console.log(i)
    // console.log(j)
    // this.setState({Memo:i})
    // }
    // const i = this.state.news.length
    // console.log(i)
    // const Memo = this.state.news[i].Memo
    // console.log(Memo)
    
    // this.setState({props:this.state.news.Memo})
    // console.log(this.props)
  }
  handleClick = () => {
    const { boxShow } = this.state
    const toggle = !boxShow
    this.setState({ boxShow: toggle })
    // console.log(boxShow);

    //input裡面的資料抓取功能
    localStorage.getItem("user") 
    const UserName = this.state.username
    // UserName.value = this.state.news.userID
    this.setState({ userName:UserName })
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
handleForumTitle = (event)=>{
  this.setState({ForumTitle:event.target.value})
  // console.log(event.target.value)
}
handleForumAction = (event)=>{
  this.setState({ForumAction:event.target.value})
  // console.log(event.target.value)
}
// handleForumActionAns = (event)=>{
//   this.setState({ForumActionAns:event.target.value})
//   console.log(event.target.value)
// }
//送出之後把它存進資料庫
handleSubmit = (event) => {
  
  //sql語法
  // SELECT ForumAbout.userID,user.userName,ForumAbout.TitleMusic,ForumAbout.TitleId,ForumAbout.Memo FROM ForumAbout left JOIN user ON ForumAbout.userID = user.userID

  //sql 新增語法
  // INSERT INTO `ForumAbout`(`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`) VALUES ('4','大提琴','Title','TitleMemo','4')
  // let t = this
  // fetch('http://localhost:3030/forum/1', { method: 'put' }).then(function (
  //   res
  // ) {
  //   // console.log(res);
  //   res.json().then(function (data) {
  //     console.log(data)
  //     t.setState({
  //       news: data,
  //     })
  //   })
  // })
  // INSERT INTO `ForumAbout`(`ForumId`, `TitleMusic`, `TitleId`, `Memo`, `userID`) VALUES ('[this.state.ForumId]','?','?','?','?')

let {
  ForumTitle,
  ForumAction,
  // ForumActionAns,
  // userName
  userID,
}=this.state
// console.log(this.state.ForumTitle)
// console.log(this.state.userID)


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
                    
                    this.setState({news123:json})
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
  
  alert('新增成功')
  console.log(this.state)
  // this.location.reload()
}
  render() {
    const { boxShow, boxShowBtn } = this.state
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
        <div>
          <div>
            發問會員：
            <input
              type="text"
              name="name"
              value={this.state.userName}
                            disabled
              onChange={this.handleUserNameId}
            />
            <button style={{ float: 'right' }} onClick={this.handleClick}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div>
            問題類別：
            <input type="text" placeholder="樂器類別是？" name="ForumTitle" 
              value={this.state.ForumTitle}          
              onChange={this.handleForumTitle} />
          </div>
          <div>
            您的問題：
            <input type="text" placeholder="您的問題是？"
            name="ForumAction"
            value={this.state.ForumAction}          
            onChange={this.handleForumAction}
               />
          </div>
          <input
            type="button"
            value="送出"
            className="ForumButton"
            // onClick={this.handleSubmit}
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    ) : (
      ''
    )
    const boxBtn = boxShowBtn ? (
      <div className="ForumCardDiv">
      {/* 用function的方法做完每個按鈕都顯示不同的Memo值 */}
        
        
        {this.state.news.map((item, i) => {
          {/* console.log(this.state.Memo) */}
          {/* console.log(this.state.news[i].Memo) */}
           {/* for(let j =0;j<item.length;j++){
          return j 
           } */}
           {/* const Item = i
           console.log(Item) */}
           {/* const Item = item.Memo
           console.log(Item)
           console.log(i) */}
           {/* console.log(item.Memo) */}
           {/* console.log(item.ForumId.toString())
           console.log(i) */}
           
            return (
                <>
                <div key={item.ForumId.toString()}>
                <p className="ForumCardP2">
                  {item.Memo}
                  </p>
        {/* <div className="ForumCardTeacherImg"></div> */}
        </div>
              </>
                )
           
           
            })}
        
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
                <div key={item.ForumId.toString()}  className="ForumCard">
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
                  <p className="ForumCardP">{item.TitleId}</p>
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

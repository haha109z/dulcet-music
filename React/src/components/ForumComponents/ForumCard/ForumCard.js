import React,{Component} from 'react';
import AOS from 'aos';
// import App from './Forum'
// import ReactDOM from 'react-dom'
// import '../../../../styles/custom.scss'


class ForumCard extends Component {

  constructor(props){
    super(props)
   
  }
  state={
    boxShow:false,
    boxShowBtn:false,
    userId:'',
    userImg:'',
    ForumTitleMusic:'',//樂器類型
    ForumTitleId:'',//主題
    ForumMemo : ''//內容
  }

  
  // function 鉤子
  // const [boxshow,setboxshow] = useState
  handleBtn = ()=>{
    
    const {boxShowBtn} = this.state;
    const toggle = !boxShowBtn;
    this.setState({boxShowBtn:toggle})
    // console.log(boxShow);
    
  }
  handleClick = ()=>{
    
    const {boxShow} = this.state;
    const toggle = !boxShow;
    this.setState({boxShow:toggle})
    // console.log(boxShow);
    
  }
// handleUserNameId=(event)=>{
//   const UserName = event.target.value
//   this.setState({UserName})
// }
  componentDidMount(){

    AOS.init({
        duration : 1000, // 持續時間
        easing: 'ease-out-back',
    })
}
handleSubmit=(event)=>{
  //收集數據
  //const comment = this.state
  //更新狀態
//this.props.addComment(comment)
//清除輸入數據
//this.state({
//userId : ''

//})
  //alert
alert('新增成功')

}

render(){
  const {boxShow ,userId ,boxShowBtn} = this.state;

const boxBtn = boxShowBtn ? (
<div className="ForumCardDiv">
              <p className="ForumCardP2">
                鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你
              </p>
              <div className="ForumCardTeacherImg"></div>
            </div>
):('');
  
  
  
    const box = boxShow ? (
      <div className="ForumBtn01">
      <form action="/Forum" onSubmit={this.handleSubmit}>
      <div>發問會員：<input type="text" name="name" value={userId} disabled onChange={this.handleUserNameId}/></div>
      <div>問題類別：<input type="text" placeholder="您的問題是" name="Action"  /></div>
      <textarea name="comment" form="usrform" className="ForumBtnAction"/>
      <input type="submit" value="送出" className="ForumButton"/>
      </form></div>
    ) : ('');

  return (
   <div className="ForumAll">
    
     <div className="BackgroundForum"></div>
      <div className="ForumContainer">
      {box}
      <div className="ForumTitle">
      
    
     <button className="ForumButton" data-aos="fade-down" onClick={this.handleClick}>我要發問</button>
     
     
     
    
     {/* <div className={`${this.state.Text ? 'true' : 'false'  }`}>
       <input type="text"  />
     </div>
      <button className="ForumButton" data-aos="fade-down" onClick={()=>{
       this.Text ? setText(false) : setText(true) 
      }}>我要發問</button>
 */}





      </div>
        <div className="ForumCard">
          {/* card1 */}
          <action className="ForumAction">
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
              <button className="ForumBtnAns"  onClick={this.handleBtn}>看回答</button>
            </div>
            {boxBtn}
          </action>
          {/* card2 */}
          <action className="ForumAction">
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
            <div className="ForumCardDiv"  style={{display:'none'}}>
              <p className="ForumCardP2">
                鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你
              </p>
              <div className="ForumCardTeacherImg"></div>
            </div>
          </action>
        </div>
        <div className="ForumCard">
          {/* card3 */}
          <action className="ForumAction">
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
            <div className="ForumCardDiv" style={{display:'none'}}>
              <p className="ForumCardP2">
                鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你
              </p>
              <div className="ForumCardTeacherImg"></div>
            </div>
          </action>
          {/* card4 */}
          <action className="ForumAction">
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
            <div className="ForumCardDiv" style={{display:'none'}}>
              <p className="ForumCardP2">
                鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你
              </p>
              <div className="ForumCardTeacherImg"></div>
            </div>
          </action>
        
        </div>
        <div className="ForumChecked">
        <button type="checked" style={{width:30,height:30}} ><i className="fas fa-chevron-left"></i></button> 
        <button type="checked" style={{width:30,height:30}} >1</button> 
        <button type="checked" style={{width:30,height:30}} >2</button> 
        <button type="checked" style={{width:30,height:30}} >3</button> 
        <button type="checked" style={{width:30,height:30}} ><i className="fas fa-chevron-right"></i></button> 
        </div>
      </div>
      </div>
    
    
  )
  
}

}
// ReactDOM.render(<ForumCard /> ,document.getElementById('root'))
export default ForumCard;

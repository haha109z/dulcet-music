import React,{Component} from 'react';
import AOS from 'aos';
// import App from './Forum'
// import ReactDOM from 'react-dom'
// import '../../../../styles/custom.scss'


class ForumCard extends Component {

  state={
    boxShow:false
  }

  // function 鉤子
  // const [boxshow,setboxshow] = useState

  handleClick = ()=>{
    
    const {boxShow} = this.state;
    const toggle = !boxShow;
    this.setState({boxShow:toggle})
    // console.log(boxShow);
    
  }

  componentDidMount(){

    AOS.init({
        duration : 1000, // 持續時間
        easing: 'ease-out-back',
    })
}

render(){
  const {boxShow} = this.state;

    const box = boxShow ? (
      <div><input type="text" /></div>
    ) : ('');

  return (
   <div className="ForumAll">
     
     <div className="BackgroundForum"></div>
      <div className="ForumContainer">
      
      <div className="ForumTitle">
      

     <button className="ForumButton" data-aos="fade-down" onClick={this.handleClick}>我要發問</button>
     
     {box}
     
    
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
              <button className="ForumBtnAns">看回答</button>
            </div>
            <div className="ForumCardDiv" style={{display:'none'}}>
              <p className="ForumCardP2">
                鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你鈴木和霍曼都可以，這兩個是目前用的最多的教材。可以一邊練琴一邊學些基礎知識，但最好有老師帶著你
              </p>
              <div className="ForumCardTeacherImg"></div>
            </div>
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

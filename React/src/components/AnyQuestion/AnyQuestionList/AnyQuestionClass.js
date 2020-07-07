import React ,{Component} from 'react'
// import '../../../../styles/custom.scss'
import AOS from 'aos';


class AnyQuestionAction extends Component {
  constructor(props) {
    super(props)
  }
  
state = {
  InputShow1: false,
  InputShow2: false,
  InputShow3: false,
  InputShow4: false,
  InputShow5: false,
  InputShow6: false,
  InputShow7: false,
}
componentDidMount(){
  AOS.init({
      duration : 1000, // 持續時間
      easing: 'ease-out-back',
  })
  
}
handleInput1 = () => {
  const { InputShow1 } = this.state
  const toggle = !InputShow1
  this.setState({ InputShow1: toggle })
}
handleInput2 = () => {
  const { InputShow2 } = this.state
  const toggle = !InputShow2
  this.setState({ InputShow2: toggle })
  
}
handleInput3 = () => {
  const { InputShow3 } = this.state
  const toggle = !InputShow3
  this.setState({ InputShow3: toggle })
}
handleInput4 = () => {
  const { InputShow4 } = this.state
  const toggle = !InputShow4
  this.setState({ InputShow4: toggle })
}
handleInput5 = () => {
  const { InputShow5 } = this.state
  const toggle = !InputShow5
  this.setState({ InputShow5: toggle })
}
handleInput6 = () => {
  const { InputShow6 } = this.state
  const toggle = !InputShow6
  this.setState({ InputShow6: toggle })
}
handleInput7 = () => {
  const { InputShow7 } = this.state
  const toggle = !InputShow7
  this.setState({ InputShow7: toggle })
}
render(){
  const { InputShow1, InputShow2, InputShow3,InputShow4,InputShow5,InputShow6,InputShow7 } = this.state
  const Input1 = InputShow1 ? ( 
      <>
        <input className="input1-10" type="text " value="如果您必須選課，請先登入我們的會員。裡面有專屬您的選課系統" readOnly/>
      </>
  ) : (
    ''
  )
  const Input2 = InputShow2 ? ( 
    <>
      <input className="input1-10" type="text " value="課程費用都是以老師，以及時數來計算的。所以沒辦法給予答案" readOnly/>
    </>
) : (
  ''
)
const Input3 = InputShow3 ? ( 
  <>
    <input className="input1-10" type="text " value="只要是6.3mm的音源線（如吉他導線）皆可使用。" readOnly/>
  </>
) : (
''
)
const Input4 = InputShow4 ? ( 
  <>
    <input className="input1-10" type="text " value="如PAT功能已開啟，建議您先確認當前的樂曲有包含和弦資訊。" readOnly/>
  </>
) : (
''
)
const Input5 = InputShow5 ? ( 
  <>
    <input className="input1-10" type="text" value="要使用AUX IN功能的話須購買兩端皆為3.5mm接頭的公對公音源線。" readOnly/>
  </>
) : (
''
)
const Input6 = InputShow6 ? ( 
  <>
    <input className="input1-10" type="text " value="PSR-S975 / 970 / 950 / 775 / 770 -＞ 可錄製與播放WAVE，可播放MP3。
PSR-S750 -＞ 可錄製與播放WAVE。" readOnly/>
  </>
) : (
''
)
const Input7 = InputShow7 ? ( 
  <>
    <input className="input1-10" type="text " value="轉動【調音板手】向右旋，會提高琴弦的張力，也將提高音調。 在三角鋼琴，將【調音板手】的把手向右，稍離你的位置。 " readOnly/>
  </>
) : (
''
)
  return (
<div className="AnyQuestionActionAll">
<div className="AnyQuestionActionContainer">
    <div className="Text123"></div>
    <div className="AnyQuestionActionFlex">
    <div className="AnyQuestionActionCard AnyQuestionActionCardLeft">
    {/* <a href="/AnyQuestion" className="AnyQuestionA AnyQuestionRWD"> */}
    <i className="fas fa-book AnyQuestionActionCardIcon"></i>
            <h2 className="AnyQuestionActionCardIconH2">課程問題</h2>
            {/* </a> */}
          </div>
          <div className="AnyQuestionActionTable AnyQuestionActionRwd">
            <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                <input type="submit" value="選課問題" onClick={this.handleInput1}/>               
                {Input1}
                </div>            
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                
                <input type="submit" value="課程費用計算" onClick={this.handleInput2}/>
                {Input2}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="如果要用音箱擴音，要如何連接音箱？" onClick={this.handleInput3}/>
                {Input3}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="如何使用S系列的PAT演奏助理功能？" onClick={this.handleInput4}/>
                {Input4}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="電子琴播放手機音樂，需要購買何種線材" onClick={this.handleInput5}/>
                {Input5}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="有哪些手提電子琴可以播放或錄製MP3?" onClick={this.handleInput6}/>
                {Input6}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
               
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="如何為自己的鋼琴調音" onClick={this.handleInput7}/>
                {Input7}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
          </div>
          </div>
  </div>
  </div>)
}
}
export default AnyQuestionAction

import React ,{Component} from 'react'
// import '../../../../styles/custom.scss'
import AOS from 'aos';


class AnyQuestionVideo extends Component {
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
        <input className="input1-10" type="text " value="有時無法順利播放，是因網路不穩定造成看課中斷，請多測幾次，確認每次的網速都足夠。" readOnly/>
      </>
  ) : (
    ''
  )
  const Input2 = InputShow2 ? ( 
    <>
      <input className="input1-10" type="text " value="有時這些檔案會造成容量不足、甚至影響串流順暢，此時只要《刪除或重設瀏覽器的快取設定》即可。" readOnly/>
    </>
) : (
  ''
)
const Input3 = InputShow3 ? ( 
  <>
    <input className="input1-10" type="text " value="調整音量: 到[設定] > [聲音與震動] > [媒體音量]自 將音量設置為 max。" readOnly/>
  </>
) : (
''
)
const Input4 = InputShow4 ? ( 
  <>
    <input className="input1-10" type="text " value="重新開機，檢查網路是否處於良好狀態。" readOnly/>
  </>
) : (
''
)
const Input5 = InputShow5 ? ( 
  <>
    <input className="input1-10" type="text" value="檢查您的電視是否可以支援[無線顯示] 和 [無線顯示]已被啟動" readOnly/>
  </>
) : (
''
)
const Input6 = InputShow6 ? ( 
  <>
    <input className="input1-10" type="text " value=" 到[設定] >> [應用管理] >> [全部]找到預設的影片播放器, 按一下[預設打開]自[清除預設值]。" readOnly/>
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
    <a href="/AnyQuestion" className="AnyQuestionA AnyQuestionRWD">
    <i class="fas fa-video AnyQuestionCardIconVideo AnyQuestionCardIconVideoRWD"></i>
            <h2 className="AnyQuestionActionCardIconH2">影片問題</h2>
            </a>
          </div>
          <div className="AnyQuestionActionTable AnyQuestionActionRwd">
            <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                <input type="submit" value="線上影片延遲問題" onClick={this.handleInput1}/>               
                {Input1}
                </div>            
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                
                <input type="submit" value="刪除快取檔案" onClick={this.handleInput2}/>
                {Input2}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="如果您的手機在播放影片時是無聲的" onClick={this.handleInput3}/>
                {Input3}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="如果您不能使用OPPO內建的影片播放器" onClick={this.handleInput4}/>
                {Input4}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="如果您的手機無法使用無線播放影片" onClick={this.handleInput5}/>
                {Input5}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="不能使用其他播放器播放視頻" onClick={this.handleInput6}/>
                {Input6}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
                </div>
                
          </div>
          </div>
  </div>
  </div>)
}
}
export default AnyQuestionVideo

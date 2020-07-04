import React ,{Component} from 'react'
// import '../../../../styles/custom.scss'
import AOS from 'aos';


class AnyQuestionCompany extends Component {
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
        <input className="input1-10" type="text " value="如果使用IE瀏覽器：點選【工具】->【網際網路選項】->【安全性】->【預設層級】設定「中安全性」。" readOnly/>
      </>
  ) : (
    ''
  )
  const Input2 = InputShow2 ? ( 
    <>
      <input className="input1-10" type="text " value="可至右上角點選會員資料的頭像修改，選擇您欲修改的項目。" readOnly/>
    </>
) : (
  ''
)
const Input3 = InputShow3 ? ( 
  <>
    <input className="input1-10" type="text " value="請您選擇修改密碼以驗證是否為本廠商" readOnly/>
  </>
) : (
''
)
const Input4 = InputShow4 ? ( 
  <>
    <input className="input1-10" type="text " value="請前往廠商訂單可以看到過去廠商訂單的選項" readOnly/>
  </>
) : (
''
)
const Input5 = InputShow5 ? ( 
  <>
    <input className="input1-10" type="text" value="廠商的帳號以及信箱認證必須由管理者來開啟並且使用" readOnly/>
  </>
) : (
''
)
const Input6 = InputShow6 ? ( 
  <>
    <input className="input1-10" type="text " value="廠商沒辦法購買其他家產品唷！" readOnly/>
  </>
) : (
''
)
const Input7 = InputShow7 ? ( 
  <>

    <input className="input1-10" type="text " value="如果帳號遺失請打客服專線：(02)2222-2222" readOnly/>
   
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
    <i className="far fa-building AnyQuestionActionCardIcon"></i>
            <h2 className="AnyQuestionActionCardIconH2">廠商問題</h2>
            </a>
          </div>
          <div className="AnyQuestionActionTable AnyQuestionActionRwd">
            <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                <input type="submit" value="逾時無法登入的問題？" onClick={this.handleInput1}/>               
                {Input1}
                </div>            
                <i class="AnyQuestionActionIcon fas fa-chevron-down AnyQuestionActionIconRWD"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                
                <input type="submit" value="我要怎麼修改廠商的資料" onClick={this.handleInput2}/>
                {Input2}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down AnyQuestionActionIconRWD"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="我忘記廠商的密碼了" onClick={this.handleInput3}/>
                {Input3}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down AnyQuestionActionIconRWD"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="如何看到我過去的訂單？" onClick={this.handleInput4}/>
                {Input4}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down AnyQuestionActionIconRWD"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="廠商的信箱認證" onClick={this.handleInput5}/>
                {Input5}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down AnyQuestionActionIconRWD"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="廠商可以購買其他家產品嗎？" onClick={this.handleInput6}/>
                {Input6}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down AnyQuestionActionIconRWD"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="廠商的帳號遺失"  onClick={this.handleInput7}/>
                {Input7}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down AnyQuestionActionIconRWD"></i>
                </div>
                
          </div>
          </div>
  </div>
  </div>)
}
}
export default AnyQuestionCompany

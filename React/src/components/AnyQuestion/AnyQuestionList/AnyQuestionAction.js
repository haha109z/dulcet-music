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
        <input className="input1-10" type="text " value="帳號密碼的顯示" readOnly/>
      </>
  ) : (
    ''
  )
  const Input2 = InputShow2 ? ( 
    <>
      <input className="input1-10" type="text " value="帳號密碼的顯示" readOnly/>
    </>
) : (
  ''
)
const Input3 = InputShow3 ? ( 
  <>
    <input className="input1-10" type="text " value="帳號密碼的顯示" readOnly/>
  </>
) : (
''
)
const Input4 = InputShow4 ? ( 
  <>
    <input className="input1-10" type="text " value="帳號密碼的顯示" readOnly/>
  </>
) : (
''
)
const Input5 = InputShow5 ? ( 
  <>
    <input className="input1-10" type="text " value="帳號密碼的顯示" readOnly/>
  </>
) : (
''
)
const Input6 = InputShow6 ? ( 
  <>
    <input className="input1-10" type="text " value="帳號密碼的顯示" readOnly/>
  </>
) : (
''
)
const Input7 = InputShow7 ? ( 
  <>
  <div>
    <input className="input1-10" type="text " value="帳號密碼的顯示" readOnly/>
    </div>
  </>
) : (
''
)
  return <>
<div className="AnyQuestionActionAll">
<div className="AnyQuestionActionContainer">
    <div className="Text123"></div>
    <div className="AnyQuestionActionFlex">
    <div className="AnyQuestionActionCard AnyQuestionActionCardLeft">
            <i className="far fa-user AnyQuestionActionCardIcon"></i>
            <h2 className="AnyQuestionActionCardIconH2">會員問題</h2>
          </div>
          <div className="AnyQuestionActionTable AnyQuestionActionRwd">
            <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                <input type="submit" value="忘記帳號" onClick={this.handleInput1}/>               
                {Input1}
                </div>            
                <i className="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>
                
                <input type="submit" value="忘記密碼" onClick={this.handleInput2}/>
                {Input2}
                </div>
                <i className="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="帳號綁定" onClick={this.handleInput3}/>
                {Input3}
                </div>
                <i className="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="帳號問題" onClick={this.handleInput4}/>
                {Input4}
                </div>
                <i className="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="信箱認證" onClick={this.handleInput5}/>
                {Input5}
                </div>
                <i className="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="優惠卷使用方法" onClick={this.handleInput6}/>
                {Input6}
                </div>
                <i className="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
            <div style={{width:'1000px'}}>

                <input type="submit" value="帳號遺失密碼怎麼辦"  onClick={this.handleInput7}/>
                {Input7}
                </div>
                <i className="AnyQuestionActionIcon fas fa-check"></i>
                </div>
          </div>
          </div>
  </div>
  </div></>
}
}
export default AnyQuestionAction

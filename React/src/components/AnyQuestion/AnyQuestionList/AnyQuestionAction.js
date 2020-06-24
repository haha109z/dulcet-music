import React ,{Component} from 'react'
// import '../../../../styles/custom.scss'
import AOS from 'aos';


class AnyQuestionAction extends Component {

  componentDidMount(){

    AOS.init({
        duration : 1000, // 持續時間
        easing: 'ease-out-back',
    })

}
render(){
  return <>
<div className="AnyQuestionActionAll">
<div className="AnyQuestionActionContainer">
    <div className="Text123"></div>
    <div className="AnyQuestionActionFlex">
    <div className="AnyQuestionActionCard AnyQuestionActionCardLeft">
            <i className="far fa-user AnyQuestionActionCardIcon"></i>
            <h2 className="AnyQuestionActionCardIconH2">會員問題</h2>
          </div>
          <div class="AnyQuestionActionTable AnyQuestionActionRwd">
            <div style={{display:'flex'}}>
                <input type="submit" value="忘記帳號"/>
                <i class="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
                <input type="submit" value="忘記密碼"/>
                <i class="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
                <input type="submit" value="帳號綁定"/>
                <i class="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
                <input type="submit" value="帳號問題"/>
                <i class="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
                <input type="submit" value="信箱認證"/>
                <i class="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
                <input type="submit" value="優惠卷使用方法"/>
                <i class="AnyQuestionActionIcon fas fa-check"></i>
                </div>
                <div style={{display:'flex'}}>
                <input type="submit" value="帳號遺失密碼怎麼辦"/>
                <i class="AnyQuestionActionIcon fas fa-check"></i>
                </div>
          </div>
          </div>
  </div>
  </div></>
}
}
export default AnyQuestionAction

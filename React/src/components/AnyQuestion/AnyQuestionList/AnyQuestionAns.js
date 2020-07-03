import React, { Component } from 'react'
// import '../../../../styles/custom.scss'
import AOS from 'aos'

class AnyQuestionAns extends Component {
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
  componentDidMount() {
    AOS.init({
      duration: 1000, // 持續時間
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
  render() {
    const {
      InputShow1,
      InputShow2,
      InputShow3,
      InputShow4,
      InputShow5,
      InputShow6,
      InputShow7,
    } = this.state
    const Input1 = InputShow1 ? (
      <>
        <input
          className="input1-10"
          type="text "
          value="1. ATM轉帳付款
2. 信用卡一次付清
3. LINE Pay一次付清(可用LINE Points折抵)"
          readOnly
        />
      </>
    ) : (
      ''
    )
    const Input2 = InputShow2 ? (
      <>
        <input
          className="input1-10"
          type="text "
          value="選擇LINE Pay付款，按下訂單確認後，系統畫面將直接導轉至LINE Pay付款介面，依照指示操作即可"
          readOnly
        />
      </>
    ) : (
      ''
    )
    const Input3 = InputShow3 ? (
      <>
        <input
          className="input1-10"
          type="text "
          value="會員7天鑑賞期服務，若要辦理退換貨，請您收到商品後7天內，備妥您的訂單編號或訂購人相關資料，來電或來信客服中心，將有專人為您服務。"
          readOnly
        />
      </>
    ) : (
      ''
    )
    const Input4 = InputShow4 ? (
      <>
        <input
          className="input1-10"
          type="text "
          value="您必需先加入為親子天下Shopping會員,加入完成後即可開始選擇您要購買的品項。"
          readOnly
        />
      </>
    ) : (
      ''
    )
    const Input5 = InputShow5 ? (
      <>
        <input
          className="input1-10"
          type="text"
          value="若您消費付款金額達800元以上的訂單將有國內免郵資的優惠，未滿800元的訂單，將酌收50元的物流處理費。"
          readOnly
        />
      </>
    ) : (
      ''
    )
    const Input6 = InputShow6 ? (
      <>
        <input
          className="input1-10"
          type="text "
          value="若遇調貨或預購產品等無法一次出貨所導致的分批，出貨不會加收物流處理費。"
          readOnly
        />
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
            <i className="fas fa-search AnyQuestionActionCardIcon "></i>
              <h2 className="AnyQuestionActionCardIconH2">其他問題</h2>
              </a>
            </div>
            <div className="AnyQuestionActionTable AnyQuestionActionRwd">
              <div style={{ display: 'flex' }}>
                <div style={{ width: '1000px' }}>
                  <input
                    type="submit"
                    value="付款方式"
                    onClick={this.handleInput1}
                  />
                  {Input1}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '1000px' }}>
                  <input
                    type="submit"
                    value="下單流程"
                    onClick={this.handleInput2}
                  />
                  {Input2}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '1000px' }}>
                  <input
                    type="submit"
                    value="退換貨方式"
                    onClick={this.handleInput3}
                  />
                  {Input3}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '1000px' }}>
                  <input
                    type="submit"
                    value="我要如何下訂單？"
                    onClick={this.handleInput4}
                  />
                  {Input4}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '1000px' }}>
                  <input
                    type="submit"
                    value="郵資如何計算"
                    onClick={this.handleInput5}
                  />
                  {Input5}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '1000px' }}>
                  <input
                    type="submit"
                    value="分批出貨是否會加收處理費用？"
                    onClick={this.handleInput6}
                  />
                  {Input6}
                </div>
                <i class="AnyQuestionActionIcon fas fa-chevron-down"></i>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AnyQuestionAns

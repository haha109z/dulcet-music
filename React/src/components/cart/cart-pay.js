import React from 'react';
import { Link } from 'react-router-dom';

function CartPay () {

  const getCardnum1 = (e) =>{
    let content1 = document.getElementById("card1")
    let input1 = document.getElementById("cardnumber1")
    if(input1.value !== ''){
        content1.value = input1.value
    }else{

    }
  }
  const getCardnum2 = (e) =>{
    let content2 = document.getElementById("card2")
    let input2 = document.getElementById("cardnumber2")
    if(input2.value !== ''){
        content2.value = input2.value
    }else{

    }
  }  
  const getCardnum3 = (e) =>{
    let content3 = document.getElementById("card3")
    let input3 = document.getElementById("cardnumber3")
    if(input3.value !== ''){
        content3.value = input3.value
    }else{

    }
  }
  const getCardnum4 = (e) =>{
    let content4 = document.getElementById("card4")
    let input4 = document.getElementById("cardnumber4")
    if(input4.value !== ''){
        content4.value = input4.value
    }else{

    }
  }
  const getCardholder = (e) =>{
    let cardholder = document.getElementById("cardholder")
    let cardholdercontent = document.getElementById("payer-name")
    if(cardholdercontent.value !== ''){
        cardholder.value = cardholdercontent.value
    }else{

    }
  }
  const getValiddates = (e) =>{
    let validdates1 = document.getElementById("validdates1")
    let validdates2 = document.getElementById("validdates2")
    let validdatescontent = document.getElementById("validdates")
    if(validdates1.value !== '' & validdates2.value !== ''){
        validdatescontent.value = validdates1.value + validdates2.value
    }else{

    }
  }
  // const getValiddates2 = (e) =>{
  //   let validdates = document.getElementById("")
  //   let validdatescontent = document.getElementById("validdates2")
  //   if(validdatescontent.value !== ''){
  //       validdates.value = validdatescontent.value
  //   }else{

  //   }
  // }


    return (
      <>
              <div className="cart3-form-wrap">
                  <h2 className="cart3-title">付款方式</h2>
                  <div className="cart3-pay-form">
                      <label><input type="radio" name="cart-payment"/> ATM轉帳</label>
                      <div className="cart3-reminder cart3-reminder-green">
                        <span>【詐騙猖獗，小心詐騙】</span><br/>
                        <span>提醒您，Dulcet Music絕不會另外去電要求客戶操作ATM進行轉帳或取消交易動作，如接獲疑似詐騙電話，請小心切勿受騙。若有任何疑問，請直接與客服聯絡。</span>
                      </div>
                      <div className="cart3-reminder cart3-reminder-red">
                        <span>匯款後，請告知我們匯款時間與末5碼。</span>
                      </div>
                      <div className="cart3-atm-info">
                        <ul className="cart3-atm-info1">
                          <li>銀行名稱</li>
                          <li>分行</li>
                          <li>銀行帳號</li>
                          <li>戶名</li>
                        </ul>
                        <ul>
                          <li>國泰世華</li>
                          <li>大安分行</li>
                          <li>013-1688888-1688888</li>
                          <li>Dulcet Music</li>
                        </ul>
                      </div>
                      <label><input type="radio" name="cart-payment"/> 信用卡付款 - 一次付清</label>
                      <div className="cart3-logo-img">
                        <img src={require('../../img/cart/cart-visa.png')}/>
                      </div>
                      <div className="cart3-logo-img">
                        <img className="cart-img-border" src={require('../../img/cart/cart-mastercard.jpg')}/>
                      </div>
                      <div className="cart3-logo-img">
                        <img src={require('../../img/cart/cart-jcb.png')}/>
                      </div>
                      <div style={{display:'flex'}}>
                          <div className="cart3-creditcard-wrap">
                              <div className="cart3-creditcard">
                                <div className="cart3-creditcard-same cart3-creditcard-1">                              
                                  <div className="cart3-card-in-card"></div>
                                  <div className="cart3-card-category">VISA</div>
                                </div>
                                <div className="cart3-creditcard-same cart3-creditcard-2">
                                  <div style={{display:'flex'}}>
                                    <input className="cart3-creditcard-number" id="card1" />
                                    <input className="cart3-creditcard-number" id="card2"/>
                                    <input className="cart3-creditcard-number" id="card3"/>
                                    <input className="cart3-creditcard-number" id="card4"/>
                                  </div>
                                </div> 
                                <div className="cart3-creditcard-same cart3-creditcard-3">
                                  <div style={{display:'flex'}}>
                                    <input className="cart3-creditcard-number" id="cardholder" placeholder="Card Holder"/>
                                    <input className="cart3-creditcard-number" id="validdates" placeholder="Valid Dates"/>
                                  </div>                                
                                </div> 
                              </div>
                              <div className="cart3-creditcard">
                                <div className="cart3-creditcard-stripe"></div>
                                <div className="cart3-creditcard-safe-info">
                                  <div>CCV</div>
                                  <div className="cart3-creditcard-safe-code">123</div>
                                  <div className="cart3-card-category">VISA</div>
                                </div>
                              </div>
                          </div>
                      </div>
                      <div className="cart3-creditcard-form">
                        <div className="cart3-input">
                          <label htmlFor="payer-name">持卡人姓名</label>
                          <input className="" id="payer-name" type="text" onChange={ (e)=>{ getCardholder() }} />
                        </div>
                        <div className="cart3-input">
                          <label htmlFor="">卡號</label>
                          <div style={{display:'flex'}}>
                            <input className="" id="cardnumber1" type="text"                               
                              onChange={ (e)=>{ getCardnum1() }}
                            />
                            <input className="" id="cardnumber2" type="text"                              
                              onChange={ (e)=>{ getCardnum2() }}
                            />
                            <input className="" id="cardnumber3" type="text"                               
                              onChange={ (e)=>{ getCardnum3() }}
                            />
                            <input className="" id="cardnumber4" type="text"                               
                              onChange={ (e)=>{ getCardnum4() }}                              
                            />
                          </div>
                        </div>
                        <div className="cart3-input">
                          <label htmlFor="">到期日</label>
                          <div style={{display:'flex'}}>
                            <div className="cart-card-ex">
                                <input className="" id="validdates1" type="text" onChange={ (e)=>{ getValiddates() }} />
                                <input className="" id="validdates2" type="text" onChange={ (e)=>{ getValiddates() }} />
                            </div>
                          </div>
                        </div>
                        <div className="cart3-input">
                          <label htmlFor="">安全碼</label>
                          <div style={{display:'flex'}}>
                            <div className="cart3-safe-code">
                                <input className="" id="" type="text" value="" />
                            </div>
                          </div>
                        </div>
                      </div>                    
                  </div>
              </div>
            <div className="cart-checkout-btn">
              <button type="button">
                <Link to='/cart/2'>上一步</Link>
              </button>
              <button type="button">
                <Link to='/cart/4'>確認送出</Link>
              </button>
            </div>
      </>
  );
}

export default CartPay;
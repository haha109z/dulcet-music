import React from 'react';
import { Link } from 'react-router-dom';

function CartPay (props) {

  const {orderPrice} = props.allProps;

  // let paybycredit = document.getElementById("paybycredit")
  // console.log(paybycredit)

  const getCardnum1 = (e) =>{
    // if (paybycredit.checked ==1) {
      let content1 = document.getElementById("card1")
      let input1 = document.getElementById("cardnumber1")
      if(input1.value !== ''){
          content1.value = input1.value
      }else{

      }
    // }
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
        validdatescontent.value = validdates1.value + " / " +validdates2.value
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

  // var safecode = "";
  // const getSafeCode = (e) =>{
  //   let safecodecontent = document.getElementById("safecode")
  //   if(safecodecontent.value !== ''){
  //     safecode = safecodecontent.value
  //     // console.log(safecode);      
  //   }else{

  //   }
  // }
  // console.log(safecode);      


    return (
      <>
              <div className="cart3-form-wrap">
                  <h2 className="cart3-title">付款方式</h2>
                  <div className="cart3-pay-form">

                      {/* 選項1：ATM轉帳 */}

                      <label>
                        <input type="radio" name="cart-payment"/> ATM轉帳
                      </label>
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
                          <li>訂單金額</li>
                        </ul>
                        <ul>
                          <li>國泰世華</li>
                          <li>大安分行</li>
                          <li>013-1688888-1688888</li>
                          <li>Dulcet Music</li>
                          <li style={{color:'var(--main-colorfb2)'}}>
                            {orderPrice.toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                          </li>
                        </ul>
                      </div>

                      {/* 選項2：信用卡付款 */}

                      <label>
                        <input id="paybycredit" type="radio" name="cart-payment"/> 信用卡付款 - 一次付清
                      </label>
                      {/* VISA Logo */}
                      <div className="cart3-logo-img">
                        <img src={require('../../img/cart/cart-visa.png')}/>
                      </div>
                      {/* MasterCard Logo */}
                      <div className="cart3-logo-img">
                        <img className="cart-img-border" src={require('../../img/cart/cart-mastercard.jpg')}/>
                      </div>
                      {/* JCB Logo */}
                      <div className="cart3-logo-img">
                        <img src={require('../../img/cart/cart-jcb.png')}/>
                      </div>

                      {/* 信用卡畫面展示區 */}
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
                                  <div className="cart3-creditcard-safe-code" id="safecode1">
                                    123
                                    {/* {safecode==null? 123 : safecode} */}
                                  </div>
                                  <div className="cart3-card-category">VISA</div>
                                </div>
                              </div>
                          </div>
                      </div>

                      {/* 信用卡資訊填寫欄位 */}
                      <div className="cart3-creditcard-form">
                        {/* 持卡人姓名 */}
                        <div className="cart3-input">
                          <label htmlFor="payer-name">持卡人姓名</label>
                          <input className="" id="payer-name" type="text" onChange={ (e)=>{ getCardholder() }} />
                        </div>
                        {/* 卡號 */}
                        <div className="cart3-input">
                          <label htmlFor="">卡號</label>
                          <div style={{display:'flex'}}>
                            <input className="" id="cardnumber1" type="text" maxlength="4"                              
                              onChange={ (e)=>{ getCardnum1() }}
                            />
                            <input className="" id="cardnumber2" type="text" maxlength="4"                             
                              onChange={ (e)=>{ getCardnum2() }}
                            />
                            <input className="" id="cardnumber3" type="text" maxlength="4"                               
                              onChange={ (e)=>{ getCardnum3() }}
                            />
                            <input className="" id="cardnumber4" type="text" maxlength="4"                               
                              onChange={ (e)=>{ getCardnum4() }}                              
                            />
                          </div>
                        </div>
                        {/* 到期日 */}
                        <div className="cart3-input">
                          <label htmlFor="">到期日</label>
                          <div style={{display:'flex'}}>
                            <div className="cart-card-ex">
                                <input className="" id="validdates1" type="text" maxlength="2" onChange={ (e)=>{ getValiddates() }} />/
                                <input className="" id="validdates2" type="text" maxlength="2" onChange={ (e)=>{ getValiddates() }} />
                            </div>
                          </div>
                        </div>
                        {/* 安全碼 */}
                        <div className="cart3-input">
                          <label htmlFor="">安全碼</label>
                          <div style={{display:'flex'}}>
                            <div className="cart3-safe-code">
                                <input className="" id="safecode" type="text" maxlength="3" 
                                  // onChange={ (e)=>{ getSafeCode() }} 
                                />
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
              <button type="button" onClick={()=>{

              // INSERT INTO `orderlist` (`orderId`, `memberId`, `name`, `address`, `phone`, `email`, `invoice`, `invoiceStorage`, `invoiceInfo`, `coupon`, `orderPrice`, `orderPayment`, `orderState`, `created_at`) VALUES (NULL, '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', current_timestamp());


                // 新增一筆訂單資料至資料庫
                // fetch('http://localhost:3030/cart/abc', {
                //   method: 'POST', // or 'PUT'
                //   body: JSON.stringify({
                //     userID,
                //     changUsername,
                //     changUserMail,
                //     changUserBirthday,
                //     changUserAddress,
                //     changUserPhone,
                //   }), // data can be `string` or {object}!
                //   headers: new Headers({
                //     'Content-Type': 'application/json',
                //   }),
                // })
                // .then((res) => res.json())
                // .then((json) => {
                //   if (json.code === 3) {
                //     MySwal.fire('信箱已經註冊過請換一個信箱試試', '', 'error')
                //   } else if (json.data) {
                //     localStorage.setItem('user', JSON.stringify(json.data))
                //     console.log(JSON.stringify(json.data))
                //     this.setState({ user: json.data[0] })
                    
                //   }
                //   // localStorage.setItem('user', JSON.stringify(json.data))
                //   // console.log(json.data)
                // })
                // .catch((error) => {
                //   console.error('Error:', error)
                // })

                // 更改loclaStorage的coupon使用狀態
                let couponData = JSON.parse(localStorage.getItem('coupon'))
                console.log(couponData)
                couponData[0].couponLocalStorage = 1;
                localStorage.setItem('coupon', JSON.stringify(couponData))
              }} >
                <Link to='/cart/4'>確認送出</Link>
              </button>
            </div>
      </>
  );
}

export default CartPay;
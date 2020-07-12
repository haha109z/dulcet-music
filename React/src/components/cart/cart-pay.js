import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 引入sweetalert2-react-content套件
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function CartPay (props) {
  
  // 引入sweetalert2-react-content套件
  const MySwal = withReactContent(Swal);

  const {
    user,
    checkstate,
    ReceivingName,
    ReceivingAddress,
    ReceivingPhone,
    ReceivingEmail,
    invoiceType,
    invoiceInfo,
    discount,
    orderPrice,
    cart,
    buyAll,
    setCartNum,
    setPage
  } = props.allProps;
 
  // 麵包屑
  setPage(4)   
  
  // 付款方式
  const [payment, setPayment]=useState('')
  
  // 亂數產生
  function randomusefloor(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  // 亂數英文字
  function makerandomletter(max) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < max; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
  }


  // 訂單資料表
  let memberid = user['userID'], 
  name = checkstate? user['userName'] : ReceivingName,
  address = checkstate? user['userAddress'] : ReceivingAddress,
  phone = checkstate? user['userPhone'] : ReceivingPhone,
  email = checkstate? user['userMail'] : ReceivingEmail,
  // 發票號碼：前兩碼英文小寫,後6碼數字
  invoice = makerandomletter(2)+"-"+randomusefloor(1,99999999),
  invoicestorage = invoiceType,
  invoiceinfo = invoiceInfo,
  coupon = discount,
  orderprice = orderPrice,
  orderpayment = payment,
  orderstate = payment=='ATM'? '待付款' : '完成'

  // 訂單明細
  const orderData = cart.map((v)=>({"PId":v.PId,"PCategoryId":v.PCategoryId,"num":v.num}))

  // 填寫信用卡欄位時會自動選取信用卡付款項目
  const changeContent =(e)=>{
    if (!e.target.value==0) {
      document.getElementById('paybycredit').setAttribute("checked", "checked")
      e.target.value = e.target.value
    }
  }

  // 選取ATM付款時會清空信用卡欄位
  const clearCreditContent = (e) => {
    if (document.getElementById('paybyatm').checked) {
      document.getElementById('cart3-creditcard-form').reset()
      document.getElementById('credit-display').reset()  
    }
  }

  // 信用卡展示區與填寫欄位對應
  var creditContent = document.getElementsByClassName("cart3-creditcard-number"),  // 展示區
  creditFillin = document.getElementsByClassName("cardnumber"),  // 輸入欄位
  firstnum=4,
  cardCategory='VISA', // 卡別
  category = document.getElementsByClassName("cardCategory")
  const getCardInfo = (e) => {
    firstnum = creditFillin[1].value.substr(0,1) 
    cardCategory = firstnum==4? 'VISA' : (firstnum==5? 'MasterCard': (firstnum==3? 'JCB' : '' ))  // 卡別
    category[0].innerHTML = cardCategory
    category[1].innerHTML = cardCategory
    // 卡號
    if(creditFillin[1].value !== ''){
      creditContent[0].value = creditFillin[1].value
    }
    if(creditFillin[2].value !== ''){
      creditContent[1].value = creditFillin[2].value
    }
    if(creditFillin[3].value !== ''){
      creditContent[2].value = creditFillin[3].value
    }
    if(creditFillin[4].value !== ''){
      creditContent[3].value = creditFillin[4].value
    }
    // 持卡人
    if(creditFillin[0].value !== ''){
      creditContent[4].value = creditFillin[0].value
    }
    // 到期日
    if(creditFillin[5].value !== '' & creditFillin[6].value !== ''){
      creditContent[5].value = creditFillin[5].value + " / " +creditFillin[6].value
    }
    // 安全碼
    if(creditFillin[7].value !== ''){
      let safecode = document.getElementsByClassName("cart3-creditcard-safe-code")[0]
      safecode.innerHTML = creditFillin[7].value
    }
  }

  // 信用卡翻面
  const creditRotate = (e) => {
    let complete = document.getElementById('safecode').value !==null
    let front = document.querySelector('.cart3-creditcard-front')
    let back = document.querySelector('.cart3-creditcard-back')
    if (complete) {
      front.classList.add("cart3-rotate-front")
      back.classList.add("cart3-rotate-back")
    }
    if (e.target.checked) {
      front.classList.remove("cart3-rotate-front")
      back.classList.remove("cart3-rotate-back")
    }
  }     


    return (
      <>
      
              {/* 付款方式 */}
              <div className="cart3-form-wrap">
                  <h2 className="cart3-title">付款方式</h2>
                  <div className="cart3-pay-form">

                      {/* 選項1：ATM轉帳 */}

                      <label>
                        <input id="paybyatm" name="payment" type="radio" value="ATM" 
                          onClick={(e)=>{
                            setPayment(e.target.value)
                            clearCreditContent()
                            creditRotate(e)
                        }}/> ATM轉帳
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
                        <input id="paybycredit" name="payment" type="radio" value="信用卡" onClick={(e)=>{setPayment(e.target.value)}} /> 信用卡付款 - 一次付清
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
                      <form id="credit-display" style={{display:'flex'}}>
                          <div className="cart3-creditcard-wrap">
                              <div className="cart3-creditcard cart3-creditcard-front">
                                <div className="cart3-creditcard-same cart3-creditcard-1">                              
                                  <div className="cart3-card-in-card"></div>
                                  <div className="cart3-card-category cardCategory">{cardCategory}</div>
                                </div>
                                <div className="cart3-creditcard-same cart3-creditcard-2">
                                  <div style={{display:'flex'}}>
                                    <input className="cart3-creditcard-number"/>
                                    <input className="cart3-creditcard-number"/>
                                    <input className="cart3-creditcard-number"/>
                                    <input className="cart3-creditcard-number"/>
                                  </div>
                                </div> 
                                <div className="cart3-creditcard-same cart3-creditcard-3">
                                  <div style={{display:'flex'}}>
                                    <input className="cart3-creditcard-number" placeholder="Card Holder"/>
                                    <input className="cart3-creditcard-number" placeholder="Valid Dates"/>
                                  </div>                                
                                </div> 
                              </div>
                              <div className="cart3-creditcard cart3-creditcard-back">
                                <div className="cart3-creditcard-stripe"></div>
                                <div className="cart3-creditcard-safe-info">
                                  <div>CCV</div>
                                  <div className="cart3-creditcard-safe-code">123</div>
                                  <div className="cart3-card-category cardCategory">{cardCategory}</div>
                                </div>
                              </div>
                          </div>
                      </form>

                      {/* 信用卡資訊填寫欄位 */}
                      <form id="cart3-creditcard-form" className="cart3-creditcard-form">

                        {/* 持卡人姓名 */}
                        <div className="cart3-input">
                          <label>持卡人姓名</label>
                          <input 
                            className="cardnumber" type="text" 
                            onChange={ (e)=>{    
                              changeContent(e)           
                              getCardInfo()
                            }}
                          />
                        </div>

                        {/* 卡號 */}
                        <div className="cart3-input">
                          <label>卡號</label>
                          <div style={{display:'flex'}}>
                            <input 
                              className="cardnumber" type="text" maxlength="4"                              
                              onChange={ (e)=>{ 
                                changeContent(e)
                                getCardInfo() 
                            }}/>
                            <input 
                              className="cardnumber" type="text" maxlength="4"                             
                              onChange={ (e)=>{
                                changeContent(e) 
                                getCardInfo() 
                              }}/>
                            <input 
                              className="cardnumber" type="text" maxlength="4"                               
                              onChange={ (e)=>{ 
                                changeContent(e)
                                getCardInfo() 
                            }}/>
                            <input 
                              className="cardnumber" type="text" maxlength="4"                               
                              onChange={ (e)=>{ 
                                changeContent(e)
                                getCardInfo() 
                            }}/>
                          </div>
                        </div>

                        {/* 到期日 */}
                        <div className="cart3-input">
                          <label htmlFor="">到期日</label>
                          <div style={{display:'flex'}}>
                            <div className="cart-card-ex">
                                <input 
                                  className="cardnumber" type="text" maxlength="2" 
                                  onChange={ (e)=>{ 
                                    changeContent(e) 
                                    getCardInfo()
                                  }}
                                />/
                                <input 
                                  className="cardnumber" type="text" maxlength="2" 
                                  onChange={ (e)=>{ 
                                    changeContent(e) 
                                    getCardInfo()
                                  }}
                                />
                            </div>
                          </div>
                        </div>

                        {/* 安全碼 */}
                        <div className="cart3-input">
                          <label>安全碼</label>
                          <div style={{display:'flex'}}>
                            <div className="cart3-safe-code">
                                <input 
                                  className="cardnumber" id="safecode" type="text" maxlength="3" 
                                  onChange={ (e)=>{ 
                                    changeContent(e) 
                                    getCardInfo()
                                  }} 
                                  onBlur={(e)=>{
                                    creditRotate(e)
                                  }}
                                />
                            </div>
                          </div>
                        </div>
                      </form>                    
                  </div>
              </div>
            <div className="cart-checkout-btn">
              
              <Link to='/cart/2'>
                <button type="button">上一步</button>
              </Link>
              
              <Link>
                <button type="button" onClick={()=>{

                  if (payment==='') {
                    MySwal.fire('請選擇一種付款方式', '', 'error')
                  } else {
                  MySwal.fire({
                    type: 'warning', // 彈框類型
                    title: '確認送出訂單？', //標題
                    confirmButtonColor: '#fb2643', // 確定按鈕的 顏色
                    confirmButtonText: '確定', // 確定按鈕的 文字
                    showCancelButton: true, // 是否顯示取消按鈕
                    cancelButtonColor: '#fffff', // 取消按鈕的 顏色
                    cancelButtonText: '取消', // 取消按鈕的 文字,
                    focusCancel: true, // 是否聚焦 取消按鈕
                  })
                  // 按下確認按鈕
                  .then((isConfirm)=>{
                    if (isConfirm.value) {

                      // 新增一筆訂單資料至資料庫
                      fetch('http://localhost:3030/cart/3', {
                        method: 'POST', // or 'PUT'
                        body: JSON.stringify({
                          memberid,
                          name,
                          address,
                          phone,
                          email,
                          invoice,
                          invoicestorage,
                          invoiceinfo,
                          coupon,
                          orderprice,
                          orderpayment,
                          orderstate,
                          orderData,
                        }), // data can be `string` or {object}!
                        headers: new Headers({
                          'Content-Type': 'application/json',
                        }),
                      })
                        
                      // 購物車商品全選結帳，清空localStorage cart並更新購物車圖示數量為0
                      if (buyAll) {
                        localStorage.removeItem('cart')
                        setCartNum(0)
                      } else {

                      }
                      
                      // 更改loclaStorage的coupon使用狀態
                      let couponData = JSON.parse(localStorage.getItem('coupon'))
                      if ( couponData !== null ) {
                        couponData[0].couponLocalStorage = 1;
                        localStorage.setItem('coupon', JSON.stringify(couponData))
                      } else {

                      }

                      // 跳轉至下一頁
                      window.location = '/cart/4'

                    } else {

                    }
                  })
                  }  
                }}>確認送出</button>
              </Link>

            </div>
      </>
  );
}

export default CartPay;
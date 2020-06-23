import React from 'react';

function CartPay() {

  return (
    <>
        {/* <div className="cart-container">
            <div className="cart-title">
                <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
                <span>❶確認商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</span>
            </div> */}
            <div className="cart3-form-wrap">
                <h2 className="cart3-title">付款方式</h2>
                <div className="cart3-pay-form">
                    <label><input type="checkbox" id=""/> ATM轉帳</label>
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
                    <label><input type="checkbox" id=""/> 信用卡付款 - 一次付清</label>
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
                        <label for="payer-name">持卡人姓名</label>
                        <input className="" id="payer-name" type="text"/>
                      </div>
                      <div className="cart3-input">
                        <label for="">卡號</label>
                        <div style={{display:'flex'}}>
                          <input className="" id="" type="text"/>
                          <input className="" id="" type="text"/>
                          <input className="" id="" type="text"/>
                          <input className="" id="" type="text"/>
                        </div>
                      </div>
                      <div className="cart3-input">
                        <label for="">到期日</label>
                        <div style={{display:'flex'}}>
                          <div className="cart-card-ex">
                              <input className="" id="" type="text"/>
                              <input className="" id="" type="text"/>
                          </div>
                        </div>
                      </div>
                      <div className="cart3-input">
                        <label for="">安全碼</label>
                        <div style={{display:'flex'}}>
                          <div className="cart3-safe-code">
                              <input className="" id="" type="text"/>
                          </div>
                        </div>
                      </div>
                    </div>                    
                </div>
            </div>
          <div className="cart-checkout-btn">
            <button type="">上一步</button>
            <button type="submit">確認送出</button>
          </div>
        {/* </div>  */}
    </>
  );
}

export default CartPay;
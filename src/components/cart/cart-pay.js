import React from 'react';

function CartPay() {

  return (
    <>
        <div className="cart-container">
            <div className="cart-title">
                <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
                <span style={{fontSize:'var(--h2)'}}>❶確認購買商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</span>
            </div>
            <div>
                <h2>付款方式</h2>
                <div className="cart-pay-form">
                    <label><input type="checkbox" id=""/> ATM轉帳</label>
                    <label><input type="checkbox" id=""/> 信用卡付款 - 一次付清</label>
                    {/* <img src={require('../../img/cart/cart-violin-01.jpeg')}/> */}
                    <div className="cart-img"></div>
                    <div className="cart-img"></div>
                    <div className="cart-img"></div>
                    <div style={{display:'flex'}}>
                        <div style={{margin:'0 auto'}}>
                            <div className="cart-pay-card"></div>
                            <div className="cart-pay-card"></div>
                        </div>
                    </div>
                    <div className="cart-input1" style={{margin: '0 0 20px 0'}}>
                      <label for="payer-name">持卡人姓名</label>
                      <input className="" id="payer-name" type="text"/>
                    </div>
                    <div className="cart-input1" style={{margin: '0 0 20px 0'}}>
                      <label for="card-number">卡號</label>
                      <div style={{display:'flex'}}>
                        <input className="" id="card-number1" type="text"/>
                        <input className="" id="card-number2" type="text"/>
                        <input className="" id="card-number3" type="text"/>
                        <input className="" id="card-number4" type="text"/>
                      </div>
                    </div>
                    <div className="cart-input1" style={{margin: '0 0 20px 0'}}>
                      <label for="card-number">到期日</label>
                      <div style={{display:'flex'}}>
                        <div className="cart-card-ex">
                            <input className="" id="card-ex1" type="text"/>
                            <input className="" id="card-ex2" type="text"/>
                        </div>
                      </div>
                    </div>
                    <div className="cart-input1" style={{margin: '0 0 20px 0'}}>
                      <label for="card-safe-number">安全碼</label>
                      <div style={{display:'flex'}}>
                        <div className="card-safe-number">
                            <input className="" id="card-safe-number" type="text" style={{width:'60%'}}/>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default CartPay;
import React from 'react';

function CartCheckOrder() {

  return (
    <>
      <div className="cart-container">
        <div className="cart-title">
          <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
          <span>❶確認商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</span>
        </div>
        <div className="cart-table">
          <ul className='cart2-thead'>
            <li>商品圖片</li>
            <li>商品名稱</li>
            <li className="cart-rwd-noneed">商品單價</li>
            <li>數量</li>
            <li>商品小計</li>
          </ul>
          <ul className="cart-order-category">
            <li colspan="5">課程訂單</li>
          </ul>
          <ul className="cart2-product">
            <li><img src={require('../../img/cart/cart-violin-01.jpeg')}/></li>
            <li>春季吉他班</li>
            <li className="cart-english-font cart-rwd-noneed" style={{color:'var(--main-colorfb2)'}}>$1,700</li>
            <li className="cart-english-font">
              <div>10</div>
            </li>
            <li className="cart-english-font" style={{color:'var(--main-colorfb2)'}}>$17,000</li>
          </ul>
        </div>
        <div> 
          <form className="cart-form" action="#" method="GET" enctype="multipart/form-data">
            <div className="cart-buyer-info">
                <h2>收件人資訊</h2>
                <fieldset>
                  <div className="cart2-input">
                    <label for="name">姓名</label>
                    <div>Lemon</div>
                  </div>
                  <div className="cart2-input">
                    <label for="add">地址</label>
                    <div>Lemon</div>
                  </div>
                  <div className="cart2-input">
                    <label for="phone">手機號碼</label>
                    <div>Lemon</div>
                  </div>
                  <div className="cart2-input">
                    <label for="email">電子信箱</label>
                    <div>Lemon</div>
                  </div>
                </fieldset>
            </div>
            <div className="cart-invoice">
              <h2>統一發票</h2>
                <fieldset>
                  <ul className="cart2-invoice-option">
                    <li className="cart2-invoice-category">存入會員載具</li>
                    <li className="cart2-invoice-value">中獎時我們會將發票寄送至您的收件地址</li>
                  </ul>
                  <ul className="cart2-invoice-option">
                    <li className="cart2-invoice-category">存入手機條碼載具</li>
                    <li className="cart2-invoice-value cart2-rwd-value">/888NNN2</li>
                  </ul>
                  <ul className="cart2-invoice-option">
                    <li className="cart2-colspan2" colspan="2">捐贈發票</li>
                    <li className="cart2-colspan2" colspan="2">我們將會為您捐給【台灣流浪兔保護協會】</li>
                    <li className="cart2-colspan2" colspan="2">提醒您，捐贈發票後無法變更成開立或索取紙本發票。</li>
                  </ul>
                  <ul className="cart2-invoice-option">
                    <li className="cart2-colspan2" colspan="2">開立公司戶發票</li>
                    <li className="cart2-invoice-category">統一編號</li>
                    <li className="cart2-invoice-value cart2-rwd-value">22222222</li>
                    <li className="cart2-invoice-category">發票抬頭</li>
                    <li className="cart2-invoice-value cart2-rwd-value">財團法人資訊工業策進會</li>
                    <li className="cart2-colspan2" colspan="2">提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</li>
                  </ul>
              </fieldset>
            </div>
          </form>
        </div>

        <div className="cart-total">
          <div className="cart-discount">
            <label for="discount">折扣碼</label>
            <input className="" id="discount" type="text"/>
          </div>
          <div className="cart-total-right">
            <div>
              <span className="cart-total-title">合計</span>
              <span className="cart-total-number cart-english-font">$ 2,800</span>
            </div>
            <div style={{color:'var(--main-colorfb2)'}}>
              <span className="cart-total-title">折扣</span>
              <span className="cart-total-number cart-english-font">- $ 1,000</span>
            </div>
            <div>
              <span className="cart-total-title">總計</span>
              <span className="cart-total-number cart-english-font">$ 1,800</span>
            </div>
          </div>
        </div>
        <div className="cart-checkout-btn">
          <button type="">上一步</button>
          <button type="submit">下一步</button>
        </div>
      </div>
    </>
  );
}

export default CartCheckOrder;

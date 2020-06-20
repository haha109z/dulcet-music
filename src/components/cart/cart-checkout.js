import React from 'react';

function CartCheckout() {

  return (
    <>
      <div className="cart-container">
        <div className="cart-title">
          <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
          <span>❶確認商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</span>
        </div>
        <div className="cart-table">
            <ul className='cart-thead'>
              <li>選取</li>
              <li>商品圖片</li>
              <li>商品名稱</li>
              <li>商品單價</li>
              <li>數量</li>
              <li>商品小計</li>
              <li>刪除</li>
            </ul>
            <ul className="cart-order-category">
              <li colspan="7">購買清單－課程</li>
            </ul>   
            <ul className="cart-product">
              <li className="cart-product-li"><input type="checkbox" id=""/></li>
              <li className="cart-product-li"><img src={require('../../img/cart/cart-violin-01.jpeg')}/></li>
              <li className="cart-product-li">春季吉他班</li>
              <li className="cart-product-li" style={{color:'var(--main-colorfb2)'}}>$1,700</li>
              <li className="cart-product-li-2">
                <i className="cart-minusBtn fas fa-minus-circle"></i>
                <div className="cart-number-input">10</div>
                <i className="cart-plusBtn fas fa-plus-circle"></i>
              </li>
              <li className="cart-product-number" style={{color:'var(--main-colorfb2)'}}>$17,000</li>
              <li><div className="cart-btn" onClick={()=>{}}><i class="far fa-trash-alt"></i></div></li>
            </ul>
            {/* <ul className="cart-product">
              <li><input type="checkbox" id=""/></li>
              <li><img src={require('../../img/cart/cart-violin-01.jpeg')}/></li>
              <li>春季吉他班</li>
              <li style={{color:'var(--main-colorfb2)'}}>$1,700</li>
              <li>
                <i className="fas fa-minus-circle cart-minusBtn"></i>
                <div className="cart-number">10</div>
                <i className="fas fa-plus-circle cart-plusBtn"></i>
              </li>
              <li style={{color:'var(--main-colorfb2)'}}>$17,000</li>
              <li><div className="cart-btn" onClick={()=>{}}><i className="far fa-trash-alt"></i></div></li>
            </ul> */}
        </div>

        <div>
          <form className="cart-form" action="#" method="GET" enctype="multipart/form-data">
            <div className="cart-buyer-info">
                <h2>收件人資訊</h2>
                <fieldset>
                  <label><input type="checkbox" id=""/> 同帳戶資料</label>
                  <div className="cart-input">
                    <label for="name">姓名</label>
                    <input className="" autofocus autocomplete="off" id="name" type="text" name="name" placeholder=""/>
                  </div>
                  <div className="cart-input">
                    <label for="add">地址</label>
                    <input className="" id="add" type="text"/>
                  </div>
                  <div className="cart-input">
                    <label for="phone">手機號碼</label>
                    <input className="" id="phone" type="text"/>
                  </div>
                  <div className="cart-input">
                    <label for="email">電子信箱</label>
                    <input id="email" className="" type="text"/>
                  </div>
                </fieldset>
            </div>
            <div className="cart-invoice">
                <h2>統一發票</h2>
                <fieldset>
                  <div>
                    <label><input type="checkbox" id=""/> 個人戶電子發票</label>
                    <span>中獎時會寄送至收件地址</span>
                  </div>
                  <div>
                    <label><input type="checkbox" id=""/> 電子發票載具</label>
                    <div className="cart-input1" style={{margin: '0 0 20px 0'}}>
                      <label for="einvoice">載具號碼</label>
                      <input className="" id="einvoice" type="text"/>
                    </div>
                  </div>
                  <div style={{padding:'0 0 20px 0'}}>
                    <label><input type="checkbox" id=""/> 捐贈發票</label>
                    <span>提醒您，捐贈發票後無法變更成開立或索取紙本發票。</span>
                    <br/>
                    <select>
                      <option value="台灣流浪兔保護協會">台灣流浪兔保護協會</option>
                      <option value="社團法人台灣愛兔協會">社團法人台灣愛兔協會</option>
                      <option value="財團法人陽光社會福利基金會">財團法人陽光社會福利基金會</option>
                    </select>
                  </div>
                  <div>
                    <label><input type="checkbox" id=""/> 公司戶</label>
                    <span>提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</span>
                    <div className="cart-input1" style={{margin: '0 0 20px 0'}}>
                      <label for="einvoice">統一編號</label>
                      <input className="" id="einvoice" type="text"/>
                    </div>
                    <div className="cart-input1">
                      <label for="einvoice">發票抬頭</label>
                      <input className="" id="einvoice" type="text"/>
                    </div>
                  </div>
              </fieldset>
            </div>
          </form>
        </div>

        <div className="cart-total">
          <div className="cart-discount">
            <label for="discount">折扣碼</label><br/>
            <input className="" id="discount" type="text"/>
          </div>
          <div className="cart-total-right">
            <div>
              <span className="cart-total-title">合計</span>
              <span className="cart-total-number">$ 2,800</span>
            </div>
            <div style={{color:'var(--main-colorfb2)'}}>
              <span className="cart-total-title">折扣</span>
              <span className="cart-total-number">- $ 1,000</span>
            </div>
            <div>
              <span className="cart-total-title">總計</span>
              <span className="cart-total-number">$ 1,800</span>
            </div>
          </div>
        </div>
        <div style={{margin:'0 auto', width:'400px'}}>
          <button className="cart-checkout-btn" type="">繼續購物</button>
          <button className="cart-checkout-btn" type="submit">下一步 →</button>
        </div>
      </div>
    </>
  );
}

export default CartCheckout;

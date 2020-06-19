import React from 'react';

function CartCheckOrder() {

  return (
    <>
      <div className="cart-container">
        <div className="cart-title">
          <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
          <span style={{fontSize:'var(--h2)'}}>❶確認購買商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</span>
        </div>
        <table className="cart-table">
          <thead>
            <tr>
              <th>商品圖片</th>
              <th>商品名稱</th>
              <th>商品單價</th>
              <th>數量</th>
              <th>商品小計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="cart-category" colspan="7">課程訂單</th>
            </tr>
            <tr>
              <td><img src={require('../../img/cart/cart-violin-01.jpeg')}/></td>
              <td>春季吉他班</td>
              <td style={{color:'var(--main-colorfb2)'}}>$1,700</td>
              <td>
                <div className="">10</div>
              </td>
              <td style={{color:'var(--main-colorfb2)'}}>$17,000</td>
            </tr>
            <tr>
              <td><img src={require('../../img/cart/cart-violin-01.jpeg')}/></td>
              <td>春季吉他班</td>
              <td style={{color:'var(--main-colorfb2)'}}>$1,700</td>
              <td>
                <div className="">10</div>
              </td>
              <td style={{color:'var(--main-colorfb2)'}}>$17,000</td>
            </tr>
          </tbody>
        </table>

        <div> 
          <form className="" action="#" method="GET" enctype="multipart/form-data">
            <div className="cart-buyer-info">
              <h2>收件人資訊</h2>
                <fieldset>
                  <div className="cart-input2">
                    <label for="name">姓名</label>
                    <input className="" autofocus autocomplete="off" id="name" type="text" name="name" placeholder=""/>
                  </div>
                  <div className="cart-input2">
                    <label for="add">地址</label>
                    <input className="" id="add" type="text"/>
                  </div>
                  <div className="cart-input2">
                    <label for="phone">手機號碼</label>
                    <input className="" id="phone" type="text"/>
                  </div>
                  <div className="cart-input2">
                    <label for="email">電子信箱</label>
                    <input id="email" className="" type="text"/>
                  </div>
                </fieldset>
            </div>
            <div className="cart-invoice">
              <h2>統一發票</h2>
                <fieldset>
                  <div>
                    <label>個人戶電子發票</label>
                    <span>中獎時會寄送至收件地址</span>
                  </div>
                  <div>
                    <label>電子發票載具</label>
                    <div className="cart-input2" style={{margin: '0 0 20px 0'}}>
                      <label for="einvoice">載具號碼</label>
                      <input className="" id="einvoice" type="text"/>
                    </div>
                  </div>
                  <div style={{padding:'0 0 20px 0'}}>
                    <label>捐贈發票</label>
                    <span>提醒您，捐贈發票後無法變更成開立或索取紙本發票。</span>
                    <br/>
                    <span>我們將會為您捐給 台灣流浪兔保護協會</span>
                  </div>
                  <div>
                    <label>公司戶</label>
                    <span>提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</span>
                    <div className="cart-input2" style={{margin: '0 0 20px 0'}}>
                      <label for="einvoice">統一編號</label>
                      <input className="" id="einvoice" type="text"/>
                    </div>
                    <div className="cart-input2">
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
          <button className="cart-checkout-btn" type="">← 上一步</button>
          <button className="cart-checkout-btn" type="submit">下一步 →</button>
        </div>
      </div>
    </>
  );
}

export default CartCheckOrder;

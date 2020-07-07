import React, { Component } from 'react';

class CartEnd extends Component {
  render() {
    return (
      <>
                    
              {/* 標題 */}
              <div className="cart-title">
                <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
                <div>
                  <span>❶ 確認商品</span>
                  <span>➔ </span>
                  <span>❷ 確認訂單</span>
                  <span>➔ </span>
                  <span>❸ 選擇付款方式</span>
                  <span>➔ </span>
                  <span className="cart-breadcrumb">❹ 完成結帳</span>
                </div>
              </div>

              {/* 感謝卡 */}
              <div className="cart-thank-card">
                  <h2>訂單完成</h2>
                  <span>購買程序已順利完成，感謝您的購買</span>
                  <span>Dulcet Music 已寄發一封訂單明細到您的信箱</span>
                  <span>或是您也可以至 會員中心 購買清單 查看您的訂單</span>
                  <span>歡迎再度光臨唷！</span>
                  <h2>Thank you {':)'} </h2>
              </div>

      </>
    );
  }
}

export default CartEnd;
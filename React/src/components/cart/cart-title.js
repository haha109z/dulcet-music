import React from 'react';

function CartTitle() {

  return (
    <>
        <div className="cart-title">
          <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
          <div>
            <span className="cart-breadcrumb">❶ 確認商品</span>
            <span>➔ </span>
            <span>❷ 確認訂單</span>
            <span>➔ </span>
            <span>❸ 選擇付款方式</span>
            <span>➔ </span>
            <span>❹ 完成結帳</span>
          </div>
        </div>
    </>
  );
}

export default CartTitle;
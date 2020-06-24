import React from 'react';

function CartTitle() {

  return (
    <>
        <div className="cart-title">
          <h1><i className="fas fa-shopping-bag"></i> My Cart</h1>
          <span>❶確認商品➔❷確認訂單➔❸選擇付款方式➔❹完成結帳</span>
        </div>
    </>
  );
}

export default CartTitle;
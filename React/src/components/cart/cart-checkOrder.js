import React from 'react';
import { Link } from 'react-router-dom';
import CartInvoiceInfo from './cart-invoiceInfo.js';

export default function CartCheckOrder (props) {

  const { 
    cart, 
    user, 
    coupon, 
    discount,
    totalPrice, 
    orderPrice,
    radiostate, 
    checkstate, 
    ReceivingName, 
    ReceivingAddress, 
    ReceivingPhone, 
    ReceivingEmail, 
    invoiceInfo,
    setPage
  } = props.allProps;  

  // 麵包屑
  setPage(2) 

    return (
      <>
      
          {/* 商品列表 */}
          <div className="cart-table">
            <ul className='cart2-thead'>
              <li>商品圖片</li>
              <li>商品名稱</li>
              <li className="cart-rwd-noneed">商品單價</li>
              <li>數量</li>
              <li>商品小計</li>
            </ul>
            <ul className="cart-order-category">
              <li colSpan="5">購買清單</li>
            </ul>
            {cart.map((data, index)=>{
              return (
                <ul className="cart2-product">
                  {/* <li><img src={require(`../../img/cart/cart-violin-01.jpeg`)}/></li> */}
                  <li><img src={`http://localhost:3030/images/product/${data.PImg}`}/></li>
                  <li>{data.PName}</li>
                  <li className="cart-english-font cart-rwd-noneed" style={{color:'var(--main-colorfb2)'}}>
                    ${data.PPrice.toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                  </li>
                  <li className="cart-english-font">
                    <div>{data.num}</div>
                  </li>
                  <li className="cart-english-font" style={{color:'var(--main-colorfb2)'}}>
                    ${(data.num * data.PPrice).toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                  </li>
                </ul>
                )
              }
            )}
          </div>

          <div> 
            <form className="cart-form">

              <div className="cart-buyer-info">
                  <h2>收件人資訊</h2>
                  <fieldset>

                    {checkstate ? (

                    <>
                    <div className="cart2-input">
                      <label htmlFor="name">姓名</label>
                      <div>{user["userName"]}</div>
                    </div>
                    <div className="cart2-input">
                      <label htmlFor="add">地址</label>
                      <div>{user["userAddress"]}</div>
                    </div>
                    <div className="cart2-input">
                      <label htmlFor="phone">手機號碼</label>
                      <div>{user["userPhone"]}</div>
                    </div>
                    <div className="cart2-input">
                      <label htmlFor="email">電子信箱</label>
                      <div>{user["userMail"]}</div>
                    </div>
                    </>

                    ):(

                    <>
                    <div className="cart2-input">
                      <label htmlFor="name">姓名</label>
                      <div>{ReceivingName}</div>
                    </div>
                    <div className="cart2-input">
                      <label htmlFor="add">地址</label>
                      <div>{ReceivingAddress}</div>
                    </div>
                    <div className="cart2-input">
                      <label htmlFor="phone">手機號碼</label>
                      <div>{ReceivingPhone}</div>
                    </div>
                    <div className="cart2-input">
                      <label htmlFor="email">電子信箱</label>
                      <div>{ReceivingEmail}</div>
                    </div>
                    </>

                    )}

                  </fieldset>
              </div>

              <CartInvoiceInfo 
                allProps={{
                  radiostate,
                  invoiceInfo,
                }}
              />
              
            </form>
          </div>

          <div className="cart-total">
            <div className="cart-discount">
              <label htmlFor="discount">折扣碼</label>
              <input className="" id="discount" type="text" readonly="readonly" value={ discount==0? '' : coupon } />
            </div>
            <div className="cart-total-right">
              <div>
                <span className="cart-total-title">合計</span>
                <span className="cart-total-number cart-english-font">
                  $ {totalPrice.toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                </span>
              </div>
              <div style={{color:'var(--main-colorfb2)'}}>
                <span className="cart-total-title">折扣</span>
                <span className="cart-total-number cart-english-font">
                  - $ {discount.toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                </span>
              </div>
              <div>
                <span className="cart-total-title">總計</span>
                <span className="cart-total-number cart-english-font">
                  $ {orderPrice.toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                </span>
              </div>
            </div>
          </div>
          <div className="cart-checkout-btn">
            
              <Link to='/cart/1'>
                <button type="button">上一步</button>
              </Link>            
            
              <Link to='/cart/3'>
                <button type="button">下一步</button>
              </Link>
            
          </div>

      </>
    );
}

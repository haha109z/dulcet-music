import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 引入sweetalert2-react-content套件
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import CartDeliverInfo from './cart-deliverInfo.js';
import CartItem from './cart-cartItem.js';

function CartCheckout (props) {

  // 引入sweetalert2-react-content套件
  const MySwal = withReactContent(Swal);

  const { 
    cart, 
    setCart, 
    user, 
    setUser,  
    coupon,
    haveCoupon,
    discount,
    setDiscount,
    totalPrice,
    setTotalPrice, 
    orderPrice,
    setOrderPrice,
    buyProduct,
    setBuyProduct,
    checkstate, 
    setcheckstate,
    checkcallback,
    ReceivingName, 
    setReceivingName, 
    ReceivingAddress, 
    setReceivingAddress, 
    ReceivingPhone, 
    setReceivingPhone,  
    ReceivingEmail, 
    setReceivingEmail,    
    radiostate, 
    setRadiostate, 
    radiocallback,
    invoiceInfo,
    setInvoiceInfo,
    // invoiceInfo2,
    // setInvoiceInfo2,
    // invoiceInfo3,
    // setInvoiceInfo3,
    // invoiceInfo4,
    // setInvoiceInfo4,
    // invoiceInfo5,
    // setInvoiceInfo5,
   } = props.allProps;  
  //  console.log(discount);
  

  // 計算購物車商品總價
  let itemPrice = 0;  
  cart.map((data, index)=>{
    // console.log(cart[index]);
    itemPrice += parseInt(cart[index].PPrice*cart[index].num);
  })
  // console.log(itemPrice);
  setTotalPrice(itemPrice);
  // console.log(totalPrice);
  

  // 計算訂單總價
  let orderprice = parseInt(totalPrice - discount)
  // console.log(discount);
  // console.log(orderprice);  
  setOrderPrice(orderprice);
  // console.log(orderPrice);
  
  
  // let stock = cart[0].PQty;



  // 引入彈跳框插件
  // MySwal.fire({
  //   type: 'warning', // 彈框類型
  //   title: '修改資料？', //標題
  //   text: '', //顯示內容
  //   icon: '', //icon圖示
  //   confirmButtonColor: '#141414', // 確定按鈕的 顏色
  //   confirmButtonText: '確定', // 確定按鈕的 文字
  //   showCancelButton: true, // 是否顯示取消按鈕
  //   cancelButtonColor: '#dadada', // 取消按鈕的 顏色
  //   cancelButtonText: '取消', // 取消按鈕的 文字
    // html:
    //   `<p class="userdata-alert-p">姓名</p>` +
    //   `<input id="swal-input1" class="swal2-input" value=${userName}>` +
    //   `<p class="userdata-alert-p">電子信箱</p>` +
    //   `<input id="swal-input2" class="swal2-input" value=${userMail}>` +
    //   `<p class="userdata-alert-p">生日</p>` +
    //   `<input id="swal-input3" class="swal2-input" type="date" value=${userBirthday}>` +
    //   `<p class="userdata-alert-p">地址</p>` +
    //   `<input id="swal-input4" class="swal2-input" value=${userAddress}>` +
    //   `<p class="userdata-alert-p">手機號碼</p>` +
    //   `<input id="swal-input5" class="swal2-input" value=${userPhone}>`,
  //   focusCancel: true, // 是否聚焦 取消按鈕
  //   reverseButtons: true, // 是否 反轉 兩個按鈕的位置 默認是  左邊 確定  右邊 取消
  // })



  const changeInvoiceInfo = (e) => {
    console.log(e) 
    console.log(radiostate)
    // 切換radio選項時，先清空invoiceInfo
    if (radiostate==0) {
      setInvoiceInfo('')
    }
    // setInvoiceInfo( 
    //   radiostate1 == 1 ? '' : (radiostate2 == 1 ? invoiceinfo2 : (radiostate3 == 1 ? invoiceinfo3 : (radiostate4 == 1 ? invoiceinfo4 : '' )))
    // )
  }


    return (
      <>

          {/* 購物車商品 */}

          <div className="cart-table">
              <ul className='cart-thead'>
                <li>選取</li>
                <li>商品圖片</li>
                <li>商品名稱</li>
                <li>商品單價</li>
                <li className="cart-rwd-noneed">數量</li>
                <li className="cart-rwd-noneed">商品小計</li>
                <li className="cart-rwd-noneed">刪除</li>
              </ul>
              <ul className="cart-order-category">
                <li colSpan="7">購買清單</li>
              </ul>   
              {/* 商品明細 */}
              <CartItem
                allProps={{
                  cart,
                  setCart,
                  totalPrice,
                  // minusCartNumber,
                  // plusCartNumber,
              }}
              />
          </div>

          {/* 兩個表單 */}
          <div>
            <form className="cart-form" action="/cart/2" method="post" encType="multipart/form-data">

              {/* 表單1：收件人資訊 */}
              <CartDeliverInfo 
                allProps={{
                  user,
                  setUser,
                  checkstate, 
                  setcheckstate,
                  checkcallback,
                  ReceivingName, 
                  setReceivingName, 
                  ReceivingAddress, 
                  setReceivingAddress, 
                  ReceivingPhone, 
                  setReceivingPhone, 
                  ReceivingEmail, 
                  setReceivingEmail
              }}
              />

              {/* 表單2：統一發票 */}
              <div className="cart-invoice">
                  <h2>統一發票</h2>
                  <fieldset>

                    {/* 選項1：會員載具 */}

                    <div>
                      <label>
                        <input type="radio" name="invoice" id="invoice1" value="會員載具" 
                          onClick={(e)=>{ radiocallback(e.target) }}
                        /> 會員載具
                      </label>
                      <span>中獎時我們會將發票寄送至您的收件地址</span>
                    </div>

                    {/* 選項2：手機條碼載具 */}

                    <div>
                      <label>
                        <input type="radio" name="invoice" id="invoice2" value="手機條碼載具" 
                          onClick={(e)=>{ radiocallback(e.target) }}
                        /> 手機條碼載具
                      </label>
                      <div className="cart-input1">
                        <label htmlFor="invoice">載具號碼</label>
                        <input id="invoicev" type="text" value={radiostate[1]==1? invoiceInfo: ''}
                          onChange={ (e)=>{ 
                            // console.log(e.target.value)
                            setInvoiceInfo(e.target.value) 
                          }}
                          // onChange={ (e)=>{ changeInvoiceInfo(e.target.value) } }
                        />
                      </div>
                    </div>

                    {/* 選項3：捐贈發票 */}

                    <div style={{padding:'0 0 20px 0'}}>
                      <label>
                        <input type="radio" name="invoice" id="invoice3" value="捐贈發票" 
                          onClick={(e)=>{ radiocallback(e.target) }}
                        /> 捐贈發票
                      </label>
                      <span>提醒您，捐贈發票後無法變更成開立或索取紙本發票。</span>
                      <select>
                        <option value="台灣流浪兔保護協會">台灣流浪兔保護協會</option>
                        <option value="社團法人台灣愛兔協會">社團法人台灣愛兔協會</option>
                        <option value="財團法人陽光社會福利基金會">財團法人陽光社會福利基金會</option>
                      </select>
                    </div>

                    {/* 選項4：公司戶發票 */}

                    <div>
                      <label>
                        <input type="radio" name="invoice" id="invoice4" value="公司戶發票" 
                          onClick={(e)=>{ radiocallback(e.target) }}
                        /> 公司戶
                      </label>
                      <span>提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</span>
                      <div className="cart-input1">
                        <label htmlFor="invoice">統一編號</label>
                        <input className="companyinvoice" id="" type="text" value={radiostate[3]==1? invoiceInfo[0]: ''}
                          // onChange={ (e)=>{ changeInvoiceInfo(e.target.value) } }
                          // onChange={ (e)=>{ console.log("invo4value1 "+e.target.value) } }
                          onChange={ (e)=>{ 
                            // console.log("invo4value1 "+e.target.value)
                            // console.log(invoiceInfo[1])
                            let data = invoiceInfo[1]
                            setInvoiceInfo([ (e.target.value==0? '' :e.target.value), data ]) 
                            // setInvoiceInfo([ (e.target.value==0? '' :e.target.value), (invoiceInfo[1]!==1? '':invoiceInfo[1]) ]) 
                            // console.log(invoiceInfo)
                          }}
                          // onChange={ (e)=>{ setInvoiceInfo(e.target.value) } }
                        />
                      </div>
                      <div className="cart-input1">
                        <label htmlFor="invoice">發票抬頭</label>
                        <input className="companyinvoice" id="" type="text" value={radiostate[3]==1? invoiceInfo[1]: ''}
                          // onChange={ (e)=>{ changeInvoiceInfo(e.target.value) } }
                          // onChange={ (e)=>{ setInvoiceInfo(e.target.value) } }
                          onChange={ (e)=>{ 
                            // console.log("invo4value2 "+e.target.value)
                            // console.log(invoiceInfo[0])
                            let data = invoiceInfo[0]
                            setInvoiceInfo([ data, (e.target.value==0? '' :e.target.value)]) 
                            // setInvoiceInfo([ (invoiceInfo[0]!==1? '':invoiceInfo[0]), (e.target.value==0? '' :e.target.value)]) 
                            // console.log(invoiceInfo)
                          }}
                        />
                      </div>
                    </div>

                </fieldset>
              </div>
            </form>
          </div>

          {/* 訂單金額合計區 */}
          <div className="cart-total">

            {/* 折扣碼 */}
            <div className="cart-discount">
              <label htmlFor="discount">折扣碼</label>
              <input className="" id="discount" type="text"
                onChange={ (e)=>{  
                  // console.log(e.target.value)
                  // console.log(coupon)     
                  if (haveCoupon == 1) { 
                    if ( e.target.value == coupon ) {
                      // alert('恭喜您折扣碼符合')
                      MySwal.fire('折扣碼符合，可折價200元', '', 'success')                      
                      setDiscount(200);
                    }} else {
                      setDiscount(0);
                    } 
                }}
              />
            </div>

            {/* 計算欄位 */}
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

          {/* 按鈕區 */}
          <div className="cart-checkout-btn">
            <button type="button"
              onClick={()=>{
                window.history.back()
              }}
            >
              繼續購物   
            </button>
            <button type="button">
              <Link to='/cart/2'>下一步</Link>
            </button>
          </div>

      </>
    );
}


export default CartCheckout;

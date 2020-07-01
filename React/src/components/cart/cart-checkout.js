import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 引入sweetalert2-react-content套件
// import withReactContent from 'sweetalert2-react-content';
// import Swal from 'sweetalert2';

import CartDeliverInfo from './cart-deliverInfo.js';
import CartItem from './cart-cartItem.js';
// const MySwal = withReactContent(Swal);

function CartCheckout (props) {

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
   } = props.allProps;  
  //  console.log(discount);
  

  // 計算購物車商品總價
  let itemPrice = 0;  
  cart.map((data, index)=>{
    // console.log(cart[index]);
    itemPrice += parseInt(cart[index].PPrice);
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

  // let arr =[2,1,3]
  // const [testArr,setTestArr]=useState(arr)

  // minusCartNumber函式：點擊btn減少該商品之購物車數量
  // const minusCartNumber = (e) =>{
  //   if (number == 0) {
  //     setNumber(0)
  //   } else {
  //     setNumber(number - 1)
  //     setCart({
  //       ...cart,
  //       0:{
  //         ...cart[0],
  //         number: number       
  //       } 
  //     })
  //   }
  // }


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


  // plusCartNumber函式：點擊btn增加該商品之購物車數量
  // const plusCartNumber = (e) =>{
  //   // let cart = cart[0]
  //   // console.log(cart[0].cartNumber)
  //   // let index=e
  //   // arr=testArr
  //   // console.log(index);    
  //   // console.log(arr[index]+1)
  //   // console.log(testArr)
  //   // arr[index]=arr[index]+1
  //   // arr[index]=parseInt(arr[index])+1
  //   // setTestArr(arr)

  //   const stock =5
  //   if (number == stock) {
  //     setNumber(stock) 
  //     alert('庫存不足')
  //   } else {
  //     setNumber(number + 1)
  //     setCart({
  //       ...cart,
  //       0:{
  //         ...cart[0],
  //         number: number       
  //       } 
  //     })
  //   }
  // }

  const deleteCartItem = (e) => {
    alert('是否確認刪除?')
    // console.log( e.target.parentElement.closest(".cart-product") )
    setCart([])
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
                <li colSpan="7">購買清單－課程</li>
              </ul>   
              {/* 商品明細 */}
              <CartItem
                allProps={{
                  cart,
                  setCart,
                  totalPrice,
                  // minusCartNumber,
                  // plusCartNumber,
                  deleteCartItem,
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
                        <input id="invoicev" type="text" value={invoiceInfo}
                          onChange={ (e)=>{ setInvoiceInfo(e.target.value) }}
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
                        <input className="companyinvoice" id="" type="text" value={invoiceInfo}
                          onChange={ (e)=>{ 
                            if (document.getElementById("invoice4").checked === true) {
                            setInvoiceInfo(e.target.value) 
                            } else {
                              setInvoiceInfo('')
                            }}}
                        />
                      </div>
                      <div className="cart-input1">
                        <label htmlFor="invoice">發票抬頭</label>
                        <input className="companyinvoice" id="" type="text" value={invoiceInfo}
                          onChange={ (e)=>{ 
                            if (document.getElementById("invoice4").checked === true) {
                            setInvoiceInfo(e.target.value) 
                            } else {
                              setInvoiceInfo('')
                            }}}
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
                      alert('恭喜您折扣碼符合')
                      setDiscount(1500);
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
                <span className="cart-total-number cart-english-font">$ {totalPrice}</span>
              </div>
              <div style={{color:'var(--main-colorfb2)'}}>
                <span className="cart-total-title">折扣</span>
                <span className="cart-total-number cart-english-font">- $ {discount}</span>
              </div>
              <div>
                <span className="cart-total-title">總計</span>
                <span className="cart-total-number cart-english-font">$ {orderPrice}</span>
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

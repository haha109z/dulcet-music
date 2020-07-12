import React, { useState, useEffect } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Navbar from '../components/navbar/navbar';
import CartCheckout from '../components/cart/cart-checkout';
import CartCheckOrder from '../components/cart/cart-checkOrder';
import CartPay from '../components/cart/cart-pay';
import CartEnd from '../components/cart/cart-end';

// 切換頁面滾動軸回到最頂部
import ScrollToTop from './scrollToTop'
import CartTitle from '../components/cart/cart-title';

function CartApp (props) {

  const {
    cartNum, 
    setCartNum,
  }=props.allProps
  
  // 麵包屑
  const [page, setPage] = useState(0)
  useEffect(()=>{
    let breadcrumb = document.querySelectorAll(".cart-title span")    
    breadcrumb.forEach( el => el.classList.remove("cart-breadcrumb"))
    breadcrumb[page].classList.add("cart-breadcrumb")
  },[page])

  // 會員資料
  // [{"userID":3,"userName":"謝凱成","userPwd":"a94a8fe5ccb19ba61c4c0873d391e987982fbbd3","userPhone":"0919390003","userMail":"003@gmail.com","userBirthday":"1912-09-22","userAddress":"桃園市龜山區公西里013鄰文三一街５０之１號","userImg":"userimg000","created_at":"2019-11-27 13:18:46","updated_at":"2019-11-25 13:18:48"}]
  const [user, setUser] = useState([])

  // 購物車資料
  // [{"PId":22,"PCategoryId":"樂器","PName":"KAWAI  K-30(SNW)直立式鋼琴","PImg":"Product_20200423164441.jpg","PPrice":60000,"PQty":1,"PIntro":"KAWAI  K-30(SNW)直立式鋼琴","Pdesciption":"採用日本原裝打擊系統、音搥、琴弦，外觀歐洲宮庭型","PInstrumentId":"鋼琴","PCompanyId":"F044","PClick":null,"created_at":"2020-08-16T06:18:00.000Z","update_at":"2020-08-17T06:18:00.000Z","PIId":null,"num":1}]
  const [cart, setCart] = useState([])

  // 購物車商品總價
  const [totalPrice, setTotalPrice] = useState(0)

  // 訂單總金額
  const [orderPrice, setOrderPrice] = useState(0)
 
  // 折扣碼資料
  // [{"coupon":"dulcet-20200710"}]
  const [coupon, setCoupon] = useState('') 
  // 折扣金額，預設為0
  const [discount, setDiscount] = useState(0) 

  // 商品列表全選框的預設狀態，預設為勾選
  const [ buyAll, setBuyAll ] = useState(true);
  
  // 收件資訊checkbox勾選狀態，預設為不勾選
  const [ checkstate, setcheckstate ] = useState(false);
  // checkcallback函式：點擊時切換checkbox勾選狀態
  const checkcallback = (e) =>{
    setcheckstate(e.checked)
  }
  // 根據checkbox勾選狀態切換收件人資訊畫面
  useEffect(()=>{
    checkcallback(checkstate)
  },[])


  // radio狀態，預設為不選取
  const [ radiostate, setRadiostate ] = useState([false, false, false, false]);  
  // 發票儲存方式，預設為空值
  const [ invoiceType, setInvoiceType ] = useState('');
  // 發票資料，預設為空值 
  const [ invoiceInfo, setInvoiceInfo ] = useState('');  
  // 
  const [ selectindex, setSelectindex ] = useState(0);

  // 收件人資訊欄位內容，預設為空值
  const [ ReceivingName, setReceivingName ] = useState('');
  const [ ReceivingAddress, setReceivingAddress ] = useState('');
  const [ ReceivingPhone, setReceivingPhone ] = useState('');
  const [ ReceivingEmail, setReceivingEmail ] = useState('');


// 從localStorage獲取-會員資料
const userData = JSON.parse(localStorage.getItem('user')); 
useEffect(()=>{
  if(userData===null){
    return 
  }else{
  setUser(userData[0])
  }  
},[])


// 從localStorage獲取-coupon資料
const couponData = JSON.parse(localStorage.getItem('coupon'));
// 若從localStorage存在coupon資料，變更會員狀態為擁有折扣碼
useEffect(()=>{
  if (userData===null) {
    return 
  } else {
    if (couponData===null) {
      return
    } else {         
      setCoupon(couponData[0]['coupon'])
    }
  }
},[])


// 從localStorage獲取-購物車資料
const cartData = JSON.parse(localStorage.getItem('cart')); 
useEffect(()=>{
  if (cartData===null) {
    return
  } else {
    setCart(cartData)
  }
},[])  


    return (
        <>
        <Navbar 
          cartNum={cartNum}
          setCartNum={setCartNum}
        />
         <BrowserRouter>
         <ScrollToTop>
            <div className="cart-container">
            <CartTitle
              page={page}
            />
              <Switch>
                <Route path="/cart/2">
                  <CartCheckOrder                     
                    allProps={{
                      cart,
                      user,
                      coupon,
                      discount,
                      totalPrice,
                      orderPrice,
                      checkstate,
                      radiostate,
                      ReceivingName, 
                      ReceivingAddress, 
                      ReceivingPhone, 
                      ReceivingEmail, 
                      invoiceInfo,  
                      setPage  
                    }}
                  />
                </Route>
                <Route path="/cart/3">
                  <CartPay 
                    allProps={{
                      user,
                      checkstate,
                      ReceivingName,
                      ReceivingAddress,
                      ReceivingPhone,
                      ReceivingEmail,
                      invoiceType,
                      invoiceInfo,
                      discount,
                      orderPrice,
                      cart,
                      buyAll,
                      setCartNum,
                      setPage
                    }}
                  />
                </Route>
                <Route path="/cart/4">
                  <CartEnd 
                    setPage={setPage}
                  />
                </Route>
                <Route path="/cart">
                  <CartCheckout
                    allProps={{
                      cart,
                      setCart,
                      user,
                      setUser,
                      coupon,
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
                      selectindex, 
                      setSelectindex,
                      invoiceInfo, 
                      setInvoiceInfo,
                      invoiceType, 
                      setInvoiceType,
                      cartNum, 
                      setCartNum,
                      setPage
                    }}
                  />
                </Route>
              </Switch>
            </div>
            </ScrollToTop>
        </BrowserRouter>
        </>
    )
}

export default CartApp;
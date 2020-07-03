import React, { useState, useEffect } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Navbar from '../components/navbar/navbar';
import CartTitle from '../components/cart/cart-title';
import CartCheckout from '../components/cart/cart-checkout';
import CartCheckOrder from '../components/cart/cart-checkOrder';
import CartPay from '../components/cart/cart-pay';
import CartEnd from '../components/cart/cart-end';

// 切換頁面滾動軸回到最頂部
import ScrollToTop from './scrollToTop'

function CartApp (props) {
console.log(props);
const {cartNum, setCartNum}=props
console.log(cartNum);


  // const {
  //   cartNum,
  //   setCartNum,
  // } = props.allProps;
  // console.log(cartNum);
  
  
  // 會員資料
  // [{"userID":3,"userName":"謝凱成","userPwd":"a94a8fe5ccb19ba61c4c0873d391e987982fbbd3","userPhone":"0919390003","userMail":"003@gmail.com","userBirthday":"1912-09-22","userAddress":"桃園市龜山區公西里013鄰文三一街５０之１號","userImg":"userimg000","created_at":"2019-11-27 13:18:46","updated_at":"2019-11-25 13:18:48"}]
  const [user, setUser] = useState([])

  // 購物車資料
  // [{"PId":22,"PCategoryId":"樂器","PName":"KAWAI  K-30(SNW)直立式鋼琴","PImg":"Product_20200423164441.jpg","PPrice":60000,"PQty":1,"PIntro":"KAWAI  K-30(SNW)直立式鋼琴","Pdesciption":"採用日本原裝打擊系統、音搥、琴弦，外觀歐洲宮庭型","PInstrumentId":"鋼琴","PCompanyId":"F044","PClick":null,"created_at":"2020-08-16T06:18:00.000Z","update_at":"2020-08-17T06:18:00.000Z","PIId":null,"num":1}, 
  // {"PId":22,"PCategoryId":"樂器","PName":"KAWAI  K-30(SNW)直立式鋼琴","PImg":"Product_20200423164441.jpg","PPrice":60000,"PQty":1,"PIntro":"KAWAI  K-30(SNW)直立式鋼琴","Pdesciption":"採用日本原裝打擊系統、音搥、琴弦，外觀歐洲宮庭型","PInstrumentId":"鋼琴","PCompanyId":"F044","PClick":null,"created_at":"2020-08-16T06:18:00.000Z","update_at":"2020-08-17T06:18:00.000Z","PIId":null,"num":1}]
  const [cart, setCart] = useState([])

  // 購物車商品總價
  const [totalPrice, setTotalPrice] = useState(0)

  // 訂單總金額
  const [orderPrice, setOrderPrice] = useState(0)
 
  // 折扣碼資料
  // [{"coupon":"dulcet-20200710"}]
  const [coupon, setCoupon] = useState('') 
  // 會員是否擁有折扣碼，預設為否
  const [haveCoupon, setHaveCoupon] = useState(false)
  // 折扣金額，預設為0
  const [discount, setDiscount] = useState(0) 
  // 折扣碼使用狀態
  const [couponIsUsed, setCouponIsUsed] = useState(false) 


  // 商品列表checkbox勾選狀態，預設為勾選
  // const [ buyProduct, setBuyProduct ] = useState('false');
  // console.log(buyProduct);
  
  // 收件資訊checkbox勾選狀態，預設為不勾選
  const [ checkstate, setcheckstate ] = useState(false);
  // checkcallback函式：點擊時切換checkbox勾選狀態
  const checkcallback = (e) =>{
    // console.log(e.checked)
    setcheckstate(e.checked)
  }
  // 根據checkbox勾選狀態切換收件人資訊畫面
  useEffect(()=>{
    checkcallback(checkstate)
  },[])
  // console.log(checkstate);


  // radio狀態，預設為不選取
  const [ radiostate, setRadiostate ] = useState([false, false, false, false]);  
  // 發票儲存方式，預設為空值
  const [ invoiceType, setInvoiceType ] = useState('');
  // 發票資料，預設為空值 
  const [ invoiceInfo, setInvoiceInfo ] = useState('');  

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
  // console.log(userData); 
  setUser(userData[0])
  }
  
},[])
// console.log('user:'+user[0]);


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
      // console.log("app",couponData); 
      // console.log(couponData[0]['coupon']);           
      setHaveCoupon(true) 
      setCoupon(couponData[0]['coupon'])
    }
  }
},[])
// console.log(haveCoupon);
// console.log(coupon);


// 從localStorage獲取-購物車資料
const cartData = JSON.parse(localStorage.getItem('cart')); 
useEffect(()=>{
  if (cartData===null) {
    return
  } else {
  setCart(cartData)
  } 
},[])  
// console.log('cart:'+cart);


// 從路由獲取node後端資料庫-商品資料
// useEffect(()=>{
//   // sql語法：SELECT * FROM `product` WHERE 1
//   fetch('http://localhost:3030/cart/2', { method: 'GET' })
//   .then((res) => res.json())
//   .then((res) => {
//     // console.log(res);
//     setProduct(res)
//   })
// },[])
// console.log(product)


// 從路由獲取node後端資料庫-購物車資料
// { "cartItemId": "1", "userID": "3", "productCategory": "課程", "productId": "1", "cartNumber": "1" }
// useEffect(()=>{
//   // sql語法：SELECT * FROM `cart` WHERE 1
//   fetch('http://localhost:3030/cart/3', { method: 'GET' })
//   .then((res) => res.json())
//   .then((res) => {
//     // console.log(res);
//     setCart(res)
//   })
// },[])


    return (
        <>
        <Navbar cartNum={cartNum}
          // allProps={{
          //   cartNum,
          //   setCartNum,
          // }}
        />
         <BrowserRouter>
         <ScrollToTop>
            <div className="cart-container">
            <CartTitle />
              <Switch>
                <Route path="/cart/2">
                  <CartCheckOrder                     
                    allProps={{
                        cart,
                        setCart,
                        user,
                        setUser,
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
                    }}
                  />
                </Route>
                <Route path="/cart/4">
                  <CartEnd />
                </Route>
                <Route path="/cart">
                  <CartCheckout
                    allProps={{
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
                        // buyProduct, 
                        // setBuyProduct,
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
                        invoiceInfo, 
                        setInvoiceInfo,
                        invoiceType, 
                        setInvoiceType,
                    }}
                  />
                </Route>
              </Switch>
            </div>
            </ScrollToTop>
        </BrowserRouter>
        {/* <Footer/> */}
        </>
    )
}

export default CartApp;
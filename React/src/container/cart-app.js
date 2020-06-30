import React, { useState, useEffect } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Navbar from '../components/navbar/navbar';
import CartTitle from '../components/cart/cart-title';
import CartCheckout from '../components/cart/cart-checkout';
import CartCheckOrder from '../components/cart/cart-checkOrder';
import CartPay from '../components/cart/cart-pay';
import CartEnd from '../components/cart/cart-end';

function CartApp (props) {
   
  // { cartItemId: 1, img: "商品圖片", product: "商品名稱", price: 商品單價, number: 商品數量 }

  // coupon
  
  const [user, setUser] = useState([])
  // { userID: "", username: "", userAddress: "", userMail: "", userPhone: "" }
  const [product, setProduct] = useState([])
  // { PCategoryId:"", PId: "", PImg: "", PVideo: "", PNname: "", PPrice: "", PQty: "" }
  // const [cartList, setCartList] = useState([])
  // { cartItem: "", userID: "", pruductCategory: "", productId: "", cartNumber: "" }
  const [cart, setCart] = useState([])
  // [{"cartItem":1,"memberId":"Lemon","productCategory":"課程","productId":1,"cartNumber":1,"PName":"【七月】鋼琴 - 平日班","PImg":"Product_20200423164331.jpg","PPrice":100, "PQty":2}, {"cartItem":2,"memberId":"L:","productCategory":"課程","productId":2,"cartNumber":1,"PName":"【七月】鋼琴 - 假日班","PImg":"Product_20200423164331.jpg","PPrice":100, "PQty":2}]
  const [number, setNumber] = useState()
  // let stock = 0; 
  // // console.log(stock);  
  // const coupon = 1500;
  // let itemPrice = 1;
  // const totalPrice = number * itemPrice;  
  // const orderPrice = totalPrice - coupon;


  // 根據checkbox勾選狀態切換收件人資訊畫面
  const [ checkstate, setcheckstate ] = useState(false);
  const checkcallback = (e) =>{
    // console.log(e.checked)
    setcheckstate(e.checked)
  }
  useEffect(()=>{
    checkcallback(checkstate)
  },[])
  // console.log(checkstate);


  // 收件人資訊欄位抓取會員自行填寫內容
  const [ ReceivingName, setReceivingName ] = useState('');
  const [ ReceivingAddress, setReceivingAddress ] = useState('');
  const [ ReceivingPhone, setReceivingPhone ] = useState('');
  const [ ReceivingEmail, setReceivingEmail ] = useState('');


// 從localStorage獲取-會員資料
  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('user')); 
    // console.log(userData); 
    setUser(userData[0])
  },[])
// console.log('user:'+user[0]);


// 從node路由獲取後端資料庫-商品資料
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


// 從node路由獲取後端資料庫-購物車資料
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
 

// 從localStorage獲取-購物車資料
useEffect(()=>{
  const cartData = JSON.parse(localStorage.getItem('cart')); 
  setCart(cartData) 
},[])  
// console.log('cart:'+cart);


    return (
        <>
        <Navbar/>
         <BrowserRouter>
            <div className="cart-container">
            <CartTitle />
              <Switch>
                <Route path="/cart/2">
                  <CartCheckOrder                     
                    allProps={{
                        cart,
                        setCart,
                        // number,
                        // setNumber,
                        user,
                        setUser,
                        // stock,
                        // coupon,
                        // totalPrice,
                        // orderPrice,
                        checkstate,
                        ReceivingName, 
                        ReceivingAddress, 
                        ReceivingPhone, 
                        ReceivingEmail, 
                    }}
                  />
                </Route>
                <Route path="/cart/3">
                  <CartPay />
                </Route>
                <Route path="/cart/4">
                  <CartEnd />
                </Route>
                <Route path="/cart">
                  <CartCheckout
                    title={"購物車結帳"}
                    allProps={{
                        cart,
                        setCart,
                        // number,
                        // setNumber,
                        user,
                        setUser,
                        // stock,
                        // coupon,
                        // itemPrice,
                        // totalPrice,
                        // orderPrice,
                        checkstate,
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
                </Route>
              </Switch>
            </div>
        </BrowserRouter>
        {/* <Footer/> */}
        </>
    )
}

export default CartApp;
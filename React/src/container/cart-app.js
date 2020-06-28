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

  
  const [user, setUser] = useState([])
  // { userID: "", username: "", userAddress: "", userMail: "", userPhone: "" }
  const [product, setProduct] = useState([])
  // { PId: "", PNname: "", PImg: "", PVideo: "", PPrice: "", PQty: "", PCategoryId:"" }
  // const [cartList, setCartList] = useState([])
  // { cartItem: "", userID: "", pruductCategory: "", productId: "", cartNumber: "" }
  const [cart, setCart] = useState([])
  // const [number, setNumber] = useState(cart[0].number)
  // const stock = 5; 
  // const coupon = 1500;
  // const totalPrice = number * cart[0].price;  
  // const orderPrice = totalPrice - coupon;


// 從localStorage獲取-會員資料
useEffect(()=>{
  const userData = JSON.parse(localStorage.getItem('user'));  
  setUser(userData[0])
},[])
// console.log(user[0]);


// 從node路由獲取後端資料庫-商品資料
useEffect(()=>{
  // sql語法：SELECT * FROM `product` WHERE 1
  fetch('http://localhost:3030/cart/2', { method: 'GET' })
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
    setProduct(res)
  })
},[])
// console.log(product)


// 從node路由獲取後端資料庫-購物車資料
// { "cartItemId": "1", "userID": "3", "productCategory": "課程", "productId": "1", "cartNumber": "1" }
useEffect(()=>{
  // sql語法：SELECT * FROM `cart` WHERE 1
  fetch('http://localhost:3030/cart/3', { method: 'GET' })
  .then((res) => res.json())
  .then((res) => {
    // console.log(res);
    setCart(res)
  })
},[])
// console.log(cart)


// 從localStorage獲取-購物車資料
// useEffect(()=>{
//   const cartData = JSON.parse(localStorage.getItem('cart'));  
//   setCart(cartData)
// },[])  
// console.log(cart);


    return (
        <>
        <Navbar title={"購物車結帳"}/>
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
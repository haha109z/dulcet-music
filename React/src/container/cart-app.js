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
  const [cart, setCart] = useState([
    { cartItemId: 1, img: "cart-violin-01", product: "春季吉他班", price: 2000, number: 3 },
    { cartItemId: 2, img: "cart-violin-01", product: "小提琴", price: 5000, number: 5 },
    { cartItemId: 3, img: "cart-violin-01", product: "線上鋼琴班", price: 1800, number: 2 },
  ])
  const [number, setNumber] = useState(cart[0].number)
  const totalPrice = number * cart[0].price;  
  const stock = 5;  

  // { userID: "", username: "", userAddress: "", userMail: "", userPhone: "", }
  const [user, setUser] = useState(
    { userID: 1, username: "Lemon", userAddress: "lemon tree no.123", userMail: "lemon@gmail.com", userPhone: "0911111111", coupon:"dulcet1500" }
  )

  const coupon = 1500;
  const orderPrice = totalPrice - coupon;

  
  // const loginProcess = (loginSuccessCallback) => {
  //   // 執行成功的callback(來自cart-checkout.js)
  //   loginSuccessCallback()
  // }

  // const getUserInfo = () => {       
  //   const userData = JSON.parse(localStorage.getItem('user'));  
  //   return userData;  
  //     setUser(userData)
  // }  
 

//  useEffect(()=>{   
// //  const userData = getUserInfo(); 
    
      
//    const userData = JSON.parse(localStorage.getItem('user'));  
//     if(userData!==null){
//       setUser(userData)
//       console.log(user);
//     }

//  },[])
  

    // if (getUserInfo()) {
    //   const userData = getUserInfo();
      
      
    // // console.log(getUserInfo());
    // // console.log(user[0]);
    // // console.log(user[0]["userID"]);
    // // let userData = getUserInfo();  
    // // let user = userData[0];
    //   // setUser(user)
    // // console.log(user);   

    // // if (user[0]["userID"]) {
    // //   setUser(user)
    // // }
    // //   else {
    // //     setUser({ user: '' })
    // //   }
    // // } else {
    // //   setUser({ user: '' })
    // }

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
                        number,
                        setNumber,
                        user,
                        setUser,
                        stock,
                        coupon,
                        totalPrice,
                        orderPrice,
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
                        number,
                        setNumber,
                        user,
                        setUser,
                        stock,
                        coupon,
                        totalPrice,
                        orderPrice,
                    }}
                  />
                </Route>
                {/* <Redirect to="/cart/"/> */}
              </Switch>
            </div>
        </BrowserRouter>
        {/* <Footer/> */}
        </>
    )
}

export default CartApp;
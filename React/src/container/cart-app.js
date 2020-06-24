import React, { useState } from 'react';
import { BrowserRouter,Switch, Route, Router, Redirect} from 'react-router-dom'

import Navbar from '../components/navbar/navbar';
import CartTitle from '../components/cart/cart-title';
import CartCheckout from '../components/cart/cart-checkout';
import CartCheckOrder from '../components/cart/cart-checkOrder';
import CartPay from '../components/cart/cart-pay';
import CartEnd from '../components/cart/cart-end';

function CartApp (props) {
  
  const [number, setNumber] = useState(0)
  // const stock = 10
  
  // { cartItemId: 1, memberId: 1, productId: 1, cartNumber: 1 }
  // const [cart, setCart] = useState([
  //   { cartItemId: 1, memberId: 3, productId: 1, cartNumber: 1 },
  //   { cartItemId: 2, memberId: 3, productId: 2, cartNumber: 2 },
  //   { cartItemId: 3, memberId: 3, productId: 3, cartNumber: 1 },
  // ])
  
  // const loginProcess = (loginSuccessCallback) => {
  //   // 執行成功的callback(來自cart-checkout.js)
  //   loginSuccessCallback()
  // }

    return (
        <>
        <Navbar title={"購物車結帳"}/>
         <BrowserRouter>
            <div className="cart-container">
            <CartTitle />
              <Switch>
                <Route path="/cart/2">
                  <CartCheckOrder />
                </Route>
                <Route path="/cart/3">
                  <CartPay />
                </Route>
                <Route path="/cart/4">
                  <CartEnd />
                </Route>
                <Route path="/cart">
                  <CartCheckout
                    number={number}
                    setNumber={setNumber}
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
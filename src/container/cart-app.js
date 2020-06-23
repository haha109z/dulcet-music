import React,{ Component} from 'react';
import { BrowserRouter,Switch, Route, Router, Redirect} from 'react-router-dom'

import Navbar from '../components/navbar/navbar';
import CartTitle from '../components/cart/cart-title';
import CartCheckout from '../components/cart/cart-checkout';
import CartCheckOrder from '../components/cart/cart-checkOrder';
import CartPay from '../components/cart/cart-pay';
import CartEnd from '../components/cart/cart-end';

// function CartApp(){

//     return(
//         <>
//             <Navbar />
//             <div className="cart-container">
//                 <CartTitle />
//                 {/* <CartCheckout /> */}
//                 {/* <CartCheckOrder /> */}
//                 {/* <CartPay /> */}
//                 {/* <CartEnd /> */}
//             </div>
//             {/* <Footer />         */}
//         </>
//     )
// }

class CartApp extends Component {
    render() {
      return (
        <>
        <Navbar/>
         <BrowserRouter>
            <div className="cart-container">
            <CartTitle />
              <Switch>
                <Route path="/cart/2" component={CartCheckOrder}></Route>
                <Route path="/cart/3" component={CartPay}></Route>
                <Route path="/cart/4" component={CartEnd}></Route>
                <Route path="/cart" component={CartCheckout}></Route>
                {/* <Redirect to="/cart/"/> */}
              </Switch>
            </div>
        </BrowserRouter>
        {/* <Footer/> */}
        </>
      )
    }
  }

export default CartApp;
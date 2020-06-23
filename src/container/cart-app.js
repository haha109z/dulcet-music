import React,{ Component} from 'react';
import { BrowserRouter,Switch, Route, Router, Redirect} from 'react-router-dom'

import Navbar from '../components/navbar/navbar';
// import CartTitle from '../components/cart/cart-title';
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
            <cartTitle />
              <Switch>
                <Route path="/cart" component={CartCheckout}></Route>
                <Route path="/cart/order" component={CartCheckOrder}></Route>
                <Route path="/cart/pay" component={CartPay}></Route>
                <Route path="/cart/thank" component={CartEnd}></Route>
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
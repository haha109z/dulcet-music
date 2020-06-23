import React,{useState,useEffect} from 'react';
import { BrowserRouter,Switch, Route, Router, Redirect} from 'react-router-dom'

import Navbar from '../components/navbar/navbar';
import CartTitle from '../components/cart/cart-title';
import CartCheckout from '../components/cart/cart-checkout';
// import CartCheckOrder from '../components/cart/cart-checkOrder';
// import CartPay from './components/cart/cart-pay';
// import CartEnd from './components/cart/cart-end';
// import Footer from '../components/footer/footer';

function CartApp(){

    return(
        <>
            <Navbar />
            <div className="cart-container">
                <CartTitle />
                <CartCheckout />
                {/* <CartCheckOrder /> */}
                {/* <CartPay /> */}
                {/* <CartEnd /> */}
            </div>
            {/* <Footer />         */}
        </>
    )
}

// class CartApp extends Component {
//     render() {
//       return (
//         <>
//         <Nav/>
//          <BrowserRouter>
//             <div className="cart-container">
//             <cartTitle />
//               <Switch>
//                 <Route path="/cart/checkout" component={UserData}></Route>
//                 <Route path="/cart/order" component={UserPwd}></Route>
//                 <Route path="/cart/pay" component={UserVoucher}></Route>
//                 <Route path="/cart/thank" component={UserPurchase}></Route>
//                 <Redirect to="/cart/checkout"/>
//               </Switch>
//             </div>
//         </BrowserRouter>
//         {/* <Footer/> */}
//         </>
//       )
//     }
//   }

export default CartApp;
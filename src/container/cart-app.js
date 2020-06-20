import React,{useState,useEffect} from 'react';
import CartCheckout from '../components/cart/cart-checkout';
import CartCheckOrder from '../components/cart/cart-checkOrder';
import CartPay from './components/cart/cart-pay';
import CartEnd from './components/cart/cart-end';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function CartApp(){


    return(
        <>
            {/* <Navbar /> */}
            <CartCheckout />
            <CartCheckOrder />
            <CartPay />
            <CartEnd />
            {/* <Footer />         */}
        </>
    )
}

export default CartApp;
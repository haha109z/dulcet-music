import React,{useState,useEffect} from 'react';
import CartCheckout from '../components/cart/cart-checkout';
import CartCheckOrder from '../components/cart/cart-checkOrder';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function CartApp(){


    return(
        <>
            {/* <Navbar /> */}
            <CartCheckout />
            <CartCheckOrder />
            {/* <Footer />         */}
        </>
    )
}

export default CartApp;
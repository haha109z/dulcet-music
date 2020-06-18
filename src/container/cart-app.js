import React,{useState,useEffect} from 'react';
import CartCheckout from '../components/cart/cart-checkout';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function CartApp(){


    return(
        <>
            {/* <Navbar /> */}
            <CartCheckout />
            {/* <Footer />         */}
        </>
    )
}

export default CartApp;
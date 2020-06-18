import React,{useState,useEffect} from 'react';
import Cart from '../components/cart/cart';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

function CartApp(){


    return(
        <>
            {/* <Navbar /> */}
            <Cart />
            {/* <Footer />         */}
        </>
    )
}

export default CartApp;
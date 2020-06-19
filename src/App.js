import React , { Component }from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link, Redirect} from "react-router-dom";

//Home

import HomeApp from './container/home-app';

//Product

import ProductCourse from './container/product-course';
import ProductVideo from './container/product-video';
import ProductInstrument from './container/product-instrument';
import ProductId from './container/product-id';


//User

import UserApp from './container/user-app';

//News

import News from './container/news';

// Cart
// import CartApp from './container/cart-app';
import CartCheckout from './components/cart/cart-checkout';
import CartCheckOrder from './components/cart/cart-checkOrder';
import CartPay from './components/cart/cart-pay';
import CartEnd from './components/cart/cart-end';

// Login
import AllLoginPage from './components/login/all-login-page';

//UserRegister
import UserRegistered from './components/register/user-register';

// ManufacturerRegistered
import ManufacturerRegistered from './components/register/manufacturer-register';
//Forum
import Forum from './container/Forum';
//AnyQuestion
import AnyQuestion from './container/AnyQuestion';
//About
import About from './container/About';

import AnyQuestionAction from './container/AnyQuestionAction';

// ManufacturerVideo
import ManufacturerVideo from './container/Manufacturer-Video-App'

//Footer

import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <>
      
      <Route path="/" exact>
        <HomeApp />
      </Route>

      <Route path="/course">
        <ProductCourse />
      </Route>
      <Route path="/video">
        <ProductVideo />
      </Route>
      <Route path="/instrument">
        <ProductInstrument />
      </Route>
      <Route path="/product-id">
        <ProductId />
      </Route>

      <Route path="/news" exact>
        <News />
      </Route>
      

      <Route path="/Forum">
        <Forum />
      </Route>

      <Route path="/AnyQuestion">
        <AnyQuestion />
      </Route>
      <Route path="/About">
        <About />
      </Route>
      <Route path="/AnyQuestionAction">
        <AnyQuestionAction />
      </Route>

      <Route path="/user" exact>
        <UserApp />
      </Route>

      <Route path="/ManufacturerVideo">
        <ManufacturerVideo />
      </Route>

      <Route path="/cart" >
        {/* <CartCheckout /> */}
        {/* <CartCheckOrder /> */}
        {/* <CartPay /> */}
        <CartEnd />
      </Route>

      <Route path="/login" >
        <AllLoginPage />
      </Route>

      <Route path="/register/user" >
        <UserRegistered />
      </Route>

      <Route path="/register/manufacturer" >
        <ManufacturerRegistered />
      </Route>
      <Footer />
      </>
    </Router>
  )
}

export default App;

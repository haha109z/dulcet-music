import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

//Home

import HomeApp from './container/home-app'

//Product

import ProductCourse from './container/product-course'
import ProductVideo from './container/product-video'
import ProductInstrument from './container/product-instrument'
import ProductId from './components/product/instrument/product-id'

//User

import UserApp from './container/user-app'

//News

import News from './container/news'
import NewsPages from './components/news/news-pages-Content'

// Cart
import CartApp from './container/cart-app'
import CartCheckout from './components/cart/cart-checkout'
import CartCheckOrder from './components/cart/cart-checkOrder'
import CartPay from './components/cart/cart-pay'
import CartEnd from './components/cart/cart-end'

// Login
import AllLoginPage from './components/login/all-login-page'

//UserRegister
import UserRegistered from './components/register/user-register'

// ManufacturerRegistered
import ManufacturerRegistered from './components/register/manufacturer-register'
//Forum
import Forum from './container/Forum'
//AnyQuestion
import AnyQuestion from './container/AnyQuestion'
//About
import About from './container/About'

import AnyQuestionUser from './container/AnyQuestionUser'
import AnyQuestionClass from './container/AnyQuestionClass'
import AnyQuestionVideo from './container/AnyQuestionVideo'
import AnyQuestionCompany from './container/AnyQuestionCompany'
import AnyQuestionAns from './container/AnyQuestionAns'

// ManufacturerVideo
import ManufacturerVideo from './container/Manufacturer-Video-App'
import ManufacturerInstrument from './container/Manufacturer-Instrument-App'

//Footer
import Footer from './components/footer/footer'

// 切換頁面滾動軸回到最頂部
import ScrollToTop from './container/scrollToTop'

function App() {
  // const [cartArr, setCartArr] = useState({})
  const [cartNum, setCartNum] = useState(0)

  useEffect(() => {
    let cartArr = {}
    cartArr = JSON.parse(localStorage.getItem('cart'))
    if (cartArr != null) {
      setCartNum(JSON.parse(localStorage.getItem('cart')).length)
    }
  })
  return (
    <Router>
      <>
        <ScrollToTop>
          <Route path="/" exact>
            <HomeApp cartNum={cartNum} setCartNum={setCartNum}/>
          </Route>

          <Route path="/course">
            <ProductCourse cartNum={cartNum} setCartNum={setCartNum} />
          </Route>
          <Route path="/video">
            <ProductVideo cartNum={cartNum} setCartNum={setCartNum} />
          </Route>
          <Route path="/instrument">
            <ProductInstrument cartNum={cartNum} setCartNum={setCartNum} />
          </Route>

          <Switch>
            <Route path="/news" exact>
              <News />
            </Route>
            <Route path="/news/:NewsID?">
              <NewsPages />
            </Route>
          </Switch>

          <Route path="/Forum">
            <Forum />
          </Route>

          <Route path="/AnyQuestion">
            <AnyQuestion />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/AnyQuestionUser">
            <AnyQuestionUser />
          </Route>
          <Route path="/AnyQuestionClass">
            <AnyQuestionClass />
          </Route>
          <Route path="/AnyQuestionVideo">
            <AnyQuestionVideo />
          </Route>
          <Route path="/AnyQuestionCompany">
            <AnyQuestionCompany />
          </Route>
          <Route path="/AnyQuestionAns">
            <AnyQuestionAns />
          </Route>

          <Route path="/user">
            <UserApp cartNum={cartNum} setCartNum={setCartNum} />
          </Route>

          <Route path="/ManufacturerVideo">
            <ManufacturerVideo />
          </Route>

          <Route path="/ManufacturerInstrument">
            <ManufacturerInstrument />
          </Route>

          <Route path="/cart">
            {/* <CartCheckout /> */}
            {/* <CartCheckOrder /> */}
            {/* <CartPay /> */}
            {/* <CartEnd /> */}
            <CartApp
              allProps={{
                cartNum,
                setCartNum,
              }}
            />
            {/* <CartApp
              cartNum={cartNum} setCartNum={setCartNum}
            /> */}
          </Route>
          {/* <Route path="/cart1" exact>
          <CartCheckout />
        </Route>
        <Route path="/cart2" exact>
          <CartCheckOrder />
        </Route>
        <Route path="/cart3" exact>
          <CartPay />
        </Route>
        <Route path="/cart4" exact>
          <CartEnd />
        </Route> */}

          <Route path="/login">
            <AllLoginPage cartNum={cartNum} setCartNum={setCartNum}/>
          </Route>

          <Route path="/register/user">
            <UserRegistered cartNum={cartNum} setCartNum={setCartNum}/>
          </Route>

          <Route path="/register/manufacturer">
            <ManufacturerRegistered />
          </Route>
          <Footer />
        </ScrollToTop>
      </>
    </Router>
  )
}

export default App

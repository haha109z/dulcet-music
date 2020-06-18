import React , { Component }from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link, Redirect} from "react-router-dom";

//Home

import HomeApp from'./container/home-app';

//Product

import ProductCourse from './container/product-course';
import ProductVideo from './container/product-video';
import ProductInstrument from './container/product-instrument';

//User

import UserApp from './container/user-app';

//News

import News from './container/news';

//Footer

import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <>
      <Route path="/" exact>
        <HomeApp />
      </Route>
      
      <Route path="/course" exact>
        <ProductCourse />
      </Route>
      <Route path="/video" exact>
        <ProductVideo />
      </Route>
      <Route path="/instrument" exact>
        <ProductInstrument />
      </Route>

      <Route path="/news" exact>
        <News />
      </Route>

      <Route path="/user" exact>
        <UserApp />
      </Route>

      <Footer />
      </>
    </Router>

    
  )
}

export default App;

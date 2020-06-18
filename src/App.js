import React , { Component }from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link, Redirect} from "react-router-dom";



import HomeApp from'./container/home-app';
import Footer from'./components/footer/footer';

import Test from './container/test';
import ProductInstrument from './container/product-instrument';
import UserApp from './container/user-app';
import News from './container/news';

function App() {
  return (
    <Router>
      <>
      <Route path="/" exact>
        <HomeApp />
      </Route>
      <Route path="/test" >
        <Test />
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

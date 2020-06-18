import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import HomeApp from'./container/home-app';
import Footer from'./components/footer/footer';

import ProductCourse from './container/product-course';
import ProductVideo from './container/product-video';
import ProductInstrument from './container/product-instrument';

import News from './container/news';

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

      <Footer />
      </>
    </Router>
  )
}

export default App;

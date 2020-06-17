import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import HomeApp from'./container/home-app';
import Footer from'./components/footer/footer';

import Test from './container/test';

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
      <Footer />
      </>
    </Router>
  )
}

export default App;

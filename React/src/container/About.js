import React from 'react'

import Navbar from '../components/navbar/navbar'

import AboutList from '../components/About/AboutList/AboutList'

function About(props) {
  const {
    cartNum, 
    setCartNum,
  }=props
    return (
      <>
        <Navbar  cartNum={cartNum}
          setCartNum={setCartNum}/>
  
        {/* <ForumCard /> */}
        {/* <AnyQuestion /> */}
        <AboutList />
        
  
      
      </>
    )
  }
  
  export default About
  
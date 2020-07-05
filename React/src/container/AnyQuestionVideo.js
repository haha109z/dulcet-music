import React from 'react'

import Navbar from '../components/navbar/navbar'
import AnyQuestionVideo from '../components/AnyQuestion/AnyQuestionList/AnyQuestionVideo'

function Forum(props) {
  const {
    cartNum, 
    setCartNum,
  }=props
    return (
      <>
        <Navbar cartNum={cartNum}
          setCartNum={setCartNum}/>
  
        {/* <ForumCard /> */}
        {/* <AnyQuestion /> */}
        <AnyQuestionVideo />
        
  
      
      </>
    )
  }
  
  export default Forum
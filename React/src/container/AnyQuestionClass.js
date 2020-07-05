import React from 'react'

import Navbar from '../components/navbar/navbar'
import AnyQuestionClass from '../components/AnyQuestion/AnyQuestionList/AnyQuestionClass'

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
        <AnyQuestionClass />
        
  
      
      </>
    )
  }
  
  export default Forum
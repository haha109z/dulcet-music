import React from 'react'

import Navbar from '../components/navbar/navbar'
import AnyQuestionAns from '../components/AnyQuestion/AnyQuestionList/AnyQuestionAns'

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
        <AnyQuestionAns />
        
  
      
      </>
    )
  }
  
  export default Forum
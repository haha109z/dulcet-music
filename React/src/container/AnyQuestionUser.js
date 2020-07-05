import React from 'react'

import Navbar from '../components/navbar/navbar'
import AnyQuestionUser from '../components/AnyQuestion/AnyQuestionList/AnyQuestionUser'

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
        <AnyQuestionUser />
        
  
      
      </>
    )
  }
  
  export default Forum
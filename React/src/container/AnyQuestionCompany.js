import React from 'react'

import Navbar from '../components/navbar/navbar'
import AnyQuestionCompany from '../components/AnyQuestion/AnyQuestionList/AnyQuestionCompany'

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
        <AnyQuestionCompany />
        
  
      
      </>
    )
  }
  
  export default Forum
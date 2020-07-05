import React from 'react'

import Navbar from '../components/navbar/navbar'
import AnyQuestion from '../components/AnyQuestion/AnyQuestionList/AnyQuestion'

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
      <AnyQuestion />
      {/* <AboutList /> */}
      

    
    </>
  )
}

export default Forum

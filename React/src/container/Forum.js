import React from 'react'



import Navbar from '../components/navbar/navbar'


import ForumCard from '../components/ForumComponents/ForumCard/ForumCard'


function Forum(props) {
  const {
    cartNum, 
    setCartNum,
  }=props
  return (
    <>
   <Navbar 
          cartNum={cartNum}
          setCartNum={setCartNum}
          // allProps={{
          //   cartNum,
          //   setCartNum,
          // }}
        />

      <ForumCard/>
    

    </>
  )
}

export default Forum

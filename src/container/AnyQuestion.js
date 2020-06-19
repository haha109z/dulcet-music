import React from 'react'



import Navbar from '../components/drive/navbar/navbar'
import Footer from '../components/drive/footer/footer'

import ForumCard from '../components/ForumComponents/ForumCard/ForumCard'
import AboutList from '../components/About/AboutList/AboutList'
import AnyQuestion from '../components/AnyQuestion/AnyQuestionList/AnyQuestion'

function Forum() {
  return (
    <>
      <Navbar />

      {/* <ForumCard /> */}
      <AnyQuestion />
      {/* <AboutList /> */}
      

      <Footer />
    </>
  )
}

export default Forum

import React from 'react'

import Navbar from '../components/drive/navbar/navbar'
import Footer from '../components/drive/footer/footer'
import AboutList from '../components/About/AboutList/AboutList'

function About() {
    return (
      <>
        <Navbar />
  
        <ForumCard />
        {/* <AnyQuestion /> */}
        <AboutList />
        
  
        <Footer />
      </>
    )
  }
  
  export default About
  
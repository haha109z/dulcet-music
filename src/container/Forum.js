import React from 'react'

import './Forum.css'

import Navbar from '../components/drive/navbar/navbar'
import Footer from '../components/drive/footer/footer'

import ForumCard from '../components/ForumComponents/ForumCard/ForumCard'
import AboutList from '../components/About/AboutList/AboutList'
import AnyQuestion from '../components/AnyQuestion/AnyQuestionList/AnyQuestion'
import AnyQuestionAction from '../components/AnyQuestion/AnyQuestionList/AnyQuestionAction'
function Forum() {
  return (
    <>
      <Navbar />

      {/* <ForumCard /> */}
      {/* <AnyQuestion /> */}
      {/* <AboutList /> */}
      <AnyQuestionAction />

      <Footer />
    </>
  )
}

export default Forum

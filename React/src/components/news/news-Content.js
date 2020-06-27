import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'
import Content from './news-Content-content'

function NewsContent(props) {
  const [content, setContent] = useState([])

  async function getContent() {
    fetch(`http://localhost:3030/news/newsList`, {
      method: 'POST',
      body: JSON.stringify(),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setContent(json)
      })
      
  }

  useEffect(() => {
    // Your code here
    getContent()
  }, [])

  return (
    <>
    {content ? console.log('content',content[0]):''}
      <div className="news-ContentContainer">

        {content.map((cc, index) => (
            <Content
            NewsDateTitle={cc.NewsDateTitle}
            NewsAddress={cc.NewsAddress}
            NewsTitle={cc.NewsTitle}
            NewsContent={cc.NewsContent}
            NewsImg={cc.NewsImg}
             />
              
            ))}


        {/*頁數*/}
        <div className="news-Content">
          <Router>
            <div id="news-pages-list">
              <Link className="news-pages" to="">
                <IoMdArrowDropleft className="news-pages-arrows" />
              </Link>
              <Link className="news-pages" to="">
                1
              </Link>
              <Link className="news-pages" to="">
                2
              </Link>
              <Link className="news-pages" to="">
                3
              </Link>
              <Link className="news-pages" to="">
                <IoMdArrowDropright className="news-pages-arrows" />
              </Link>
            </div>
          </Router>
        </div>
      </div>
    </>
  )
}

export default NewsContent

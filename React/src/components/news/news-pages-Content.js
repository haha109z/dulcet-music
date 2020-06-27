import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PageContent from './news-pages-Content-content'

function NewsPagesContent(props) {
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
  console.log(content[0])

  useEffect(() => {
    // Your code here
    getContent()
    
  }, [])
  
    return (
      <>
        
      <div className="news-ContentContainer">

        {content.map((pc, index) => (
            <PageContent
            NewsDateTitle={pc.NewsDateTitle}
            NewsAddress={pc.NewsAddress}
            NewsTitle={pc.NewsTitle}
            NewsContent={pc.NewsContent}
            NewsImg={pc.NewsImg}
            NewsLink={pc.NewsLink}
            
             />
               
            ))}
            
        </div>
        
      </>

    )
    
  }
  export default NewsPagesContent
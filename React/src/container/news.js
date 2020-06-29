import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import NewsSliders from '../components/news/news-Sliders'
// import NewsCategoryA from '../components/news/news-Category'
import NewsContent from '../components/news/news-Content'
import NewsHot from '../components/news/news-Hot'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import { useParams } from 'react-router-dom'

function News() {
  const { NewsDate,NewsCategory } = useParams();

  const [content, setcontent] = useState([])

async function getcontent() {
  fetch(`http://localhost:3030/news/newsdatecty`, {
    method: 'POST',
    body: JSON.stringify({ NewsDate , NewsCategory }),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      setcontent(json)
      console.log(json)
    })
}
useEffect(() => {
  getcontent()
}, [])


return(
  <>
  
      
      <Navbar />
      <NewsSliders />
      <NewsHot />
      {content.map((cc) => 
          {  return(
            <>
            <div className="news-ContentContainer">
              
                <NewsContent
                  NewsDateTitle={cc.NewsDateTitle}
                  NewsAddress={cc.NewsAddress}
                  NewsTitle={cc.NewsTitle}
                  NewsContent={cc.NewsContent}
                  NewsImg={cc.NewsImg}
                  NewsID={cc.NewsID}
                  NewsCategory={cc.NewsCategory}
                />
                </div>
            </>
          )
            
          }
        )
      }  

        

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
    
    

  </>


  )



}

export default News

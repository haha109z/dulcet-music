import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import PagesBanner from './news-pages-Banner-banner'


function NewsPagesBanner(props) {

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
      
        {content.map((pb, index) => (
            <PagesBanner
            NewsDateTitle={pb.NewsDateTitle}
            NewsAddress={pb.NewsAddress}
            NewsTitle={pb.NewsTitle}
            NewsContent={pb.NewsContent}
            NewsImg={pb.NewsImg}
            NewsLink={pb.NewsLink}
            NewsCategory={pb.NewsCategory}
            NewsID={pb.NewsID}
             />
              
            ))}
        

    {/* <div className="news-pages-Container news-h5 news-LetterSpacing news-NotoSerifTC">

        <Link className="news-pages-Breadcrumb" to="/news">所有列表</Link>&nbsp;/&nbsp;
        <Link className="news-pages-Breadcrumb" to="">活動</Link>&nbsp;/&nbsp;
        <Link className="news-pages-Breadcrumb" to="">古典管絃樂團2020夏季音樂會</Link>
        
    </div>

    <div className="news-pages-BannerContainer">

        <img className="news-pages-BannerImg" src={require("../../img/news/news_a001.jpg")}></img>
        
    </div>

    <div className="news-pages-BannerContent">

        <p className="news-H2 news-LetterSpacing">古典管絃樂團2020夏季音樂會</p>
        <p className="news-H2 news-LetterSpacing">109年7月5號(日)14:30</p>
        <p className="news-H2 news-LetterSpacing"><FaMapMarkerAlt className="news-H2" /> 臺中市中山堂</p>

    </div>

    <div className="news-pages-background"></div> */}

    </>
  )
}

export default NewsPagesBanner
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'

function NewsPagesBanner(props) {
  return (
    <>

    <div className="news-pages-Container news-h5 news-LetterSpacing news-NotoSerifTC">

        <Link className="news-pages-Breadcrumb" to="/news">所有列表</Link>
        /
        <Link className="news-pages-Breadcrumb" to="">活動</Link>
        /
        <Link className="news-pages-Breadcrumb" to="">古典管絃樂團2020夏季音樂會</Link>
    </div>

    <div className="news-pages-BannerContainer">

        <img className="news-pages-BannerImg" src={require("../../img/news/news_a003.jpg")}></img>
        
    </div>

    <div className="news-pages-Content">

        <p className="news-H2 news-LetterSpacing">古典管絃樂團2020夏季音樂會</p>
        <p className="news-H2 news-LetterSpacing">109年7月5號(日)14:30</p>
        <p className="news-H2 news-LetterSpacing"><FaMapMarkerAlt className="news-H2" /> 臺中市中山堂</p>

    </div>

    <div className="news-pages-background"></div>

    </>
  )
}

export default NewsPagesBanner
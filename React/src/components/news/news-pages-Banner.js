import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'

function NewsPagesBanner(props) {


  return (
    <>
      <div className="news-pages-Container news-h5 news-LetterSpacing news-NotoSerifTC">
        <Link className="news-pages-Breadcrumb" to="/news">
          所有列表
        </Link>
        &nbsp;/&nbsp;
        <Link className="news-pages-Breadcrumb" to={'/' + props.data.NewsCategory}>
          {props.data.NewsCategory}
        </Link>
        &nbsp;/&nbsp;
        <Link className="news-pages-Breadcrumb" to={'/news-pages'+'/'+props.data.NewsCategory +'/' + props.NewsID}>
          {props.data.NewsTitle}
        </Link>
      </div>
      
        <div className="news-pages-BannerContainer">
          <img
            className="news-pages-BannerImg"
            src={`http://localhost:3030/images/news/${props.data.NewsImg}`}
          ></img>
        </div>

    <div className="news-pages-background">
      <div className="news-pages-BannerContent">
        <p className="news-H2 news-LetterSpacing">{props.data.NewsTitle}</p>
        <p className="news-H2 news-LetterSpacing">{props.data.NewsDateTitle}</p>
        <p className="news-H2 news-LetterSpacing">
          <FaMapMarkerAlt className="news-H3" /> {props.data.NewsAddress}
        </p>
      </div>
      </div>
    </>
  )
}

export default NewsPagesBanner

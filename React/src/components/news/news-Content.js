import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'


function NewsContentContent(props) {

  return (
    <>

        <div className="news-Content">
        <img
          className="news-ContentImg"
          src={`http://localhost:3030/images/news/${props.NewsImg}`}
        ></img>

        <p className="news-H3 news-LetterSpacing news-NotoSerifTC news-ShareContent">
          <Link className="news-Share">
            <FaShareAlt class="news-H3" />
          </Link>
          {props.NewsTitle}
          <br />
          {props.NewsDateTitle}
          <br />
          <FaMapMarkerAlt className="news-H3" /> {props.NewsAddress}
        </p>
        <div className="news-p-content">
          <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
            {props.NewsContent}
          </p>
        </div>

        <div className="news-ContetnBtn">
          <Link
            className="news-Merienda news-ViewBtn"
            to={'/news-pages' + '/' + props.NewsCategory + '/' + props.NewsID}
          >
            View More...
          </Link>
        </div>

        <hr className="news-Hr"></hr>
      </div>
      
    </>
  )
}

export default NewsContentContent

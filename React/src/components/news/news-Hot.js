import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function NewsHot(props) {
  return (
    <>
      <div className="news-HotContainer">
        <div className="news-Hot news-NotoSerifTC">
          <div className="news-H4 news-HotFont">HOT</div>

          <div className="news-HotContent">
            <img
              className="news-HotImg"
              src={require('../../img/news/news_h002.png')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="">普雷勒斯普雷...</Link>
            </div>
          </div>

          <div className="news-HotContent">
            <img
              className="news-HotImg"
              src={require('../../img/news/news_h002.png')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="">普雷勒斯普雷...</Link>
            </div>
          </div>

          <div className="news-HotContent">
            <img
              className="news-HotImg"
              src={require('../../img/news/news_h002.png')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="">普雷勒斯普雷...</Link>
            </div>
          </div>

          <div className="news-HotContent">
            <img
              className="news-HotImg"
              src={require('../../img/news/news_h002.png')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="">普雷勒斯普雷...</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default NewsHot

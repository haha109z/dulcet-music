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
              src={require('../../img/news/news_019.jpg')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="/news-content/19">【八月】小提...</Link>
            </div>
          </div>

          <div className="news-HotContent">
            <img
              className="news-HotImg"
              src={require('../../img/news/news_009.jpg')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="/news-content/9">衛服部公告...</Link>
            </div>
          </div>

          <div className="news-HotContent">
            <img
              className="news-HotImg"
              src={require('../../img/news/news_023.jpg')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="/news-content/23">【八月】烏克...</Link>
            </div>
          </div>

          <div className="news-HotContent">
            <img
              className="news-HotImg"
              src={require('../../img/news/news_008.jpg')}
            ></img>

            <div className="news-HotContentp news-LetterSpacing">
              <Link to="/news-content/8">高雄女中合唱...</Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default NewsHot

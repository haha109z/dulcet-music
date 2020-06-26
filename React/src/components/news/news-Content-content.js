import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'



function NewsContentContent(props) {

  return (
    <>
          <div className="news-Content">
            <img className="news-ContentImg" src={`http://localhost:3030/images/news/${props.NewsImg}`}></img>
            
            <Link className="news-Share"><FaShareAlt class="news-H3" /></Link>
              <p className="news-H3 news-LetterSpacing news-NotoSerifTC">
                {props.NewsDateTitle}<br />
                <FaMapMarkerAlt className="news-H3" /> {props.NewsAddress}<br />
                {props.NewsTitle}
              </p>
              <div className="news-p-content">
              <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
                {props.NewsContent}</p>
              </div>

              <div className="news-ContetnBtn">
                <Link className="news-Merienda news-ViewBtn" to="/news-pages">View More...</Link>
              </div>

              <hr className="news-Hr"></hr>

          </div>

          {/* <div className="news-Content">

            <img className="news-ContentImg" src={require("../../img/news/news_a001.jpg")}></img>

            <Link><FaShareAlt class="news-Share news-H3" /></Link>
              <p className="news-H3 news-LetterSpacing news-NotoSerifTC">
                109年12月26號(六)19:00-21:00<br />
                <FaMapMarkerAlt className="news-H3" /> 臺中國家歌劇院 大劇院<br />
                NSO《王者之音》
              </p>

              <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
                動人的畫面往往沉澱在音樂裡，讓人聽了若有所思、心有所感...<br />
                旋律之王柴科夫斯基，以兩大家族衝突為基底寫下的《羅密歐與茱麗葉幻想序曲》，以美得不可思議的動人旋律展現盪氣迴腸的深情...
              </p>

              <div className="news-ContetnBtn">
                <Link className="news-Merienda news-ViewBtn" to="/news-pages">View More...</Link>
              </div>

              <hr className="news-Hr"></hr>

          </div> */}

          {/* <div className="news-Content">

            <img className="news-ContentImg" src={require("../../img/news/news_a001.jpg")}></img>
              
            <Link><FaShareAlt class="news-Share news-H3" /></Link>
              <p className="news-H3 news-LetterSpacing news-NotoSerifTC">
                109年12月26號(六)19:00-21:00<br />
                <FaMapMarkerAlt className="news-H3" /> 臺中國家歌劇院 大劇院<br />
                NSO《王者之音》
              </p>

              <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
                動人的畫面往往沉澱在音樂裡，讓人聽了若有所思、心有所感...<br />
                旋律之王柴科夫斯基，以兩大家族衝突為基底寫下的《羅密歐與茱麗葉幻想序曲》，以美得不可思議的動人旋律展現盪氣迴腸的深情...
              </p>

              <div className="news-ContetnBtn">
                <Link className="news-Merienda news-ViewBtn" to="/news-pages">View More...</Link>
              </div>

              <hr className="news-Hr"></hr>

          </div> */}

         

    </>
  )
}

export default NewsContentContent
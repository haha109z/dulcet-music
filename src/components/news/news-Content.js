import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'



function NewsContent(props) {
  return (
    <>
      <div className="news-ContentContainer">

          <div className="news-Content">

            <img className="news-ContentImg" src={require("../../img/News_P001.jpg")}></img>
            <FaShareAlt />
              <p className="news-H3 news-LetterSpacing news-NotoSerifTC">
                109年12月26號(六)19:00-21:00<br />
                <FaMapMarkerAlt className="news-H3" /> 臺中國家歌劇院 大劇院<br />
                NSO《王者之音》
              </p>

              <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
                動人的畫面往往沉澱在音樂裡，讓人聽了若有所思、心有所感...<br />
                旋律之王柴科夫斯基，以兩大家族衝突為基底寫下的《羅密歐與茱麗葉幻想序曲》，以美得不可思議的動人旋律展現盪氣迴腸的深情...
              </p>

              <div className="news-Merienda news-ViewBtn">
                <button type="button">View More...</button>
              </div>

              <hr className="news-Hr"></hr>

          </div>

          <div className="news-Content">

            <img className="news-ContentImg" src={require("../../img/News_P001.jpg")}></img>

              <p className="news-H3 news-LetterSpacing news-NotoSerifTC">
                109年12月26號(六)19:00-21:00<br />
                臺中國家歌劇院 大劇院<br />
                NSO《王者之音》
              </p>

              <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
                動人的畫面往往沉澱在音樂裡，讓人聽了若有所思、心有所感...<br />
                旋律之王柴科夫斯基，以兩大家族衝突為基底寫下的《羅密歐與茱麗葉幻想序曲》，以美得不可思議的動人旋律展現盪氣迴腸的深情...
              </p>

              <div className="news-Merienda news-ViewBtn">
                <button type="button">View More...</button>
              </div>

              <hr className="news-Hr"></hr>

          </div>

          <div className="news-Content">

            <img className="news-ContentImg" src={require("../../img/News_P001.jpg")}></img>

              <p className="news-H3 news-LetterSpacing news-NotoSerifTC">
                109年12月26號(六)19:00-21:00<br />
                臺中國家歌劇院 大劇院<br />
                NSO《王者之音》
              </p>

              <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
                動人的畫面往往沉澱在音樂裡，讓人聽了若有所思、心有所感...<br />
                旋律之王柴科夫斯基，以兩大家族衝突為基底寫下的《羅密歐與茱麗葉幻想序曲》，以美得不可思議的動人旋律展現盪氣迴腸的深情...
              </p>

              <div className="news-Merienda news-ViewBtn">
                <button type="button">View More...</button>
              </div>

              <hr className="news-Hr"></hr>

          </div>

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
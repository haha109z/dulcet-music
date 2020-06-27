import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function NewsPagesContentContent(props) {
    return (
      <>
        
            <div className="news-pages-ContentContent">
                <pre id="NewsContent" className="news-p news-LetterSpacing news-NotoSerifTC text-break news-color14">
                {props.NewsContent}
                </pre>
            </div>

            <hr className="news-pages-ContentHr" />

            <div className="news-pages-Connection">

                <ul className="news-pages-ul d-flex  news-LetterSpacing news-NotoSerifTC">
                    <li>
                    <a href={`${props.NewsLink}`}><AiFillEdit className="news-H3" /><br />報名資訊</a>
                    
                    </li>

                    <li>
                    <a href="/about"><AiOutlineMail className="news-H3" /><br />聯絡我們</a>
                    
                    </li>
                </ul>

            <hr className="news-pages-ContentHr" />

            <div className="news-pages-ContentBack news-LetterSpacing news-NotoSerifTC">
                    <Link className="news-pages-ContentBtn" to="/news">返回列表</Link>
              </div>

            </div>

      </>
    )
  }
  
  export default NewsPagesContentContent
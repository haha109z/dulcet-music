import React, { useState, useEffect } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'

import { withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getNewsPageContent } from '../../redux/action-types'

function NewsPagesContent(props) {
  
  const NewsID = props.match.params.NewsID ? props.match.params.NewsID : ''

  console.log(NewsID)


  useEffect(() => {
    props.getNewsPageContent(props.match.params.NewsID)
    
  }, [])

  return (
    <>

        <p>{props.match.params.NewsID ? console.log(props) : ''}</p>
 

     
{/* 
      <div className="news-pages-Container news-h5 news-LetterSpacing news-NotoSerifTC">
        <Link className="news-pages-Breadcrumb" to="/news">
          所有列表
        </Link>
        &nbsp;/&nbsp;
        <Link
          className="news-pages-Breadcrumb"
          to={'/' + (props.article ? props.article.NewsCategory : '')}
        >
          {props.article[0] ? props.article[0].NewsCategory : ''}
        </Link>
        &nbsp;/&nbsp;
        <Link
          className="news-pages-Breadcrumb"
          to={
            '/news-pages' + '/' + props.article[0].NewsCategory + '/' + props.article[0].NewsID
          }
        >
        {props.article[0] ? props.article[0].NewsTitle : ''}
        </Link>
      </div>

      <div className="news-pages-BannerContainer">
        <img
          className="news-pages-BannerImg"
          src={`http://localhost:3030/images/news/`+props.article[0].NewsImg}
        ></img>
      </div>

      <div className="news-pages-background">
        <div className="news-pages-BannerContent">
          <p className="news-H2 news-LetterSpacing">{props.article[0] ? props.article[0].NewsTitle : ''}</p>
          <p className="news-H2 news-LetterSpacing">
          {props.article[0] ? props.article[0].NewsTitle : ''}
          </p>
          <p className="news-H2 news-LetterSpacing">
            <FaMapMarkerAlt className="news-H3" /> {props.article[0] ? props.article[0].NewsAddress : ''}
          </p>
        </div>
      </div>

      <div className="news-pages-ContentContent">
        <pre
          id="NewsContent"
          className="news-p news-LetterSpacing news-NotoSerifTC text-break news-color14"
        >
          {props.article[0] ? props.article[0].NewsContent : ''}
        </pre>
      </div>

      <hr className="news-pages-ContentHr" />

      <div className="news-pages-Connection">
        <ul className="news-pages-ul d-flex  news-LetterSpacing news-NotoSerifTC">
          <li>
            <a href={`"`+props.article[0].NewsLink+`"`}>
              <AiFillEdit className="news-H3" />
              <br />
              相關資訊
            </a>
          </li>

          <li>
            <a href="/about">
              <AiOutlineMail className="news-H3" />
              <br />
              聯絡我們
            </a>
          </li>
        </ul>

        <hr className="news-pages-ContentHr" />

        <div className="news-pages-ContentBack news-LetterSpacing news-NotoSerifTC">
          <Link className="news-pages-ContentBtn" to="/news">
            返回列表
          </Link>
        </div>
      </div> */}
    </>
  )
}


const mapStateToProps = (store) => {
    return { post: store.getNewsPageContent }
  }
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getNewsPageContent }, dispatch)
  }
  export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(NewsPagesContent)
  )
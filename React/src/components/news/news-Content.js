import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaShareAlt } from 'react-icons/fa'

import { withRouter } from 'react-router-dom'

function NewsContent(props) {

  let showNewsCategory = ''
  if (props.data.NewsCategory === '課程') {
    showNewsCategory = '課程'
  } else if (props.data.NewsCategory === '活動') {
    showNewsCategory = '活動'
  } else if (props.data.NewsCategory === '公告') {
    showNewsCategory = '公告'
  } else {
    showNewsCategory = '全部'
  }

  return (
    <>

      
      <div className="news-Content">
        <img
          className="news-ContentImg"
          src={`http://localhost:3030/images/news/${props.data.NewsImg}`}
        ></img>

        <p className="news-H3 news-LetterSpacing news-NotoSerifTC news-ShareContent">
          <Link className="news-Share" to="">
            <FaShareAlt class="news-H3" />
          </Link>
          {props.data.NewsTitle}
          <br />
          {props.data.NewsDateTitle}
          <br />
          <FaMapMarkerAlt className="news-H3" /> {props.data.NewsAddress}
        </p>
        <div className="news-p-content">
          <p className="news-p news-LetterSpacing news-Color79 news-NotoSerifTC">
            {props.data.NewsContent}
          </p>
        </div>

        <div className="news-ContetnBtn">
          <Link
            className="news-Merienda news-ViewBtn"
            to={'/news' + '/'+ props.data.NewsID}
          >
            View More...
          </Link>
        </div>

        <hr className="news-Hr"></hr>
      </div>
    </>
  )
}

// const mapStateToProps = (store) => {
//   return { post: store.getNewsContent }
// }

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ getNewsContent }, dispatch)
// }
// // 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
// //const mapDispatchToProps = null

// // 高階元件的樣式，必要的
// // 使用actionCreators作全綁定
export default withRouter(NewsContent)



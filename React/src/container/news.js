import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import NewsSliders from '../components/news/news-Sliders'
import NewsContentA from '../components/news/news-Content'
import NewsHot from '../components/news/news-Hot'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'

import { withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getNewsContent } from '../redux/action-types'

function News(props) {
  useEffect(() => {
    console.log(props)
    props.getNewsContent()
  }, [])

  const [newNewsCategory, setNewNewsCategory] = useState('')
  function changeNewsCategory(newNewsCategory) {
    setNewNewsCategory(newNewsCategory)
  }

  const [newNewsDate, setNewNewsDate] = useState('')
  function changeNewsDate(newNewsDate) {
    setNewNewsDate(newNewsDate)
  }

  return (
    <>
      <Navbar />
      <NewsSliders />
      <div className="news-ContentContainer">
        <div className="news-CategoryContainer d-flex news-NotoSerifTC">
          <div className="news-Category">
            <ul className="d-flex justify-content-start">
              <Link>
                <li>
                  <p onClick={() => changeNewsCategory('')}>全部</p>
                </li>
              </Link>
              <Link>
              <li>
                <p onClick={() => changeNewsCategory('課程')}>課程</p>
              </li>
              </Link>
              <Link>
              <li>
                <p onClick={() => changeNewsCategory('公告')}>公告</p>
              </li>
              </Link>
              <Link>
              <li>
                <p onClick={() => changeNewsCategory('活動')}>活動</p>
              </li>
              </Link>
            </ul>
          </div>
        </div>
        <NewsHot />

        {props.post &&
          props.post.map((value, index) => {

            if (newNewsCategory) {
              if (props.post[index].NewsCategory === newNewsCategory) {
                return (
                  <NewsContentA
                    key={index}
                    data={props.post[index]}
                    changeNewsCategory={props.post.NewsCategory}
                  />
                )
              }
            } else {
              return <NewsContentA key={index} data={props.post[index]} />
            }

          })}
      </div>

      <div className="news-ContentContainer">
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

const mapStateToProps = (store) => {
  return { post: store.getNewsContent }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNewsContent }, dispatch)
}
// 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
//const mapDispatchToProps = null

// 高階元件的樣式，必要的
// 使用actionCreators作全綁定
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News))

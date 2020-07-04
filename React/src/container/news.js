import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Navbar from '../components/navbar/navbar'
import NewsSliders from '../components/news/news-Sliders'
import NewsContentA from '../components/news/news-Content'
import NewsCategory from '../components/news/news-Category'
import NewsHot from '../components/news/news-Hot'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import { Pagination } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import { getNewsContent, getNewsCategory } from '../redux/action-types'

function News(props) {
  const page = props.match.params.page || ''
  console.log(page)

  const { cartNum, setCartNum } = props

  useEffect(() => {
    if (new URLSearchParams(props.location.search).get('NewsCategory')) {
      props.getNewsCategory(page)
      console.log(props.location.search)
    } else {
      props.getNewsContent(page)
    }
  }, [])

  let pages = []
  for (
    let number = props.post.page - 5;
    number <= props.post.page + 5;
    number++
  ) {
    if (number < 1 || number > props.post.totalPages) continue

    pages.push(
      <Pagination.Item
        key={number}
        onClick={() => {
          if (new URLSearchParams(props.location.search).get('NewsCategory')) {
            props.history.push('/news/' + number + props.location.search)
            props.getNewsCategory(number)
          } else {
            props.history.push('/news/' + number)
            props.getNewsContent(number)
          }
        }}
      >
        {number}
      </Pagination.Item>
    )
  }

  //設定分頁容納節點
  const paginationBasic = (
    <Pagination className="d-flex justify-content-center news-Arrow" size="md">
      <Pagination.Prev
      className="news-Arrow"
        href={
          '/news/' +
          (props.post.page === 1 ? 1 : props.post.page - 1) +
          (new URLSearchParams(props.location.search).get('NewsCategory')
            ? props.location.search
            : '')
        }
      />
      {pages.slice(0, 5)}
      <Pagination.Next
        href={
          '/news/' +
          (props.post.page === props.post.totalPages
            ? props.post.totalPages
            : props.post.page + 1) +
          (new URLSearchParams(props.location.search).get('NewsCategory')
            ? props.location.search
            : '')
        }
      />
    </Pagination>
  )

  return (
    <>
      <Navbar cartNum={cartNum} />
      <NewsSliders />
      
      <div className="news-ContentContainer">
        <NewsCategory />

        <NewsHot />

        {props.post.rows &&
          props.post.rows.map((value, index) => {
            return <NewsContentA key={index} data={props.post.rows[index]} />
          })}
      </div>

      {/*頁數*/}
      <div className="news-ContentContainer">
        <div className="news-Content">{paginationBasic}</div>
      </div>
    </>
  )
}

const mapStateToProps = (store) => {
  return { post: store.getNewsContent }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNewsContent, getNewsCategory }, dispatch)
}
// 不使用這個值，略過後自動綁定store的dispatch方法到這個元件的props
//const mapDispatchToProps = null

// 高階元件的樣式，必要的
// 使用actionCreators作全綁定
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News))

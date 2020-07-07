import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { Row, Col, Nav, Navbar } from 'react-bootstrap'

import { withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//action
import { getNewsContent, getNewsCategory } from '../../redux/action-types'
function NewsCategory(props) {
  const Category = ['課程', '公告', '活動']

  const CategoryLi = Category.map((value, index) => (
    <Nav.Item>
      <Nav.Link
        className="news-Link"
        key={value}
        onClick={() => {
          props.history.push('/news?NewsCategory=' + eval(index + 1))
          props.getNewsCategory(props.match.params.page || '')
        }}
      >
        {value}
      </Nav.Link>
    </Nav.Item>
  ))

  return (
    <>
      <div className="news-CategoryContainer d-flex news-NotoSerifTC">
        <div className="news-Category">
          <Nav className="news-Category-Nav" variant="tabs" defaultActiveKey="/news">
            <Nav.Item>
              <Nav.Link
                className="news-Link"
                onClick={(e) => {
                  props.history.push('/news')
                  props.getNewsContent(props.match.params.page || '')
                  
                }}
              >
                全部
              </Nav.Link>
            </Nav.Item>

            {CategoryLi}
          </Nav>
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getNewsContent, getNewsCategory }, dispatch)
}
export default withRouter(connect(null, mapDispatchToProps)(NewsCategory))

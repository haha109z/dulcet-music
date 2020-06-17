import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa'


function AppFuncTmp(props) {
  return (
    <>
      <div className="product-container">
        <div className="product-picture">
          <svg
            className="product-black-tri"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 470 200"
          >
            <polygon class="cls-1" points="0 0 470 0 0 200 0 0" />
            <path
              class="cls-1"
              d="M465.1,1,1,198.49V1H465.1M470,0H0V200L470,0Z"
            />
          </svg>
          <span id="product-title">精選樂器</span>
          {/* <img id="title-img" src={require('../images/Piano.jpg')} /> */}
        </div>
        <div className="product-wrapper">
          <div className="product-control">
            <select className="product-sort" name="test">
              <option className="product-sort-option">依價格高到低</option>
              <option className="product-sort-option">依價格低到高</option>
            </select>
          </div>
          <div className="product-card-list">
            <div className="product-card">
              <img
                className="product-card-img"
                // src={require('../images/184177.jpg')}
              />
              <div className="product-card-favorite-container">
                <FaHeart className="product-card-favorite" />
              </div>
              <div className="product-card-intro">
                <h4 className="product-card-title">小提琴 實木 DYM SV015</h4>
                <h3 className="product-card-cost">$13,000</h3>
              </div>
            </div>
            <div className="product-card"></div>
            <div className="product-card"></div>
            <div className="product-card"></div>
          </div>
          <div className="product-card-list">
            <div className="product-card">
              <img
                className="product-card-img"
                // src={require('../images/184177.jpg')}
              />
              {/* </div> */}
              <div className="product-card-intro">
                <h4 className="product-card-title">小提琴 實木 DYM SV015</h4>
                <h3 className="product-card-cost">$13,000</h3>
              </div>
            </div>
            <div className="product-card"></div>
            <div className="product-card"></div>
            <div className="product-card"></div>
          </div>
          <Router>

          <div id="product-pages-list">
              <Link className="product-pages" to="">
                <IoMdArrowDropleft className="product-pages-arrows" />
              </Link>
              <Link className="product-pages" to="">
                1
              </Link>
              <Link className="product-pages" to="">
                2
              </Link>
              <Link className="product-pages" to="">
                3
              </Link>
              <Link className="product-pages" to="">
                <IoMdArrowDropright className="product-pages-arrows" />
              </Link>
          </div>
          </Router>

        </div>
      </div>
    </>
  )
}

export default AppFuncTmp

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa'
import ProductPicture from '../product-picture'

function ProductList(props) {
  return (
    <>
      <div className="product-container">
        <ProductPicture productTitle={props.productTitle}/>
        <div className="product-wrapper">
          <div className="product-control">
            <select className="product-sort" name="test">
              <option className="product-sort-option">依價格高到低</option>
              <option className="product-sort-option">依價格低到高</option>
            </select>
          </div>
          <div className="product-card-list">
            <div className="product-video-card">
              <img
                className="product-video-card-img"
                // src={require('../images/184177.jpg')}
              />
              <div className="product-card-favorite-container">
                <FaHeart className="product-card-favorite" />
              </div>
              <div className="product-card-intro">
                <h4 className="product-card-title">【提琴教室】小提琴-01</h4>
                <h5 className="product-video-card-time">1小時05分</h5>
                <p className="product-video-card-desciption">小提琴是提琴家族中最小、音高最高的一種，主要的特點在於其輝煌的聲音、高度的演奏技巧和豐富、廣泛的表現力。讓阿雅老師帶你從基礎開始學會演奏小提琴！</p>
                <h3 className="product-card-cost">$13,000</h3>
              </div>
            </div>
          </div>
          <div className="product-card-list">
            <div className="product-video-card">
              <img
                className="product-video-card-img"
                // src={require('../images/184177.jpg')}
              />
              <div className="product-card-favorite-container">
                <FaHeart className="product-card-favorite" />
              </div>
              <div className="product-card-intro">
                <h4 className="product-card-title">【提琴教室】小提琴-01</h4>
                <h5 className="product-video-card-time">1小時05分</h5>
                <p className="product-video-card-desciption">小提琴是提琴家族中最小、音高最高的一種，主要的特點在於其輝煌的聲音、高度的演奏技巧和豐富、廣泛的表現力。讓阿雅老師帶你從基礎開始學會演奏小提琴！</p>
                <h3 className="product-card-cost">$13,000</h3>
              </div>
            </div>
          </div>
          <div className="product-card-list">
            <div className="product-video-card">
              <img
                className="product-video-card-img"
                // src={require('../images/184177.jpg')}
              />
              <div className="product-card-favorite-container">
                <FaHeart className="product-card-favorite" />
              </div>
              <div className="product-card-intro">
                <h4 className="product-card-title">【提琴教室】小提琴-01</h4>
                <h5 className="product-video-card-time">1小時05分</h5>
                <p className="product-video-card-desciption">小提琴是提琴家族中最小、音高最高的一種，主要的特點在於其輝煌的聲音、高度的演奏技巧和豐富、廣泛的表現力。讓阿雅老師帶你從基礎開始學會演奏小提琴！</p>
                <h3 className="product-card-cost">$13,000</h3>
              </div>
            </div>
          </div>
          <div className="product-card-list">
            <div className="product-video-card">
              <img
                className="product-video-card-img"
                // src={require('../images/184177.jpg')}
              />
              <div className="product-card-favorite-container">
                <FaHeart className="product-card-favorite" />
              </div>
              <div className="product-card-intro">
                <h4 className="product-card-title">【提琴教室】小提琴-01</h4>
                <h5 className="product-video-card-time">1小時05分</h5>
                <p className="product-video-card-desciption">小提琴是提琴家族中最小、音高最高的一種，主要的特點在於其輝煌的聲音、高度的演奏技巧和豐富、廣泛的表現力。讓阿雅老師帶你從基礎開始學會演奏小提琴！</p>
                <h3 className="product-card-cost">$13,000</h3>
              </div>
            </div>
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

export default ProductList

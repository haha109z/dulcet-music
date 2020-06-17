import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'

function ProductCategory(props) {
  return (
    <>
      <Router>
        <div className="product-category-wrapper">
          <div className="product-category">
            <Link className="product-category-item" to="">
              鋼琴
            </Link>
            <Link className="product-category-item" to="">
              電子琴
            </Link>
            <Link className="product-category-item" to="">
              小提琴
            </Link>
            <Link className="product-category-item" to="">
              中提琴
            </Link>
            <Link className="product-category-item" to="">
              大提琴
            </Link>
            <Link className="product-category-item" to="">
              烏克麗麗
            </Link>
            <Link className="product-category-item" to="">
              長笛
            </Link>
            <Link className="product-category-item" to="">
              薩克斯風
            </Link>
            <Link className="product-category-item" to="">
              爵士鼓
            </Link>
          </div>
          <div className="product-category-button">
            {/* <IoMdArrowDropright className="category-icon" /> */}
            <IoMdArrowDropleft className="product-category-icon"/>

          </div>
        </div>
      </Router>
    </>
  )
}

export default ProductCategory

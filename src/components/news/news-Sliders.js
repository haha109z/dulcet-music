import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function NewsSliders(props) {
  return (
    <>
        <div className="news-Sliders d-flex">
            <Link className="news-SlidersArrow" to="">
            <i className="fas fa-angle-left"></i>
            </Link>
            <img className="news-SlidersImg" src={require("../../img/news/news_p001.jpg")}></img>
            <Link className="news-SlidersArrow" to="">
            <i className="fas fa-angle-right"></i>
            </Link>
        </div>
    </>
  )
}

export default NewsSliders
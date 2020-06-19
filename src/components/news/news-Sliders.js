import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function NewsSliders(props) {
  return (
    <>
        <div className="News-Sliders d-flex">
            <Link className="News-SlidersArrow" to="">
            <i className="fas fa-angle-left"></i>
            </Link>
            <img className="News-SlidersImg" src={require("../../img/News_P001.jpg")}></img>
            <Link className="News-SlidersArrow" to="">
            <i className="fas fa-angle-right"></i>
            </Link>
        </div>
    </>
  )
}

export default NewsSliders
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Courses from '../home/navbar-items/navbar-courses/navbar-courses'
import Videos from '../home/navbar-items/navbar-videos/navbar-videos'
import Instrument from '../home/navbar-items/navbar-instrument/navbar-instrument'
import News from '../home/navbar-items/navbar-news/navbar-news'
import About from '../home/navbar-items/navbar-about/navbar-about'
import NavbarUser from '../home/navbar-items/navbar-user/navbar-user'
import NavbarShoppingCart from '../home/navbar-items/navbar-shopping/navbar-shopping'
// import './navbar.scss';

function Navbar(props) {
  const { homeUser, cartNum } = props

  return (
    <div id="navWrap-others">
      <div className="nav-body-others nav-d-flex" id="">
        {/* nav-logo-left-others */}
        <div className="nav-logo-left-others">
          <a href="/">
            <img src={require('../../img/home_logo_長2.svg')} alt="logo2" />
          </a>
        </div>
        <label htmlFor="HomeNavburger" className="home-nav-burger">
          <i className="fas fa-bars"></i>
        </label>
        <input type="checkbox" id="HomeNavburger" />
        {/* navbar-list */}
        <div className="nav-navlist-others nav-d-flex">
          <div className="nav-items-others nav-courses-others">
            {/*<a href="/course">Courses</a>*/}
            <a href="/course">Courses</a>
            <ul className="nav-courses-list-others">{<Courses />}</ul>
          </div>
          <div className="nav-items-others nav-videos-others">
            {/*<a href="/video">Videos</a>*/}
            <a href="/video">Videos</a>
            <ul className="nav-videos-list-others">{<Videos />}</ul>
          </div>
          <div className="nav-items-others nav-instrument-others">
            {/*<a href="/instrument">Instrument</a>*/}
            <a href="/instrument">Instrument</a>
            <ul className="nav-instrument-list-others">{<Instrument />}</ul>
          </div>
          <div className="nav-items-others nav-news-others">
            {/*<a href="/news">News</a>*/}
            <a href="/news">News</a>
            <ul className="nav-news-list-others">{<News />}</ul>
          </div>
          <div className="nav-items-others nav-about-others">
            {/*<a href="/about">About</a>*/}
            <a href="/about">About</a>
            <ul className="nav-about-list-others">{<About />}</ul>
          </div>
        </div>
        <p className="nav-line-others">|</p>
        {/* navbar-user */}
        <div className="nav-navuser-others d-flex">
          {/*  <div  className="items-others">
            <a href="javascript:;">
              <i className="fas fa-search"></i>
            </a>
          </div>
        */}
          <div className="nav-items-others nav-usre">
            <NavbarUser />
          </div>
          <div className="nav-items-others nav-shopping">
            <NavbarShoppingCart cartNum={cartNum} />
          </div>
        </div>
      </div>
    </div>
  )
}

// export default Navbar;

Navbar.propTypes = {
  homeUser: PropTypes.array.isRequired,
}

export default connect((state) => ({
  homeUser: state.homeUser,
}))(Navbar)

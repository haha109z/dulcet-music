import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import Courses from '../navbar-items/navbar-courses/navbar-courses';
import Videos from '../navbar-items/navbar-videos/navbar-videos';
import Instrument from '../navbar-items/navbar-instrument/navbar-instrument';
import News from '../navbar-items/navbar-news/navbar-news';
import About from '../navbar-items/navbar-about/navbar-about';
import NavbarUser from '../navbar-items/navbar-user/navbar-user';
import NavbarShoppingCart from '../navbar-items/navbar-shopping/navbar-shopping';


class HomeNavbarIndex extends Component{

  state = {
    scrolled:false
  }


  static propTypes = {
        HomeLogo2 : PropTypes.string.isRequired,
        homeUser:PropTypes.array.isRequired
    }

    componentDidMount(){
      window.addEventListener('scroll',()=>{

        const isFixed  = window.scrollY > 150;

        if(isFixed){
          this.setState({scrolled:true})
        }else{
          this.setState({scrolled:false})
        }
      })
    }

    render(){
      const {homeUser} = this.props;
        return (
            <>
          <div className={this.state.scrolled ? 'home-navwrap' : ''} id="home-navWrap">
            <div className="home-nav-body home-d-flex" id="home-navWrap">
            {/* nav-logo-left */}
              <div className="home-logo-left">
                <Link to="/">
                  <img src={this.props.HomeLogo2} alt="logo2" />
                </Link>
              </div>
              <label htmlFor="Homeburger" className="home-burger"><i className="fas fa-bars"></i></label>
              <input type="checkbox" id="Homeburger" />
              {/* navbar-list */}
              <div className="home-navlist home-d-flex">
                <div className="home-items home-courses">
                  {/*<a href="/course">Courses</a>*/}
                  <Link to="/course">Courses</Link>
                  <ul className="home-courses-list">
                      {
                        <Courses />
                      }
                  </ul>
                </div>
                <div className="home-items home-videos">
                 {/*<a href="/video">Videos</a>*/}
                 <Link to="/video">Videos</Link>
                  <ul className="home-videos-list">
                      {
                        <Videos />
                      }
                  </ul>
                </div>
                <div  className="home-items home-instrument">
                  {/*<a href="/instrument">Instrument</a>*/}
                  <Link to="/instrument">Instrument</Link>
                  <ul className="home-instrument-list">
                      {
                        <Instrument />
                      }
                  </ul>
                </div>
                <div className="home-logo-middle">
                    <img src={require('../../../img/home_logo_方1.png')} alt="123" />
                </div>
                <div  className="home-items home-news">
                  {/*<a href="/news">News</a>*/}
                  <Link to="/news">News</Link>
                  <ul className="home-news-list">
                      {
                        <News />
                      }
                  </ul>
                </div>
                <div  className="home-items home-about">
                  {/*<a href="/about">About</a>*/}
                  <Link to="/about">About</Link>
                  <ul className="home-about-list">
                      {
                        <About />
                      }
                  </ul>
                </div>
              </div>
              <p className="home-line">|</p>
              {/* navbar-user */}
              <div className="home-navuser home-d-flex">
               {/*  <div  className="items">
                  <a href="javascript:;">
                    <i className="fas fa-search"></i>
                  </a>
                </div>
              */}
                <div className="home-items home-usre">
                   {
                    homeUser.map((homeUserItem,index) => <NavbarUser homeUserItem={homeUserItem} key={homeUserItem.id}/>)
                   }
                  </div>
                <div className="home-items home-shopping">
                  <NavbarShoppingCart />
                </div>
              </div>
            </div>
          </div>
          </>
        )
    }
}

export default HomeNavbarIndex;
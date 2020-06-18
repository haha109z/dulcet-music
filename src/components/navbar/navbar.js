import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Courses from '../home/navbar-items/navbar-courses/navbar-courses'
import Videos from '../home/navbar-items/navbar-videos/navbar-videos';
import Instrument from '../home/navbar-items/navbar-instrument/navbar-instrument';
import News from '../home/navbar-items/navbar-news/navbar-news';
import About from '../home/navbar-items/navbar-about/navbar-about';
import NavbarUser from '../home/navbar-items/navbar-user/navbar-user';
// import './navbar.scss';

class Navbar extends Component{

    static propTypes = {
      HomeLogo2 : PropTypes.string.isRequired,
      homeUser:PropTypes.array.isRequired
    }

    render(){

        const {homeUser} = this.props;

        return (
            <div id="navWrap-others">
              <div className="nav-body-others nav-d-flex">
              {/* nav-logo-left-others */}
                <div className="nav-logo-left-others">
                  <a href="javascript:;">
                    <img src={require('../../img/home_logo_長2.svg')} alt="logo2" />
                  </a>
                </div>
                <label htmlFor="HomeNavburger" className="home-nav-burger"><i className="fas fa-bars"></i></label>
                <input type="checkbox" id="HomeNavburger" />
                {/* navbar-list */}
                <div className="nav-navlist-others nav-d-flex">
                  <div className="nav-items-others nav-courses-others">
                    <a href="javascript:;">Courses</a>
                    <ul className="nav-courses-list-others">
                        {
                          <Courses />
                        }
                    </ul>
                  </div>
                  <div className="nav-items-others nav-videos-others">
                    <a href="javascript:;">Videos</a>
                    <ul className="nav-videos-list-others">
                        {
                          <Videos />
                        }
                    </ul>
                  </div>
                  <div  className="nav-items-others nav-instrument-others">
                    <a href="javascript:;">Instrument</a>
                    <ul className="nav-instrument-list-others">
                        {
                          <Instrument />
                        }
                    </ul>
                  </div>
                  <div  className="nav-items-others nav-news-others">
                    <a href="javascript:;">News</a>
                    <ul className="nav-news-list-others">
                        {
                          <News />
                        }
                    </ul>
                  </div>
                  <div  className="nav-items-others nav-about-others">
                    <a href="javascript:;">About</a>
                    <ul className="nav-about-list-others">
                        {
                          <About />
                        }
                    </ul>
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
                   {
                    homeUser.map((homeUserItem,index) => <NavbarUser homeUserItem={homeUserItem} key={homeUserItem.id}/>)
                   }
                  </div>
                  <div className="nav-items-others nav-shopping">
                    <a href="javascript:;">
                      <i className="fas fa-shopping-cart"></i>
                    </a>
                    <span className="nav-shopping-point">1</span>
                    <div className="nav-shopping-cart">123</div>
                  </div>
                </div>
              </div>
            </div>
          )
    }
}

// export default Navbar;

export default connect(
  state =>(
      {
          homeUser:state.homeUser
      }
  )
)(Navbar);
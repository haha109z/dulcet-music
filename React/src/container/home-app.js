import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import HomeSliderIndex from '../components/home/home-slider-index/home-slider-index';
import HomeNavbarIndex from '../components/home/home-navbar-index/home-navbar-index';
import HomeSliderNews from '../components/home/home-slider-news/home-slider-nesw';
import Games from '../components/games/games';
import HomeSlogan from '../components/home/home-slogan/home-slogan';
import HomeCoursesVideos from '../components/home/home-courses-videos/home-courses-videos';
import HomeInstruments from '../components/home/home-istruments/home-instruments';
import HomeNews from '../components/home/home-news/home-news';
import HomeLogo2 from '../img/home_logo_長2.svg';

import Navbar from '../components/navbar/navbar';

class HomeApp extends Component{

    static propTypes = {
        homeNews:PropTypes.array.isRequired,
        homeSilderNews:PropTypes.object.isRequired,
        homeUser:PropTypes.array.isRequired,
        cartNum:PropTypes.number.isRequired
    }

    render(){
        const {homeNews,homeSilderNews,homeUser,cartNum} = this.props;
        return(
            <>
                {/*<Navbar HomeLogo2={HomeLogo2} homeUser={homeUser}/>*/}
                <HomeSliderIndex />
                <HomeNavbarIndex HomeLogo2={HomeLogo2} homeUser={homeUser} cartNum={cartNum}/>
                <HomeSliderNews homeSilderNews={homeSilderNews}/>
                <Games />
                <HomeSlogan />
                <HomeCoursesVideos />
                <HomeInstruments />
                <HomeNews homeNews={homeNews} />
            </>
        )
    }
}

export default connect(
    state =>(
        {
            homeNews:state.homeNews,
            homeSilderNews:state.homeSilderNews,
            homeUser:state.homeUser
        }
    )
)(HomeApp);
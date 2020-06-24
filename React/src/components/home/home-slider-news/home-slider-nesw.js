import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

// import './home-slider-news.scss'
class HomeSliderNews extends Component{

    static propTypes = {
        homeSilderNews:PropTypes.object.isRequired
    }

    render(){
        const {homeSilderNews} = this.props;
        return(
            <>
                <Link to={homeSilderNews.to}>
                    <ul className="home-slider-news-wrap">
                        <li>
                            {homeSilderNews.title}
                        </li>
                        <li>
                            {homeSilderNews.date}
                        </li>
                        <li>
                            {homeSilderNews.className}
                        </li>
                    </ul>
                </Link>
            </>
        )
    }
}

export default HomeSliderNews;
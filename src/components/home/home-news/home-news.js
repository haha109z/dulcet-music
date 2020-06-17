import React,{Component} from 'react';
import PropTypes from 'prop-types';

import HomeNewsItme from './home-news-items/home-news-items';
// import './home-news.scss';

class HomeNews extends Component{

    static propTypes = {
        homeNews:PropTypes.array.isRequired,
    }

    render(){
        const {homeNews} = this.props;
        return(
            <div className="container home-news-wrap">
                <h1 className="home-news-title">News</h1>
                <div className="row home-news-row ">
                    {
                        homeNews.map((homeNews , index)=> <HomeNewsItme key={index} homeNews={homeNews}/>)
                    }
                </div>
            </div>
        )
    }
}

export default HomeNews;
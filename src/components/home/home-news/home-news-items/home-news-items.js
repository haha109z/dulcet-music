import React,{Component} from 'react';
import PropTypes from 'prop-types';


// import '../home-news.scss';
import { render } from 'react-dom';

class HomeNewsItme extends Component{

    state = {
        width:window.innerWidth
    }

    static propTypes = {
        homeNews:PropTypes.object.isRequired,
    }

    componentDidMount(){

        const {width} = window.innerWidth;

        const handleRWD = ()=>{
            const width = window.innerWidth;

            this.setState({width});
        }

        window.addEventListener('resize',handleRWD)
    }

    render(){
        const {homeNews} = this.props;
        const {width} = this.state;
        const rwdWitdth = width <= 768 ? 'home-news-card col-md-12' : 'home-news-card col-md-3';

        return(
            <div className={rwdWitdth}>
                <img src={homeNews.src}></img>
                <h3 className="home-news-tilte-txt">{homeNews.title}</h3>
                <div className="home-news-txt">
                    <p>{homeNews.content}</p>
                </div>
                <button type="button" className="home-news-btn">view more...</button>
            </div>
        )
    }
}

export default HomeNewsItme;
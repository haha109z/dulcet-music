import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types'

import HomeSliderImg from './home-slider-img/home-slider-img';
// import './home-slider-index.scss';
import bg8 from '../../../img/bg_8.jpg';
import bg16 from '../../../img/bg_16.jpg';
import bg21 from '../../../img/bg_21.jpg';

function HomeSliderIndex(){

    let sliderArr = [
        <HomeSliderImg src={bg21}/>,
        <HomeSliderImg src={bg8}/>,
        <HomeSliderImg src={bg16}/>,
    ];

    HomeSliderIndex.prototypes = {
        sliderHei : PropTypes.number.isRequired
    }

    const [x,setX] = useState(0);

    const goLeft = ()=>{
        x === 0 ? setX((-100*(sliderArr.length -1))) : setX(x+100) ;
    }

    const goRight = ()=>{
        x === -100 * (sliderArr.length -1) ? setX(0) : setX(x-100);
    }

    return (
        <ul className='home-slider' id='homeSlider'>
            {
                sliderArr.map((item,index)=> {
                    return (
                    <li className='home-slide' key={index} style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </li>
                    )
                })
            }
            <button id='homeSliderGoLeft' onClick={goLeft}>
                <i className="fas fa-chevron-left"></i>
            </button>
            <button id='homeSliderGoRight' onClick={goRight}>
                <i className="fas fa-chevron-right"></i>
            </button>
        </ul>
    )
}

export default HomeSliderIndex;
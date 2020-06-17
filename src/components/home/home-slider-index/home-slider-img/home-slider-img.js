import React from 'react';
import PropTypes from 'prop-types';

function HomeSliderImg(props){

    HomeSliderImg.prototype = {
        src:PropTypes.string.isRequired
    }

    let imgStlye = {
        width: 100+"%",
        height: 100+"%"
    }

    return <img src={props.src} alt='slider-img' style={imgStlye}></img>
}

export default HomeSliderImg;
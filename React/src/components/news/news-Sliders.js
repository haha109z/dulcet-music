import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch,withRouter } from 'react-router-dom'
import slider1 from '../../img/news/slider1.jpg'
import slider2 from '../../img/news/slider2.jpg'
import slider3 from '../../img/news/slider3.jpg'
import Carousel from 'react-bootstrap/Carousel'

function NewsSliders(props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="news-Sliders">
      <Carousel className="news-Sliders" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item> 
        <img
          className="d-block news-SlidersImg"
          src={slider1}
          
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block news-SlidersImg"
          src={slider2}
          
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block news-SlidersImg"
          src={slider3}
          
        />
      </Carousel.Item>
    </Carousel>

      </div>
    </>
  )
}


export default withRouter(NewsSliders)

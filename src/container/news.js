import React,{useState,useEffect} from 'react';

import Navbar from '../components/navbar/navbar';
// import NewsNavbar from '../components/news/news-Navbar'
import NewsSliders from '../components/news/news-Sliders'
import NewsCategory from '../components/news/news-Category';
import NewsContent from '../components/news/news-Content';


function News(){


    return(
        <>
        <Navbar />
        {/* <NewsNavbar />/ */}
        <NewsSliders />
        <NewsCategory />
        <NewsContent />
        
        </>
    )
}

export default News;
import React,{useState,useEffect} from 'react';

import Navbar from '../components/navbar/navbar';
import NewsSliders from '../components/news/news-Sliders'
import NewsCategory from '../components/news/news-Category';
import NewsContent from '../components/news/news-Content';
import NewsHot from '../components/news/news-Hot';


function News(){


    return(
        <>
        <Navbar />
        <NewsSliders />
        <NewsCategory />
        <NewsHot/>
        <NewsContent />
        
        
        </>
    )
}

export default News;
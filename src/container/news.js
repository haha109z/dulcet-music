import React,{useState,useEffect} from 'react';

// import Navbar from '../components/navbar/navbar';
import NewsNavbar from '../components/news/News-Navbar'
import NewsSliders from '../components/news/News-Sliders'
import NewsCategory from '../components/news/News-Category';


function News(){


    return(
        <>
        {/* <Navbar /> */}
        <NewsNavbar />
        <NewsSliders />
        <NewsCategory />
        <NewsContent />
        
        </>
    )
}

export default News;
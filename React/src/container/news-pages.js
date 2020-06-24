import React,{useState,useEffect} from 'react';

import Navbar from '../components/navbar/navbar';
import NewsPagesBanner from '../components/news/news-pages-Banner'
import NewsPagesContent from '../components/news/news-pages-Content'



function NewsPages(){


    return(
        <>
        <Navbar />
        <NewsPagesBanner />
        <NewsPagesContent />
    
        
        </>
    )
}

export default NewsPages;
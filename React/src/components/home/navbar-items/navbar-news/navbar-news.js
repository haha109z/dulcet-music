import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function News(props){

    const [news,setNews] = useState([
        {title:'課程資訊',src:'/news?NewsCategory=1'},
        {title:'活動資訊',src:'/news?NewsCategory=3'}
    ]);

    return (
        <>
        {
            news.map((item,index)=> (
                <li key={index}>
                    <a href={item.src}>{item.title}</a>
                </li>
            ))
        }
        </>
    )
}

export default News;
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function News(props){

    const [news,setNews] = useState([
        {title:'課程資訊',src:'javascript:void(0)'},
        {title:'活動資訊',src:'javascript:void(0)'}
    ]);

    return (
        <>
        {
            news.map((item,index)=> (
                <li key={index}>
                    <Link to={item.src}>{item.title}</Link>
                </li>
            ))
        }
        </>
    )
}

export default News;
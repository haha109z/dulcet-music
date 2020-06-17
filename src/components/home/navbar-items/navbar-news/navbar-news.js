import React,{useState} from 'react';

function News(props){

    const [news,setNews] = useState([
        {title:'課程資訊',src:'javascript:;'},
        {title:'活動資訊',src:'javascript:;'}
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
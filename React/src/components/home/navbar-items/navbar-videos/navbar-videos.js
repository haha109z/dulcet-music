import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Videos(props){

    const [videos,setVideos] = useState([
        {title:'小提琴',src:'/video/category/violin/1'},
        {title:'中提琴',src:'/video/category/viola/1'},
        {title:'薩克斯風',src:'/video/category/saxophone/1'},
        {title:'鋼琴',src:'/video/category/piano/1'},
        {title:'電子琴',src:'/video/category/keyboard/1'},
        {title:'爵士鼓',src:'/video/category/jazz_drum/1'},
        {title:'吉他',src:'/video/category/guitar/1'},
        {title:'烏克莉莉',src:'/video/category/ukulele/1'},
        {title:'長笛',src:'/video/category/flute/1'},
    ]);

    return (
        <>
        {
            videos.map((item,index)=> (
                <li key={index}>
                    <a href={item.src}>{item.title}</a>
                </li>
            ))
        }
        </>
    )
}

export default Videos;
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Videos(props){

    const [videos,setVideos] = useState([
        {title:'小提琴',src:'/video/violin'},
        {title:'中提琴',src:'/video/viola'},
        {title:'薩克斯風',src:'/video/saxophone'},
        {title:'鋼琴',src:'/video/piano'},
        {title:'電子琴',src:'/video/keyboard'},
        {title:'爵士鼓',src:'/video/jazz_drum'},
        {title:'吉他',src:'/video/guitar'},
        {title:'烏克麗麗',src:'/video/ukulele'},
        {title:'長笛',src:'/video/flute'},
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
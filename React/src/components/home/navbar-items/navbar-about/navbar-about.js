import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function About(props){

    const [about,setAbout] = useState([
        {title:'關於我們',src:'/About'},
        {title:'常見問題',src:'/AnyQuestion'}
    ]);

    return (
        <>
        {
            about.map((item,index)=> (
                <li key={index}>
                    <Link to={item.src}>{item.title}</Link>
                </li>
            ))
        }
        </>
    )
}

export default About;
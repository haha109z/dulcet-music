import React,{useState} from 'react';

function About(props){

    const [about,setAbout] = useState([
        {title:'關於我們',src:'javascript:;'},
        {title:'客服中心',src:'/test'}
    ]);

    return (
        <>
        {
            about.map((item,index)=> (
                <li key={index}>
                    <a href={item.src}>{item.title}</a>
                </li>
            ))
        }
        </>
    )
}

export default About;
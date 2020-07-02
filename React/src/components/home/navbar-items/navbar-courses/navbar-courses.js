import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Courses(props){

    const [courses,setCourses] = useState([
        {title:'小提琴',src:'/course/violin'},
        {title:'中提琴',src:'/course/viola'},
        {title:'薩克斯風',src:'/course/saxophone'},
        {title:'鋼琴',src:'/course/piano'},
        {title:'電子琴',src:'/course/keyboard'},
        {title:'爵士鼓',src:'/course/jazz_drum'},
        {title:'吉他',src:'/course/guitar'},
        {title:'烏克麗麗',src:'/course/ukulele'},
        {title:'長笛',src:'/course/flute'},
]);

    return (
        <>
        {
            courses.map((item,index)=> (
                <li key={index}>
                    <a href={item.src}>{item.title}</a>
                </li>
            ))
        }
        </>
    )
}

export default Courses;
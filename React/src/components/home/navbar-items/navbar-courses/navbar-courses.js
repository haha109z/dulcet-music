import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Courses(props){

    const [courses,setCourses] = useState([
        {title:'小提琴',src:'/course/category/violin/1'},
        {title:'中提琴',src:'/course/category/viola/1'},
        {title:'薩克斯風',src:'/course/category/saxophone/1'},
        {title:'鋼琴',src:'/course/category/piano/1'},
        {title:'電子琴',src:'/course/category/keyboard/1'},
        {title:'爵士鼓',src:'/course/category/jazz_drum/1'},
        {title:'吉他',src:'/course/category/guitar/1'},
        {title:'烏克麗麗',src:'/course/category/ukulele/1'},
        {title:'長笛',src:'/course/category/flute/1'},
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
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Courses(props){

    const [courses,setCourses] = useState([
        {title:'小提琴',src:'javascript:void(0)'},
        {title:'中提琴',src:'javascript:void(0)'},
        {title:'薩克斯風',src:'javascript:void(0)'},
        {title:'鋼琴',src:'javascript:void(0)'},
        {title:'電子琴',src:'javascript:void(0)'},
        {title:'爵士鼓',src:'javascript:void(0)'},
        {title:'吉他',src:'javascript:void(0)'},
        {title:'烏克麗麗',src:'javascript:void(0)'},
        {title:'長笛',src:'javascript:void(0)'},
]);

    return (
        <>
        {
            courses.map((item,index)=> (
                <li key={index}>
                    <Link to={item.src}>{item.title}</Link>
                </li>
            ))
        }
        </>
    )
}

export default Courses;
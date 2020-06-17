import React,{useState} from 'react';

function Courses(props){

    const [courses,setCourses] = useState([
        {title:'小提琴',src:'javascript:;'},
        {title:'中提琴',src:'javascript:;'},
        {title:'薩克斯風',src:'javascript:;'},
        {title:'鋼琴',src:'javascript:;'},
        {title:'電子琴',src:'javascript:;'},
        {title:'爵士鼓',src:'javascript:;'},
        {title:'吉他',src:'javascript:;'},
        {title:'烏可麗麗',src:'javascript:;'},
        {title:'長笛',src:'javascript:;'},        
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
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Instrument(props){

    const [instrument,setInstrument] = useState([
        {title:'小提琴',src:'/instrument/category/violin/1'},
        {title:'中提琴',src:'/instrument/category/viola/1'},
        {title:'薩克斯風',src:'/instrument/category/saxophone/1'},
        {title:'鋼琴',src:'/instrument/category/piano/1'},
        {title:'電子琴',src:'/instrument/category/keyboard/1'},
        {title:'爵士鼓',src:'/instrument/category/jazz_drum/1'},
        {title:'吉他',src:'/instrument/category/guitar/1'},
        {title:'烏克莉莉',src:'/instrument/category/ukulele/1'},
        {title:'長笛',src:'/instrument/category/flute/1'},
    ]);

    return (
        <>
        {
            instrument.map((item,index)=> (
                <li key={index}>
                    <a href={item.src}>{item.title}</a>
                </li>
            ))
        }
        </>
    )
}

export default Instrument;
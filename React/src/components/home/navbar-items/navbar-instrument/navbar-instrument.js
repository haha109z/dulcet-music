import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Instrument(props){

    const [instrument,setInstrument] = useState([
        {title:'小提琴',src:'/instrument/violin'},
        {title:'中提琴',src:'/instrument/viola'},
        {title:'薩克斯風',src:'/instrument/saxophone'},
        {title:'鋼琴',src:'/instrument/piano'},
        {title:'電子琴',src:'/instrument/keyboard'},
        {title:'爵士鼓',src:'/instrument/jazz_drum'},
        {title:'吉他',src:'/instrument/guitar'},
        {title:'烏克麗麗',src:'/instrument/ukulele'},
        {title:'長笛',src:'/instrument/flute'},
    ]);

    return (
        <>
        {
            instrument.map((item,index)=> (
                <li key={index}>
                    <Link to={item.src}>{item.title}</Link>
                </li>
            ))
        }
        </>
    )
}

export default Instrument;
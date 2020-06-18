import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function FooterAboutUs(){

    const [footerAbout,setFooterAbout] = useState([
        {text:'網站介紹',src:'javascript:void(0)'},
        {text:'加入我們',src:'javascript:void(0)'},
        {text:'防詐騙宣傳',src:'javascript:void(0)'},
        {text:'人才募集',src:'javascript:void(0)'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerAbout.map((item,index)=>
                (
                    <div key={index}>
                        <Link to={item.src}>{item.text}</Link>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default FooterAboutUs;
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function FooterAboutUs(){

    const [footerAbout,setFooterAbout] = useState([
        {text:'網站介紹',src:'/About'},
        {text:'加入我們',src:'/About'},
        {text:'防詐騙宣傳',src:'/About'},
        {text:'人才募集',src:'/About'},
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
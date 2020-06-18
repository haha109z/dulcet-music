import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function FooterCompany(){

    const [footerCompany,setFooterCompany] = useState([
        {text:'廠商合作',src:'javascript:void(0)'},
        {text:'異業合作',src:'javascript:void(0)'},
        {text:'物流合作',src:'javascript:void(0)'},
        {text:'企業團體採購',src:'javascript:void(0)'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerCompany.map((item,index)=>
                (
                    <div key={index}>
                        <Link href={item.src}>{item.text}</Link>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default FooterCompany;
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function FooterCoustom(){

    const [footerCoustom,setFooterCoustom] = useState([
        {text:'訂單問題',src:'javascript:void(0)'},
        {text:'商品退/換問題',src:'javascript:void(0)'},
        {text:'付款/發票問題',src:'javascript:void(0)'},
        {text:'客服中心',src:'javascript:void(0)'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerCoustom.map((item,index)=>
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

export default FooterCoustom;
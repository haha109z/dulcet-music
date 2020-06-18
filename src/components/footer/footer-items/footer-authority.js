import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';

function FooterAuthority(){

    const [footerAuthority,setFooterAuthority] = useState([
        {text:'服務條款',src:'javascript:void(0)'},
        {text:'隱私權政策',src:'javascript:void(0)'},
        {text:'購物約定條款',src:'javascript:void(0)'},
        {text:'網路安全',src:'javascript:void(0)'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerAuthority.map((item,index)=>
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

export default FooterAuthority;
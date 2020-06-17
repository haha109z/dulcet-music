import React,{useState,useEffect} from 'react';

function FooterCompany(){

    const [footerCompany,setFooterCompany] = useState([
        {text:'廠商合作',src:'javascript:;'},
        {text:'異業合作',src:'javascript:;'},
        {text:'物流合作',src:'javascript:;'},
        {text:'企業團體採購',src:'javascript:;'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerCompany.map((item,index)=>
                (
                    <div key={index}>
                        <a href={item.src}>{item.text}</a>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default FooterCompany;
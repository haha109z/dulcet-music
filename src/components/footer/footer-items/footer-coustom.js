import React,{useState,useEffect} from 'react';

function FooterCoustom(){

    const [footerCoustom,setFooterCoustom] = useState([
        {text:'訂單問題',src:'javascript:;'},
        {text:'商品退/換問題',src:'javascript:;'},
        {text:'付款/發票問題',src:'javascript:;'},
        {text:'客服中心',src:'javascript:;'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerCoustom.map((item,index)=>
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

export default FooterCoustom;
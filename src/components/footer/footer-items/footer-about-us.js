import React,{useState,useEffect} from 'react';

function FooterAboutUs(){

    const [footerAbout,setFooterAbout] = useState([
        {text:'網站介紹',src:'javascript:;'},
        {text:'加入我們',src:'javascript:;'},
        {text:'防詐騙宣傳',src:'javascript:;'},
        {text:'人才募集',src:'javascript:;'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerAbout.map((item,index)=>
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

export default FooterAboutUs;
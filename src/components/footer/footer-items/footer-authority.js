import React,{useState,useEffect} from 'react';

function FooterAuthority(){

    const [footerAuthority,setFooterAuthority] = useState([
        {text:'服務條款',src:'javascript:;'},
        {text:'隱私權政策',src:'javascript:;'},
        {text:'購物約定條款',src:'javascript:;'},
        {text:'網路安全',src:'javascript:;'},
    ])

    return(
        <>
        <div className="footer-items">
            {
                footerAuthority.map((item,index)=>
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

export default FooterAuthority;
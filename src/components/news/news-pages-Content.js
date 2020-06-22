import React, { useState, useEffect } from 'react'
import { AiFillEdit } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";


function NewsPagesContent(props) {
    return (
      <>
        <div className="news-pages-ContentContainer">
            <div className="news-pages-ContentContent">
                <p className="news-p news-LetterSpacing news-NotoSerifTC text-break">
                古典管絃樂團創立於1998年，創辦人兼藝術總監為小提琴家曾慶然先生(前國立臺灣交響樂團首席)，樂團目標在於培養台灣音樂表演、創作之教育專業人才為主要目標，讓這些年輕的音樂家們具有音樂藝術專業技術及專業知能，多年來我們在台北國家音樂廳、台中中興堂、中山堂等專業場地表演已超過百餘場次，目前古典管絃樂團已經是台灣青少年樂團中最具代表性且最大樂團之一。<br />

                <br />

                本次音樂會的內容包括:優美的羅西尼 : 絃樂奏鳴曲及葛利格 : 民歌組曲，藉由團員輕巧的雙手將輕快美妙的音符，傳遞四方。另外由八位團員聯合演出演出作曲家韋瓦第四支小提琴協奏曲，韋瓦第是巴洛克時期器樂作曲技巧之寶，欣賞年輕團員的演出，將會留下深刻而美好的迴響。<br />

                <br />

                壓軸節目是，邀請知小提琴家吳庭毓及曾慶然聯袂演出維瓦第: 四季小提琴協奏曲，吳庭毓是現任國家交響樂團首席，曾慶然是前國立台灣交響樂團首席與國內首屈一指的音樂家合作演出，更能讓中部地區的廣大音樂愛好者，無距離的體會音樂之美，並能感受到一場細緻而磅礡的古典盛宴。      

                <br />
                <br />

                演出曲目<br />
                <br />
                維瓦第：四季小提琴協奏曲<br />
                　　　　小提琴：吳庭毓-春、夏<br />
                　　　　小提琴：曾慶然-秋、冬<br />
                <br />
                維瓦第：四支小提琴協奏曲<br />
                <br />
                羅西尼：絃樂奏鳴曲<br />
                <br />
                葛利格：民歌組曲<br />
                </p>
            </div>

            <hr className="news-pages-ContentHr" />

            <div className="news-pages-Connection">

                <ul className="news-pages-ul d-flex  news-LetterSpacing news-NotoSerifTC">
                    <li>
                    <a href="https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=N0CKGT93"><AiFillEdit className="news-H3" /><br />報名資訊</a>
                    
                    </li>

                    <li>
                    <a href="/about"><AiOutlineMail className="news-H3" /><br />聯絡我們</a>
                    
                    </li>
                </ul>

            <hr className="news-pages-ContentHr" />

            <div className="news-pages-ContentBtn news-LetterSpacing news-NotoSerifTC">
                <button type="button"  onClick="">返回列表</button>
              </div>

            </div>

        </div>
      </>
    )
  }
  
  export default NewsPagesContent
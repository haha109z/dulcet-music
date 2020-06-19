import React, { useState, useEffect } from 'react'


function NewsCategory(props) {
  return (
    <>
        <div className="news-CategoryContainer d-flex">
            <div className="news-Category">
                <ul className="d-flex justify-content-start">
                    <li><a href="#">全部</a></li>
                    <li><a href="#">公告</a></li>
                    <li><a href="#">課程</a></li>
                    <li><a href="#">活動</a></li>
                </ul>
            </div>
            <div className="news-Dropdown">
                <button type="button" className="news-DropdownBtn">月份篩選&nbsp;&nbsp;<i class="fas fa-sort"></i></button>
            </div>
        </div>
    </>
  )
}

export default NewsCategory
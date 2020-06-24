import React, { useState, useEffect } from 'react'

function NewsCategory(props) {
  const [date , setDate] = useState("2020-06")

  // handleChange = (event) => {
  //   // 利用setState的第二個傳入參數(callback)，來得到更動state後的值
  //   this.setState(  event.target.value , () => {
  //     console.log('in setState callback', date)
  //   })
  useEffect(() => {
    // Your code here
    console.log(date)
  }, [date])


  return (
    <>
      <div className="news-CategoryContainer d-flex news-NotoSerifTC">
        <div className="news-Category">
          <ul className="d-flex justify-content-start">
            <li>
              <a href="">全部</a>
            </li>
            <li>
              <a href="">公告</a>
            </li>
            <li>
              <a href="">課程</a>
            </li>
            <li>
              <a href="">活動</a>
            </li>
          </ul>
        </div>

        <div className="news-Month news-NotoSerifTC">
          
          年/月份篩選：<input Id="news-MonthInput" type="month" value={date} onChange={(event)=>{
    setDate(  event.target.value )
            
          }}></input>
            {/* {console.log(document.getElementsById.value)} */}
        </div>
      </div>
    </>
  )
}

export default NewsCategory

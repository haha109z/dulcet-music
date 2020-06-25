import React, { useState, useEffect } from 'react'

function NewsCategory(props) {
  const [date, setDate] = useState('2020-06')

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
          年/月份篩選：
          <input
            Id="news-MonthInput"
            type="month"
            value={date}
            onChange={(event) => {
              setDate(event.target.value)
            }}
          ></input>
        </div>
      </div>
    </>
  )
}

export default NewsCategory

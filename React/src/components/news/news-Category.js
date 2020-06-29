import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function NewsCategory(props) {
  const [date, setDate] = useState('')

  const [category, setCategory] = useState('')

  useEffect(() => {
 // Your code here
    console.log('日期更改後category:',category)
    console.log('Date更改後date:',date)
 
  }, [date])

  useEffect(() => {
    // Your code here
  
    console.log('分類更改後category:',category)
    console.log('分類更改後date:',date)

  }, [category])

  return (
    <>
   <div className="news-CategoryContainer d-flex news-NotoSerifTC">
        <div className="news-Category">
          <ul className="d-flex justify-content-start">

            <li onClick={() => {
              setCategory('')
            }} >
                全部
            </li>

            <li value='課程' onClick={() => {
              setCategory('課程')
              }} >
                課程
            </li>
            
            <li onClick={() => {
              setCategory('公告')
              }} >
                公告
            </li>
            
            <li onClick={() => {
              setCategory('活動')
              }} >
                活動

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

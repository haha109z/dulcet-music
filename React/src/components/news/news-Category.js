import React, { useState, useEffect } from 'react'
import Li from './news-Category-li'

function NewsCategory(props) {
  const [date, setDate] = useState('2020-06')

  const [category,setCategory] = useState([])

  async function getCategory(){
    fetch(`http://localhost:3030/news/newsCatrgory`,{
      method : 'POST',
      body : JSON.stringify(),
      headers : new Headers({
        'Content-Type' : 'application/json',
      }),
    })
    .then((res) => res.json())
    .then((json) => {

      setCategory(json)
 
    })

  }

  useEffect(() => {
    // Your code here
    getCategory()
  },[])

  useEffect(() => {
    // Your code here
    console.log(date)
  }, [date])




  return (
    <>
    {category ? console.log('category',category[0]):''}
      <div className="news-CategoryContainer d-flex news-NotoSerifTC">

        <div className="news-Category">

          <ul className="d-flex justify-content-start">
          
            <li>
              <a href="">全部</a>
            </li>

            {category.map((c, index) => (
            <Li NewsCategoryName={c.NewsCategoryName} />
              
            ))}
          
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

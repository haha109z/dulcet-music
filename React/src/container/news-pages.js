import React,{useState,useEffect} from 'react';

import Navbar from '../components/navbar/navbar';
import NewsPagesBanner from '../components/news/news-pages-Banner'
import NewsPagesContent from '../components/news/news-pages-Content'

import { useParams } from 'react-router-dom';

function NewsPages(){

    const { NewsID,NewsCategory } = useParams();

    const [content, setcontent] = useState([])

  async function getcontent() {
    fetch(`http://localhost:3030/news/:NewsCategory/:NewsID`, {
      method: 'POST',
      body: JSON.stringify({ NewsID , NewsCategory}),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setcontent(json)
        console.log(json)
      })
  }
  useEffect(() => {
    getcontent()
  }, [])


    return(
        <>
        <Navbar />
        <NewsPagesBanner />
        <NewsPagesContent 
            NewsID={NewsID}
            NewsCategory={NewsCategory}
        />
        <h1>{NewsID}{NewsCategory}</h1>
        
      </>
    )
}

export default NewsPages;
import React,{useState,useEffect} from 'react';

import Navbar from '../components/navbar/navbar';
import NewsPagesBanner from '../components/news/news-pages-Banner'
import NewsPagesContent from '../components/news/news-pages-Content'

import { useParams } from 'react-router-dom';

function NewsPages(){

    const { NewsID,NewsCategory } = useParams();

    const [content, setcontent] = useState([])

  async function getcontent() {
    fetch(`http://localhost:3030/news/newsid`, {
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
        {content.map((cc) => {
            return (
              <>
        <Navbar />
        <NewsPagesBanner
            NewsDateTitle={cc.NewsDateTitle}
            NewsAddress={cc.NewsAddress}
            NewsTitle={cc.NewsTitle}
            NewsContent={cc.NewsContent}
            NewsImg={cc.NewsImg}
            NewsLink={cc.NewsLink}
            NewsCategory={cc.NewsCategory}
            NewsID={cc.NewsID} />
        <NewsPagesContent 
            NewsDateTitle={cc.NewsDateTitle}
            NewsAddress={cc.NewsAddress}
            NewsTitle={cc.NewsTitle}
            NewsContent={cc.NewsContent}
            NewsImg={cc.NewsImg}
            NewsID={cc.NewsID}
            NewsCategory={cc.NewsCategory}
            NewsLink={cc.NewsLink}
        />
        </>
            )
          })}

      </>
    )
}

export default NewsPages;
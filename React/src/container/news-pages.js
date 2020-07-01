// import React,{useState,useEffect} from 'react';

// import Navbar from '../components/navbar/navbar';
// import NewsPagesBanner from '../components/news/news-pages-Banner'
// import NewsPagesContent from '../components/news/news-pages-Content'

// import { bindActionCreators } from 'redux'
// import { getNewsContent,getNewsPageContent } from '../redux/action-types'


// function NewsPages(props){

//   const NewsCategory = props.match.params.NewsCategory ? props.match.params.NewsCategory : ''
//   const NewsID = props.match.params.NewsID ? props.match.params.NewsID : ''

//   console.log(NewsCategory)
//   console.log(NewsID)

//   useEffect(() => {
//     console.log(props)
//     props.getNewsContent()
//   }, [])

//   useEffect(() => {
//     props.getPageContent(props.match.params.NewsID,props.match.params.NewsID)
//   }, [props.match.params.NewsCategory,props.match.params.NewsID])

  
//     return(
//         <>
 
//         <Navbar />
//         <NewsPagesBanner
//             NewsDateTitle={cc.NewsDateTitle}
//             NewsAddress={cc.NewsAddress}
//             NewsTitle={cc.NewsTitle}
//             NewsContent={cc.NewsContent}
//             NewsImg={cc.NewsImg}
//             NewsLink={cc.NewsLink}
//             NewsCategory={cc.NewsCategory}
//             NewsID={cc.NewsID} />
//         <NewsPagesContent 
//             NewsDateTitle={cc.NewsDateTitle}
//             NewsAddress={cc.NewsAddress}
//             NewsTitle={cc.NewsTitle}
//             NewsContent={cc.NewsContent}
//             NewsImg={cc.NewsImg}
//             NewsID={cc.NewsID}
//             NewsCategory={cc.NewsCategory}
//             NewsLink={cc.NewsLink}
//         />

//       </>
//     )
// }

// const mapStateToProps = (store) => {
//   return { post: store.getNewsContent, article: store.getNewsPageContent }
// }
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ getNewsContent, getNewsPageContent }, dispatch)
// }
// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(NewsPages)
// )
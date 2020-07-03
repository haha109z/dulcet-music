//文章
export const showNewsContent = (data) => {
    return { type: 'SHOW_NewsContent', data }
  }
  
  //要全部資料
  export const getNewsContent = (page=1) => {
    return async (dispatch) => {
      const req = new Request(`http://localhost:3030/news/${page}?`, {
        method: 'GET',
        credentials: 'include',
      })
      const res = await fetch(req)
      const data = await res.json()
      console.log(data)
      dispatch(showNewsContent(data))
      
    }
  }
//分類
  export const getNewsCategory = (page) => {
    let NewsCategory = window.location.search
    return async (dispatch) => {
      const req = new Request(
        `http://localhost:3030/news/${page}${NewsCategory}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      )
      const res = await fetch(req)
      const data = await res.json()
      console.log(data)
      dispatch(showNewsContent(data))
    }
  }

// 內容
  export const showNewsPageContent = (data) => {
    return { type: 'SHOW_NewsPageContent', data }
  }
  export const getNewsPageContent = (NewsID) => {
    return async (dispatch) => {
      const req = new Request(`http://localhost:3030/news/news-content/${NewsID}`, {
        method: 'GET',
        credentials: 'include',
      })
      const res = await fetch(req)
      const data = await res.json()
      console.log('getNewsPageContent', data)
      dispatch(showNewsPageContent(data))
    }
  }
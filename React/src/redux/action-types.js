//文章
export const showNewsContent = (data) => {
    return { type: 'SHOW_NewsContent', data }
  }
  
  //要全部資料
  export const getNewsContent = () => {
    return async (dispatch) => {
      const req = new Request('http://localhost:3030/news/', {
        method: 'GET',
        credentials: 'include',
      })
      const res = await fetch(req)
      const data = await res.json()
      console.log(data)
      dispatch(showNewsContent(data))
    }
  }

  export const showNewsPageContent = (data) => {
    return { type: 'SHOW_NewsPageContent', data }
  }
  export const getNewsPageContent = (NewsID) => {
    return async (dispatch) => {
      const req = new Request(`http://localhost:3030/news/${NewsID}`, {
        method: 'GET',
        credentials: 'include',
      })
      const res = await fetch(req)
      const data = await res.json()
      console.log('getNewsPageContent', data)
      dispatch(showNewsPageContent(data))
    }
  }
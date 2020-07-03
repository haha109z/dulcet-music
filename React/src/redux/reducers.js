import {combineReducers} from 'redux';

const initHomeNews =[
    {title:'柯嘉惠、楊妮蓉雙鋼琴音樂會',content:'節目介紹 此場音樂會將由兩位鋼琴家柯嘉惠與楊妮蓉攜手演出多首經典雙鋼琴曲作品，並以多元的音樂風格與充滿異國風情的樣貌呈現，曲目類型選自作曲家原創作品、改編為雙鋼琴版本以及主題變奏曲等',src:require('../img/home_news_006_1.jpg'),to:'/news-content/6'},
    {title:'《颺 I will rise》',content:'高雄女中合唱團每年不管在全國學生音樂比賽或是鄉土歌謠比賽都拿到優秀的成績，並且也曾受邀參加多次聯合演出，因此希望能將今年的努力做一次完整的發表。',src:require('../img/home_news_008.jpg'),to:'/news-content/8'},
    {title:'【武漢肺炎】防疫宣導',content:'若您近期曾去過武漢，且出現身體不適的狀況：一、請撥打防疫專線1922，並戴口罩盡快就醫。二、就醫時告知醫師武漢旅遊史，接觸史及不適症狀等。',src:require('../img/home_news_007_1.jpg'),to:'/news-content/7'}
]

function homeNews(state = initHomeNews, action){
    switch(action.type){
        default :
        return state;
    }
}

const initSliderNews ={title:'開課資訊',date: '2020.07.10' ,className:'小提琴初學班',to:'/news'};

function homeSilderNews(state = initSliderNews, action){
    switch(action.type){
        default :
        return state;
    }
}

const initUser = [{id:'0627',username:'DL'}];


function homeUser(state = initUser, action){
    switch(action.type){
        default :
        return state;
    }
}

const getNewsContent = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_NewsContent':
        return action.data
      default:
        return state
    }
  }

  const getNewsPageContent = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_NewsPageContent':
        return action.data
      default:
        return state
    }
  }

export default combineReducers({
    homeNews,
    homeSilderNews,
    homeUser,
    getNewsContent,
    getNewsPageContent,
});
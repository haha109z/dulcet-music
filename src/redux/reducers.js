import {combineReducers} from 'redux';

const initHomeNews =[
    {title:'《宮崎駿動畫配樂》交響音樂會',content:'宮崎駿的動畫伴隨許多人成長，在那些精彩動畫的背後，經配樂大師巧手後，一首首時而溫馨、時而浪漫、時而詼諧、時而壯闊的音樂，賦予了動畫更多色彩與風味。這場音樂會，一次呈現宮崎駿與久石讓歷年所合作的九部經典動畫配樂，與您一同憶起初次接觸宮崎駿動畫時的興奮與感動。',src:require('../img/board_3-3.jpg')},
    {title:'《無限》',content:'藝術家為舞台而生，沒有任何事能阻擋渴望演出的靈魂，《無限》就是風動的音樂家們最溫柔的回應。我們想帶著大家一起走上舞台，體會那些在觀眾席不曾體會的每個細節。',src:require('../img/board_1-3.jpg')},
    {title:'《閃耀新勢力─弓弦狂舞》',content:'魅力崛起，臺灣室內樂鋒芒新銳，默契絕倫，情感濃烈，耀眼樂壇絕佳組合，被譽為「臺灣新世代最佳室內樂組合」的藝心弦樂四重奏，團員由台北市立交響樂團、Taiwan Connection優秀音樂家組成。自2018年起，連續兩年在誠品室內樂節舞台上嶄露光芒。',src:require('../img/board_2-3.jpg')}
]

function homeNews(state = initHomeNews, action){
    switch(action.type){
        default :
        return state;
    }
}

const initSliderNews ={title:'開課資訊',date: '2020.07.10' ,className:'小提琴初學班'};

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

export default combineReducers({
    homeNews,
    homeSilderNews,
    homeUser,
});
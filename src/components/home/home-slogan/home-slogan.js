import React,{Component} from 'react';
import AOS from 'aos';

// import './home-slogan.scss'

class HomeSlogan extends Component{

    state = {
        width:false
    }

    componentDidMount(){

        AOS.init({
            duration : 1000, // 持續時間
            easing: 'ease-out-back',
        })

    }

    render(){
        return(
            <div className="container home-slogan-container">
                <div className="row home-slogan-wrap">
                    <h2 data-aos="fade-up" className='home-slogan-h2 col-md-12' id='homeSloganH2'>
                        Enjoyment of Music
                    </h2>
                    <h2 data-aos="fade-up" data-aos-delay="100" className="home-slogan-h2-sub col-md-12" id="h2-sub">
                        音樂，帶來生命的美好
                     </h2>
                     <div className="home-slogan-txt col-md-12" data-aos="fade-up" data-aos-delay="300">
                        <p>尼采曾說：「沒有音樂，生活將是一種錯誤」</p>
                        <p>悠然動人的音樂總是能撫慰每顆疲憊的心靈</p>
                        <p>隨著流泄而出的輕柔旋律、輕盈起舞</p>
                    </div>
                    <div className="home-slogan-txt col-md-12" data-aos="fade-up" data-aos-delay="400" >
                        <p>音樂可以點綴我們的人生、帶來力量</p>
                        <p>為生活慢慢地注入新鮮的靈動、豐沛斑斕的色彩</p>
                        <p>誠摯邀請您和我們一起徜徉在樂句之間</p>
                        <p>跳動的音符，擁抱最美好的人生片刻</p>
                     </div>
                </div>
            </div>
        )
    }
}

export default HomeSlogan;
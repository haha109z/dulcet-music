import React,{Component} from 'react';

// import './home-slogan.scss'

class HomeSlogan extends Component{

    state = {
        width:false
    }

    componentDidMount(){

        // console.log(this.state.width);


        window.addEventListener('scroll',()=>{
            const scorllTop = window.scrollY > (window.innerHeight/2);

            if(scorllTop){
                this.setState({width:true})
            }else{
                this.setState({width:false})
            }
        })

    }

    render(){
        return(
            <div className="container">
                <div className="row home-slogan-wrap">
                    <h2 className='home-slogan-h2 col-md-12' id='homeSloganH2'>
                        Enjoyment of Music
                    </h2>
                    <h2 className="home-slogan-h2-sub col-md-12" id="h2-sub">
                        音樂，帶來生命的美好
                     </h2>
                     <div className="home-slogan-txt col-md-12">
                        <p>尼采曾說：「沒有音樂，生活將是一種錯誤」</p>
                        <p>悠然動人的音樂總是能撫慰每顆疲憊的心靈</p>
                        <p>隨著流泄而出的輕柔旋律、輕盈起舞</p>
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
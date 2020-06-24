import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

// import './home-instruments.scss';

class HomeInstruments extends Component{

    state = {
        items : [
             {instrument:'長笛',instrumenEng:'Flute',card:'home-instruments-card col-md-3 home-instruments-flute',src:'/instrument'},
             {instrument:'',card:'home-instruments-card col-md-4 home-instruments-index'},
             {instrument:'爵士鼓',instrumenEng:'Drum',card:'home-instruments-card col-md-5 home-instruments-drum',src:'/instrument'},
             {instrument:'吉他',instrumenEng:'Guitar',card:'home-instruments-card col-md-4 home-instruments-guitar',src:'/instrument'},
             {instrument:'烏可麗麗',instrumenEng:'Ukulele',card:'home-instruments-card col-md-4 home-instruments-ukulele',src:'#/instrument'},
             {instrument:'鋼琴',instrumenEng:'Piano',card:'home-instruments-card col-md-4 home-instruments-piano',src:'/instrument'},
             {instrument:'中提琴',instrumenEng:'Viola',card:'home-instruments-card col-md-4 home-instruments-violin_m',src:'/instrument'},
             {instrument:'電子琴',instrumenEng:'Keyboard',card:'home-instruments-card col-md-3 home-instruments-Keyboard',src:'/instrument'},
             {instrument:'小提琴',instrumenEng:'Violin',card:'home-instruments-card col-md-4 home-instruments-violin',src:'/instrument'},
             {instrument:'薩克斯風',instrumenEng:'Saxophone',card:'home-instruments-card col-md-5 home-instruments-Saxophone',src:'/instrument'},
         ]
     };

     componentDidMount(){
         const checked = document.getElementById('home-instruments-sub');
         const labelWrap = document.querySelector('.home-arrow-wrap');
         checked.addEventListener('click',(event)=>{
            const toggle = event.target.checked;
            if(toggle){
                labelWrap.classList.add('home-instruments-label-active');
            }else{
                labelWrap.classList.remove('home-instruments-label-active');
            }
            // console.log('toggle:',toggle);
         })
     }

    render(){
            const {items} = this.state;
        return(
            <div className="home-instruments-wrap container-fluid">
                <div className="container home-instruments-title">
                    <h1 className="home-instruments-title-en">Instruments</h1>
                    <p className="home-instruments-title-ch container">樂器</p>
                </div>
                <div className="home-instruments-body">
                        <label htmlFor="home-instruments-sub" className="home-instruments-label">
                        <div className="home-arrow-wrap">
                            <i className="fas fa-angle-double-down"></i>
                        </div>
                        </label>
                    <input type="checkbox" id="home-instruments-sub"></input>
                    <div className="row home-instruments-row home-d-flex " id="homeInstrumentsRow">
                        {
                            items.map((item,index)=> (
                                <div key={index} className={item.card} >
                                    <Link to={item.src}>
                                            <p className="home-instruments-txt">{item.instrumenEng}</p>
                                            <p className="home-instruments-txt2">{item.instrument}</p>
                                        <span></span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeInstruments;

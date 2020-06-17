import React,{Component} from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

// import './home-instruments.scss';

class HomeInstruments extends Component{

    state = {
        items : [
             {instrument:'長笛',instrumenEng:'Flute',card:'home-instruments-card col-md-3 home-instruments-flute',src:'/test'},
             {instrument:'',card:'home-instruments-card col-md-4 home-instruments-index'},
             {instrument:'爵士鼓',instrumenEng:'Drum',card:'home-instruments-card col-md-5 home-instruments-drum',src:'/home'},
             {instrument:'吉他',instrumenEng:'Guitar',card:'home-instruments-card col-md-4 home-instruments-guitar',src:'/home'},
             {instrument:'烏可麗麗',instrumenEng:'Ukulele',card:'home-instruments-card col-md-4 home-instruments-ukulele',src:'/home'},
             {instrument:'鋼琴',instrumenEng:'Piano',card:'home-instruments-card col-md-4 home-instruments-piano',src:'/home'},
             {instrument:'中提琴',instrumenEng:'Viola',card:'home-instruments-card col-md-4 home-instruments-violin_m',src:'/home'},
             {instrument:'電子琴',instrumenEng:'Keyboard',card:'home-instruments-card col-md-3 home-instruments-Keyboard',src:'/home'},
             {instrument:'小提琴',instrumenEng:'Violin',card:'home-instruments-card col-md-4 home-instruments-violin',src:'/home'},
             {instrument:'薩克斯風',instrumenEng:'Saxophone',card:'home-instruments-card col-md-5 home-instruments-Saxophone',src:'/home'},
         ],
         toggle:false
     };

     componentDidMount(){
         const checked = document.getElementById('home-instruments-sub');
         checked.addEventListener('click',(event)=>{
             
            const {toggle} = this.state;
            const t = event.target.checked;            
            
            
         })     
     }

    render(){
            const {items,toggle} = this.state;   
            const display = toggle ? "none" : "block";           
            const display2 = toggle ? "block" : "none";           
            
        return(
            <div className="home-instruments-wrap container-fluid">
                <div className="container home-instruments-title">
                    <h1 className="home-instruments-title-en">Instruments</h1>
                    <p className="home-instruments-title-ch container">樂器</p>
                </div>
                <div className="home-instruments-body">
                    <label htmlFor="home-instruments-sub" className="home-instruments-label">                    
                        <i id="homeArrow" className="fas fa-angle-double-down" style={{display}}></i>
                        <i id="homeArrow" className="fas fa-angle-double-up" style={{display:display2}}></i></label>
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

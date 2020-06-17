import React,{Component} from 'react';
import PropTypes from 'prop-types';

import { Router,Link, Route } from 'react-router-dom';

import FooterAboutUs from './footer-items/footer-about-us';
import FooterAuthority from './footer-items/footer-authority';
import FooterCoustom from './footer-items/footer-coustom';
import FooterCompany from './footer-items/footer-company';

// import './footer.scss'

class Footer extends Component{

    render(){

        return(
            <div className="footer-wrap contaier-fluid">
                <div className="row footer-body footer-d-flex">
                    <div className="footer-logo col-md-2">
                        <img src={require('../../img/home_logo_方.png')}></img>
                    </div>
                    <div className="footer-about-us  col-md-2">
                        <div className="footer-title">
                            關於我們
                        </div>
                        <div className="footer-items">
                            <FooterAboutUs />
                        </div>
                    </div>
                    <div className="footer-authority  col-md-2">
                        <div className="footer-title">
                            會員權益
                        </div>
                        <div className="footer-items">
                            <FooterAuthority />
                        </div>
                    </div>
                    <div className="footer-coustom  col-md-2">
                        <div className="footer-title">
                            客戶服務
                        </div>
                        <div className="footer-items">
                            <FooterCoustom />
                        </div>
                    </div>
                    <div className="footer-company  col-md-2">
                        <div className="footer-title">
                            廠商專區
                        </div>
                        <div className="footer-items">
                            <FooterCompany />
                        </div>
                    </div>
                </div>
                <div className="footer-copy col-md-12">
                        ©Dulcet Music 2020
                    </div>
            </div>
        )
    }
}

export default Footer;
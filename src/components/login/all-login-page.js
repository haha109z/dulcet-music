import React,{Component} from 'react';
import {Switch,Route,Redirect,Link} from 'react-router-dom';

import Navbar from '../navbar/navbar';
import MyLogin from './Mylogin';
import UserLoginPage from './user-login-page/user-login-page';
import ManufacturerLoginPage from './manufacturer-login-page/manufacturer-login-page';

import '../../styles/login/all-login-page.scss';

class AllLoginPage extends Component{

    render(){
        return(
            <>
            <Navbar />
            <div className="container all-login-wrap">
                <div className="all-login-body row">
                    <div className="all-login-txt col-md-12">
                        <h1 className="all-login-title">Dulcet Music</h1>
                        <h3 className="all-login-h3">登入</h3>
                    </div>
                    <div className="all-login-change login-class-d-flex col-md-12">
                        <MyLogin className="login-change-items" to="/login/user" >會員</MyLogin>
                        <MyLogin className="login-change-items" to="/login/manufacturer" >廠商</MyLogin>
                    </div>
                    <div className="col-md-6 login-form-wrap">
                        <Switch>
                            <Route path="/login/user" component={UserLoginPage} />
                            <Route path="/login/manufacturer" component={ManufacturerLoginPage} />
                            <Redirect to="/login/user"/>
                        </Switch>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default AllLoginPage;
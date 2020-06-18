import React,{Component} from 'react';

import Navbar from '../navbar/navbar';

class UserRegistered extends Component{

    render(){
        return(
            <>
            <Navbar />
            <div className="container user-register-wrap">
                <div className="user-register-body row">
                    <div className="user-register-txt col-md-12">
                        <h1 className="user-register-title">Dulcet Music</h1>
                        <h3 className="user-register-h3">註冊</h3>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default UserRegistered;
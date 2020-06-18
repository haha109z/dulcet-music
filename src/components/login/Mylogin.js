import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Mylogin extends Component{

    

    render(){
        return(
            <>
                <NavLink {...this.props} activeClassName="activeClass"></NavLink>
            </>
        )
    }
}

export default Mylogin;
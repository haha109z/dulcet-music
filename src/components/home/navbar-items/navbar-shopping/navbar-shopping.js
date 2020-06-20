import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavbarShoppingCart extends Component{

    state = {
        login:true,
        width:window.innerWidth
      }

    componentDidMount(){
        const {width} = this.state;

        const handleRWD = ()=>{
            const width = window.innerWidth;
            this.setState({width});
            // console.log(width);

        }

        window.addEventListener('resize',handleRWD);
    }

    render(){
        const display = this.state.width < 768 ? 'none' : '';

        return (
        <>
           <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
            </Link>
            <span className="home-shopping-point nav-shopping-point">1</span>
            <div className="nav-shopping-cart nav-shopping-cart" style={{display}}>123</div>
        </>

        )
    }
}

export default NavbarShoppingCart;
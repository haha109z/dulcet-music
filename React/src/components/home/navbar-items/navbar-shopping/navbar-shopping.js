import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// 獲取localStorage資料
const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('user'));
  } 

class NavbarShoppingCart extends Component{

    state = {
        login:false,
        width:window.innerWidth
      }

    componentDidMount(){
        let user = getUserInfo();

        // 先判斷localStorage是否有值
        if(user === null){
            this.setState({login:false})
            this.handleClick = ()=>{
                window.location = '/login';
            }
        }else{
            this.setState({login:true})
            this.handleClick = ()=>{
                window.location = '/cart';
            }            
        }

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
           <div className="nav-shopping-area" onClick={this.handleClick}>
                <i className="fas fa-shopping-cart"></i>
            </div>
        
            <span className="home-shopping-point nav-shopping-point">1</span>
            {/*<div className="nav-shopping-cart nav-shopping-cart" style={{display}}>123</div>*/}
        </>

        )
    }
}

export default NavbarShoppingCart;
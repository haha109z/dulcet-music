import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class NavbarUser extends Component{

    state = {
        login:false,
        width:window.innerWidth
      }

      static propTypes = {
        homeUserItem:PropTypes.object.isRequired
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
        const {homeUserItem} = this.props;
        const display = this.state.width < 768 ? 'none' : '';

        // 會員icon圖示
        const userIcon = (
            <Link to="/login">
                <i className="fas fa-user"></i>
            </Link>
        )

        // 會員名字與下拉區
        const userLoginArea = (
            <div>
                <Link to="/user" className="home-username">{homeUserItem.username}</Link>
                <ul className="home-nav-userlogin" style={{display}}>
                    <li>
                        <Link to="javascript:void(0)">我的帳戶</Link>
                    </li>
                    <li>
                        <Link to="javascript:void(0)">我的影片</Link>
                    </li>
                    <li>
                        <Link to="javascript:void(0)">購買清單</Link>
                    </li>
                    <li>
                        <Link to="javascript:void(0)">登出</Link>
                    </li>
                </ul>
            </div>
        )

        const userShow = this.state.login ? userLoginArea : userIcon ;

        return (
        <>
            {userShow}
        </>

        )
    }
}

export default NavbarUser;
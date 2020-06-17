import React,{useState, Component} from 'react';
import PropTypes from 'prop-types';

class NavbarUser extends Component{

    state = {
        login:true,
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
        const display = this.state.login ? 'none':'block';
        const display2 = this.state.login ? 'block':'none';
        const display3 = this.state.login && this.state.width > 768 ? '':'none';
        const {homeUserItem} = this.props;

        return (
        <>
            <a href="javascript:;" style={{display}}>
            <i className="fas fa-user"></i>
                </a>
            <p className="home-username" style={{display:display2}}>{homeUserItem.username}</p>
            <ul className="home-nav-userlogin" style={{display:display3}}>
                <li>
                    <a src="javascript:;">我的帳戶</a>
                </li>
                <li>
                    <a src="javascript:;">我的影片</a>
                </li>
                <li>
                    <a src="javascript:;">購買清單</a>
                </li>
                <li>
                    <a src="javascript:;">登出</a>
                </li>
            </ul>
        </>

        )
    }
}

export default NavbarUser;
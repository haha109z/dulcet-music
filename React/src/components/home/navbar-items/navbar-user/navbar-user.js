import React,{useState, Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

// 獲取localStorage資料
const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('user'));
  } 

const clearUserInfo = () =>{
    return localStorage.clear('user');
}

class NavbarUser extends Component{

    state = {
        login:false,
        user:[],
        width:window.innerWidth
      }

    //   static propTypes = {
    //     homeUserItem:PropTypes.object.isRequired
    // }

    componentDidMount(){
        let user = getUserInfo();

        // 先判斷localStorage是否有值
        if(user === null){
            this.setState({login:false})
        }else{
            this.setState({user: user[0]}) 
            if(user.length > 0){
                this.setState({login:true})
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

    logoutProcess = () => {
        let user = clearUserInfo();
        this.setState({user:[]});  
      }
   

    render(){
        const {user} = this.state;
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
                <Link to="/user" className="home-username">
                    <img className="home-username-img" src={user.userID}></img>                                  
                </Link>
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
                        <Link to="/"
                        onClick={
                            this.logoutProcess
                          }
                        >登出</Link>
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
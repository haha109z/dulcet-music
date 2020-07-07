import React,{useState, Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


const MySwal = withReactContent(Swal);

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
        width:window.innerWidth,
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
        this.setState({login:false})
        this.logoutSuccess();
      }

    logoutSuccess = ()=>{
        MySwal.fire({
            position: 'top-center',
            icon: 'success',
            title: '登出',
            showConfirmButton: false,
            timer: 2000
        })

        setTimeout(()=>{
            window.location = '/';
        },2000)
    }



    render(){
        const {user,login} = this.state;
        const display = this.state.width < 768 ? 'none' : '';
        const userImgs = `http://localhost:3030/images/user/${this.state.user.userImg}`;
        const MuserImgs = `http://localhost:3030/images/manu_user/${this.state.user.Mimg}`;

        // 會員icon圖示
        const userIcon = (
            <a href="/login/user">
                <i className="fas fa-user"></i>
            </a>
        )

        // 會員名字與下拉區
        const userLoginArea = (
            <div>
                <a href="/user/UserData" className="home-username">
                    <img className="home-username-img" src={userImgs}></img>
                </a>
                <ul className="home-nav-userlogin" style={{display}}>
                    <li>
                        <a href="/user/userData">我的帳戶</a>
                    </li>
                    <li>
                        <a href="/user/userVideo">我的影片</a>
                    </li>
                    <li>
                        <a href="/user/UserPurchase">購買清單</a>
                    </li>
                    <li>
                        <Link to="/Forum">討論區</Link>
                    </li>
                    <li>
                        <span className="home-username-logout"
                        onClick={
                            this.logoutProcess
                          }
                        >登出</span>
                    </li>
                </ul>
            </div>
        )

        // 廠商名字與下拉區
        const MuserLoginArea = (
            <div>
                <a href="/ManufacturerInstrument/InstrumentHome" className="home-username">
                    <img className="home-username-img" src={MuserImgs}></img>
                </a>
                <ul className="home-nav-userlogin" style={{display}}>
                    <li>
                        <a href="/ManufacturerInstrument/InstrumentHome">我的帳戶</a>
                    </li>
                    <li>
                        <a href="/ManufacturerInstrument/InstrumentOrder">訂單列表</a>
                    </li>
                    <li>
                        <a href="/ManufacturerInstrument/InstrumentList">商品列表</a>
                    </li>
                    <li>
                        <a href="/ManufacturerInstrument/InstrumentList">新增商品</a>
                    </li>
                    <li>
                        <span className="home-username-logout"
                        onClick={
                            this.logoutProcess
                          }
                        >登出</span>
                    </li>
                </ul>
            </div>
        )

        const userShow = this.state.login ? (user.userID ? userLoginArea : MuserLoginArea) : userIcon ;

        return (
        <>
            {userShow}
        </>

        )
    }
}

export default withRouter(NavbarUser);
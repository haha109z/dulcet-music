import React, { Component } from 'react'
import { BrowserRouter,Switch, Route, Router, Redirect} from 'react-router-dom'

import UserSideBar from '../components/user/user-sidebar/user-sidebar'
import UserData from '../components/user/user-data/user-data'
import UserPwd from '../components/user/user-pwd/user-pwd'
import UserVoucher from '../components/user/user-voucher/user-voucher'
import UserPurchase from '../components/user/user-purchase/user-purchase'
import UserLike from '../components/user/user-like/user-like'
import UserVideo from '../components/user/user-video/user-video'
import Nav from '../components/navbar/navbar'
import Footer from '../components/footer/footer.js'

class UserApp extends Component {
  
  render() {
    return (
      <>
      <Nav/>
       <BrowserRouter>
          <div className="user-container">
            <UserSideBar/>
            <Switch>
              <Route path="/user/UserData" component={UserData}></Route>
              <Route path="/user/UserPwd" component={UserPwd}></Route>
              <Route path="/user/UserVoucher" component={UserVoucher}></Route>
              <Route path="/user/UserPurchase" component={UserPurchase}></Route>
              <Route path="/user/UserLike" component={UserLike}></Route>
              <Route path="/user/UserVideo" component={UserVideo}></Route>
              <Redirect to="/user/UserData"/>
            </Switch>
          </div>
      </BrowserRouter>
      {/* <Footer/> */}
      </>
    )
  }
}

export default UserApp

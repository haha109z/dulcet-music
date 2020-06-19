import React from 'react'

// 各頁面路徑
import VideoHome from '../../Pages/Manufacturer/Video-Pages/Manufacturer-Video-Home/Manufacturer-Video-Home'
import VideoMenu from '../../Pages/Manufacturer/Video-Pages/Manufacturer-Video-Menu/Manufacturer-Video-Menu'
import VideoEditPassword from '../../Pages/Manufacturer/Video-Pages/Manufacturer-Video-Password/Manufacturer-Video-Password'
import VideoPutOn from '../../Pages/Manufacturer/Video-Pages/Manufacturer-Video-PutOn/Manufacturer-Video-PutOn'
import VideoList from '../../Pages/Manufacturer/Video-Pages/Manufacturer-Video-List/Manufacturer-Video-List'
import VideoOrder from '../../Pages/Manufacturer/Video-Pages/Manufacturer-Video-Order/Manufacturer-Video-Order'

// Navbar&Footer
import MyNavbar from '../../Components/MyNavbar/MyNavbar'
import MyFooter from '../../Components/MyFooter/MyFooter'

// 引入工具、樣式
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from "react-router-dom"
import '../../Styles/Manufacturer/Manufacturer-Video-Styles/Manufacturer-Video-Menu.scss'


class ManufacturerVideoHome extends React.Component{
	render(){
	return(
		<Router>
		<MyNavbar/>
		<div className="user-container d-flex">
		<VideoMenu/>
        <Switch>
        <Route path="/VideoHome">
        <VideoHome/>
        </Route>
        <Route path="/VideoPutOn">
        <VideoPutOn />
        </Route>
        <Route path="/VideoList">
        <VideoList />
        </Route>
        <Route path="/VideoOrder">
        <VideoOrder />
        </Route>
        <Route path="/VideoEditPassword">
        <VideoEditPassword />
        </Route>
        </Switch>
		</div>
		<MyFooter/>
		</Router>
    )
    }
}


export default ManufacturerVideoHome
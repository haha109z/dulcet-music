import React from 'react'

// 各頁面路徑
import VideoHome from '../components/Manufacturer/Video-Pages/Manufacturer-Video-Home'
import VideoMenu from '../components/Manufacturer/Video-Pages/Manufacturer-Video-Menu'
import VideoPassword from '../components/Manufacturer/Video-Pages/Manufacturer-Video-Password'
import VideoPutOn from '../components/Manufacturer/Video-Pages/Manufacturer-Video-PutOn'
import VideoList from '../components/Manufacturer/Video-Pages/Manufacturer-Video-List'
import VideoOrder from '../components/Manufacturer/Video-Pages/Manufacturer-Video-Order'
import VideoEdit from '../components/Manufacturer/Video-Pages/Manufacturer-Video-Edit'

// Navbar&Footer
import Navbar from '../components/navbar/navbar'


// 引入工具、樣式
import { BrowserRouter, Router, Route, Link, Switch, withRouter ,Redirect} from "react-router-dom"


class ManufacturerVideoHome extends React.Component{
	render(){
	return(
        <>
        <Navbar/>
		<BrowserRouter>
		<div className="user-container d-flex">
		<VideoMenu/>
        <Switch>
        <Route path="/ManufacturerVideo/VideoHome">
        <VideoHome/>
        </Route>
        <Route path="/ManufacturerVideo/VideoPutOn">
        <VideoPutOn />
        </Route>
        <Route path="/ManufacturerVideo/VideoList">
        <VideoList />
        </Route>
        <Route path="/ManufacturerVideo/VideoOrder">
        <VideoOrder />
        </Route>
        <Route path="/ManufacturerVideo/VideoPassword">
        <VideoPassword />
        </Route>
        <Route path="/ManufacturerVideo/VideoEdit">
        <VideoEdit/>
        </Route>
        <Redirect to="/ManufacturerVideo/VideoHome"/>
        </Switch>
		</div>
		</BrowserRouter>
        </>
    )
    }
}


export default ManufacturerVideoHome
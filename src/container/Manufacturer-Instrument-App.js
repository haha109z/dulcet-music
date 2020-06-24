import React from 'react'

// 各頁面路徑
import InstrumentHome from '../components/Manufacturer/Instrument-Pages/Manufacturer-Instrument-Home'
import InstrumentMenu from '../components/Manufacturer/Instrument-Pages/Manufacturer-Instrument-Menu'
import InstrumentPassword from '../components/Manufacturer/Instrument-Pages/Manufacturer-Instrument-Password'
import InstrumentPutOn from '../components/Manufacturer/Instrument-Pages/Manufacturer-Instrument-PutOn'
import InstrumentList from '../components/Manufacturer/Instrument-Pages/Manufacturer-Instrument-List'
import InstrumentOrder from '../components/Manufacturer/Instrument-Pages/Manufacturer-Instrument-Order'
import InstrumentEdit from '../components/Manufacturer/Instrument-Pages/Manufacturer-Instrument-Edit'

// Navbar&Footer
import Navbar from '../components/navbar/navbar'

// 引入工具、樣式
import { BrowserRouter, Router, Route, Link, Switch, withRouter ,Redirect} from "react-router-dom"


class ManufacturerInstrumentHome extends React.Component{
	render(){
	return(
        <>
        <Navbar/>
		<BrowserRouter>
		<div className="user-container d-flex">
		<InstrumentMenu/>
        <Switch>
        <Route path="/ManufacturerInstrument/InstrumentHome">
        <InstrumentHome/>
        </Route>
        <Route path="/ManufacturerInstrument/InstrumentPutOn">
        <InstrumentPutOn />
        </Route>
        <Route path="/ManufacturerInstrument/InstrumentList">
        <InstrumentList />
        </Route>
        <Route path="/ManufacturerInstrument/InstrumentOrder">
        <InstrumentOrder />
        </Route>
        <Route path="/ManufacturerInstrument/InstrumentPassword">
        <InstrumentPassword />
        </Route>
        <Route path="/ManufacturerInstrument/InstrumentEdit">
        <InstrumentEdit/>
        </Route>
        <Redirect to="/ManufacturerInstrument/InstrumentHome"/>
        </Switch>
		</div>
		</BrowserRouter>
        </>
    )
    }
}


export default ManufacturerInstrumentHome
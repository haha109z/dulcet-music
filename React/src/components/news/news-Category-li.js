import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


function NewsCategoryLi(props){

    return (
        <>

            <li>    
              <Link to="">{props.NewsCategoryName}</Link>
            </li>

        </>
  )
}

export default NewsCategoryLi
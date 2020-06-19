import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function ProductId(props) {
  return (
    <>
    <Router>
        <Link className="product-id-link">
        {props.productCategoryId}
        </Link>
        &nbsp;/&nbsp;
        <Link className="product-id-link">
        {props.productInstrumentId}
        </Link>
        &nbsp;/&nbsp;
        <Link className="product-id-link">
        {props.productName}
        </Link>


    </Router>


    </>
  )
}

export default ProductId
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function ProductId(props) {
  return (
    <>
      <Link className="product-id-link" to={'/' + props.productCategoryId}>
        {props.productCategoryName}
      </Link>
      &nbsp;/&nbsp;
      <Link
        className="product-id-link"
        to={
          '/' +
          props.productCategoryId +
          '/category/' +
          props.productInstrumentId +
          '/1'
        }
      >
        {props.productInstrumentName}
      </Link>
      &nbsp;/&nbsp;
      <Link
        to={'/' + props.productCategoryId + '/' + props.PId}
        className="product-id-link"
      >
        {props.productName}
      </Link>
    </>
  )
}

export default ProductId

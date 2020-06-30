import React, { useState } from 'react'
import Amount from './product-intro-amount'
import Btn from './product-intro-btn'

function ProductIntro(props) {
  const PIntro = props.PIntro
  const PPrice = props.PPrice
  const PQty = props.PQty
  const PId = props.PId
  const PTime = props.PTime
  const dataP = props.dataP
  const setDataP = props.setDataP

  return (
    <>
      <div
        id="product-id-intro-wrapper"
        className="product-video-id-intro-wrapper"
      >
        <div id="product-id-intro-video-picture-wrapper">
          <img
            id="product-id-intro-video-picture"
            src={require('../../../img/product/video-pic.jpg')}
          ></img>
        </div>
        <div id="product-id-intro-text">
          <div id="product-id-intro-text-top">
            <h2 id="product-id-intro-text-title">{props.productName}</h2>
            <p id="product-id-intro-text-p">{PTime}</p>
            <pre id="product-id-intro-text-p">{PIntro}</pre>
          </div>
          <div id="product-id-intro-text-bottom">
            <h2 id="product-id-intro-text-cost-title">售價</h2>
            <h2 id="product-id-intro-text-cost">${PPrice}</h2>
            <Btn PId={PId} dataP={dataP} setDataP={setDataP} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductIntro

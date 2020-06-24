import React from 'react'
import Amount from './product-intro-amount'
import Btn from './product-intro-btn'

function ProductIntro(props) {
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
            <p id="product-id-intro-text-p">1小時05分鐘</p>
            <p id="product-id-intro-text-p">
              ‧聽到藍調音樂背景帶，在無譜狀態可以隨性彈起來 <br />
              ‧聽到藍調音樂背景帶
              <br />
              ‧在無譜狀態可以隨性彈起來
              <br />
            </p>
          </div>
          <div id="product-id-intro-text-bottom">
            <h2 id="product-id-intro-text-cost-title">售價</h2>
            <h2 id="product-id-intro-text-cost">$ 3,000</h2>
            <Btn />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductIntro

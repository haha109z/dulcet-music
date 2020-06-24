import React from 'react'
import Amount from './product-intro-amount'
import Btn from './product-intro-btn'

function ProductIntro(props) {
  return (
    <>
      <div
        id="product-id-intro-wrapper"
        className="product-instrument-id-intro-wrapper"
      >
        <div id="product-id-intro-instrument-picture-wrapper">
          <img
            id="product-id-intro-instrument-picture"
            src={require('../../../img/product/jazz-drum.jpeg')}
          ></img>
        </div>
        <div id="product-id-intro-text">
          <div id="product-id-intro-text-top">
            <h2 id="product-id-intro-text-title">{props.productName}</h2>
            <p id="product-id-intro-text-p">
              ‧ 黑色爵士鼓 <br />‧ MAPEX STORM ST5295F <br />‧ 不含銅鈸 <br />
              ‧ 黑色爵士鼓 <br />‧ MAPEX STORM ST5295F
            </p>
          </div>
          <div id="product-id-intro-text-bottom">
            <h2 id="product-id-intro-text-cost-title">售價</h2>
            <h2 id="product-id-intro-text-cost">$ 3,000</h2>
            <Amount />
            <Btn />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductIntro

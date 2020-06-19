import React from 'react'

function ProductIntro(props) {
  return (
    <>
      <div id="product-id-intro-wrapper">
        <div id="product-id-intro-picture"></div>
        <div id="product-id-intro-text">
          <h2 id="product-id-intro-text-title">{props.productName}</h2>
          <p>
            ‧ 黑色爵士鼓 <br />‧ MAPEX STORM ST5295F <br />‧ 不含銅鈸 ‧ 黑色爵士鼓 <br />‧ MAPEX
            STORM ST5295F
          </p>
          <h2 id="product-id-intro-text-cost-title">售價</h2>
        </div>
      </div>
    </>
  )
}

export default ProductIntro

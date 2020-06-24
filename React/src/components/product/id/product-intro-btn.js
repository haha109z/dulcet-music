import React from 'react'

function ProductIntroBtn(props) {
  return (
    <>
      <div id="product-id-intro-btn-wrapper">
        <button id="product-id-intro-cart-btn" className="product-id-intro-btn">
          加入購物車
        </button>
        <button
          id="product-id-intro-favorite-btn"
          className="product-id-intro-btn"
        >
          加入最愛
        </button>
      </div>
    </>
  )
}

export default ProductIntroBtn

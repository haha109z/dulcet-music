import React from 'react'

function ProductIntroBtn(props) {
  const PId = props.PId
  const amount = props.amount
  const setAmount = props.setAmount

  async function addInstrumentCart(CatId, PId, amount) {
    fetch(`http://localhost:3030/product/addFavorite`, {
      method: 'POST',
      body: JSON.stringify({ CatId, PId, amount }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {})
  }

  async function addInstrumentFav(CatId, PId) {
    fetch(`http://localhost:3030/product/addFavorite`, {
      method: 'POST',
      body: JSON.stringify({ CatId, PId }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {})
  }

  return (
    <>
      <div id="product-id-intro-btn-wrapper">
        <button id="product-id-intro-cart-btn" className="product-id-intro-btn">
          加入購物車
        </button>
        <button
          id="product-id-intro-favorite-btn"
          className="product-id-intro-btn"
          onClick={() => {
            addInstrumentFav()
          }}
        >
          加入最愛
        </button>
      </div>
    </>
  )
}

export default ProductIntroBtn

import React from 'react'

function ProductIntroBtn(props) {
  const PId = props.PId
  const amount = props.amount
  const setAmount = props.setAmount
  const dataP = props.dataP
  const setDataP = props.setDataP
  let dataCart = dataP
  let arrCart = {}

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
        <button
          id="product-id-intro-cart-btn"
          className="product-id-intro-btn"
          onClick={() => {
            arrCart = JSON.parse(localStorage.getItem('cart'))
            let addBool = false
            if (arrCart == null) {
              dataCart[0].num = amount
              setAmount(0)
              setDataP(dataCart)
              localStorage.setItem('cart', JSON.stringify(dataCart))
            } else if (arrCart != null) {
              for (let i = 0; i < arrCart.length; i++) {
                console.log(i)
                if (dataCart[0].PId == arrCart[i].PId) {
                  alert('請勿重複加入')
                  break
                } else if (i == arrCart.length - 1) {
                  console.log('要加')
                  dataCart[0].num = amount
                  setAmount(0)
                  setDataP(dataCart)
                  arrCart.push(dataCart[0])
                  localStorage.setItem('cart', JSON.stringify(arrCart))
                  alert('已加入購物車')
                  break
                }
              }
              // dataCart[0].num = amount
              // setAmount(0)
              // setDataP(dataCart)
              // arrCart.push(dataCart[0])
              // console.log('arrCart', arrCart.length)
              // localStorage.setItem('cart', JSON.stringify(arrCart))
            }
          }}
        >
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

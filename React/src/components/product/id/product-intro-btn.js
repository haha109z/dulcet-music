import React, { useEffect, useState } from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
const MySwal = withReactContent(Swal)

function ProductIntroBtn(props) {
  const { cartNum, setCartNum } = props
  const favArr = props.favArr
  const setFavArr = props.setFavArr
  const CatId = props.CatId
  const PId = props.PId
  const [inc, setInc] = useState(favArr.includes(PId))

  const amount = props.amount
  const setAmount = props.setAmount
  const dataP = props.dataP
  const setDataP = props.setDataP
  let dataCart = dataP
  let arrCart = {}

  var testArray = favArr

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
  async function delInstrumentFav(CatId, PId) {
    fetch(`http://localhost:3030/product/delFavorite`, {
      method: 'POST',
      body: JSON.stringify({ CatId, PId }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {})
  }
  var pos = testArray.indexOf(PId)
  const testArrayFunc = () => {
    testArray = favArr
    setInc(favArr.includes(PId))
    pos = testArray.indexOf(PId)
  }
  const func1 = () => {
    delInstrumentFav(CatId, PId)
    testArray.splice(pos, 1)
    setFavArr(testArray)
  }
  const func2 = () => {
    addInstrumentFav(CatId, PId)
    testArray.push(PId)
    setFavArr(testArray)
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
              setAmount(1)
              setDataP(dataCart)
              localStorage.setItem('cart', JSON.stringify(dataCart))
              MySwal.fire('已加入購物車', '', 'success')
              setCartNum(JSON.parse(localStorage.getItem('cart')).length)
            } else if (arrCart != null) {
              for (let i = 0; i < arrCart.length; i++) {
                if (
                  dataCart[0].PCategoryId == arrCart[i].PCategoryId &&
                  dataCart[0].PId == arrCart[i].PId
                ) {
                  MySwal.fire('請勿重複加入', '', 'warning')
                  break
                } else if (i == arrCart.length - 1) {
                  dataCart[0].num = amount
                  setAmount(1)
                  setDataP(dataCart)
                  arrCart.push(dataCart[0])
                  localStorage.setItem('cart', JSON.stringify(arrCart))
                  MySwal.fire('已加入購物車', '', 'success')
                  setCartNum(JSON.parse(localStorage.getItem('cart')).length)
                  break
                }
              }
            }
          }}
        >
          加入購物車
        </button>
        <button
          id={`${
            inc ? 'product-id-intro-btn-add' : 'product-id-intro-favorite-btn'
          }`}
          className="product-id-intro-btn"
          onClick={() => {
            inc ? func1() : func2()
            testArrayFunc()
          }}
        >
          {inc ? '已加入最愛' : '加入最愛'}
        </button>
      </div>
    </>
  )
}

export default ProductIntroBtn

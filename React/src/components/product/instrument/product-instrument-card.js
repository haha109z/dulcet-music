import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa'

function ProductVideoCard(props) {
  // const favorite = props.favorite
  // const setFavorite = props.setFavorite
  const maylike = props.maylike

  const favArr = props.favArr
  const setFavArr = props.setFavArr
  const CatId = '樂器'
  const PId = props.PId
  // const [array, setFavArr] = useState([1, 2, 5])
  const [inc, setInc] = useState(favArr.includes(PId))
  var testArray = favArr
  // var PId = 1

  async function addInstrumentFav(CatId, PId) {
    fetch(`http://localhost:3030/product/addFavorite`, {
      method: 'POST',
      body: JSON.stringify({ CatId, PId }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
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
    console.log(PId, 'del', favArr)
  }
  const func2 = () => {
    addInstrumentFav(CatId, PId)
    testArray.push(PId)
    setFavArr(testArray)
    console.log(PId, 'add', favArr)
  }

  return (
    <>
      <div
        className={`product-instrument-card ${
          maylike ? 'product-maylike-card' : ''
        }`}
      >
        <img
          className="product-instrument-card-img"
          // src={require('../images/184177.jpg')}
        />
        <div
          className={`product-card-favorite-container ${
            inc ? 'product-card-favorite-bg' : null
          }`}
          onClick={() => {
            inc ? func1() : func2()
            testArrayFunc()
          }}
        >
          {/* <div
          className={`product-card-favorite-container ${
            favorite ? 'product-card-favorite-bg' : null
          }`}
          onClick={() => {
            favorite ? setFavorite(false) : setFavorite(true)
          }}
        > */}
          <FaHeart className="product-card-favorite" />
        </div>
        <div className="product-card-intro">
          <h4 className="product-card-title">{props.PName}</h4>
          <h3 className="product-card-cost">${props.PPrice}</h3>
        </div>
      </div>
    </>
  )
}

export default ProductVideoCard

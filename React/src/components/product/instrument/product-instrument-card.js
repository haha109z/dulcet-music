import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

function ProductVideoCard(props) {
  const favorite = props.favorite
  const setFavorite = props.setFavorite
  const maylike = props.maylike
  const [array, setArray] = useState([1, 2, 5])
  const [inc, setInc] = useState(array.includes(testId))
  var testArray = array
  var testId = 1

  var pos = testArray.indexOf(testId)
  const testArrayFunc = () => {
    testArray = array
    setInc(array.includes(testId))
    pos = testArray.indexOf(testId)
  }
  const func1 = () => {
    testArray.splice(pos, 1)
    setArray(testArray)
  }
  const func2 = () => {
    testArray.push(testId)
    setArray(testArray)
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
          <h4 className="product-card-title">小提琴 實木 DYM SV015</h4>
          <h3 className="product-card-cost">$13,000</h3>
        </div>
      </div>
    </>
  )
}

export default ProductVideoCard

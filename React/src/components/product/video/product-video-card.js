import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'

function ProductVideoCard(props) {
  const favorite = props.favorite
  const setFavorite = props.setFavorite
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
      <div className="product-video-card">
        <img
          className="product-video-card-img"
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
          <h4 className="product-card-title">【提琴教室】小提琴-01</h4>
          <h5 className="product-video-card-time">1小時05分</h5>
          <p className="product-video-card-desciption">
            小提琴是提琴家族中最小、音高最高的一種，主要的特點在於其輝煌的聲音、高度的演奏技巧和豐富、廣泛的表現力。讓阿雅老師帶你從基礎開始學會演奏小提琴！
          </p>
          <h3 className="product-card-cost">$13,000</h3>
        </div>
      </div>
    </>
  )
}

export default ProductVideoCard

import React from 'react'
import { FaHeart } from 'react-icons/fa'

function ProductIntro(props) {
  return (
    <>
    <h2 id="product-id-maylike-title">你可能會喜歡</h2>
    <div className="product-card-list">
            <div className="product-instrument-card">
              <img
                className="product-instrument-card-img"
                // src={require('../images/184177.jpg')}
              />
              <div className="product-card-favorite-container">
                <FaHeart className="product-card-favorite" />
              </div>
              <div className="product-card-intro">
                <h4 className="product-card-title">小提琴 實木 DYM SV015</h4>
                <h3 className="product-card-cost">$13,000</h3>
              </div>
            </div>
            <div className="product-instrument-card"></div>
            <div className="product-instrument-card"></div>
            <div className="product-instrument-card"></div>
          </div>
    </>
  )
}

export default ProductIntro
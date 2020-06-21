import React from 'react'
import { FaHeart } from 'react-icons/fa'

function ProductVideoCard(props) {
  const favorite = props.favorite
  const setFavorite = props.setFavorite
  const maylike = props.maylike
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
            favorite ? 'product-card-favorite-bg' : null
          }`}
          onClick={() => {
            favorite ? setFavorite(false) : setFavorite(true)
          }}
        >
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

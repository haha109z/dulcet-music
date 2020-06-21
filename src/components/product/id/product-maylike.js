import React, { useState } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import Card from '../instrument/product-instrument-card'

function ProductIntro(props) {
  const maylike = true
  const [favorite, setFavorite] = useState(false)

  return (
    <>
      <h2 id="product-id-maylike-title">你可能會喜歡</h2>
      <div className="product-card-list " id="product-maylike-card-list">
        <Card maylike={maylike} favorite={favorite} setFavorite={setFavorite} />
        <Card maylike={maylike} favorite={favorite} setFavorite={setFavorite} />
        <Card favorite={favorite} setFavorite={setFavorite} />
        <Card favorite={favorite} setFavorite={setFavorite} />

        <button
          className="product-favorite-arrow-btn"
          id="product-favorite-arrow-btn-left"
        >
          <IoMdArrowDropleft className="product-favorite-arrow" />
        </button>
        <button
          className="product-favorite-arrow-btn"
          id="product-favorite-arrow-btn-right"
        >
          <IoMdArrowDropright className="product-favorite-arrow" />
        </button>
      </div>
    </>
  )
}

export default ProductIntro

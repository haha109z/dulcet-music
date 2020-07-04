import React, { useState, useEffect } from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { IoMdArrowDropleft } from 'react-icons/io'
import Card from '../instrument/product-instrument-card'

function ProductMayLike(props) {
  // const maylike = true
  // const [favorite, setFavorite] = useState(false)
  const list = props.list

  const [dataP, setDataP] = useState([])
  const [favArr, setFavArr] = useState([])

  async function getDataP() {
    fetch(`http://localhost:3030/product/getMayLike`, {
      method: 'POST',
      body: JSON.stringify({ list }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setDataP(json)
      })
  }
  async function getInstrumentFav() {
    fetch(`http://localhost:3030/product/instrument/favorite`, {
      method: 'POST',
      body: JSON.stringify(),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        const mm = json.map((a) => a.FavPId)
        setFavArr(mm)
      })
  }

  useEffect(() => {
    getInstrumentFav()
    getDataP()
  }, [])

  return (
    <>
      <h2 id="product-id-maylike-title">你可能會喜歡</h2>
      <div className="product-card-list " id="product-maylike-card-list">
        {dataP.map((c) => {
          return (
            <Card
              PName={c.PName}
              PPrice={c.PPrice.toString().replace(
                /(\d)(?=(\d{3})+(\d{3})?$)/g,
                '$1,'
              )}
              favArr={favArr}
              setFavArr={setFavArr}
              PId={c.PId}
              PImg={c.PImg}
            ></Card>
          )
        })}
      </div>
      {/* <h2 id="product-id-maylike-title">你可能會喜歡</h2>
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
      </div> */}
    </>
  )
}

export default ProductMayLike

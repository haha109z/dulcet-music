import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProductLink from '../id/product-link'
import ProductIntro from '../id/product-video-intro'
import ProductDesciption from '../id/product-desciption'
import ProductMayLike from '../id/product-maylike'

function ProductId() {
  let { PId } = useParams()

  const productCategoryId = 'video'
  const productCategoryName = '線上影片'
  const productInstrumentId = 'violin'
  const productInstrumentName = '小提琴'
  const productName = '【提琴教室】小提琴-01'

  const [dataP, setDataP] = useState([])

  async function getDataP() {
    fetch(`http://localhost:3030/product/getid`, {
      method: 'POST',
      body: JSON.stringify({ PId, productCategoryId }),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setDataP(json)
        console.log(json)
      })
  }
  useEffect(() => {
    getDataP()
  }, [])

  return (
    <>
      <div className="product-container">
        <div className="product-wrapper">
          {dataP.map((p) => {
            return (
              <>
                <ProductLink
                  productCategoryId={productCategoryId}
                  productCategoryName={productCategoryName}
                  productInstrumentId={p.PIId}
                  productInstrumentName={p.PInstrumentId}
                  productName={p.PName}
                  PId={p.PId}
                />
                <div id="product-id-wrapper">
                  <ProductIntro
                    productName={p.PName}
                    PIntro={p.PIntro}
                    PPrice={p.PPrice.toString().replace(
                      /(\d)(?=(\d{3})+(\d{3})?$)/g,
                      '$1,'
                    )}
                    PTime={p.PTime}
                    PId={p.PId}
                    dataP={dataP}
                    setDataP={setDataP}
                  />
                  <hr id="product-id-wrapper-hr" />
                  <ProductDesciption Pdesciption={p.Pdesciption} />
                </div>
              </>
            )
          })}
          <hr id="product-wrapper-hr" />
          <ProductMayLike list={productCategoryId} />
        </div>
      </div>
    </>
  )
}

export default ProductId

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProductLink from '../id/product-link'
import ProductIntro from '../id/product-instrument-intro'
import ProductDesciption from '../id/product-desciption'
import ProductMayLike from '../id/product-maylike'

function ProductId(props) {
  let { PId } = useParams()
  const { cartNum, setCartNum } = props

  const productCategoryId = 'instrument'
  const CatId = '樂器'
  const productCategoryName = '精選樂器'
  const productInstrumentId = 'piano'
  const productInstrumentName = '鋼琴'
  const productName = 'MAPEX STORM ST5295F 爵士鼓組'
  const [favArr, setFavArr] = useState([])

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
    getInstrumentFav()
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
                    cartNum={cartNum}
                    setCartNum={setCartNum}
                    productName={p.PName}
                    PIntro={p.PIntro}
                    PPrice={p.PPrice.toString().replace(
                      /(\d)(?=(\d{3})+(\d{3})?$)/g,
                      '$1,'
                    )}
                    PQty={p.PQty}
                    PId={p.PId}
                    dataP={dataP}
                    setDataP={setDataP}
                    PImg={p.PImg}
                    CId={p.PCategoryId}
                    favArr={favArr}
                    setFavArr={setFavArr}
                    CatId={CatId}
                  />
                  <hr id="product-id-wrapper-hr" />
                  <ProductDesciption Pdesciption={p.Pdesciption} />
                </div>
                <hr id="product-wrapper-hr" />
                <ProductMayLike list={productCategoryId} />
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductId

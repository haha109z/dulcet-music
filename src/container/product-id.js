import React from 'react'
import Navbar from '../components/navbar/navbar'
import ProductLink from '../components/product/id/product-link'
import ProductIntro from '../components/product/id/product-intro'
import ProductDesciption from '../components/product/id/product-desciption'
import ProductMayLike from '../components/product/id/product-maylike'

function ProductId() {
  const productCategoryId = '精選樂器'
  const productInstrumentId = '鋼琴'
  const productName = 'MAPEX STORM ST5295F 爵士鼓組'
  return (
    <>
      <Navbar />
      <div className="product-container">
        <div className="product-wrapper">
          <ProductLink
            productCategoryId={productCategoryId}
            productInstrumentId={productInstrumentId}
            productName={productName}
          />
          <div id="product-id-wrapper">
            <ProductIntro productName={productName}/>
            <hr id="product-id-wrapper-hr" />
            <ProductDesciption />
          </div>
          <hr id="product-wrapper-hr"/>
          <ProductMayLike />
        </div>
      </div>
    </>
  )
}

export default ProductId

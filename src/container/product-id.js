import React from 'react'
import Navbar from '../components/navbar/navbar'
import ProductLink from '../components/product/id/product-link'


function ProductId() {
    const productCategoryId = "精選樂器"
    const productInstrumentId = "鋼琴"
  return (
    <>
      {/* <Navbar /> */}
      <ProductLink  productCategoryId={productCategoryId} productInstrumentId={productInstrumentId} />

    </>
  )
}

export default ProductId
import React from 'react'
// import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/instrument/productList'
import ProductCategory from '../components/product/instrument/productCategory'


function ProductInstrument() {
  const productTitle = "精選樂器"
  return (
    <>
      {/* <Navbar /> */}
      <ProducList productTitle={productTitle} />
      <ProductCategory />

    </>
  )
}

export default ProductInstrument
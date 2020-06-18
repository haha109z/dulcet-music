import React from 'react'
// import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/video/productList'
import ProductCategory from '../components/product/instrument/productCategory'


function ProductInstrument() {
    const productTitle = "線上影片"
  return (
    <>
      {/* <Navbar /> */}
      <ProducList productTitle={productTitle} />
      <ProductCategory />

    </>
  )
}

export default ProductInstrument
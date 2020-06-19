import React from 'react'
import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/course/productList'
import ProductCategory from '../components/product/instrument/productCategory'


function ProductInstrument() {
    const productTitle = "優質課程"
  return (
    <>
      <Navbar />
      <ProducList productTitle={productTitle} />
      {/* <ProductCategory /> */}

    </>
  )
}

export default ProductInstrument
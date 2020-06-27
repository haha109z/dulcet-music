import React from 'react'
import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/instrument/productList'
import ProductCategory from '../components/product/productCategory'
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from 'react-router-dom'
import Piano from '../components/product/instrument/productPiano'
import ProductId from './product-id'

function ProductInstrument() {
  const productTitle = '精選樂器'
  const productTitleId = 'instrument'
  return (
    <>
      <Navbar />
      {/* <ProductCategory /> */}
      <BrowserRouter>
        <Switch>
          <Route
            path="/instrument/piano"
            render={() => (
              <>
                <ProducList
                  productTitle={productTitle}
                  productTitleId={productTitleId}
                />
                <Piano />
              </>
            )}
          ></Route>
          <Route path="/instrument/:PId">
            <ProductId />
          </Route>

          <Route
            path="/instrument"
            render={(routeProps) => (
              <ProducList
                productTitle={productTitle}
                productTitleId={productTitleId}
              />
            )}
          ></Route>
          <Redirect to="/instrument" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default ProductInstrument

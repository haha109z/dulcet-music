import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/video/productList'
import ProductCategory from '../components/product/productCategory'
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from 'react-router-dom'
import Piano from '../components/product/instrument/productPiano'
import ProductId from '../components/product/video/product-id'

function ProductInstrument() {
  const productTitle = '線上影片'
  const productTitleId = 'video'
  const [control, setControl] = useState('熱門度')

  return (
    <>
      <Navbar />
      {/* <ProductCategory /> */}
      <BrowserRouter>
        <Switch>
          <Route
            path="/video/page/:page"
            render={(routeProps) => (
              <ProducList
                productTitle={productTitle}
                productTitleId={productTitleId}
                control={control}
                setControl={setControl}
              />
            )}
          ></Route>

          <Route
            path="/video/piano"
            render={(routeProps) => (
              <>
                <ProducList productTitle={productTitle} />
                <Piano />
              </>
            )}
          ></Route>
          <Route path="/video/:PId">
            <ProductId />
          </Route>

          {/* <Route
            path="/video"
            render={(routeProps) => (
              <ProducList
                productTitle={productTitle}
                productTitleId={productTitleId}
              />
            )}
          ></Route> */}
          <Redirect to="/video/page/1" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default ProductInstrument

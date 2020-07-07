import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import ProductList from '../components/product/video/productList'
import ProductCatList from '../components/product/video/productCatList'

import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from 'react-router-dom'
import ProductId from '../components/product/video/product-id'

function ProductInstrument(props) {
  const { cartNum, setCartNum } = props
  const productTitle = '線上影片'
  const productTitleId = 'video'
  const [control, setControl] = useState('熱門度')

  return (
    <>
      <Navbar cartNum={cartNum} />
      <BrowserRouter>
        <Switch>
          <Route
            path="/video/page/:page"
            render={(routeProps) => (
              <ProductList
                productTitle={productTitle}
                productTitleId={productTitleId}
                control={control}
                setControl={setControl}
              />
            )}
          ></Route>

          <Route
            path="/video/category/:category/:page"
            render={() => (
              <ProductCatList
                productTitle={productTitle}
                productTitleId={productTitleId}
                control={control}
                setControl={setControl}
              />
            )}
          ></Route>
          <Route path="/video/:PId">
            <ProductId cartNum={cartNum} setCartNum={setCartNum} />
          </Route>

          <Redirect to="/video/page/1" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default ProductInstrument

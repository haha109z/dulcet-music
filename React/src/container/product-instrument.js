import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/instrument/productList'
import ProductCategory from '../components/product/productCategory'
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
  withRouter,
} from 'react-router-dom'
import Piano from '../components/product/instrument/productPiano'
import ProductId from './product-id'

function ProductInstrument() {
  const productTitle = '精選樂器'
  const productTitleId = 'instrument'

  const [control, setControl] = useState('熱門度')

  //分頁

  return (
    <>
      <Navbar />
      {/* <ProductCategory /> */}
      <BrowserRouter>
        <Switch>
          <Route
            path="/instrument/page/:page"
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
            path="/instrument/category/:category/:page"
            render={() => (
              <ProducList
                productTitle={productTitle}
                productTitleId={productTitleId}
                control={control}
                setControl={setControl}
              />
            )}
          ></Route>

          <Route path="/instrument/:PId">
            <ProductId />
          </Route>

          {/* <Route
            path="/instrument"
            render={(routeProps) => (
              <ProducList
                productTitle={productTitle}
                productTitleId={productTitleId}
              />
            )}
          ></Route> */}
          <Redirect to="/instrument/page/1" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default withRouter(ProductInstrument)

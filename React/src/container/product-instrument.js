import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/instrument/productList'
import ProducCatList from '../components/product/instrument/productCatList'

import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
  withRouter,
} from 'react-router-dom'
import ProductId from '../components/product/instrument/product-id'

function ProductInstrument(props) {
  const productTitle = '精選樂器'
  const productTitleId = 'instrument'
  const { cartNum, setCartNum } = props
  const [control, setControl] = useState('熱門度')

  //分頁

  return (
    <>
      <Navbar cartNum={cartNum} />
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
              <ProducCatList
                productTitle={productTitle}
                productTitleId={productTitleId}
                control={control}
                setControl={setControl}
              />
            )}
          ></Route>

          <Route path="/instrument/:PId">
            <ProductId cartNum={cartNum} setCartNum={setCartNum} />
          </Route>

          <Redirect to="/instrument/page/1" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default withRouter(ProductInstrument)

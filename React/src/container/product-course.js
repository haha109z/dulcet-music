import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/course/productList'
import ProducCatList from '../components/product/course/productCatList'
import ProductCategory from '../components/product/productCategory'
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from 'react-router-dom'
import Piano from '../components/product/instrument/productPiano'
import ProductId from '../components/product/course/product-id'

function ProductInstrument(props) {
  const cartNum = props.cartNum
  const productTitle = '優質課程'
  const productTitleId = 'course'
  const [control, setControl] = useState('熱門度')

  return (
    <>
      <Navbar cartNum={cartNum} />
      {/* <ProductCategory /> */}
      <BrowserRouter>
        <Switch>
          <Route
            path="/course/page/:page"
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
            path="/course/category/:category/:page"
            render={() => (
              <ProducCatList
                productTitle={productTitle}
                productTitleId={productTitleId}
                control={control}
                setControl={setControl}
              />
            )}
          ></Route>
          <Route path="/course/:PId">
            <ProductId />
          </Route>

          {/* <Route
            path="/course"
            render={(routeProps) => (
              <ProducList
                productTitle={productTitle}
                productTitleId={productTitleId}
              />
            )}
          ></Route> */}
          <Redirect to="/course/page/1" />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default ProductInstrument

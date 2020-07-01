import React, { useState } from 'react'
import Navbar from '../components/navbar/navbar'
import ProducList from '../components/product/course/productList'
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

function ProductInstrument() {
  const productTitle = '優質課程'
  const productTitleId = 'course'
  const [control, setControl] = useState('熱門度')

  return (
    <>
      <Navbar />
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
            path="/course/piano"
            render={(routeProps) => (
              <>
                <ProducList productTitle={productTitle} />
                <Piano />
              </>
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

import React from 'react'

function ProductDesciption(props) {
  const Pdesciption = props.Pdesciption
  const list = props.list
  return (
    <>
      <div id="product-id-desciption-wrapper">
        <h2 id="product-id-desciption-title">商品詳細內容</h2>
        <div id="product-id-desciption-text">
          <pre className="product-id-desciption-text-p">{Pdesciption}</pre>
          {list == 'course' ? (
            <a className="product-id-desciption-text-a" href="/About">
              上課地點
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </>
  )
}

export default ProductDesciption

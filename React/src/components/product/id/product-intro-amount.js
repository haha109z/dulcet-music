import React, { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { AiOutlineMinusCircle } from 'react-icons/ai'

function ProductIntroAmount(props) {
  const [amount, setAmount] = useState(0)
  const stock = 10

  return (
    <>
      <div id="product-id-intro-amount-wrapper">
        <button
          onClick={() => {
            if (amount == 0) {
              setAmount(0)
            } else {
              setAmount(amount - 1)
            }
          }}
          className="product-id-intro-amount-btn"
        >
          <AiOutlineMinusCircle className="product-id-intro-amount-btn-icon" />
        </button>
        <input
          type="text"
          id="product-id-intro-amount-input"
          value={amount}
          readOnly
        ></input>
        <button
          onClick={() => {
            if (amount == stock) {
              setAmount(stock)
            } else {
              setAmount(amount + 1)
            }
          }}
          className="product-id-intro-amount-btn"
        >
          <AiOutlinePlusCircle className="product-id-intro-amount-btn-icon" />
        </button>
      </div>
      <h6 id="product-id-intro-stock">庫存數量：{stock}</h6>
    </>
  )
}

export default ProductIntroAmount

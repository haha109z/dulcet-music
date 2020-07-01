import React ,{ Fragment, useState, useEffect } from 'react';

export default function CartItem (props) {

    const { 
      cart, 
      setCart, 
      buyProduct, 
      setBuyProduct,
      minusCartNumber, 
      plusCartNumber, 
      deleteCartItem, 
      totalPrice, 
    } = props.allProps;  
    // totalPrice = data[index].PPrice;

    // buycallback函式：點擊時切換checkbox勾選狀態
    const buycallback = (e) =>{
      console.log(e.checked)
      // setBuyProduct(e.checked)
    }

    useEffect(()=>{
        const ul = document.querySelectorAll(".cart-product")
        const ulN = ul.length;
        // console.log(ulN);
    },[])

    const checked = (e)=>{
      const input = e;
      const check = e ?'':'checked';
      input.attr(check,'')
    }
    

    return(
        <> 
            <div className="cart-check">
            {cart.map((data, index)=>{
                
                return(
                  <ul className="cart-product" key={index}>
                    <li className="cart-product-li"><input type="checkbox" onClick={(e)=>{ checked(e.target) }} /></li>
                    <li className="cart-product-li"><img src={require(`../../img/cart/cart-violin-01.jpeg`)} /></li>
                    {/* <li className="cart-product-li"><img src={require(`../../img/cart/${data.PImg}`)} /></li> */}
                    <li className="cart-product-li">{data.PName}</li>
                    <li className="cart-product-li cart-english-font" style={{color:'var(--main-colorfb2)'}}>${
                        data.PPrice.toString().replace(
                            /(\d)(?=(\d{3})+(\d{3})?$)/g,
                            '$1,'
                        )}
                    </li>
                    <li className="cart-product-li-2">
                      <div onClick={(e)=>{minusCartNumber(index)}}>
                        <i className="cart-minusBtn fas fa-minus-circle" />
                      </div>
                      <div className="cart-number-input cart-english-font">{data.num}</div>
                      {/* <input  className="cart-number-input cart-english-font" value={testArr[index]}></input> */}
                      {/* <div className="cart-number-input cart-english-font">{testArr[index]}</div> */}
                      <div onClick={(e)=>{plusCartNumber(index)}}>
                        <i className="cart-plusBtn fas fa-plus-circle" />
                      </div>
                    </li>
                    <li className="cart-product-number cart-english-font" style={{color:'var(--main-colorfb2)'}}>
                        ${(data.num * data.PPrice).toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                    </li>
                    <li className="cart-trash-btn" 
                      onClick={(e)=>{deleteCartItem(e.target.parentElement.closest(".cart-product"))}}
                    >
                      <i className="far fa-trash-alt" />
                    </li>
                  </ul>
                )
                }
              )}
            </div>
        </>
    )
}

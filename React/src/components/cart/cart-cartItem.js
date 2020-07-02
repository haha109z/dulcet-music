import React ,{ Fragment, useState, useEffect } from 'react';
import { logDOM } from '@testing-library/react';

export default function CartItem (props) {

    const { 
      cart, 
      setCart, 
      buyProduct, 
      setBuyProduct,
      // minusCartNumber, 
      plusCartNumber, 
      totalPrice,       
    } = props.allProps;  
    // totalPrice = data[index].PPrice;


    // buycallback函式：點擊時切換checkbox勾選狀態
    // const buycallback = (e) =>{
    //   console.log(e.checked)
    //   // setBuyProduct(e.checked)
    // }

    // useEffect(()=>{
    //     const ul = document.querySelectorAll(".cart-product")
    //     const ulN = ul.length;
    //     // console.log(ulN);
    // },[])

    const checked = (e)=>{
      // console.log(e.checked);
      const input = e;   
      if(!e.checked){    
        input.removeAttribute("checked")
      }else{
        input.setAttribute("checked","checked")
      }
    }    

    
  // let arr =[2,1,3]
  // const [testArr,setTestArr]=useState(arr)

  // minusCartNumber函式：點擊btn減少該商品之購物車數量
  // const minusCartNumber = (e) =>{
  //   if (number == 0) {
  //     setNumber(0)
  //   } else {
  //     setNumber(number - 1)
  //     setCart({
  //       ...cart,
  //       0:{
  //         ...cart[0],
  //         number: number       
  //       } 
  //     })
  //   }
  // }

    
  // plusCartNumber函式：點擊btn增加該商品之購物車數量
  // const plusCartNumber = (e) =>{
  //   // let cart = cart[0]
  //   // console.log(cart[0].cartNumber)
  //   // let index=e
  //   // arr=testArr
  //   // console.log(index);    
  //   // console.log(arr[index]+1)
  //   // console.log(testArr)
  //   // arr[index]=arr[index]+1
  //   // arr[index]=parseInt(arr[index])+1
  //   // setTestArr(arr)

  //   const stock =5
  //   if (number == stock) {
  //     setNumber(stock) 
  //     alert('庫存不足')
  //   } else {
  //     setNumber(number + 1)
  //     setCart({
  //       ...cart,
  //       0:{
  //         ...cart[0],
  //         number: number       
  //       } 
  //     })
  //   }
  // }

  // const deleteCartItem = (e) => {
  //   // alert('是否確認刪除?')
  //   // console.log( e.target.parentElement.closest(".cart-product") )
  //   // console.log(e); // index
  //   let index = e;
  //   let cartData = JSON.parse(localStorage.getItem('cart'))
  //   console.log(cartData);
  //   // console.log(cartData[index]);
  //   delete cartData[index]; 
  //   localStorage.setItem('cart', JSON.stringify(cartData))
  //   console.log(cartData);  
  //   // console.log(cartData[index]['num']); 
  // }

  // const minusCartNumber (e) => {
  // }


    return(
        <> 
            <div className="cart-check">
            {cart.map((data, index)=>{
                
                return(
                  <ul className="cart-product" key={index} >
                    <li className="cart-product-li"><input type="checkbox" onClick={(e)=>checked(e.target)} /></li>
                    <li className="cart-product-li"><img src={require(`../../img/cart/cart-violin-01.jpeg`)} /></li>
                    {/* <li className="cart-product-li"><img src={require(`../../img/cart/${data.PImg}`)} /></li> */}
                    <li className="cart-product-li">{data.PName}</li>
                    <li className="cart-product-li cart-english-font" style={{color:'var(--main-colorfb2)'}}>${
                        data.PPrice.toString().replace(/(\d)(?=(\d{3})+(\d{3})?$)/g,'$1,')}
                    </li>
                    <li className="cart-product-li-2">
                      <div 
                        // onClick={(e)=>{ minusCartNumber(index) }}
                        onClick={(e)=>{                           
                          console.log(data)
                          console.log(data.num++)
                          let c = data.num++
                          let b = [...cart]
                          console.log(c)
                          // splice：從索引 index 的位置開始，刪除 1 個元素並插入data
                          b.splice(index, 1, data)
                          console.log("splice: "+b)
                          // setCart(c)
                          // localStorage.setItem('cart', JSON.stringify(c))
                          // let b = [...cart,data]
                          // delete cartData[index]['num']
                          // console.log(cartData);  
                          // let b = [...data]
                          // b.splice(index, 0)
                          // setCart(b)
                          // localStorage.setItem('cart', JSON.stringify(b))
                        }}
                      >
                        <i className="cart-minusBtn fas fa-minus-circle" />
                      </div>
                      <div className="cart-number-input cart-english-font">{data.num}</div>
                      {/* <input  className="cart-number-input cart-english-font" value={testArr[index]}></input> */}
                      {/* <div className="cart-number-input cart-english-font">{testArr[index]}</div> */}
                      <div 
                        // onClick={(e)=>{plusCartNumber(index)}}
                      >
                        <i className="cart-plusBtn fas fa-plus-circle" />
                      </div>
                    </li>
                    <li className="cart-product-number cart-english-font" style={{color:'var(--main-colorfb2)'}}>
                        ${(data.num * data.PPrice).toString().replace( /(\d)(?=(\d{3})+(\d{3})?$)/g, '$1,' )}
                    </li>
                    <li className="cart-trash-btn" 
                      // onClick={(e)=>{ deleteCartItem(e.target.parentElement.closest(".cart-product")) }}
                      // onClick={(e)=>{ deleteCartItem(index) }}
                      // filter/splice
                      onClick={(e)=>{
                        let a = [...cart]
                        // splice：從索引 index 的位置開始，刪除 1 個元素
                        a.splice(index, 1)
                        setCart(a)
                        localStorage.setItem('cart', JSON.stringify(a))
                      }}
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

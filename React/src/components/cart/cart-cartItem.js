import React ,{ Fragment, useState, useEffect } from 'react';
// 引入sweetalert2-react-content套件
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export default function CartItem (props) {

    // 引入sweetalert2-react-content套件
    const MySwal = withReactContent(Swal);

    const { 
      cart, 
      setCart, 
      totalPrice,
      cartNum,
      setCartNum,       
      buyAll, 
      setBuyAll,
      buyThis,
      setBuyThis,
    } = props.allProps; 


    // buycallback函式：點擊時切換checkbox勾選狀態
    // const buycallback = (e) =>{
    //   console.log(e.checked)
    //   // setBuyProduct(e.checked)
    // }

    
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

    // changeQuantity函式：點擊btn減少該商品之購物車數量
    // const changeQuantity = (PId, qty)=>{
    //   const mycart = [...cart]
    //   // console.log(mycart);   
    //   mycart.forEach(el=>{
    //     if(el.PId===PId){
    //       el.num = qty
    //       console.log(el.num);
    //       if (el.num<0) {
    //         el.num = 0
    //       }
    //     }
    //   })
    //   localStorage.setItem('cart', JSON.stringify(mycart));
    //   setCart(mycart);
    // }

    // changeQuantity函式：點擊btn時，增加/減少該商品之購物車數量並修正localStorage num
    const changeQuantity = (index, PId, num, PQty)=>{
      // console.log(`data id:${PId} num:${num} qty:${PQty}`);
      const mycart = [...cart]
      // console.log(mycart);   
      mycart.forEach(el=>{
        // console.log(`el id:${el.PId} num:${el.num} qty:${el.PQty}`);
        if(el.PId===PId){
          el.num = num
          // 購物車商品數量不得小於1
          if (el.num < 1) {
            el.num = 1
            MySwal.fire('購物車商品數量不得小於1', '', '')
          }
          // 購物車商品數量不得大於庫存
          if (el.num > PQty) {
            el.num = PQty
            MySwal.fire('購物車商品數量已達庫存上限', '', '')
          }
        }
      })      
      localStorage.setItem('cart', JSON.stringify(mycart));
      setCart(mycart);
      // console.log(mycart[index]['num']);
    }

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

    // 勾選商品checkbox(學姊)
    // const checked = (e)=>{   
    //   // console.log(e.checked);
    //   const input = e;         
    //   if( !e.checked ){    
    //     input.setAttribute("checked","checked")
    //   }else{
    //     input.removeAttribute("checked")
    //   }
    // }  

    // console.log(localStorage.getItem('cart')===null)

    return(

        <> 

          <div className="cart-check">

              {/* 購物車內無商品 ? (A畫面):(B畫面) } */}

              { localStorage.getItem('cart')===null ? (

                <ul className="cart-product">
                  <li className="cart-product-li" colSpan="7" style={{width:"100%", padding:"30px 0"}}>
                    您的購物車內無商品
                  </li>
                </ul>

              ):(
                
              cart.map((data, index)=>{
                  
                return(

                  <ul className="cart-product cart-product-hover" key={index} >
                    <li className="cart-product-li">
                      <input 
                        type="checkbox" 
                        checked={buyAll? "checked" : "" } 
                        // onClick={(e)=>{   
                        //   if (!e.target.checked) {
                        //     setBuyAll(false) 
                        //   } else {
                        //     setBuyAll(true)
                        //   }
                        // }}                          
                      />
                    </li>
                    {/* <li className="cart-product-li"><img src={require(`../../img/cart/cart-violin-01.jpeg`)} /></li> */}
                    {/* <li className="cart-product-li"><img src={require(`../../img/cart/${data.PImg}`)} /></li> */} 
                    {/* 自node後端抓取商品圖片 */}
                    <li className="cart-product-li">
                      <img src={`http://localhost:3030/images/product/${data.PImg}`} />
                    </li>
                    <li className="cart-product-li">{data.PName}</li>
                    <li className="cart-product-li cart-english-font" style={{color:'var(--main-colorfb2)'}}>${
                        data.PPrice.toString().replace(/(\d)(?=(\d{3})+(\d{3})?$)/g,'$1,')}
                    </li>
                    <li className="cart-product-li-2">
                      <div 
                        // onClick={(e)=>{ minusCartNumber(index) }}                        
                        onClick={(e)=>{              
                          data.num--
                          // 影片類別商品無法更改數量
                          if (data.PCategoryId=="影片") {
                            MySwal.fire('影片類別商品無法更改數量', '', 'error')
                          } else {                     
                            changeQuantity(index, data.PId, data.num, data.PQty)
                          }
                          return
                          console.log(data)
                          console.log(data.num)
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
                        onClick={(e)=>{              
                          data.num++
                          // 影片類別商品無法更改數量
                          if (data.PCategoryId=="影片") {
                            MySwal.fire('影片類別商品無法更改數量', '', 'error')
                          } else {
                            changeQuantity(index, data.PId, data.num, data.PQty)
                          }
                        }}
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
                        
                        MySwal.fire({
                          type: 'warning', // 彈框類型
                          title: '確認刪除？', //標題
                          confirmButtonColor: '#fb2643', // 確定按鈕的 顏色
                          confirmButtonText: '確定', // 確定按鈕的 文字
                          showCancelButton: true, // 是否顯示取消按鈕
                          cancelButtonColor: '#fffff', // 取消按鈕的 顏色
                          cancelButtonText: '取消', // 取消按鈕的 文字,
                          focusCancel: true, // 是否聚焦 取消按鈕
                        })
                        // 點選確認時執行if，點選取消刪除時執行else
                        .then((isConfirm) => {
                          if (isConfirm.value) {
                            // alert('刪除')
                            let a = [...cart]
                            // splice：從索引 index 的位置開始，刪除 1 個元素
                            a.splice(index, 1)
                            setCart(a)
                            localStorage.setItem('cart', JSON.stringify(a))
                            // console.log(cart.length)
                            // 刪除商品時，更新購物車圖示中數量
                            // console.log(cartNum-1)
                            setCartNum(cartNum-1)
                            // 刪至localStorage cart無資料時，清空cart空陣列
                            if (cart.length===1) {
                              localStorage.removeItem('cart')
                              setCart([])
                            }     
                          } else {
                            MySwal.fire('取消刪除', '', '')
                          }
                        })                          

                      }}
                    >
                      <i className="far fa-trash-alt" />
                    </li>
                  </ul>

                )
              })
              )
            }

          </div>
        </>
    )
}

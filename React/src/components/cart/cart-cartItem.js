import React from 'react';
// 引入sweetalert2-react-content套件
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export default function CartItem (props) {

    // 引入sweetalert2-react-content套件
    const MySwal = withReactContent(Swal);

    const { 
      cart, 
      setCart, 
      cartNum,
      setCartNum, 
    } = props.allProps; 
    
    // changeQuantity函式：點擊btn時，增加/減少該商品之購物車數量並修正localStorage num
    const changeQuantity = (index, PId, num, PQty)=>{
      const mycart = [...cart]
      mycart.forEach(el=>{
        if(el.PCategoryId=="影片") {
          el.num = 1
        } else {
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
        }
      })      
      localStorage.setItem('cart', JSON.stringify(mycart));
      setCart(mycart);
    }


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
                        type="text" value={index+1}
                      />
                    </li>
                    {/* <li className="cart-product-li"><img src={require(`../../img/cart/cart-violin-01.jpeg`)} /></li> */}
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
                        onClick={(e)=>{              
                          data.num--
                          // 影片類別商品無法更改數量
                          if (data.PCategoryId=="影片") {
                            MySwal.fire('影片類別商品無法更改數量', '', 'error')
                          } else {                     
                            changeQuantity(index, data.PId, data.num, data.PQty, data.PCategoryId)
                          }
                        }}
                      >
                        <i className="cart-minusBtn fas fa-minus-circle" />
                      </div>
                      <div className="cart-number-input cart-english-font">{data.num}</div>
                      <div 
                        onClick={(e)=>{              
                          data.num++
                          // 影片類別商品無法更改數量
                          if (data.PCategoryId=="影片") {
                            MySwal.fire('影片類別商品無法更改數量', '', 'error')
                          } else {
                            changeQuantity(index, data.PId, data.num, data.PQty, data.PCategoryId)
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
                      // 其他刪除做法可嘗試filter/splice
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
                            let a = [...cart]
                            // splice：從索引 index 的位置開始，刪除 1 個元素
                            a.splice(index, 1)
                            setCart(a)
                            localStorage.setItem('cart', JSON.stringify(a))
                            // 刪除商品時，更新購物車圖示中數量
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

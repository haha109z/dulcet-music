import React ,{ Fragment } from 'react';
// 引入sweetalert2-react-content套件
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function CartDeliverInfo (props) {
  
  // 引入sweetalert2-react-content套件
  const MySwal = withReactContent(Swal);

  const { 
    user, 
    checkstate,  
    checkcallback, 
    ReceivingName, 
    setReceivingName, 
    ReceivingAddress, 
    setReceivingAddress, 
    ReceivingPhone, 
    setReceivingPhone,  
    ReceivingEmail, 
    setReceivingEmail 
  } = props.allProps;  

  // ** 下方coding已移至cart-app.js(模組化) **
  // checkbox勾選狀態存入checkstate鉤子中
  // checkcallback函式：點擊時切換checkbox勾選狀態
  // 根據checkbox勾選狀態切換收件人資訊畫面

 
    return(
        <Fragment> 
                 
            <div className="cart-buyer-info" id="cart-buyer-info">
                  <h2>收件人資訊</h2>
                  <fieldset>
                    <label>
                      <input type="checkbox" id="receivingInfo"                   
                        // 從cart2回上一頁時，同帳戶資料默認勾選狀態
                        checked={checkstate? "checked" : ''}   
                        onClick={(e)=>{ checkcallback(e.target) }}   
                      /> 同帳戶資料
                    </label>

                        {/* 根據checkbox勾選狀態切換收件人資訊畫面 */}

                        {checkstate ? (

                         <>

                          {/* 勾選同帳戶資料時，欄位自動填入會員資料 */}

                          <div className="cart-input">
                              <label htmlFor="name">姓名</label>
                              <input id="name" type="text" name="name" value={user["userName"]} />
                          </div>
                          <div className="cart-input">
                              <label htmlFor="address">地址</label>
                              <input id="address" type="text" value={user["userAddress"]} />
                          </div>
                          <div className="cart-input">
                              <label htmlFor="phone">手機號碼</label>
                              <input id="phone" type="text" value={user["userPhone"]} />
                          </div>
                          <div className="cart-input">
                              <label htmlFor="email">電子信箱</label>
                              <input id="email" type="text" value={user["userMail"]} />
                          </div>  
                         </>

                        ):(
                          
                          <>

                            {/* 未勾選同帳戶資料時，表單欄位抓取會員自行填寫內容 */}

                            <div className="cart-input">
                              <label htmlFor="name">姓名</label>
                              <input id="name" type="text" name="name" value={ReceivingName}
                                onChange={ (e)=>{ setReceivingName(e.target.value) }}
                              />
                            </div>
                            <div className="cart-input">
                              <label htmlFor="address">地址</label>
                              <input id="address" type="text" name="address" value={ReceivingAddress}
                                onChange={ (e)=>{ setReceivingAddress(e.target.value) }}
                              />
                            </div>
                            <div className="cart-input">
                              <label htmlFor="phone">手機號碼</label>
                              <input id="phone" type="text"  name="phone" value={ReceivingPhone}
                                onChange={ (e)=>{ setReceivingPhone(e.target.value) }}
                                onBlur={(e)=>{
                                  const reg = /^09\d{2}-?\d{3}-?\d{3}$/;
                                  if (!e.target.value.match(reg)) {
                                    MySwal.fire('請輸入正確手機號碼', '', 'error')
                                  }
                                }}
                              />
                            </div>
                            <div className="cart-input">
                              <label htmlFor="email">電子信箱</label>
                              <input id="email" type="text"  name="email" value={ReceivingEmail}
                                onChange={ (e)=> {setReceivingEmail(e.target.value)} }
                                onBlur={(e)=>{
                                  const reg = /^([\w\.\-]){1,64}\@([\w\.\-]){1,64}$/;
                                  if (!e.target.value.match(reg)) {
                                    MySwal.fire('請輸入正確email格式', '', 'error')
                                  }
                                }}
                              />
                            </div>
                          </>

                        )}                        
                           
                  </fieldset>
              </div>
        </Fragment>
    )
}

export default CartDeliverInfo;
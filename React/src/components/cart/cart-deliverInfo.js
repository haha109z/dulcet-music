import React ,{ Fragment, useState, useEffect } from 'react';

function CartDeliverInfo (props) {
  const { user, setUser, checkstate, setcheckstate, checkcallback, ReceivingName, setReceivingName, ReceivingAddress, setReceivingAddress, ReceivingPhone, setReceivingPhone,  ReceivingEmail, setReceivingEmail } = props.allProps;  
  // console.log(user)
  // const [checkstate, setcheckstate] = useState(false);

  // const checkcallback = (e) =>{
  //   // console.log(e.checked)
  //   setcheckstate(e.checked)
  // }
  // console.log(checkstate);

  // useEffect(()=>{
  //   checkcallback(checkstate)
  // },[])

 
    return(
        <Fragment> 
                 
            <div className="cart-buyer-info">
                  <h2>收件人資訊</h2>
                  <fieldset>
                    <label><input type="checkbox" id="receivingInfo" onClick={(e)=>{ checkcallback(e.target) }}/> 同帳戶資料</label>

                        {checkstate ? (

                         <>
                          <div className="cart-input">
                              <label htmlFor="name">姓名</label>
                              <input id="name" type="text" name="name" value={user["userName"]} />
                              {/* <input id="name" type="text" name="name" value="1111111111111" /> */}
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
                              />
                            </div>
                            <div className="cart-input">
                              <label htmlFor="email">電子信箱</label>
                              <input id="email" type="text"  name="email" value={ReceivingEmail}
                                onChange={ (e)=>{ setReceivingEmail(e.target.value) }}
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